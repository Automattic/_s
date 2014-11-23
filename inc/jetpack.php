<?php
/**
 * Jetpack Compatibility File
 * See: http://jetpack.me/
 *
 * @package _s
 */
/**
 * Add theme support for Infinite Scroll.
 * See: http://jetpack.me/support/infinite-scroll/
 */
function _s_jetpack_setup() {
	add_theme_support( 'infinite-scroll', array(
		'container' => 'main',
		'render'     => '_s_infinite_scroll_render',
		'footer'      => 'page',
	) );
}

add_action( 'after_setup_theme', '_s_jetpack_setup' );

/**
 * Add Infinite Scroll compatibility after content.php has been moved in template-parts folder.
 */
function _s_infinite_scroll_render() {
	while ( have_posts() ) {
		the_post();
		get_template_part( 'template-parts/content', get_post_format() );
	}
}
