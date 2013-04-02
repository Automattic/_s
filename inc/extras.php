<?php
/**
 * Custom functions that act independently of the theme templates
 *
 * Eventually, some of the functionality here could be replaced by core features
 *
 * @package _s
 */

/**
 * Get our wp_nav_menu() fallback, wp_page_menu(), to show a home link.
 */
function _s_page_menu_args( $args ) {
	$args['show_home'] = true;
	return $args;
}
add_filter( 'wp_page_menu_args', '_s_page_menu_args' );

/**
 * Adds custom classes to the array of body classes.
 */
function _s_body_classes( $classes ) {
	// Adds a class of group-blog to blogs with more than 1 published author
	if ( is_multi_author() ) {
		$classes[] = 'group-blog';
	}

	return $classes;
}
add_filter( 'body_class', '_s_body_classes' );
/**
 *  Adds browser classes
 */

function _s_browser_classes( $classes ) {
	$browser = $_SERVER[ 'HTTP_USER_AGENT' ];

	// Mac, PC ...or Linux
	if ( preg_match( "/Mac/", $browser ) ){
		$classes[] = 'mac';

	} elseif ( preg_match( "/Windows/", $browser ) ){
		$classes[] = 'windows';

	} elseif ( preg_match( "/Linux/", $browser ) ) {
		$classes[] = 'linux';

	} else {
		$classes[] = 'unknown-os';
	}

	// Checks browsers in this order: Chrome, Safari, Opera, MSIE, FF
	if ( preg_match( "/Chrome/", $browser ) ) {
		$classes[] = 'chrome';

		if ( ( current_theme_supports( 'minorbrowserversion_all' )) || ( current_theme_supports( 'minorbrowserversion_ch' ) ) ) {
			preg_match( "/Chrome\/(\d+.\d+)/si", $browser, $matches );
			$ch_version = 'ch' . str_replace( '.', '-', $matches[1] );
		} else {
			preg_match( "/Chrome\/(\d+)/si", $browser, $matches );
			$ch_version = 'ch' . $matches[1];
		}      
		$classes[] = $ch_version;

	} elseif ( preg_match( "/Safari/", $browser ) ) {
		$classes[] = 'safari';

		if ( ( current_theme_supports( 'minorbrowserversion_all' )) || ( current_theme_supports( 'minorbrowserversion_sf' ) ) ) {
			preg_match( "/Version\/(\d+.\d+)/si", $browser, $matches );
			$sf_version = 'sf' . str_replace( '.', '-', $matches[1] );
		} else {
			preg_match( "/Version\/(\d+)/si", $browser, $matches );
			$sf_version = 'sf' . $matches[1];

		}     
		$classes[] = $sf_version;

	} elseif ( preg_match( "/Opera/", $browser ) ) {
		$classes[] = 'opera';

		if ( ( current_theme_supports( 'minorbrowserversion_all' ) ) || ( current_theme_supports( 'minorbrowserversion_op' ) ) ) {
			preg_match( "/Version\/(\d+.\d+)/si", $browser, $matches );
			$op_version = 'op' . str_replace( '.', '-', $matches[1] );      
		} else {
			preg_match( "/Version\/(\d+)/si", $browser, $matches );
			$op_version = 'op' . $matches[1];      			
		}
		$classes[] = $op_version;

	} elseif ( preg_match( "/MSIE/", $browser ) ) {
		$classes[] = 'msie';

		if ( ( current_theme_supports( 'minorbrowserversion_all' )) || ( current_theme_supports( 'minorbrowserversion_ie' ) ) ) {
			preg_match( "/MSIE (\d+.\d+)/si", $browser, $matches );
			$ie_version = 'ie' . str_replace( '.', '-', $matches[1] );
		} else {
			preg_match( "/MSIE (\d+)/si", $browser, $matches );
			$ie_version = 'ie' . $matches[1];

		}
		$classes[] = $ie_version;

	} elseif ( preg_match( "/Firefox/", $browser ) && preg_match( "/Gecko/", $browser ) ) {
			$classes[] = 'firefox';

			if ( ( current_theme_supports( 'minorbrowserversion_all' ) ) || ( current_theme_supports( 'minorbrowserversion_ff' ) ) ) {
				preg_match( "/Firefox\/(\d+.\d+)/si", $browser, $matches );
				$ff_version = 'ff' . str_replace( '.', '-', $matches[1] );
			} else {
				preg_match( "/Firefox\/(\d+)/si", $browser, $matches );
				$ff_version = 'ff' . $matches[1];
			}      
			$classes[] = $ff_version;

	} else {
		$classes[] = 'unknown-browser';
	}
	// return the $classes array
	return $classes;
} 
add_filter( 'body_class', '_s_browser_classes' );

/**
 * Filter in a link to a content ID attribute for the next/previous image links on image attachment pages
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

/**
 * Filters wp_title to print a neat <title> tag based on what is being viewed.
 */
function _s_wp_title( $title, $sep ) {
	global $page, $paged;

	if ( is_feed() )
		return $title;

	// Add the blog name
	$title .= get_bloginfo( 'name' );

	// Add the blog description for the home/front page.
	$site_description = get_bloginfo( 'description', 'display' );
	if ( $site_description && ( is_home() || is_front_page() ) )
		$title .= " $sep $site_description";

	// Add a page number if necessary:
	if ( $paged >= 2 || $page >= 2 )
		$title .= " $sep " . sprintf( __( 'Page %s', '_s' ), max( $paged, $page ) );

	return $title;
}
add_filter( 'wp_title', '_s_wp_title', 10, 2 );
