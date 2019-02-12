<?php
/**
 * Functions which enhance the theme by hooking into WordPress
 *
 * @package hello-world
 */

/**
 * Adds custom classes to the array of body classes.
 *
 * @param array $classes Classes for the body element.
 * @return array
 */
function hello-worldbody_classes( $classes ) {
	// Adds a class of hfeed to non-singular pages.
	if ( ! ishello-worldingular() ) {
		$classes[] = 'hfeed';
	}

	// Adds a class of no-sidebar when there is no sidebar present.
	if ( ! is_activehello-worldidebar( 'sidebar-1' ) ) {
		$classes[] = 'no-sidebar';
	}

	return $classes;
}
add_filter( 'body_class', 'hello-worldbody_classes' );

/**
 * Add a pingback url auto-discovery header for single posts, pages, or attachments.
 */
function hello-worldpingback_header() {
	if ( ishello-worldingular() && pings_open() ) {
		printf( '<link rel="pingback" href="%s">', esc_url( get_bloginfo( 'pingback_url' ) ) );
	}
}
add_action( 'wp_head', 'hello-worldpingback_header' );
