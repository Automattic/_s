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
 * Display page-links for paginated posts before Jetpack share buttons and related posts.
 *
 * @param string $content The posts content.
 * @return string
 */
function _s_custom_link_pages( $content ) {
	if ( ! is_admin() && ! is_feed() && is_main_query() ) {
		$content .= wp_link_pages( array(
			'before'      => '<div class="page-links"><span class="page-links-title">' . esc_html__( 'Pages:', '_s' ) . '</span>',
			'after'       => '</div>',
			'link_before' => '<span>',
			'link_after'  => '</span>',
			'pagelink'    => '<span class="screen-reader-text">' . esc_html__( 'Page', '_s' ) . ' </span>%',
			'separator'   => '<span class="screen-reader-text">,</span> ',
			'echo'        => 0,
		) );
	}

	return $content;
}
add_filter( 'the_content', '_s_custom_link_pages', 1 );
