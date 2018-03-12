<?php
/**
 * WordPress.com-specific functions and definitions
 *
 * This file is centrally included from `wp-content/mu-plugins/wpcom-theme-compat.php`.
 *
 * @package _s
 */

if ( ! function_exists( '_s_wpcom_setup' ) ) :
	/**
	 * Adds support for wp.com-specific theme functions.
	 *
	 * @global array $themecolors
	 */
	function _s_wpcom_setup() {
		global $themecolors;

		// Set theme colors for third party services.
		if ( ! isset( $themecolors ) ) {
			// Whitelist wpcom specific variable intended to be overruled.
			// phpcs:ignore WordPress.NamingConventions.PrefixAllGlobals.NonPrefixedVariableFound
			$themecolors = array(
				'bg'     => '',
				'border' => '',
				'text'   => '',
				'link'   => '',
				'url'    => '',
			);
		}
	}
endif;
add_action( 'after_setup_theme', '_s_wpcom_setup' );
