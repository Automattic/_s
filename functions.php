<?php
/**
 * YuMag functions and definitions
 *
 * @package YuMag
 */

if ( ! function_exists( 'write_log' ) ) :
/**
 * Error logging function.
 *
 * Prettifies output of array and object contents as well as simpler variables.
 *
 * @since 1.0.0
 *
 * @param  array|string|object $log The variable to output to the error log.
 */
function write_log( $log )  {
	if ( true === WP_DEBUG ) {
		if ( is_array( $log ) || is_object( $log ) ) {
			error_log( print_r( $log, true ) );
		} else {
			error_log( $log );
		}
	}
}
endif;

if ( ! function_exists( 'write_filters' ) ) :
/**
 * Debug function to log all filters on a named hook.
 *
 * @since 1.0.0
 *
 * @param string $hook The name of the hook.
 */
function write_filters( $hook ) {
	global $wp_filter;
	if ( ! empty( $hook ) && isset( $wp_filter[ $hook ] ) ) {
		write_log( $wp_filter[ $hook ] );
	}
}
endif;

function init_debug() {
	//write_filters( 'image_size_names_choose' );
}
add_action( 'admin_init', 'init_debug', 1000 );

/**
 * Set the max content width based on the theme's design and stylesheet.
 */
if ( ! isset( $content_width ) ) {
	$content_width = 672; /* pixels */
}

if ( ! function_exists( 'yumag_setup' ) ) :
/**
 * Sets up theme defaults and registers support for various WordPress features.
 *
 * Note that this function is hooked into the after_setup_theme hook, which
 * runs before the init hook. The init hook is too late for some features, such
 * as indicating support for post thumbnails.
 */
function yumag_setup() {

	/*
	 * Make theme available for translation.
	 * Translations can be filed in the /languages/ directory.
	 * If you're building a theme based on YuMag, use a find and replace
	 * to change 'yumag' to the name of your theme in all the template files
	 */
	load_theme_textdomain( 'yumag', get_template_directory() . '/languages' );

	// Add default posts and comments RSS feed links to head.
	add_theme_support( 'automatic-feed-links' );

	/*
	 * Enable support for Post Thumbnails on posts and pages.
	 *
	 * @link http://codex.wordpress.org/Function_Reference/add_theme_support#Post_Thumbnails
	 */
	add_theme_support( 'post-thumbnails' );
	set_post_thumbnail_size( 666, 444, true );

	add_theme_support( 'featured-content', array(
		'filter'     => 'yumag_get_featured_posts',
		'max_posts'  => 10,
		'post_types' => array( 'post', 'page' )
	) );

	// This theme uses wp_nav_menu() in two locations.
	register_nav_menus( array(
		'primary' => __( 'Primary Menu', 'yumag' ),
	) );
	register_nav_menus( array(
		'utilities' => __( 'Utilities Menu', 'yumag' ),
	) );

	/*
	 * Switch default core markup for search form, comment form, and comments
	 * to output valid HTML5.
	 */
	add_theme_support( 'html5', array(
		'search-form', 'comment-form', 'comment-list', 'gallery', 'caption',
	) );

	/*
	 * Setup image dimensions.
	 */
	add_image_size( 'yumag-content-photo-full',      672,  378, true );
	add_image_size( 'yumag-content-photo-half',      336, 9999 );
	add_image_size( 'yumag-author-photo',            150,  150, true );
	add_image_size( 'yumag-featured-photo',          905,  509, true );
	add_image_size( 'yumag-featured-photo-portrait', 474,  474, true );
	add_image_size( 'yumag-slider-photo',            625,  352, true );

	/*
	 * Register stylesheet for TinyMCE content (editor-style.css).
	 */
	add_editor_style();

	/*
	 * If using subtitles, properly format them on output (change dumb quotes
	 * to smart quotes, create real ellipsis, etc).
	 */
	add_filter( 'wps_subtitle', 'wptexturize' );

}
endif; // yumag_setup
add_action( 'after_setup_theme', 'yumag_setup' );

/**
 * Register widget areas.
 *
 * @link http://codex.wordpress.org/Function_Reference/register_sidebar
 */
