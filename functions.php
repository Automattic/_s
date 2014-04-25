<?php

// http://wycks.wordpress.com/2013/02/14/why-the-content_width-wordpress-global-kinda-sucks
$content_width = 90000; // pixels

function getRedirect() {
    $url  = $_SERVER["SERVER_NAME"];
    $url .= $_SERVER["REQUEST_URI"];

    $redirect = preg_replace("/^(.*?)\.(.*)$/","$2", $url);

    return 'http://'.$redirect;
}

function setup() {

	// Enable support for Post Thumbnails on posts and pages.
	add_theme_support( 'post-thumbnails' );

	// Enable support for Post Formats.
	add_theme_support( 'post-formats', array( 'aside', 'image', 'video', 'quote', 'link' ) );

}

add_action( 'after_setup_theme', 'setup' );
