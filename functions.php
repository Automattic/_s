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

function api_url(){
    wp_redirect( 'https://www.storyteller.io/apis/wordpress-rest-api' );
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
    remove_menu_page('plugins.php');
    remove_menu_page('edit.php?post_type=feedback');

    // http://codex.wordpress.org/Function_Reference/add_menu_page
    add_menu_page( 'API', 'API', 'activate_plugins', 'api', 'api_url', 'dashicons-admin-links', '20.1' );
}

add_action( 'after_setup_theme', 'setup' );
add_filter( 'login_redirect', 'redirect_to_posts' );
add_action( 'admin_menu', 'customize_menu', 999 );

if( class_exists( WpeCommon ) ){
    require 'wpengine.php';
}
