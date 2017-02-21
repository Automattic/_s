<?php
/**
 *'_svbk'functions and definitions
 *
 * @link https://developer.wordpress.org/themes/basics/theme-functions/
 *
 * @package _svbk
 */

use \Svbk\WP\Helpers\Theme as ThemeHelper;
use \Svbk\WP\Helpers\CdnScripts;
use \Svbk\WP\Helpers\AMP;

if(file_exists(__DIR__.'/vendor/autoload.php')){
	require_once __DIR__.'/vendor/autoload.php';
}

if(class_exists('ThemeHelper')){
	ThemeHelper::init()->all();
}

if ( ! function_exists( '_svbk_setup' ) ) :
/**
 * Sets up theme defaults and registers support for various WordPress features.
 *
 * Note that this function is hooked into the after_setup_theme hook, which
 * runs before the init hook. The init hook is too late for some features, such
 * as indicating support for post thumbnails.
 */
function _svbk_setup() {
	/*
	 * Make theme available for translation.
	 * Translations can be filed in the /languages/ directory.
	 * If you're building a theme based on _svbk, use a find and replace
	 * to change'_svbk'to the name of your theme in all the template files.
	 */
	load_theme_textdomain( '_svbk', get_template_directory() . '/languages' );

	// Add default posts and comments RSS feed links to head.
	add_theme_support( 'automatic-feed-links' );

	/*
	 * Let WordPress manage the document title.
	 * By adding theme support, we declare that this theme does not use a
	 * hard-coded <title> tag in the document head, and expect WordPress to
	 * provide it for us.
	 */
	add_theme_support( 'title-tag' );

	/*
	 * Enable support for site logo.
	 */
	add_image_size( '_svbk-logo', 500, 500 );
	add_theme_support( 'site-logo', array( 'size' => '_svbk-logo' ) );

	/*
	 * Enable support for Post Thumbnails on posts and pages.
	 *
	 * @link https://developer.wordpress.org/themes/functionality/featured-images-post-thumbnails/
	 */
	add_theme_support( 'post-thumbnails' );

	// This theme uses wp_nav_menu() in one location.
	register_nav_menus( array(
		'menu-1' => esc_html__( 'Primary', '_svbk' ),
		'menu-404' => esc_html__( 'Not Found (404) Page', '_svbk' ),
	) );

	/*
	 * Switch default core markup for search form, comment form, and comments
	 * to output valid HTML5.
	 */
	add_theme_support( 'html5', array(
		'search-form',
		'comment-form',
		'comment-list',
		'gallery',
		'caption',
	) );

	/*
	 * Enable support for custom logo.
	 */
	add_theme_support( 'custom-logo', array(
		'height'      => 250,
		'width'       => 250,
		'flex-width'  => true,
		'flex-height' => true,
	) );

	// Set up the WordPress core custom background feature.
	add_theme_support( 'custom-background', apply_filters( '_svbk_custom_background_args', array(
		'default-color' => 'ffffff',
		'default-image' => '',
	) ) );

	add_editor_style();

	// Add theme support for selective refresh for widgets.
	add_theme_support( 'customize-selective-refresh-widgets' );

	if(class_exists('AMP')){
		AMP::init();
	}
}
endif;
add_action( 'after_setup_theme', '_svbk_setup' );

/**
 * Set the content width in pixels, based on the theme's design and stylesheet.
 *
 * Priority 0 to make it available to lower priority callbacks.
 *
 * @global int $content_width
 */
function _svbk_content_width() {
	$GLOBALS['content_width'] = apply_filters( '_svbk_content_width', 640 );
}
add_action( 'after_setup_theme', '_svbk_content_width', 0 );

/**
 * Register widget area.
 *
 * @link https://developer.wordpress.org/themes/functionality/sidebars/#registering-a-sidebar
 */
function _svbk_widgets_init() {
	register_sidebar( array(
		'name'          => esc_html__( 'Sidebar','_svbk'),
		'id'            => 'sidebar-1',
		'description'   => esc_html__( 'Add widgets here.','_svbk'),
		'before_widget' => '<section id="%1$s" class="widget %2$s">',
		'after_widget'  => '</section>',
		'before_title'  => '<h2 class="widget-title">',
		'after_title'   => '</h2>',
	) );
}
add_action( 'widgets_init', '_svbk_widgets_init' );

/**
 * Enqueue scripts and styles.
 */
function _svbk_scripts() {
	wp_enqueue_style( '_svbk-style', get_stylesheet_uri() );

	wp_enqueue_script( '_svbk-navigation', get_template_directory_uri() . '/js/navigation.js', array(), '20151215', true );
	wp_enqueue_script( '_svbk-skip-link-focus-fix', get_template_directory_uri() . '/js/skip-link-focus-fix.js', array(), '20151215', true );
	wp_enqueue_script( '_svbk-theme', get_template_directory_uri() . '/js/theme.js', array(), '20170120', true );

	if(get_theme_mod('sticky_header')){
		wp_enqueue_script( 'waypoints' );
		wp_add_inline_script( 'waypoints', 'var sticky = new Waypoint.Sticky({ element: document.getElementById(\'site-header-content\') })' );
	}

	if ( is_singular() && comments_open() && get_option( 'thread_comments' ) ) {
		wp_enqueue_script( 'comment-reply' );
	}
}
add_action( 'wp_enqueue_scripts', '_svbk_scripts' );


function _svbk_max_srcset_image_width($size){
	return 2900;
}
add_filter( 'max_srcset_image_width', '_svbk_max_srcset_image_width');

function _svbk_post_thumbnail_sizes_attr( $attr, $attachment, $size ) {

	if ( ('post-thumbnail' === $size) || ('thumbnail' === $size) ) {
		$attr['sizes'] = '(max-width: 710px) 100vw, (max-width: 910px) 50vw, (max-width: 1320px) 40vw, 650px';
	} else if( 'page-header' === $size) {
		$attr['sizes'] = '(max-width: 910px) 100vw, 90vw';
	} else if( 'content-full' === $size) {
		$attr['sizes'] = ' (max-width: 1320px) 100vw,  1320px';
	}

	return $attr;
}
add_filter( 'wp_get_attachment_image_attributes', '_svbk_post_thumbnail_sizes_attr', 10 , 3 );

/**
 * Implement the Custom Header feature.
 */
require get_template_directory() . '/inc/custom-header.php';

/**
 * Custom template tags for this theme.
 */
require get_template_directory() . '/inc/template-tags.php';

/**
 * Custom functions that act independently of the theme templates.
 */
require get_template_directory() . '/inc/extras.php';

/**
 * Shortcode UI
 */
require get_template_directory() . '/inc/shortcode-ui.php';

/**
 * Editor Custom Styles
 */
require get_template_directory() . '/inc/editor.php';

/**
 * Customizer additions.
 */
require get_template_directory() . '/inc/customizer.php';

/**
 * Load Jetpack compatibility file.
 */
require get_template_directory() . '/inc/jetpack.php';
