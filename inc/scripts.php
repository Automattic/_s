<?php
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

	wp_register_style( 'font-awesome', '//cdnjs.cloudflare.com/ajax/libs/font-awesome/4.1.0/css/font-awesome.min.css', array(), null );
	wp_enqueue_style( 'font-awesome' );
	wp_register_style( 'google-fonts', '//fonts.googleapis.com/css?family=Open+Sans:300,400,700', array(), $version );
	wp_enqueue_style( 'google-fonts' );

	wp_enqueue_style( '_s-style', get_stylesheet_directory_uri() . '/style' . $minnified . '.css' );

	wp_enqueue_script( '_s-project', get_template_directory_uri() . '/js/project' . $minnified . '.js', array('jquery'), $version, true );

	if ( is_singular() && comments_open() && get_option( 'thread_comments' ) ) {
		wp_enqueue_script( 'comment-reply' );
	}

	/**
	 * WebDevStudios still supports IE8. Enqueue files to help make our job easier.
	 */
	if ( $is_IE ) {

		$GLOBALS['wp_scripts']->add_data( 'html5shiv', 'conditional', 'lte IE 9' );
		wp_enqueue_script( 'html5shiv', '//cdnjs.cloudflare.com/ajax/libs/html5shiv/3.7/html5shiv.min.js', null, $version, false );

		$GLOBALS['wp_scripts']->add_data( 'respond', 'conditional', 'lte IE 9' );
		wp_enqueue_script( 'respond', '//cdnjs.cloudflare.com/ajax/libs/respond.js/1.4.2/respond.js', null, $version, false );

		$GLOBALS['wp_scripts']->add_data( 'nwmatcher', 'conditional', 'lte IE 9' );
		wp_enqueue_script( 'nwmatcher', '//cdnjs.cloudflare.com/ajax/libs/nwmatcher/1.2.5/nwmatcher.min.js', null, $version, false );

		$GLOBALS['wp_scripts']->add_data( 'selectivizr', 'conditional', 'lte IE 9' );
		wp_enqueue_script( 'selectivizr','//cdnjs.cloudflare.com/ajax/libs/selectivizr/1.0.2/selectivizr-min.js', null, $version, false );

		$GLOBALS['wp_scripts']->add_data( 'placeholder', 'conditional', 'lte IE 9' );
		wp_enqueue_script( 'placeholder', '//cdnjs.cloudflare.com/ajax/libs/jquery-placeholder/2.0.7/jquery.placeholder.min.js', null, $version, false );

	}


}
add_action( 'wp_enqueue_scripts', '_s_scripts' );
