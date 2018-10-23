<?php

use \Svbk\WP\Helpers\Theme\Style;

if ( ! in_array( 'woocommerce/woocommerce.php', apply_filters( 'active_plugins', get_option( 'active_plugins' ) ) ) ) {
    return;
}

/**
 * Enqueue Woocomerce scripts and styles.
 */
function _svbk_woocommerce_scripts() {
	
	if ( is_cart() ) {
		Style::enqueue( '_svbk-wc-cart', '/assets/css/wc-cart.css', [ 'source' => 'theme' ] );
	} elseif ( is_product() ) {
		Style::enqueue( '_svbk-wc-product', '/assets/css/wc-product.css', [ 'source' => 'theme' ] );
	} elseif ( is_checkout() ) {
		Style::enqueue( '_svbk-wc-checkout', '/assets/css/wc-checkout.css', [ 'source' => 'theme' ] );
	} elseif ( is_account_page() ) {
		Style::enqueue( '_svbk-wc-account', '/assets/css/wc-account.css', [ 'source' => 'theme' ] );		
	} if ( is_shop() || is_archive('product') ) {
		Style::enqueue( '_svbk-wc-shop', '/assets/css/wc-shop.css', [ 'source' => 'theme' ] );
	}	
	
}
add_action( 'wp_enqueue_scripts', '_svbk_woocommerce_scripts' );