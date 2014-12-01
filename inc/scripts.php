<?php

/**
 * Register Google font.
 */
function _s_font_url() {

	$font_url = '';

	/*
	 * Translators: If there are characters in your language that are not supported
	 * by Open Sans, translate this to 'off'. Do not translate into your own language.
	 */
	if ( 'off' !== _x( 'on', 'Open Sans font: on or off', '_s' ) ) {

		$query_args = array(
			'family' => urlencode( 'Open+Sans:300italic,400italic,700italic,400,300,700' ),
			'subset' => urlencode( 'latin,latin-ext' ),
		);

		$font_url = add_query_arg( $query_args, '//fonts.googleapis.com/css' );
	}

	return $font_url;
}


/**
 * Enqueue scripts and styles.
 */
function _s_scripts() {

	global $is_IE;

	$version = '1.0.0';

	/**
	 * Should we load minified scripts? Also enqueue live reload to allow for extensionless reloading.
	 */
	$minnified = '.min';
	if ( defined( 'SCRIPT_DEBUG' ) && SCRIPT_DEBUG == true ) {

		$minnified = '';
		wp_enqueue_script( 'live-reload', '//localhost:35729/livereload.js', array(), $version, true );

	}

	wp_register_style( 'font-awesome', '//maxcdn.bootstrapcdn.com/font-awesome/4.2.0/css/font-awesome.min.css', array(), $version );

	wp_enqueue_style( 'font-awesome' );
	wp_enqueue_style( '_s-google-font', _s_font_url(), array(), null );
	wp_enqueue_style( '_s-style', get_stylesheet_directory_uri() . '/style' . $minnified . '.css' );

	wp_enqueue_script( '_s-project', get_template_directory_uri() . '/js/project' . $minnified . '.js', array( 'jquery' ), $version, true );

	if ( is_singular() && comments_open() && get_option( 'thread_comments' ) ) {
		wp_enqueue_script( 'comment-reply' );
	}
}
add_action( 'wp_enqueue_scripts', '_s_scripts' );