function yumag_widgets_init() {

	// Left menu area.
	register_sidebar( array(
		'name'          => __( 'Menu Widgets', 'yumag' ),
		'id'            => 'menu-widgets',
		'description'   => 'Widgets underneath the menus in the left sidebar of each page.',
		'before_widget' => '<aside id="%1$s" class="widget menu-widget %2$s">',
		'after_widget'  => '</aside>',
		'before_title'  => '<h2 class="widget-title">',
		'after_title'   => '</h2>',
	) );

	// Right menu area.
	register_sidebar( array(
		'name'          => __( 'Search Widgets', 'yumag' ),
		'id'            => 'search-widgets',
		'description'   => 'Widgets in the right sidebar of each page.',
		'before_widget' => '<aside id="%1$s" class="widget search-widget %2$s">',
		'after_widget'  => '</aside>',
		'before_title'  => '<h2 class="widget-title">',
		'after_title'   => '</h2>',
	) );

	// Footer area.
	register_sidebar( array(
		'name'          => __( 'Footer Widgets', 'yumag' ),
		'id'            => 'footer-widgets',
		'description'   => 'Widgets below the content area of each page.',
		'before_widget' => '<aside id="%1$s" class="widget footer-widget %2$s">',
		'after_widget'  => '</aside>',
		'before_title'  => '<h2 class="widget-title">',
		'after_title'   => '</h2>',
	) );

}
add_action( 'widgets_init', 'yumag_widgets_init' );

/**
 * Enqueue scripts and styles.
 *
 * @global $wp_scripts
 * @global $wp_styles
 */
function yumag_scripts() {
	global $wp_scripts;
	global $wp_styles;

	$src = get_template_directory_uri() . '/js/';

	wp_enqueue_style( 'yumag-style', get_stylesheet_uri() );

	// Webfonts for IE8 (instead of the webfont-loader javascript).
	wp_enqueue_style( 'yumag-ie-fonts', get_stylesheet_directory_uri() . '/fonts-ie8.css', array(), '20150513' );
	$wp_styles->add_data( 'yumag-ie-fonts', 'conditional', 'lte IE 8' );

	// Print styles
	wp_enqueue_style( 'yumag-print', get_stylesheet_directory_uri() . '/print.css', array(), '20150514', 'print' );

	// Load IE polyfills/fixes (in conditional comments) first.
	wp_enqueue_script( 'yumag-html5shiv-js', $src . 'vendor/html5shiv.min.js', array(), '3.7.3-pre' );
	wp_enqueue_script( 'yumag-respond-js', $src . 'vendor/respond.min.js', array(), '1.4.2' );
	wp_enqueue_script( 'yumag-ie', $src . 'ie.js', array(), '20150513' );
	$wp_scripts->add_data( 'yumag-html5shiv-js', 'conditional', 'lte IE 8' );
	$wp_scripts->add_data( 'yumag-respond-js', 'conditional', 'lte IE 8' );
	$wp_scripts->add_data( 'yumag-ie', 'conditional', 'lte IE 9' );

	// Load non-essential webfonts.
	wp_enqueue_script( 'yumag-webfont-loader', $src . 'webfont-loader.js', array(), '20150223', true );
	wp_localize_script( 'yumag-webfont-loader', 'l10n', array(
		'templateDirectory' => get_template_directory_uri()
	) );

	wp_enqueue_script( 'yumag-navigation', $src . 'navigation.js', array(), '20120206', true );

	wp_enqueue_script( 'yumag-layout', $src . 'layout.js', array(), '20150323', true );

	wp_enqueue_script( 'yumag-skip-link-focus-fix', $src . 'skip-link-focus-fix.js', array(), '20130115', true );

	wp_enqueue_script( 'yumag-dropcap', $src . 'dropcap.js', array(), '20150225', true );

	if ( is_singular() && comments_open() && get_option( 'thread_comments' ) ) {
		wp_enqueue_script( 'comment-reply' );
	}

	// Register, but only enqueue on certain pages.
	if ( yumag_has_featured_posts() ) {
		wp_enqueue_script( 'ideal-image-slider', $src . 'ideal-image-slider.js', array(), '20150324', true );
	}

}
add_action( 'wp_enqueue_scripts', 'yumag_scripts' );

/**
 * Implement the Custom Header feature.
 */
//require get_template_directory() . '/inc/custom-header.php';

/**
 * Helper function to convert numbers to textual versions.
 */
require get_template_directory() . '/inc/numbers-to-words.php';

/**
 * Custom template tags for this theme.
 */
require get_template_directory() . '/inc/template-tags.php';

/**
 * Custom functions that act independently of the theme templates.
 */
require get_template_directory() . '/inc/extras.php';

/**
 * Admin area changes.
 */
require get_template_directory() . '/inc/admin.php';

/**
 * Customizer additions.
 */
require get_template_directory() . '/inc/customizer.php';

/**
 * Load Jetpack compatibility file.
 */
require get_template_directory() . '/inc/jetpack.php';
