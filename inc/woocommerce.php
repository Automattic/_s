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
		Style::enqueue( '_svbk-wc-cart', get_theme_file_uri( '/assets/css/wc-cart.css' ), [ 'deps' => array( '_svbk-common' ), 'source' => false, ] );
	} elseif ( is_product() ) {
		Style::enqueue( '_svbk-wc-product', get_theme_file_uri( '/assets/css/wc-product.css' ), [ 'deps' =>  array( '_svbk-common' ), 'source' => false, ] );
	} elseif ( is_checkout() ) {
		Style::enqueue( '_svbk-wc-checkout', get_theme_file_uri( '/assets/css/wc-checkout.css' ), [ 'deps' =>  array( '_svbk-common' ), 'source' => false, ] );
	} elseif ( is_account_page() ) {
		Style::enqueue( '_svbk-wc-account', get_theme_file_uri( '/assets/css/wc-account.css' ), [ 'deps' =>  array( '_svbk-common' ), 'source' => false, ] );		
	} if ( is_shop() || is_archive('product') ) {
		Style::enqueue( '_svbk-wc-shop', get_theme_file_uri( '/assets/css/wc-shop.css'), [ 'deps' => array( '_svbk-common' ), 'source' => false, ] );
	}	
	
}
add_action( 'wp_enqueue_scripts', '_svbk_woocommerce_scripts' );