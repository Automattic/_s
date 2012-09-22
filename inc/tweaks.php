<?php
/**
 * Custom functions that act independently of the theme templates
 *
 * Eventually, some of the functionality here could be replaced by core features
 *
 * @package _s
 * @since _s 1.0
 */

/**
 * Get our wp_nav_menu() fallback, wp_page_menu(), to show a home link.
 *
 * @since _s 1.0
 */
function _s_page_menu_args( $args ) {
	$args['show_home'] = true;
	return $args;
}
add_filter( 'wp_page_menu_args', '_s_page_menu_args' );

/**
 * Adds custom classes to the array of body classes.
 *
 * @since _s 1.0
 */
function _s_body_classes( $classes ) {

	// Grabs the $wp_query global var for use in post-/page-specific data
	global $wp_query;

	// Determine user's browser and adds appropriate class
	global $is_lynx, $is_gecko, $is_IE, $is_opera, $is_NS4, $is_safari, $is_chrome, $is_iphone;
	if		($is_lynx)		$classes[] = 'lynx';
	elseif	($is_gecko)		$classes[] = 'gecko';
	elseif	($is_opera)		$classes[] = 'opera';
	elseif	($is_NS4)		$classes[] = 'ns4';
	elseif	($is_safari)	$classes[] = 'safari';
	elseif	($is_chrome)	$classes[] = 'chrome';
	elseif	($is_IE)		$classes[] = 'ie';
	elseif	($is_iphone)	$classes[] = 'iphone';
	else					$classes[] = 'unknown-browser';

	// Include user's IE version for version-specific hacking. Credit: http://wordpress.org/extend/plugins/krusty-msie-body-classes/
	if( preg_match( '/MSIE ([0-9]+)([a-zA-Z0-9.]+)/', $_SERVER['HTTP_USER_AGENT'], $browser_version ) ){

		// add a class with the major version number
		$classes[] = 'ie' . $browser_version[1];

		// add an ie-lt9 class to match MSIE 8 and older
		if ( 9 > $browser_version[1] )
			$classes[] = 'ie-lt9';

		// add an ie-lt8 and ie-old class to match MSIE 7 and older
		if ( 8 > $browser_version[1] ) {
			$classes[] = 'ie-lt8';
			$classes[] = 'ie-old';
		}

	}

	// Adds post and page slug class, prefixed by 'post-' or 'page-', respectively
	if ( is_single() )
    	$classes[] = 'post-' . $wp_query->post->post_name;
	elseif( is_page() )
		$classes[] = 'page-' . $wp_query->post->post_name;

	// Adds category classes for each category on single posts
	if ( is_single() && $cats = get_the_category() )
		foreach ( $cats as $cat )
			$classes[] = 's-category-' . $cat->slug;

	// Adds classes site-wide for the present year, month, day, and hour
    $classes = array_merge( $classes, _s_date_classes() );

	// Adds classes on single posts for the published year, month, day, and hour
	if ( is_single() )
		$classes = array_merge( $classes, _s_date_classes( mysql2date( 'U', $wp_query->post->post_date ), 's-' ) );

	// Adds a class of group-blog to blogs with more than 1 published author
	if ( is_multi_author() ) {
		$classes[] = 'group-blog';
	}

	return $classes;
}
add_filter( 'body_class', '_s_body_classes' );

/**
 * Generates time- and date-based classes relative to GMT (UTC)
 *
 * @since Unknown
 * @param int $time A UNIX timestamp (e.g. time())
 * @param string $prefix Prefix to apply to the new class names
 * @return array An array of date-based classes
 */
function _s_date_classes( $time = null, $prefix = null ) {

	// If the $time var is empty, set it to the current time
	$time = empty( $time ) ? time() : $time;

	// Update our timestamp with the site's GMT offset
	$time = $time + ( get_option('gmt_offset') * 3600 );

	// Append a new class for each unit of time
	$dates = array();
	$dates[] = $prefix . 'y' . gmdate( 'Y', $time ); // Year
	$dates[] = $prefix . 'm' . gmdate( 'm', $time ); // Month
	$dates[] = $prefix . 'd' . gmdate( 'd', $time ); // Day
	$dates[] = $prefix . 'h' . gmdate( 'H', $time ); // Hour

	// Return our updated array
	return $dates;
}

/**
 * Filter in a link to a content ID attribute for the next/previous image links on image attachment pages
 *
 * @since _s 1.0
 */
function _s_enhanced_image_navigation( $url, $id ) {
	if ( ! is_attachment() && ! wp_attachment_is_image( $id ) )
		return $url;

	$image = get_post( $id );
	if ( ! empty( $image->post_parent ) && $image->post_parent != $id )
		$url .= '#main';

	return $url;
}
add_filter( 'attachment_link', '_s_enhanced_image_navigation', 10, 2 );