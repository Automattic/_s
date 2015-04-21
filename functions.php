<?php

// http://wycks.wordpress.com/2013/02/14/why-the-content_width-wordpress-global-kinda-sucks
$content_width = 90000; // pixels

function getRedirect() {
    $url  = $_SERVER["SERVER_NAME"];
    $url .= $_SERVER["REQUEST_URI"];

    $redirect = preg_replace("/^(.*?)\.(.*)$/","$2", $url);

    return 'http://'.$redirect;
}

function setup(){
	// Enable support for Post Thumbnails on posts and pages
	add_theme_support( 'post-thumbnails' );

	// Enable support for Post Formats
	add_theme_support( 'post-formats', array( 'image', 'quote', 'link', 'chat', 'audio', 'video' ) );
}

function register_media_taxonomies(){
	// Enable category/tag taxonomies for media attachments
    register_taxonomy_for_object_type( 'category', 'attachment' );
    register_taxonomy_for_object_type( 'post_tag', 'attachment' );
}

function api_url(){
    wp_redirect( 'http://wp-api.org' );
}

function redirect_to_posts($url) {
    return '/wp-admin/edit.php';
}

function customize_menu(){
    // http://justintadlock.com/archives/2011/06/13/removing-menu-pages-from-the-wordpress-admin
    remove_menu_page('index.php');
    remove_menu_page('edit-comments.php');
    remove_menu_page('themes.php');
    remove_menu_page('tools.php');
    remove_menu_page('edit.php?post_type=feedback');

    // http://codex.wordpress.org/Function_Reference/add_menu_page
    add_menu_page( 'API', 'API', 'activate_plugins', 'api', 'api_url', 'dashicons-admin-links', '20.1' );
}

// Add jungle data to public api response
function add_custom_meta($data, $post, $context) {
    if ( ($post['post_type'] == 'release') || ($post['post_type'] == 'lyrics') || ($post['post_type'] == 'post') ) {

        $all_custom_data = get_post_custom( $post['ID'] );

        // All of the custom fields that we want to copy into the public key
        $jungle_fields = array("wpcf-format", "wpcf-byline", "wpcf-tracks", "wpcf-artist", "wpcf-release_date", "wpcf-retailers", "wpcf-director", "wpcf-retailer");

        foreach ( $all_custom_data as $key => $value ) {
            if ( in_array($key, $jungle_fields) ) {
                $data['jungle_data'][$key] = $value;
            }
        }
    }
    return $data;
}

add_action( 'init', 'register_media_taxonomies' );
add_action( 'after_setup_theme', 'setup' );
add_filter( 'login_redirect', 'redirect_to_posts' );
add_action( 'admin_menu', 'customize_menu', 999 );
add_filter( 'json_prepare_post', 'add_custom_meta', 10, 3 );

if( class_exists( WpeCommon ) ){
    require 'wpengine.php';
}
