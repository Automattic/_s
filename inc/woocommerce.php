<?php
/**
 * WooCommerce Compatibility File
 *
 * @link https://woocommerce.com/
 *
 * @package _svbk
 */
use \Svbk\WP\Helpers\Assets\Style;
use \Svbk\WP\Helpers\Assets\Script;
use \Svbk\WP\Integrations;

/**
 * WooCommerce setup function.
 *
 * @link https://docs.woocommerce.com/document/third-party-custom-theme-compatibility/
 * @link https://github.com/woocommerce/woocommerce/wiki/Enabling-product-gallery-features-(zoom,-swipe,-lightbox)-in-3.0.0
 *
 * @return void
 */
function _svbk_woocommerce_setup() {
	add_theme_support( 'woocommerce' );
	add_theme_support( 'wc-product-gallery-zoom' );
	add_theme_support( 'wc-product-gallery-lightbox' );
	add_theme_support( 'wc-product-gallery-slider' );
}
add_action( 'after_setup_theme', '_svbk_woocommerce_setup' );

/**
 * WooCommerce specific scripts & stylesheets.
 *
 * @return void
 */
function _svbk_woocommerce_scripts() {

	Style::enqueue(
		'_svbk-wc-product',
		'/dist/css/wc-product.css',
		[
			'source'    => 'theme',
			'condition' => is_product(),
			'prefetch'  => is_shop() || is_archive( 'product' ),
		]
	);
	Style::enqueue(
		'_svbk-wc-cart',
		'/dist/css/wc-cart.css',
		[
			'source'    => 'theme',
			'condition' => is_cart(),
			'prefetch'  => is_product(),
		]
	);
	
	Style::enqueue(
		'_svbk-wc-checkout',
		'/dist/css/wc-checkout.css',
		[
			'source'    => 'theme',
			'condition' => is_checkout(),
			'prefetch'  => is_cart(),
		]
	);
	
	Style::enqueue(
		'_svbk-wc-account',
		'/dist/css/wc-account.css',
		[
			'source'    => 'theme',
			'condition' => is_account_page(),
		]
	);
	Style::enqueue(
		'_svbk-wc-shop',
		'/dist/css/wc-shop.css',
		[
			'source'    => 'theme',
			'condition' => is_shop() || is_archive( 'product' ),
		]
	);

	Script::enqueue( 'wc-add-to-cart', null, [ 'condition' => is_woocommerce() ] );
	Script::enqueue( 'woocommerce', null, [ 'condition' => is_woocommerce() ] );
	Script::enqueue( 'paypal-checkout-js', null, [ 'condition' => is_checkout() || is_cart() ] );

	Script::enqueue(
		'_svbk-wc-checkout',
		'/dist/js/wc-checkout.min.js',
		[
			'source'    => 'theme',
			'condition' => is_checkout(),
			'prefetch'  => is_cart(),
			'deps'      => [
				'jquery',
			],
		]
	);

	wp_localize_script(
		'_svbk-wc-checkout',
		'_svbk_woocommerce',
		array(
			'cvcInstructions' => array(
				'buttonText' => __( 'Where?', '_svbk' ),
				'text'       => __(
					'If you use Mastercard, Visa and Diners, 
	            	the security code is shown on the back of your credit card near 
	            	the space reserved for your signature, and consists of 3 digits. 
	            	If you use American Express, the secure code is placed on the 
	            	front of your card and consists of 4 digits.',
					'_svbk'
				),
				'imageUrl'   => get_theme_file_uri( '/dist/css/images/payment-methods/cvc-instructions.png' ),
				'closeText'  => __( 'Close', '_svbk' ),
			),
		)
	);

	// Style::enqueue( 'woocommerce-layout', null, [ 'condition' => is_woocommerce() ] );
	// Style::enqueue( 'woocommerce-smallscreen', null, [ 'condition' => is_woocommerce() ] );
	// Style::enqueue( 'woocommerce-general', null, [ 'condition' => is_woocommerce() ] );
	$font_path   = WC()->plugin_url() . '/assets/fonts/';
	$inline_font = '@font-face {
			font-family: "star";
			src: url("' . $font_path . 'star.eot");
			src: url("' . $font_path . 'star.eot?#iefix") format("embedded-opentype"),
				url("' . $font_path . 'star.woff") format("woff"),
				url("' . $font_path . 'star.ttf") format("truetype"),
				url("' . $font_path . 'star.svg#star") format("svg");
			font-weight: normal;
			font-style: normal;
		}';

	wp_add_inline_style( '_svbk-wc-product', $inline_font );
	wp_add_inline_style( '_svbk-wc-shop', $inline_font );
}
add_action( 'wp_enqueue_scripts', '_svbk_woocommerce_scripts', 30 );


