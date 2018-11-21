<?php

namespace Svbk\WP\Integrations;

use Svbk\WP\Helpers;
use Wp_Query;


/**
 * Sensei Integration.
 *
 * @package  _svbk
 * @category Integration
 * @author   Brando Meniconi
 */

class AffiliateWP {

	public $integration;

	public $affiliate_menu_label;
	public $affiliate_url_instructions;
	public $affiliate_url_generator_instructions;

	/**
	 * Init and hook in the integration.
	 */
	public function __construct( $integration ) {

		$this->integration = $integration;

		$integration->form_fields['affiliate_menu_label'] = array(
			'title'       => __( 'Affiliate Menu Label', '_svbk' ),
			'type'        => 'text',
			'description' => __( 'The label for Courses in account menu', '_svbk' ),
			'desc_tip'    => true,
			'default'     => __( 'Affiliate', '_svbk' ),
		);

		$integration->form_fields['affiliate_url_instructions'] = array(
			'title'       => __( 'Affiliate URL Instructions', '_svbk' ),
			'type'        => 'textarea',
			'description' => __( 'Instructions to print before affiliate URL', '_svbk' ),
			'desc_tip'    => true,
		);

		$integration->form_fields['affiliate_url_generator_instructions'] = array(
			'title'       => __( 'Affiliate URL Generator Instructions', '_svbk' ),
			'type'        => 'textarea',
			'description' => __( 'Instructions printed before the url generator', '_svbk' ),
			'desc_tip'    => true,
		);

		$this->affiliate_menu_label                 = $this->integration->get_option( 'affiliate_menu_label' );
		$this->affiliate_url_instructions           = $this->integration->get_option( 'affiliate_url_instructions' );
		$this->affiliate_url_generator_instructions = $this->integration->get_option( 'affiliate_url_generator_instructions' );

		$this->hooks();
	}

	public function hooks() {

		add_action( 'init', array( $this, 'endpoints' ), 99 );
		add_action( 'woocommerce_account_affiliate_endpoint', array( $this, 'affiliate_page_content' ) );
		add_filter( 'affwp_affiliate_area_page_url', array( $this, 'affiliate_area_page_url' ), 10, 3 );
		add_filter( 'woocommerce_account_menu_items', array( $this, 'menu_items' ), 90 );
		add_action( 'affwp_affiliate_dashboard_urls_top', array( $this, 'print_affiliate_url_instructions' ) );
		add_action( 'affwp_affiliate_dashboard_urls_before_generator', array( $this, 'print_affiliate_url_generator_instructions' ) );
	}

	public function menu_items( $items ) {

		$new_items = array();

		$new_items['affiliate'] = $this->affiliate_menu_label ?: __( 'Affiliate', '_svbk' );

		$items = Helpers\Lists\Utils::keyInsert( $items, $new_items, 'orders', 'before' );

		return $items;
	}

	public function endpoints() {
		add_rewrite_endpoint( 'affiliate', EP_PAGES );
	}

	/**
	 * Affiliate page in WC Account content
	 */
	public function affiliate_page_content() {
		?>
	<div class="content-wrapper">    
		<h2><?php esc_html_e( 'Affiliate', '_svbk' ); ?></h2>
		<?php echo do_shortcode( '[affiliate_area]' ); ?>
	</div>
		<?php
	}

	/**
	 * Change url of affiliate area to the WC Endopoint
	 */
	public function affiliate_area_page_url( $affiliate_area_page_url, $affiliate_area_page_id, $tab ) {

		$affiliate_area_page_url = wc_get_endpoint_url( 'affiliate' );

		if ( ! empty( $tab ) && array_key_exists( $tab, affwp_get_affiliate_area_tabs() ) ) {
			$affiliate_area_page_url = add_query_arg( array( 'tab' => $tab ), $affiliate_area_page_url );
		}

		return $affiliate_area_page_url;
	}

	public function print_affiliate_url_instructions() {

		if ( ! $this->affiliate_url_instructions ) {
			return;
		}

		echo '<div id="url-instructions" class="affiliate-instructions">';
		echo wpautop( do_shortcode( $this->affiliate_url_instructions ) );
		echo '</div>';
	}

	public function print_affiliate_url_generator_instructions() {

		if ( ! $this->affiliate_url_generator_instructions ) {
			return;
		}

		echo '<div id="generator-instructions" class="affiliate-instructions">';
		echo wpautop( do_shortcode( $this->affiliate_url_generator_instructions ) );
		echo '</div>';
	}


}

