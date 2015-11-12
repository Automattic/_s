<?php
/**
 * Custom functions that act independently of the theme templates.
 *
 * Eventually, some of the functionality here could be replaced by core features.
 *
 * @package _s
 */

/**
 * Adds custom classes to the array of body classes.
 *
 * @param array $classes Classes for the body element.
 * @return array
 */
function _s_body_classes( $classes ) {
	// Adds a class of group-blog to blogs with more than 1 published author.
	if ( is_multi_author() ) {
		$classes[] = 'group-blog';
	}

	// Adds a class of hfeed to non-singular pages.
	if ( ! is_singular() ) {
		$classes[] = 'hfeed';
	}

	return $classes;
}
add_filter( 'body_class', '_s_body_classes' );

/**
 * Removes hentry class from the array of post classes.
 *
 * Currently, having the class on pages is not correct use of hentry.
 * hentry requires more properties than pages typically have.
 * Core is not likely to remove class because of backward compatibility.
 *
 * @see https://core.trac.wordpress.org/ticket/28482
 * @param array $classes Classes for the post element.
 * @return array
 */
function _s_post_classes( $classes ) {
	if ( 'page' === get_post_type() ) {
		$classes = array_diff( $classes, array( 'hentry' ) );
	}

	return $classes;
}
add_filter( 'post_class', '_s_post_classes' );
