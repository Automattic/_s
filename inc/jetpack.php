<?php
/**
 * Infinite Scroll Support
 * See: http://jetpack.me/support/infinite-scroll/
 *
 * Theme Name: _s
 */

/**
 * Add theme support for Infinite Scroll.
 */
function _s_infinite_scroll_init() {
	add_theme_support( 'infinite-scroll', array(
		'container' => 'content',
		'footer'    => 'page',
	) );
}
add_action( 'after_setup_theme', '_s_infinite_scroll_init' );
