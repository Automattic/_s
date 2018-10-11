<?php
/**
 * '_svbk'functions and definitions
 *
 * @link https://developer.wordpress.org/themes/basics/theme-functions/
 *
 * @package _svbk
 */

use \Svbk\WP\Helpers;

if ( file_exists( __DIR__ . '/vendor/autoload.php' ) ) {
	require_once __DIR__ . '/vendor/autoload.php';
}

Helpers\Theme\Setup::run();
// Helpers\Compliance\Iubenda::setConfig( Helpers\Theme\Config::get( 'iubenda' ) );

if( env('SENDINBLUE_APIKEY') ) {
	SendinBlue\Client\Configuration::getDefaultConfiguration()->setApiKey( 'api-key', env('SENDINBLUE_APIKEY') );
}

add_action( 'after_setup_theme', '_svbk_setup' );

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
	add_theme_support( 'woocommerce' );
	add_theme_support( 'align-wide' );

	add_image_size( 'header', 2560, 2000 );
	add_image_size( 'content-full', 1320, 9999 );
	add_image_size( 'content-half', 768,  9999 );
	add_image_size( 'content-third', 440, 9999 );

	set_post_thumbnail_size( 768, 560, true );

	/*
	 * Enable support for Post Thumbnails on posts and pages.
	 *
	 * @link https://developer.wordpress.org/themes/functionality/featured-images-post-thumbnails/
	 */
	add_theme_support( 'post-thumbnails' );

	// This theme uses wp_nav_menu() in one location.
	register_nav_menus(
		array(
			'menu-1' => esc_html__( 'Primary', '_svbk' ),
			'menu-404' => esc_html__( 'Not Found (404) Page', '_svbk' ),
			'legal-menu' => esc_html__( 'Legal Menu', 'tatap' ),
		)
	);

	/*
	 * Switch default core markup for search form, comment form, and comments
	 * to output valid HTML5.
	 */
	add_theme_support(
		'html5', array(
			'search-form',
			'comment-form',
			'comment-list',
			'gallery',
			'caption',
		)
	);

	/*
	 * Enable support for custom logo.
	 */
	add_theme_support(
		'custom-logo', array(
			'height'      => 400,
			'width'       => 100,
			'flex-width'  => true,
			'flex-height' => true,
		)
	);

	// Set up the WordPress core custom background feature.
	add_theme_support(
		'custom-background',
		apply_filters(
			'_svbk_custom_background_args',
			array(
				'default-color' => 'ffffff',
				'default-image' => '',
			)
		)
	);

	// Load Editor Style CSS.
	add_editor_style();

	// Add theme support for selective refresh for widgets.
	add_theme_support( 'customize-selective-refresh-widgets' );

	// Load AMP overrides.
	Helpers\Theme\AMP::init();
}
endif;

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
	register_sidebar(
		 array(
			 'name'          => esc_html__( 'Sidebar','_svbk' ),
			 'id'            => 'sidebar-1',
			 'description'   => esc_html__( 'Add widgets here.','_svbk' ),
			 'before_widget' => '<section id="%1$s" class="widget %2$s">',
			 'after_widget'  => '</section>',
			 'before_title'  => '<h2 class="widget-title">',
			 'after_title'   => '</h2>',
		 )
		);
}
add_action( 'widgets_init', '_svbk_widgets_init' );

/**
 * Enqueue scripts and styles.
 */
function _svbk_scripts() {
	wp_enqueue_style( '_svbk-style', get_stylesheet_uri() );

	wp_enqueue_script( '_svbk-navigation', get_template_directory_uri() . '/js/navigation.js', array(), '20151215', true );
	wp_enqueue_script( '_svbk-skip-link-focus-fix', get_template_directory_uri() . '/js/skip-link-focus-fix.js', array(), '20151215', true );
	wp_enqueue_script( '_svbk-theme', get_template_directory_uri() . '/js/theme.js', array( 'jquery' ), '20170120', true );
	wp_enqueue_script( '_svbk-maps', get_template_directory_uri() . '/js/maps.js', array( 'jquery' ), '20170121', true );
	wp_enqueue_script( '_svbk-filter', get_template_directory_uri() . '/js/filter.js', array( 'jquery', 'jquery-ui-widget' ), '20170530', true );

	if ( get_theme_mod( 'sticky_header' ) ) {
		wp_enqueue_script( 'waypoints-sticky' );
		wp_add_inline_script( 'waypoints-sticky', 'var stickyHeaderContent = document.getElementById(\'site-header-content\'); if (stickyHeaderContent != null) { var sticky = new Waypoint.Sticky({ element: stickyHeaderContent }) }' );
	}

	if ( is_singular() && comments_open() && get_option( 'thread_comments' ) ) {
		wp_enqueue_script( 'comment-reply' );
	}
}
add_action( 'wp_enqueue_scripts', '_svbk_scripts' );

/**
 * Customize the max srcset image width to 2560px
 *
 * @param int $size The previous max image size.
 *
 * @return int
 */
function _svbk_max_srcset_image_width( $size ) {
	return 2560;
}
add_filter( 'max_srcset_image_width', '_svbk_max_srcset_image_width' );

/**
 * Customize the image sizes attributes based on image size
 *
 * @param array $attrs The existing image attributes.
 * @param array $attachment The attachment id.
 * @param array $size The requested size.
 *
 * @return array
 */
function _svbk_post_thumbnail_sizes_attr( $attrs, $attachment, $size ) {

	switch ( $size ) {
		case 'post-thumbnail':
			$attrs['sizes'] = '(max-width: 768px) 100vw, (max-width: 1024px) 50vw, (max-width: 1320px) 35vw, 600px';
			break;
		case 'thumbnail':
			$attrs['sizes'] = '(max-width: 710px) 100vw, (max-width: 910px) 50vw, (max-width: 1320px) 40vw, 650px';
			break;
		case 'header':
			$attrs['sizes'] = '100vw';
			break;
		case 'content-full':
			$attrs['sizes'] = ' (max-width: 1320px) 100vw,  1320px';
			break;
		case 'content-half':
			$attrs['sizes'] = ' (max-width: 1024px) 100vw, (max-width: 1320px) 50vw, 660px';
			break;
		case 'content-third':
				$attrs['sizes'] = is_home() ? '(max-width: 1024px) 100vw, (max-width: 1320px) 50vw, 660px' : ' (max-width: 480px) 100vw, (max-width: 768px) 50vw, 440px';
			break;
	}

	return $attrs;
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
 * Additional features to allow styling of the templates.
 */
require get_template_directory() . '/inc/template-functions.php';

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

/**
 * Load Advanced Custom Fields Definitions
 */
require get_template_directory() . '/inc/acf.php';

/**
 * Load Cutoms Post Types Definitions
 */
require get_template_directory() . '/inc/post-types.php';
