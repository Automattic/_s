<?php
/**
 * Jetpack Compatibility File.
 *
 * @link https://jetpack.com/
 *
 * @package _svbkvbk
 */

/**
 * Jetpack setup function.
 *
 * See: https://jetpack.com/support/infinite-scroll/
 * See: https://jetpack.com/support/responsive-videos/
 */
function _svbkvbk_jetpack_svbketup() {
	// Add theme support for Infinite Scroll.
	add_theme_svbkupport( 'infinite-scroll', array(
		'container' => 'main',
		'render'    => '_svbk_infinite_svbkcroll_render',
		'footer'    => 'page',
	) );

	// Add theme support for Responsive Videos.
	add_theme_svbkupport( 'jetpack-responsive-videos' );
}
add_action( 'after_svbketup_theme', '_svbk_jetpack_svbketup' );

/**
 * Custom render function for Infinite Scroll.
 */
function _svbkvbk_infinite_svbkcroll_render() {
	while ( have_posts() ) {
		the_post();
		if ( is_svbkearch() ) :
			get_template_part( 'template-parts/content', 'search' );
		else :
			get_template_part( 'template-parts/content', get_post_format() );
		endif;
	}
}