/**
 * Register widgets areas.
 *
 * @link https://developer.wordpress.org/themes/functionality/sidebars/#registering-a-sidebar
 */
function _svbk_woocommerce_widgets_init() {

	register_sidebar(
		array(
			'name'          => esc_html__( 'Shop Sidebar', '_svbk' ),
			'id'            => 'shop',
			'description'   => esc_html__( 'This widgets will be shown in the shop sidebar', '_svbk' ),
			'before_widget' => '<section id="%1$s" class="widget %2$s">',
			'after_widget'  => '</section>',
			'before_title'  => '<h2 class="widget-title">',
			'after_title'   => '</h2>',
		)
	);

	register_sidebar(
		array(
			'name'          => __( 'Woocommerce Account Sidebar', '_svbk' ),
			'id'            => 'woocommerce-account',
			'description'   => __( 'Widgets in this area will be shown in all the WooCommerce accounts pages', '_svbk' ),
			'before_widget' => '<div id="%1$s" class="widget %2$s">',
			'after_widget'  => '</div>',
			'before_title'  => '<h2 class="widgettitle">',
			'after_title'   => '</h2>',
		)
	);

}
add_action( 'widgets_init', '_svbk_woocommerce_widgets_init' );


/**
 * Show my account sidebar in footer
 */
function _svbk_myaccount_sidebar( $name ) {

	if ( is_account_page() && is_active_sidebar( 'woocommerce-account' ) ) : ?>
		<aside id="secondary" class="widget-area domready--show">
			<?php dynamic_sidebar( 'woocommerce-account' ); ?>
		</aside><!-- #secondary -->		
		<?php
	endif;

}

add_action( 'get_footer', '_svbk_myaccount_sidebar' );

/**
 * Add a new integration to WooCommerce.
 */
function _svbk_add_woocommerce_integration( $integrations ) {

	if ( ! class_exists( Integrations\WC_Theme_Integration::class ) ) {
		include_once get_theme_file_path( '/classes/class-wc-integration-silverback.php' );
		include_once get_theme_file_path( '/classes/class-affiliatewp.php' );
	}

	$integrations[] = Integrations\WC_Theme_Integration::class;
	return $integrations;
}

add_filter( 'woocommerce_integrations', '_svbk_add_woocommerce_integration' );

/**
 * Disable the default WooCommerce stylesheet.
 *
 * Removing the default WooCommerce stylesheet and enqueing your own will
 * protect you during WooCommerce core updates.
 *
 * @link https://docs.woocommerce.com/document/disable-the-default-stylesheet/
 */
add_filter( 'woocommerce_enqueue_styles', '__return_empty_array' );

/**
 * Add 'woocommerce-active' class to the body tag.
 *
 * @param  array $classes CSS classes applied to the body tag.
 * @return array $classes modified to include 'woocommerce-active' class.
 */
function _svbk_woocommerce_active_body_class( $classes ) {
	$classes[] = 'woocommerce-active';

	if ( is_account_page() && is_user_logged_in() && has_nav_menu( 'account-secondary' ) ) {
		$classes[] = 'has-secondary-nav';
	}

	return $classes;
}
add_filter( 'body_class', '_svbk_woocommerce_active_body_class' );

/**
 * Products per page.
 *
 * @return integer number of products.
 */
function _svbk_woocommerce_products_per_page() {
	return 12;
}
add_filter( 'loop_shop_per_page', '_svbk_woocommerce_products_per_page' );

/**
 * Product gallery thumnbail columns.
 *
 * @return integer number of columns.
 */
function _svbk_woocommerce_thumbnail_columns() {
	return 4;
}
add_filter( 'woocommerce_product_thumbnails_columns', '_svbk_woocommerce_thumbnail_columns' );

/**
 * Default loop columns on product archives.
 *
 * @return integer products per row.
 */
function _svbk_woocommerce_loop_columns() {
	return 3;
}
add_filter( 'loop_shop_columns', '_svbk_woocommerce_loop_columns' );

/**
 * Related Products Args.
 *
 * @param array $args related products args.
 * @return array $args related products args.
 */
function _svbk_woocommerce_related_products_args( $args ) {
	$defaults = array(
		'posts_per_page' => 3,
		'columns'        => 3,
	);

	$args = wp_parse_args( $defaults, $args );

	return $args;
}
add_filter( 'woocommerce_output_related_products_args', '_svbk_woocommerce_related_products_args' );

if ( ! function_exists( '_svbk_woocommerce_product_columns_wrapper' ) ) {
	/**
	 * Product columns wrapper.
	 *
	 * @return  void
	 */
	function _svbk_woocommerce_product_columns_wrapper() {
		$columns = _svbk_woocommerce_loop_columns();
		echo '<div class="columns-' . absint( $columns ) . '">';
	}
}
add_action( 'woocommerce_before_shop_loop', '_svbk_woocommerce_product_columns_wrapper', 40 );

