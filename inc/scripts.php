<?php

/**
 * Register Google font.
 */
function _s_font_url() {

	$fonts_url = '';

	/*
	* Translators: If there are characters in your language that are not
	* supported by the following, translate this to 'off'. Do not translate
	* into your own language.
	*/
	$roboto = _x( 'on', 'Roboto font: on or off', '_s' );
	$open_sans = _x( 'on', 'Open Sans font: on or off', '_s' );

	if ( 'off' !== $roboto || 'off' !== $open_sans ) {
		$font_families = array();

		if ( 'off' !== $roboto ) {
			$font_families[] = 'Roboto:400,700';
		}

		if ( 'off' !== $open_sans ) {
			$font_families[] = 'Open Sans:400,300,700';
		}

		$query_args = array(
			'family' => urlencode( implode( '|', $font_families ) ),
			'subset' => urlencode( 'latin,latin-ext' ),
		);

		$fonts_url = add_query_arg( $query_args, '//fonts.googleapis.com/css' );
	}

	return $fonts_url;
}

/**
 * Enqueue scripts and styles.
 */
function _s_scripts() {
	/**
	 * If WP is in script debug, or we pass ?script_debug in a URL - set debug to true.
	 */
	$debug = ( defined( 'SCRIPT_DEBUG' ) && SCRIPT_DEBUG == true ) || ( isset( $_GET['script_debug'] ) ) ? true : false;

	/**
	 * If we are debugging the site, use a unique version every page load so as to ensure no cache issues.
	 */
	$version = '1.0.0';

	/**
	 * Should we load minified scripts? Also enqueue live reload to allow for extensionless reloading.
	 */
	$suffix = '.min';
	if ( true === $debug ) {

		$suffix = '';
		wp_enqueue_script( 'live-reload', '//localhost:35729/livereload.js', array(), $version, true );

	}

	wp_enqueue_style( '_s-google-font', _s_font_url(), array(), null );
	wp_enqueue_style( '_s-style', get_stylesheet_directory_uri() . '/style' . $suffix . '.css', array(), $version );

	wp_enqueue_script( '_s-project', get_template_directory_uri() . '/js/project' . $suffix . '.js', array( 'jquery' ), $version, true );

	if ( is_singular() && comments_open() && get_option( 'thread_comments' ) ) {
		wp_enqueue_script( 'comment-reply' );
	}
}
add_action( 'wp_enqueue_scripts', '_s_scripts' );


if ( class_exists( 'WDS_Simple_Page_Builder' ) && version_compare( WDS_Simple_Page_Builder::VERSION, '1.6', '>=' ) ) :

	/**
	 * Conditionally enqueue styles & scripts via Page Builder.
	 */
	function _s_enqueue_page_builder_scripts() {

		// Get the page builder parts
		$parts = get_page_builder_parts();

		// // If page builder part exsists, enqueue script
		// if ( in_array( 'cover-flow' , $parts ) ) {
		// 	wp_register_script( 'cover-flow', get_stylesheet_directory_uri() . '/js/cover-flow-script.js', array(), $version, true );
		// 	wp_enqueue_script( 'cover-flow' );
		// }

	}
	add_action( 'wds_page_builder_after_load_parts', '_s_enqueue_page_builder_scripts' );

endif;

/**
 * Add SVG definitions to <head>.
 */
function _s_include_svg_definitions() {

	// Define svg sprite file
	$svg_defs = get_template_directory() . '/images/svg-defs.svg';

	// If it exsists, include it
	if ( file_exists( $svg_defs ) ) {
		require_once( $svg_defs );
	}
}
add_action( 'wp_head', '_s_include_svg_definitions' );