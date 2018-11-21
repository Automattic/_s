<?php
/**
 *
 * Register ACF functions and fields
 *
 * @package _svbk
 */

use Svbk\WP\Helpers;
use Svbk\WP\Plugins\PrivateArea;

add_filter( 'acf/settings/show_admin', '_svbk_acf_show_admin' );

/**
 * Show ACF admin only to administrators
 *
 * @param bool $show The previous value from filter.
 *
 * @return bool
 **/
function _svbk_acf_show_admin( $show ) {
	return $show && current_user_can( 'manage_options' );
}

add_action( 'after_setup_theme', '_svbk_acf_register_fields' );

/**
 * Register custom ACF fields
 *
 * @return void
 **/
function _svbk_acf_register_fields() {

	// Abort if ACF plugin not installed and activated.
	if ( ! function_exists( 'acf_add_local_field_group' ) ) {
		return;
	}

	/* add fields definitions here */

}