if ( ! function_exists( '_svbk_woocommerce_product_columns_wrapper_close' ) ) {
	/**
	 * Product columns wrapper close.
	 *
	 * @return  void
	 */
	function _svbk_woocommerce_product_columns_wrapper_close() {
		echo '</div>';
	}
}
add_action( 'woocommerce_after_shop_loop', '_svbk_woocommerce_product_columns_wrapper_close', 40 );

/**
 * Remove default WooCommerce wrapper.
 */
remove_action( 'woocommerce_before_main_content', 'woocommerce_output_content_wrapper', 10 );
remove_action( 'woocommerce_after_main_content', 'woocommerce_output_content_wrapper_end', 10 );

if ( ! function_exists( '_svbk_woocommerce_wrapper_before' ) ) {
	/**
	 * Before Content.
	 *
	 * Wraps all WooCommerce content in wrappers which match the theme markup.
	 *
	 * @return void
	 */
	function _svbk_woocommerce_wrapper_before() {
		?>
		<div id="primary" class="content-area">
			<main id="main" class="site-main" role="main">
			<?php
	}
}
add_action( 'woocommerce_before_main_content', '_svbk_woocommerce_wrapper_before' );

if ( ! function_exists( '_svbk_woocommerce_wrapper_after' ) ) {
	/**
	 * After Content.
	 *
	 * Closes the wrapping divs.
	 *
	 * @return void
	 */
	function _svbk_woocommerce_wrapper_after() {
		?>
			</main><!-- #main -->
		</div><!-- #primary -->
		<?php
	}
}
add_action( 'woocommerce_after_main_content', '_svbk_woocommerce_wrapper_after' );

/**
 * Sample implementation of the WooCommerce Mini Cart.
 *
 * You can add the WooCommerce Mini Cart to header.php like so ...
 *
	<?php
		if ( function_exists( '_svbk_woocommerce_header_cart' ) ) {
			_svbk_woocommerce_header_cart();
		}
	?>
 */

if ( ! function_exists( '_svbk_woocommerce_cart_link_fragment' ) ) {
	/**
	 * Cart Fragments.
	 *
	 * Ensure cart contents update when products are added to the cart via AJAX.
	 *
	 * @param array $fragments Fragments to refresh via AJAX.
	 * @return array Fragments to refresh via AJAX.
	 */
	function _svbk_woocommerce_cart_link_fragment( $fragments ) {
		ob_start();
		_svbk_woocommerce_cart_link();
		$fragments['a.cart-contents'] = ob_get_clean();

		return $fragments;
	}
}
add_filter( 'woocommerce_add_to_cart_fragments', '_svbk_woocommerce_cart_link_fragment' );

if ( ! function_exists( '_svbk_woocommerce_cart_link' ) ) {
	/**
	 * Cart Link.
	 *
	 * Displayed a link to the cart including the number of items present and the cart total.
	 *
	 * @return void
	 */
	function _svbk_woocommerce_cart_link() {
		?>
		<a class="cart-contents" href="<?php echo esc_url( wc_get_cart_url() ); ?>" title="<?php esc_attr_e( 'View your shopping cart', '_svbk' ); ?>">
			<?php
			$item_count_text = sprintf(
				/* translators: %d number of items in the mini cart */
				_n( '%d <span class="screen-reader-text">item</span>', '%d <span class="screen-reader-text">items</span>', WC()->cart->get_cart_contents_count(), '_svbk' ),
				WC()->cart->get_cart_contents_count()
			);
			?>
			<span class="count"><?php echo $item_count_text; ?></span>
		</a>
		<?php
	}
}

if ( ! function_exists( '_svbk_woocommerce_header_cart' ) ) {
	/**
	 * Display Header Cart.
	 *
	 * @return void
	 */
	function _svbk_woocommerce_header_cart() {
		if ( is_cart() ) {
			$class = 'current-menu-item';
		} else {
			$class = '';
		}
		?>
		<ul id="site-header-cart" class="site-header-cart">
			<li class="<?php echo esc_attr( $class ); ?>">
				<?php _svbk_woocommerce_cart_link(); ?>
			</li>
			<li>
				<?php
				$instance = array(
					'title' => '',
				);

				the_widget( 'WC_Widget_Cart', $instance );
				?>
			</li>
		</ul>
		<?php
	}
}

/**
 * Enable Block Editor in WooCommerce Products
 *
 * @return  void
 */
function _svbk_activate_products_block_editor( $can_edit, $post_type ) {

	if ( 'product' == $post_type ) {
		$can_edit = true;
	}

	return $can_edit;
}
add_filter( 'use_block_editor_for_post_type', '_svbk_activate_products_block_editor', 10, 2 );


