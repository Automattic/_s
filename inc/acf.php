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


add_action( 'wp', '_svbk_acf_fallbacks' );

if ( wp_doing_ajax() ) {
	add_action( 'admin_init', '_svbk_acf_fallbacks' );
}

/**
 * If ACF plugin not activated declare fallback functions
 */
function _svbk_acf_fallbacks() {

	if ( ! function_exists( 'get_field' ) ) {
		/**
		 * The fallback for ACF's get_field function
		 *
		 * @param string $key The field name.
		 * @param int    $post_id Optional. The post ID to retrieve the field from.
		 *
		 * @return string
		 */
		function get_field( $key, $post_id = null ) {

			if ( null === $post_id ) {
				$post_id = get_the_ID();
			}

			return get_post_meta( $post_id, $key, true );
		}
	}
	if ( ! function_exists( 'the_field' ) ) {
		/**
		 * The fallback for ACF's the_field function
		 *
		 * @param string $key The field name.
		 * @param int    $post_id Optional. The post ID to retrieve the field from.
		 *
		 * @return void
		 */
		function the_field( $key, $post_id = null ) {
			echo get_field( $key, $post_id );
		}
	}
}
