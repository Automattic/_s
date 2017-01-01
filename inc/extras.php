<?php
/**
 * Custom functions that act independently of the theme templates
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
 * Add a pingback url auto-discovery header for singularly identifiable articles.
 */
function _s_pingback_header() {
	if ( is_singular() && pings_open() ) {
		echo '<link rel="pingback" href="', esc_url( get_bloginfo( 'pingback_url' ) ), '">';
	}
}
add_action( 'wp_head', '_s_pingback_header' );


/**
 * Adds the correct schema microdata to the body tag
 * depending on the type of page
 */
function _s_schema_microdata() {
    
    $schema = 'http://schema.org/';

    if( is_single() ) {
        $type = "Article";
    }

    else if( is_home() || ( is_archive() && !is_author() ) ) {
    	$type = "Blog";
    }

    else if( is_page( array('contact', 'contact-us', 'contact-page') ) ) {
        $type = 'ContactPage';
    }

    else if( is_author() ) {
        $type = 'ProfilePage';
    }

    else if( is_search() ) {
        $type = 'SearchResultsPage';
    }

    else {
        $type = 'WebPage';
    }

    echo 'itemscope="itemscope" itemtype="' . $schema . $type . '"';
}

/**
 * Add schema microdata to thumbnails
 */
the_post_thumbnail('thumbnail', array('itemprop' => 'image'));


/**
 * Add schema microdata to nav urls
 */
function add_menu_atts( $atts, $item, $args ) {
    $atts['itemprop'] = 'url';
    return $atts;
}
add_filter( 'nav_menu_link_attributes', 'add_menu_atts', 10, 3 );