/**
 * Sorting wrapper
 *
 * @since   1.4.3
 * @return  void
 */
function _svbk_wc_sorting_wrapper() {
	echo '<div class="woocommerce-shop__controls">';
}

/**
 * Sorting wrapper close
 *
 * @since   1.4.3
 * @return  void
 */
function _svbk_wc_sorting_wrapper_close() {
	echo '</div>';
}

// Before Product List
add_action( 'woocommerce_before_shop_loop', '_svbk_wc_sorting_wrapper', 10 );
add_action( 'woocommerce_before_shop_loop', '_svbk_wc_sorting_wrapper_close', 31 );

// After Product List
add_action( 'woocommerce_after_shop_loop', '_svbk_wc_sorting_wrapper', 9 );
add_action( 'woocommerce_after_shop_loop', '_svbk_wc_sorting_wrapper_close', 31 );


function _svbk_myaccount_sidebar_profile() {
	?>

<nav class="profile-nav" >
	<ul class="menu">
		<?php
		if ( is_user_logged_in() ) :
			$member = wp_get_current_user();
			?>
		<li class="menu-item my-account<?php echo has_nav_menu( 'account-profile' ) ? ' menu-item-has-children' : ''; ?><?php echo is_account_page() ? ' current-menu-item' : ''; ?>">
			<a href="<?php echo get_permalink( get_option( 'woocommerce_myaccount_page_id' ) ); ?>" title="<?php _e( 'Go to My Account', '_svbk' ); ?>">
				<?php echo get_avatar( $member->ID, 32 ); ?>
				<span class="user-name"><?php echo esc_html( $member->user_firstname . '&nbsp;' . substr( $member->user_lastname, 0, 1 ) . '.' ); ?></span>
			</a>
			<?php
				wp_nav_menu(
					array(
						'theme_location' => 'account-profile',
						'container'      => false,
						'menu_id'        => 'account-profile',
						'menu_class'     => 'sub-menu',
					)
				);
			?>
		</li>

		<?php else : ?>
		<li class="menu-item login"><a href="<?php echo get_permalink( get_option( 'woocommerce_myaccount_page_id' ) ); ?>" title="<?php _e( 'Login', '_svbk' ); ?>"><?php _e( 'Login', '_svbk' ); ?></a></li>
		<?php endif; ?>
	</ul>
</nav>
	<?php
}

/**
 * Output default WooCommerce my-account menu if there is no account-secondary menu
 *
 * @param string|null $menu_html The menu HTML, or null if no override is present
 * @param object      $args The `wp_nav_menu function args
 */
function _svbk_account_menu_default_woocommerce( $menu_html, $args ) {

	remove_filter( 'has_nav_menu', '_svbk_account_menu_always_on', 20, 2 );
	$has_nav_menu = has_nav_menu( 'account-secondary' );
	add_filter( 'has_nav_menu', '_svbk_account_menu_always_on', 20, 2 );

	if ( 'account-secondary' !== $args->theme_location || $has_nav_menu ) {
		return $menu_html;
	}

	$menu_html = '<nav class="woocommerce-MyAccount-navigation">'
				. '<ul>';

	foreach ( wc_get_account_menu_items() as $endpoint => $label ) {
		$menu_html .=
					  '<li class="' . wc_get_account_menu_item_classes( $endpoint ) . '">'
					. '<a href="' . esc_url( wc_get_account_endpoint_url( $endpoint ) ) . '">' . esc_html( $label ) . '</a>'
					. '</li>';
	}

	$menu_html .= '</ul>';
	$menu_html .= '</nav>';

	return $menu_html;
}

add_filter( 'pre_wp_nav_menu', '_svbk_account_menu_default_woocommerce', 10, 2 );

/**
 * Alway enable account-menu to allow it to default to `_svbk_account_menu_default_woocommerce`
 *
 * @param bool   $has_nav_menu If the menu location is empty
 * @param string $location The current menu location
 */
function _svbk_account_menu_always_on( $has_nav_menu, $location ) {

	if ( 'account-secondary' !== $location ) {
		return $has_nav_menu;
	}

	return true;
}

add_filter( 'has_nav_menu', '_svbk_account_menu_always_on', 20, 2 );

/**
 * Defer all inline WooCommerce code to be dompatible with deferred jQuery lib
 */
add_filter( 'woocommerce_queued_js', array( Script::class, 'defer_inline_script' ) );

/**
 * Remove Jetpack publicize support for Products to patch an issue with Jetpack 6.8
 *
 * See: https://github.com/Automattic/jetpack/issues/10727
 */
function _svbk_rm_jetpack_publicize_woocommerce() {
	remove_post_type_support( 'product', 'publicize' );
}

add_action( 'init', '_svbk_rm_jetpack_publicize_woocommerce' );
