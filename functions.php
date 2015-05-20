<?php
/**
 * _s2 functions and definitions
 *
 * @package _s2
 */


if ( ! function_exists( '_s2_setup' ) ) :
/**
 * Sets up theme defaults and registers support for various WordPress features.
 */
function _s2_setup() {

	/*
	 * Make theme available for translation.
	 * Translations can be filed in the /languages/ directory.
	 */
	load_theme_textdomain( '_s2', get_template_directory() . '/languages' );

	// Add default posts and comments RSS feed links to head.
	add_theme_support( 'automatic-feed-links' );

	/*
	 * Enable support for Post Thumbnails on posts and pages.
	 *
	 * @link http://codex.wordpress.org/Function_Reference/add_theme_support#Post_Thumbnails
	 */
	add_theme_support( 'post-thumbnails' );

	// This theme uses wp_nav_menu() in one location.
	register_nav_menus( array(
		'primary' => __( 'Primary Menu', '_s2' ),
	) );

	/*
	 * Switch default core markup for search form, comment form, and comments
	 * to output valid HTML5.
	 */
	add_theme_support( 'html5', array(
		'search-form', 'comment-form', 'comment-list', 'gallery', 'caption',
	) );

	/*
	 * Enable support for Post Formats.
	 * See http://codex.wordpress.org/Post_Formats
	 */
	add_theme_support( 'post-formats', array(
		'aside', 'image', 'video', 'quote', 'link',
	) );

	// Setup the WordPress core custom background feature.
	add_theme_support( 'custom-background', apply_filters( '_s2_custom_background_args', array(
		'default-color' => 'ffffff',
		'default-image' => '',
	) ) );

	// adds theme support for title tag
	add_theme_support( 'title-tag' );

	// WordPress TinyMCE editor Stylesheet
	add_editor_style( get_template_directory_uri() . '/assets/css/editor-style.css' );
}
endif; // _s2_setup
add_action( 'after_setup_theme', '_s2_setup' );

/**
 * Set the content width in pixels, based on the theme's design and stylesheet.
 *
 * Priority 0 to make it available to lower priority callbacks.
 *
 * @global int $content_width
 */
function _s2_content_width() {
	$GLOBALS['content_width'] = apply_filters( '_s2_content_width', 640 );
}
add_action( 'after_setup_theme', '_s2_content_width', 0 );


/**
 * Register widget area.
 *
 * @link http://codex.wordpress.org/Function_Reference/register_sidebar
 */
function _s2_widgets_init() {
	register_sidebar( array(
		'name'          => __( 'Sidebar', '_s2' ),
		'id'            => 'sidebar-1',
		'description'   => '',
		'before_widget' => '<aside id="%1$s" class="widget %2$s">',
		'after_widget'  => '</aside>',
		'before_title'  => '<h1 class="widget-title">',
		'after_title'   => '</h1>',
	) );
}
add_action( 'widgets_init', '_s2_widgets_init' );

/**
 * Enqueue scripts and styles.
 */
function _s2_scripts() {
	wp_enqueue_style( '_s2-style', get_stylesheet_uri() );

	wp_enqueue_script( '_s2-scripts', get_template_directory_uri() . '/assets/js/main.js', array(), '20120206', true );

	// Load comments script for single pages only
	if ( is_single() && comments_open() && get_option( 'thread_comments' ) ) {
		wp_enqueue_script( 'comment-reply' );
	}
}
add_action( 'wp_enqueue_scripts', '_s2_scripts' );

add_action( 'wp_enqueue_scripts', 'prefix_add_ie8_style_sheet', 200 );


/**
 * Enqueue a IE-specific style sheet.
 *
 * Add a style sheet for everyone, then mark it as conditional to IE8 or below.
 *
 * @author Gary Jones
 * @link   http://code.garyjones.co.uk/enqueued-style-sheet-extras/
 */
function prefix_add_ie8_style_sheet() {
	global $wp_styles;	
	wp_enqueue_style( 'ie8-styles', get_stylesheet_directory_uri() . '/assets/css/ie8-style.css', array(), '1.3' );
	$wp_styles->add_data( 'ie8-styles', 'conditional', 'lte IE 8' );
}

/**
 * Implement the Custom Header feature.
 */
//require get_template_directory() . '/inc/custom-header.php';

/**
 * Custom template tags for this theme.
 */
require get_template_directory() . '/inc/template-tags.php';

/**
 * Custom functions that act independently of the theme templates.
 */
require get_template_directory() . '/inc/extras.php';

/**
 * Customizer additions.
 */
require get_template_directory() . '/inc/customizer.php';

/**
 * Load Jetpack compatibility file.
 */
require get_template_directory() . '/inc/jetpack.php';

/**
 * Get the custom nav walker for the primary menu
 */
require get_template_directory() . '/inc/class-drop-walker-nav.php';
