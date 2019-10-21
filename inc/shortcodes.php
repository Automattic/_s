<?php
/**
 * Register Shortcodes here.
 *
 * @package _svbk
 */
use Svbk\WP\Helpers;

/**
 * Hook to register Shortcodes
 *
 * @return void
 */
function _svbk_register_shortcodes() {
	Helpers\Compliance\Privacy::register_shortcodes();
}

add_action( 'after_setup_theme', '_svbk_register_shortcodes', 11 );

