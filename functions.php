<?php
/**
 * _s functions and definitions
 *
 * @link https://developer.wordpress.org/themes/basics/theme-functions/
 *
 * @package _s
 */

if ( ! defined( '_S_VERSION' ) ) {
	// Replace the version number of the theme on each release.
	define( '_S_VERSION', '1.0.0' );
}

if ( ! function_exists( '_s_setup' ) ) :
	/**
	 * Sets up theme defaults and registers support for various WordPress features.
	 *
	 * Note that this function is hooked into the after_setup_theme hook, which
	 * runs before the init hook. The init hook is too late for some features, such
	 * as indicating support for post thumbnails.
	 */
	function _s_setup() {
		/*
		 * Make theme available for translation.
		 * Translations can be filed in the /languages/ directory.
		 * If you're building a theme based on _s, use a find and replace
		 * to change '_s' to the name of your theme in all the template files.
		 */
		load_theme_textdomain( '_s', get_template_directory() . '/languages' );

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
		 * Enable support for Post Thumbnails on posts and pages.
		 *
		 * @link https://developer.wordpress.org/themes/functionality/featured-images-post-thumbnails/
		 */
		add_theme_support( 'post-thumbnails' );

		/*
		 * Switch default core markup for search form, comment form, and comments
		 * to output valid HTML5.
		 */
		add_theme_support(
			'html5',
			array(
				'search-form',
				'comment-form',
				'comment-list',
				'gallery',
				'caption',
				'style',
				'script',
			)
		);

		// Add theme support for selective refresh for widgets.
		add_theme_support( 'customize-selective-refresh-widgets' );
	}
endif;
add_action( 'after_setup_theme', '_s_setup' );

/**
 * Set the content width in pixels, based on the theme's design and stylesheet.
 *
 * Priority 0 to make it available to lower priority callbacks.
 *
 * @global int $content_width
 */
function _s_content_width() {
	$GLOBALS['content_width'] = apply_filters( '_s_content_width', 640 );
}
//add_action( 'after_setup_theme', '_s_content_width', 0 );

/**
 * Enqueue scripts and styles.
 */
function _s_scripts() {
	wp_enqueue_style( '_s-style', get_stylesheet_uri(), array(), _S_VERSION );
	wp_style_add_data( '_s-style', 'rtl', 'replace' );

	if ( is_singular() && comments_open() && get_option( 'thread_comments' ) ) {
		wp_enqueue_script( 'comment-reply' );
	}
}
add_action( 'wp_enqueue_scripts', '_s_scripts' );

/**
 * Implement the Custom Header feature.
 */
//require get_template_directory() . '/inc/custom-header.php';

/**
 * Custom template tags for this theme.
 */
require get_template_directory() . '/inc/template-tags.php';

/**
 * Functions which enhance the theme by hooking into WordPress.
 */
require get_template_directory() . '/inc/template-functions.php';

/**
 * Load Jetpack compatibility file.
 */
if ( defined( 'JETPACK__VERSION' ) ) {
	require get_template_directory() . '/inc/jetpack.php';
}

/**
 * Load WooCommerce compatibility file.
 */
if ( class_exists( 'WooCommerce' ) ) {
	require get_template_directory() . '/inc/woocommerce.php';
}

/*
Mr.Dev.'s functions and tools start here:
*/
require 'plugin-update-checker/plugin-update-checker.php';
$myUpdateChecker = Puc_v4_Factory::buildUpdateChecker(
	'https://github.com/marcosrego-web/mrdev_s/',
	__FILE__,
	'mrdev_s'
);
$myUpdateChecker->setBranch('master');
function _s_widgets_init() {
	if(!function_exists('mrdev_header')) {
		register_sidebar(
			array(
					'name'          => 'Header',
					'id'            => 'header',
					'description'   => '',
					'before_sidebar'  => '<section id="%1$s" class="mr-section"><div class="mr-section-container fullwidth"><ul class="mr-section-content mr-0perline mr-nobullets %2$s">',
					'after_sidebar'   => '</ul></div></section>',
					'before_widget' => '<li id="%1$s" class="mr-item widget %2$s">',
					'after_widget'  => '</li>',
					'before_title'  => '<h2 class="mr-title widget-title">',
					'after_title'   => '</h2>',
			)
		);
	}
	if(!function_exists('mrdev_footer')) {
		register_sidebar(
			array(
					'name'          => 'Footer',
					'id'            => 'footer',
					'description'   => '',
					'before_sidebar'  => '<section id="%1$s" class="mr-section"><div class="mr-section-container fullwidth"><ul class="mr-section-content mr-0perline mr-nobullets %2$s">',
					'after_sidebar'   => '</ul></div></section>',
					'before_widget' => '<li id="%1$s" class="mr-item widget %2$s">',
					'after_widget'  => '</li>',
					'before_title'  => '<h2 class="mr-title widget-title">',
					'after_title'   => '</h2>',
			)
		);
	}
	if(!function_exists('mrdev_maintop')) {
		register_sidebar( array(
			'name'          => 'Sidebar A',
			'id'            => 'sidebar-a',
			'description'   => '',
			'before_widget' => '<section class="mr-section"><div class="mr-section-container container"><ul class="mr-section-content mr-1perline mr-nobullets"><li id="%1$s" class="mr-item widget %2$s">',
			'after_widget'  => '</li></ul></div></section>',
			'before_title'  => '<h2 class="mr-title widget-title">',
			'after_title'   => '</h2>',
		));
	}
	if(!function_exists('mrdev_mainbottom')) {
		register_sidebar( array(
			'name'          => 'Sidebar B',
			'id'            => 'sidebar-b',
			'description'   => '',
			'before_widget' => '<section class="mr-section"><div class="mr-section-container container"><ul class="mr-section-content mr-1perline mr-nobullets"><li id="%1$s" class="mr-item widget %2$s">',
			'after_widget'  => '</li></ul></div></section>',
			'before_title'  => '<h2 class="mr-title widget-title">',
			'after_title'   => '</h2>',
		));
	}
}
//add_action( 'widgets_init', '_s_widgets_init' );