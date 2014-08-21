<?php
/**
 * Jetpack Compatibility File
 * See: http://jetpack.me/
 *
 * @package _s2
 */

/**
 * Add theme support for Infinite Scroll.
 * See: http://jetpack.me/support/infinite-scroll/
 */
function _s2_jetpack_s2etup() {
	add_theme_s2upport( 'infinite-scroll', array(
		'container' => 'main',
		'footer'    => 'page',
	) );
}
add_action( 'after_s2etup_theme', '_s2_jetpack_s2etup' );
