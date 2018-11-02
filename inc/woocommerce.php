<?php
/**
 * WooCommerce Compatibility File
 *
 * @link https://woocommerce.com/
 *
 * @package _s
 */
use \Svbk\WP\Helpers\Assets\Style;
use \Svbk\WP\Helpers\Assets\Script;

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
	
	Style::enqueue( '_svbk-wc-product', '/dist/css/wc-product.css', [ 'source' => 'theme', 'condition' => is_product(), 'prefetch' =>  is_shop() || is_archive('product')  ] );
	Style::enqueue( '_svbk-wc-cart', '/dist/css/wc-cart.css', [ 'source' => 'theme', 'condition' => is_cart(), 'prefetch' => is_product() ] );
	Style::enqueue( '_svbk-wc-checkout', '/dist/css/wc-checkout.css', [ 'source' => 'theme', 'condition' => is_checkout(), 'prefetch' => is_cart() ] );
	Style::enqueue( '_svbk-wc-account', '/dist/css/wc-account.css', [ 'source' => 'theme', 'condition' => is_account_page(),  ] );		
	Style::enqueue( '_svbk-wc-shop', '/dist/css/wc-shop.css', [ 'source' => 'theme', 'condition' => is_shop() || is_archive('product') ] );
	
	Script::enqueue( 'wc-add-to-cart', null, [ 'condition' => is_woocommerce() ] );
	Script::enqueue( 'wc-cart-fragments', null, [ 'condition' => is_woocommerce() ] );
	Script::enqueue( 'woocommerce', null, [ 'condition' => is_woocommerce() ] );
	
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
				/* translators: number of items in the mini cart. */
				__( '%d %s', '_svbk' ),
				WC()->cart->get_cart_contents_count(),
				/* translators: number of items in the mini cart. */
				'<span class="screen-reader-text">' . _n( 'item', 'items', WC()->cart->get_cart_contents_count(), '_svbk' ) . '</span>'
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


function _svbk_activate_gutenberg_products($can_edit, $post_type){
	
	if ( 'product' == $post_type ){
		$can_edit = true;
	}
	
	return $can_edit;
}
add_filter('gutenberg_can_edit_post_type', '_svbk_activate_gutenberg_products', 10, 2);


function _svbk_myaccount_sidebar_profile() {
?>

<nav class="profile-nav" >
	<ul class="menu">
		<?php
		if ( is_user_logged_in() ) : $member = wp_get_current_user(); ?>
		<li class="menu-item logout">
			<a href="<?php echo get_permalink( get_option('woocommerce_myaccount_page_id') ); ?>" title="<?php _e('Go to My Account','_svbk'); ?>">
				<?php echo get_avatar( $member->ID, 'thumbnail' ); ?>
				<span class="user-name"><?php echo esc_html( $member->user_firstname . '&nbsp;' . substr($member->user_lastname, 0, 1) . '.'); ?></span>
			</a>
		</li>
		<?php else: ?>
		<li class="menu-item login"><a href="<?php echo get_permalink( get_option('woocommerce_myaccount_page_id') ); ?>" title="<?php _e('Login','_svbk'); ?>"><?php _e('Login','_svbk'); ?></a></li>
		<?php endif; ?>
	</ul>
</nav>
<?php
}