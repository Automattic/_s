<?php
/**
 * Optimizations cleaning <head> and SEO.
 *
 * To added this file, and optimize your theme, just add a require_once in functions.php.
 *
 * Like this:
 * require_once get_template_directory() . '/inc/optimize.php';
 *
 * @package _s
 * @since _s 1.0
 */

/**
 * Cleanup wp_head().
 */
function _s_head_cleanup() {
    // category feeds.
    // remove_action( 'wp_head', 'feed_links_extra', 3 );
    // post and comment feeds.
    // remove_action( 'wp_head', 'feed_links', 2 );
    // EditURI link.
    remove_action( 'wp_head', 'rsd_link' );
    // windows live writer.
    remove_action( 'wp_head', 'wlwmanifest_link' );
    // index link.
    remove_action( 'wp_head', 'index_rel_link' );
    // previous link.
    remove_action( 'wp_head', 'parent_post_rel_link', 10, 0 );
    // start link.
    remove_action( 'wp_head', 'start_post_rel_link', 10, 0 );
    // links for adjacent posts.
    remove_action( 'wp_head', 'adjacent_posts_rel_link_wp_head', 10, 0 );
    // WP version.
    remove_action( 'wp_head', 'wp_generator' );
}

add_action( 'init', '_s_head_cleanup' );

/**
 * Remove WP version from RSS.
 */
function _s_version() {
    return '';
}

add_filter( 'the_generator', '_s_rss_version' );

/**
 * Add rel="nofollow" and remove rel="category"
 */
function _s_modify_category_rel( $text ) {
    $search = array( 'rel="category"', 'rel="category tag"' );
    $text = str_replace( $search, 'rel="nofollow"', $text );
    return $text;
}

add_filter( 'wp_list_categories', '_s_modify_category_rel' );
add_filter( 'the_category', '_s_modify_category_rel' );

/**
 * Add rel="nofollow" and remove rel="tag"
 */
function _s_modify_tag_rel( $taglink ) {
    return str_replace( 'rel="tag">', 'rel="nofollow">', $taglink );
}

add_filter( 'wp_tag_cloud', '_s_modify_tag_rel' );
add_filter( 'the_tags', '_s_modify_tag_rel' );

/**
 * Add feed link
 */
add_theme_support( 'automatic-feed-links' );

/**
 * Remove ?ver=***
 */
function _s_remove_cssjs_ver( $src ) {
    if( strpos( $src, '?ver=' ) )
        $src = remove_query_arg( 'ver', $src );
    return $src;
}
add_filter( 'style_loader_src', '_s_remove_cssjs_ver', 10, 2 );
add_filter( 'script_loader_src', '_s_remove_cssjs_ver', 10, 2 );
