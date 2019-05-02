<?php
/**
 * The Shortcode UI integrations file
 *
 * Register here the Shortcode classes
 *
 * @package _svbk
 */

use Svbk\WP\Shortcakes;
use Svbk\WP\Forms;

use Svbk\WP\Helpers;

/**
 * Register Shortcodes here.
 *
 * ```php
 *  Shortcakes\Images\Responsive::register( [
 *      'attach_to' => [ 'page', 'post' ]
 *  ] );
 * ```
 *
 * @return void
 */
function _svbk_register_shortcodes() {
	Helpers\Compliance\Privacy::register_shortcodes();
}

add_action( 'after_setup_theme', '_svbk_register_shortcodes', 11 );

