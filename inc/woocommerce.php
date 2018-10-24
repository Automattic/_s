<?php

use \Svbk\WP\Helpers\Assets\Style;
use \Svbk\WP\Helpers\Assets\Script;

if ( ! in_array( 'woocommerce/woocommerce.php', apply_filters( 'active_plugins', get_option( 'active_plugins' ) ) ) ) {
    return;
}

/**
 * Enqueue Woocomerce scripts and styles.
 */
function _svbk_woocommerce_scripts() {
	Style::enqueue( '_svbk-wc-cart', '/assets/css/wc-cart.css', [ 'source' => 'theme', 'condition' => is_cart() ] );
	Style::enqueue( '_svbk-wc-product', '/assets/css/wc-product.css', [ 'source' => 'theme', 'condition' => is_product() ] );
	Style::enqueue( '_svbk-wc-checkout', '/assets/css/wc-checkout.css', [ 'source' => 'theme', 'condition' => is_checkout() ] );
	Style::enqueue( '_svbk-wc-account', '/assets/css/wc-account.css', [ 'source' => 'theme', 'condition' => is_account_page() ] );		
	Style::enqueue( '_svbk-wc-shop', '/assets/css/wc-shop.css', [ 'source' => 'theme', 'condition' => is_shop() || is_archive('product') ] );
	
	Script::enqueue( 'wc-add-to-cart', null, [ 'condition' => is_woocommerce() ] );
	Script::enqueue( 'wc-cart-fragments', null, [ 'condition' => is_woocommerce() ] );
	Script::enqueue( 'woocommerce', null, [ 'condition' => is_woocommerce() ] );
	
	Style::enqueue( 'woocommerce-layout', null, [ 'condition' => is_woocommerce() ] );
	Style::enqueue( 'woocommerce-smallscreen', null, [ 'condition' => is_woocommerce() ] );
	Style::enqueue( 'woocommerce-general', null, [ 'condition' => is_woocommerce() ] );
}

add_action( 'wp_enqueue_scripts', '_svbk_woocommerce_scripts', 50 );