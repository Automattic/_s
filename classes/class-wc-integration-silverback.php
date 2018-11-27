<?php
namespace Svbk\WP\Integrations;

use WC_Integration;
use WP_Query;
use Svbk\WP\Helpers\Lists\Utils;
use Svbk\WP\Helpers;

/**
 * WooCommerce Integration.
 *
 * @package  WC_Theme_Integration
 * @category Integration
 * @author   Brando Meniconi
 */

if ( ! class_exists( __NAMESPACE__ . '\\WC_Theme_Integration' ) ) :

	class WC_Theme_Integration extends WC_Integration {

		public $api_key;

		public $logger;

		public $show_avatar = true;
		public $dashboard_content_page;
		public $checkout_warranty_text;
		public $order_thankyou_footer;
		public $disable_order_thankyou_details;
		public $show_email_validation;

		public $disable_woocommerce_styles;

		public $sensei;
		public $affiliate_wp;

		public $page_templates = array();

		public $debug = false;

		/**
		 * Init and hook in the integration.
		 */
		public function __construct() {
			global $woocommerce;

			$this->id                 = '_svbk-theme';
			$this->method_title       = __( 'Theme Integration', '_svbk' );
			$this->method_description = __( 'Theme options for woocommerce', '_svbk' );

			// Load the settings.
			$this->init_settings();

			// Define user set variables.
			$this->dashboard_content_page         = $this->get_option( 'dashboard_content_page' );
			$this->checkout_warranty_text         = $this->get_option( 'checkout_warranty_text' );
			$this->order_thankyou_footer          = $this->get_option( 'order_thankyou_footer' );
			$this->disable_order_thankyou_details = $this->get_option( 'disable_order_thankyou_details' );
			$this->show_email_validation          = $this->get_option( 'show_email_validation' );

			add_action( 'init', array( $this, 'init_form_fields' ), 30 );
			add_action( 'init', array( $this, 'init' ), 50 );

			// Actions.
			add_action( 'woocommerce_update_options_integration_' . $this->id, array( $this, 'process_admin_options' ) );
			add_filter( 'woocommerce_settings_api_sanitized_fields_' . $this->id, array( $this, 'sanitize_settings' ) );

		}

		public function init() {
			if ( function_exists( 'affiliate_wp' ) ) {
				$this->affiliate_wp = new AffiliateWP( $this );
			}

			$this->woocommerce_hooks();

		}

		/**
		 * Initialize integration settings form fields.
		 */
		public function init_form_fields() {

			$dashboard_pages   = wp_list_pluck( get_pages(), 'post_title', 'ID' );
			$dashboard_pages[] = '--' . __( 'Not set', '_svbk' ) . '--';

			$this->form_fields = array(
				'dashboard_content_page' => array(
					'title'       => __( 'Dashboard Content Page', '_svbk' ),
					'type'        => 'select',
					'description' => __( 'Select the page with the content to be shown in MyAccount Dashboard page', '_svbk' ),
					'desc_tip'    => true,
					'default'     => '',
					'options'     => $dashboard_pages,
				),
				'checkout_warranty_text' => array(
					'title'       => __( 'Checkout Warranty Text', '_svbk' ),
					'type'        => 'textarea',
					'description' => __( 'The content for the checkout warranty box', '_svbk' ),
					'desc_tip'    => true,
					'default'     => '',
				),
				'order_thankyou_footer' => array(
					'title'       => __( 'Order Thankyou Footer', '_svbk' ),
					'type'        => 'textarea',
					'description' => __( 'A text shown after the order details in the order thankyou page', '_svbk' ),
					'desc_tip'    => true,
					'default'     => '',
				),
				'disable_order_thankyou_details' => array(
					'title'       => __( 'Disable Details in Order Thankyou', '_svbk' ),
					'type'        => 'checkbox',
					'description' => __( 'Hide the order details table in order thankyou page', '_svbk' ),
					'desc_tip'    => true,
					'default'     => true,
				),
				'show_email_validation' => array(
					'title'       => __( 'Show checkout e-mail validation field', '_svbk' ),
					'type'        => 'checkbox',
					'description' => __( 'Show the repeat email field in checkout form', '_svbk' ),
					'desc_tip'    => true,
					'default'     => true,
				),
				'debug' => array(
					'title'       => __( 'Debug Log', '_svbk' ),
					'type'        => 'checkbox',
					'label'       => __( 'Enable logging', '_svbk' ),
					'default'     => 'no',
					'description' => __( 'Log events such as API requests', '_svbk' ),
				),
			);

		}

		/**
		 * Santize our settings
		 *
		 * @see process_admin_options()
		 */
		public function sanitize_settings( $settings ) {
			// We're just going to make the api key all upper case characters since that's how our imaginary API works.
			delete_transient( 'woocommerce_funnel_account_product_categories' );

			return $settings;
		}

		/**
		 * Display errors by overriding the display_errors() method
		 *
		 * @see display_errors()
		 */
		public function display_errors() {
			// loop through each error and display it.
			foreach ( $this->errors as $key => $value ) {
				?>
			<div class="error">
				<p><?php echo esc_html( sprintf( __( 'Looks like you made a mistake with the %S field. Make sure it isn&apos;t longer than 20 characters', 'woocommerce-integration-demo' ), $value ) ); ?></p>
			</div>
				<?php
			}
		}

		public function woocommerce_hooks() {

			add_filter( 'woocommerce_billing_fields', array( $this, 'woocommerce_billing_fields' ), 99 );
			add_filter( 'woocommerce_email_headers', array( $this, 'woocommerce_email_headers' ), 2, 3 );

			add_action( 'woocommerce_before_edit_account_form', array( $this, 'woocommerce_edit_account' ) );

			add_action( 'wp', array( $this, 'woocommerce_product_remove_default_contents' ) );

			/**
			* Checkout mods
			*/
			add_filter( 'woocommerce_before_checkout_form', array( $this, 'checkout_safe_payments_banner' ) );
			add_filter( 'woocommerce_after_checkout_form', array( $this, 'checkout_warranty' ) );
			add_filter( 'woocommerce_checkout_order_review', array( $this, 'choose_payment_method' ), 15 );

			add_filter( 'woocommerce_checkout_fields', array( $this, 'checkout_fields' ) );
			add_action( 'woocommerce_after_checkout_validation', array( $this, 'checkout_validation' ), 10, 2 );

			add_filter( 'woocommerce_my_account_my_address_description', array( $this, 'my_account_address_description' ) );

			add_filter( 'woocommerce_thankyou', array( $this, 'order_thankyou_page_text' ), 9 );
			add_filter( 'woocommerce_thankyou', array( $this, 'order_thankyou_page_footer' ), 11 );

			remove_action( 'woocommerce_order_details_after_order_table', 'woocommerce_order_again_button' );

			if ( filter_var( $this->disable_order_thankyou_details, FILTER_VALIDATE_BOOLEAN ) ) {
				remove_action( 'woocommerce_thankyou', 'woocommerce_order_details_table', 10 );
			}

			add_filter( 'woocommerce_product_description_heading', '__return_empty_string' );

		}
		public function chained_products_free_label() {
			echo apply_filters( 'woocommerce_funnels_chained_free_label', '<div class="free-label">' . __( 'Free', '_svbk' ) . '</div>' );
		}

		public function chained_products_price_text( $from ) {
			return '<span class="from">' . _x( 'Value', 'original value', '_svbk' ) . ' </span>';
		}

		public function woocommerce_product_remove_default_contents() {

			remove_filter( 'woocommerce_single_product_summary', 'woocommerce_template_single_price', 10 );

			if ( is_product() && function_exists( 'has_blocks' ) && has_blocks() ) {

				remove_action( 'woocommerce_before_main_content', 'woocommerce_breadcrumb', 20, 0 );

				remove_action( 'woocommerce_before_single_product_summary', 'woocommerce_show_product_images', 20 );
				remove_action( 'woocommerce_before_single_product_summary', 'woocommerce_show_product_sale_flash', 10 );

				remove_action( 'woocommerce_single_product_summary', 'woocommerce_template_single_title', 5 );
				remove_action( 'woocommerce_single_product_summary', 'woocommerce_template_single_rating', 10 );

				// remove_action( 'woocommerce_single_product_summary', 'woocommerce_template_single_price', 10 );
				remove_action( 'woocommerce_single_product_summary', 'woocommerce_template_single_excerpt', 20 );
				remove_action( 'woocommerce_single_product_summary', 'woocommerce_template_single_add_to_cart', 30 );
				remove_action( 'woocommerce_single_product_summary', 'woocommerce_template_single_meta', 40 );
				remove_action( 'woocommerce_single_product_summary', 'woocommerce_template_single_sharing', 50 );

				remove_action( 'woocommerce_after_single_product_summary', 'woocommerce_output_product_data_tabs', 10 );
				add_action( 'woocommerce_after_single_product_summary', 'woocommerce_product_description_tab', 10 );

				remove_action( 'woocommerce_after_single_product_summary', 'woocommerce_upsell_display', 15 );
				remove_action( 'woocommerce_after_single_product_summary', 'woocommerce_output_related_products', 20 );

				add_filter( 'woocommerce_product_description_heading', '__return_empty_string' );
			} else {
				add_filter( 'woocommerce_single_product_summary', 'woocommerce_template_single_price', 25 );
			}

		}


		/**
		 * Change billing fields position, remove some
		 */
		public function woocommerce_billing_fields( $fields ) {

			$fields['billing_email']['priority'] = 25;
			$fields['billing_email']['class']    = array( 'form-row-wide' );

			unset( $fields['billing_address_2'] );

			$phone_status =  get_option( 'woocommerce_checkout_phone_field', 'required' );

			if ( 'required' === $phone_status ) {
				$fields['billing_phone']['required'] = true;
				$fields['billing_phone']['priority'] = 30;				
			} elseif( 'recommended' == $phone_status ) {
				$fields['billing_phone']['label']    =   __( 'Phone (recommended)', '_svbk' );
			}

			return $fields;
		}

		/**
		 * Hack for Sendinblue, remove reply to.
		 */
		public function woocommerce_email_headers( $headers, $mail_id, $object ) {

			if ( 'new_order' === $mail_id ) {
				$headers = str_replace( 'Reply-to: ' . $object->get_billing_first_name() . ' ' . $object->get_billing_last_name() . ' <' . $object->get_billing_email() . ">\r\n", '', $headers );
			}

			return $headers;
		}

		public function woocommerce_edit_account() {

			if ( shortcode_exists( 'avatar_upload' ) ) {
				remove_action( 'wpua_before_avatar', 'wpua_do_before_avatar' );
				remove_action( 'wpua_after_avatar', 'wpua_do_after_avatar' );
				?>
			<section id="user-avatar">
				<h2><?php esc_html_e( 'Profile Image', '_svbk' ); ?></h2>
				<?php echo do_shortcode( '[avatar_upload]' ); ?>
			</section>
				<?php
				add_action( 'wpua_before_avatar', 'wpua_do_before_avatar' );
				add_action( 'wpua_after_avatar', 'wpua_do_after_avatar' );
			}
			?>
			<?php
		}

		public function checkout_safe_payments_banner() {
			?>
			<h2 id="checkout_heading" ><?php _e( 'Safe Payments', '_svbk' ); ?></h2>
			<?php
		}

		public function choose_payment_method() {
			?>
			<h3 id="checkout_payment_heading" ><?php _e( 'Choose payment method', '_svbk' ); ?></h3>
			<?php
		}

		public function checkout_fields( $fields ) {

			if ( filter_var( $this->show_email_validation, FILTER_VALIDATE_BOOLEAN ) ) {

				$fields['billing']['billing_email']['class'] = array( 'form-row-first' );

				$fields['billing']['billing_email_verify'] = array(
					'label'     => __( 'Repeat your email address', '_svbk' ),
					'required'  => true,
					'priority'  => 25,
					'class'     => array( 'form-row-last' ),
					'clear'     => true,
				);

			}

			return $fields;
		}

		public function checkout_validation( $data, $errors ) {

			if (
				filter_var( $this->show_email_validation, FILTER_VALIDATE_BOOLEAN ) &&
				( empty( $data['billing_email_verify'] ) || ( strcasecmp( $data['billing_email'], $data['billing_email_verify'] ) !== 0 ) )
			) {
				$errors->add( 'billing', __( 'The email addresses you entered are not equal', '_svbk' ) );
			}

		}

		public function checkout_warranty() {
			if ( $this->checkout_warranty_text ) :
				?>
			<div class="checkout-warranty"><?php echo $this->checkout_warranty_text; ?></div>
				<?php
			endif;
		}

		public function single_product_custom_content_template( $template, $slug, $name ) {
			global $product;

			if ( ( 'content' !== $slug ) || ( 'single-product' !== $name ) || ! $product ) {
				return $template;
			}

			$disable_wc_template = get_post_meta( $product->get_id(), '_funnels_disable_product_template', true );

			if ( $disable_wc_template ) {
				$template = $this->plugin_template_part( '', $slug, $name . '-custom' );
			}

			return $template;
		}

		public function my_account_address_description() {
			return __( 'The <b>billing address</b> is used to compose the invoices. The <b>shipping address</b> will be used to send you phisical products that you may purchase. You will be able to change both addresses durig the checkout process.', '_svbk' );
		}

		public function get_order_thankyou_page( $order ) {

			$items = $order->get_items();

			foreach ( $items as $item ) {
				$thankyou_page_id = get_post_meta( $item->get_product_id(), '_funnels_thankyou_page', true );

				if ( $thankyou_page_id ) {
					return $thankyou_page_id;
				}
			}

			return false;
		}

		public function order_thankyou_page_text( $order_id ) {

			$order            = wc_get_order( $order_id );
			$thankyou_page_id = $this->get_order_thankyou_page( $order );
			$thankyou_page    = null;

			if ( $thankyou_page_id ) {
				$thankyou_page = get_post( $thankyou_page_id, 'OBJECT' );
			}

			if ( ! $thankyou_page instanceof \WP_Post ) {
				return;
			}

			$thankyou_page = get_post( $thankyou_page_id );

			echo apply_filters( 'the_content', do_shortcode( $thankyou_page->post_content ) );

		}

		public function order_thankyou_page_footer() {
			if ( $this->order_thankyou_footer ) {
				echo $this->order_thankyou_footer;
			}
		}

	}
endif;
