<?php
/**
 * _s functions and definitions
 *
 * @link https://developer.wordpress.org/themes/basics/theme-functions/
 *
 * @package _s
 */
$theme = wp_get_theme();
define('THEME_VERSION', $theme->Version);

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

		// This theme uses wp_nav_menu() in one location.
		register_nav_menus( array(
			'menu-1' => esc_html__( 'Primary', '_s' ),
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

		// Set up the WordPress core custom background feature.
		add_theme_support( 'custom-background', apply_filters( '_s_custom_background_args', array(
			'default-color' => 'ffffff',
			'default-image' => '',
		) ) );

		// Add theme support for selective refresh for widgets.
		add_theme_support( 'customize-selective-refresh-widgets' );

		/**
		 * Add support for core custom logo.
		 *
		 * @link https://codex.wordpress.org/Theme_Logo
		 */
		add_theme_support( 'custom-logo', array(
			'height'      => 250,
			'width'       => 250,
			'flex-width'  => true,
			'flex-height' => true,
		) );
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
	// This variable is intended to be overruled from themes.
	// Open WPCS issue: {@link https://github.com/WordPress-Coding-Standards/WordPress-Coding-Standards/issues/1043}.
	// phpcs:ignore WordPress.NamingConventions.PrefixAllGlobals.NonPrefixedVariableFound
	$GLOBALS['content_width'] = apply_filters( '_s_content_width', 640 );
}
add_action( 'after_setup_theme', '_s_content_width', 0 );

/**
 * Register Custom Navigation Walker
 */
require_once('vendor/class-wp-bootstrap-navwalker.php');

function navwalker_setup(){
    register_nav_menus( array(
		'primary' => __( 'Primary Menu' ),
	) );
}
add_action('after_setup_theme', 'navwalker_setup');

/**
 * Register widget area.
 *
 * @link https://developer.wordpress.org/themes/functionality/sidebars/#registering-a-sidebar
 */
function _s_widgets_init() {
	register_sidebar( array(
		'name'          => esc_html__( 'Sidebar', '_s' ),
		'id'            => 'sidebar-1',
		'description'   => esc_html__( 'Add widgets here.', '_s' ),
		'before_widget' => '<section id="%1$s" class="widget %2$s">',
		'after_widget'  => '</section>',
		'before_title'  => '<h2 class="widget-title">',
		'after_title'   => '</h2>',
	) );
}
add_action( 'widgets_init', '_s_widgets_init' );

/**
 * Enqueue scripts and styles.
 */
function _s_scripts() {
	wp_enqueue_style('bootstrap4', 'https://stackpath.bootstrapcdn.com/bootstrap/4.1.1/css/bootstrap.min.css');
	wp_enqueue_style('fontawesome', 'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.13.0/css/all.min.css');
	wp_enqueue_style('main_css', '/wp-content/themes/n-abler/dist/style.css', array(), THEME_VERSION);
	wp_enqueue_script('main_js', '/wp-content/themes/n-abler/dist/main.bundle.js', array(), THEME_VERSION, true);
}

function page_scripts() {
	global $wp;
	$current_url =  home_url($wp->request);
	$pages = get_pages();

	// add each page's JS and CSS files if they exist
	foreach ($pages as $page) {
		$slug = $page->post_name;

		if ($slug == 'home') {
			if (file_exists("/wp-content/themes/n-abler/dist/home.bundle.js")) {
				wp_enqueue_script("home_js", "/wp-content/themes/n-abler/dist/home.bundle.js", array(), THEME_VERSION, true);
			}

			if (file_exists("/wp-content/themes/n-abler/dist/pages/home.css")) {
				wp_enqueue_style("home_css", "/wp-content/themes/n-abler/dist/pages/home.css", array(), THEME_VERSION);
			}
		}

		if (is_page($slug)) {
			// page by title
			if (file_exists("/wp-content/themes/n-abler/dist/{$slug}.bundle.js")) {
				wp_enqueue_script("{$slug}_js", "/wp-content/themes/n-abler/dist/{$slug}.bundle.js", array(), THEME_VERSION, true);
			}

			if (file_exists("/wp-content/themes/n-abler/dist/pages/{$slug}.css")) {
				wp_enqueue_style("{$slug}_css", "/wp-content/themes/n-abler/dist/pages/{$slug}.css", array(), THEME_VERSION);
			}
		} else if (is_search()) {
			if (file_exists("/wp-content/themes/n-abler/dist/search.bundle.js")) {
				wp_enqueue_script("search_js", "/wp-content/themes/n-abler/dist/search.bundle.js", array(), THEME_VERSION, true);
			}

			if (file_exists("/wp-content/themes/n-abler/dist/pages/search.css")) {
				wp_enqueue_style("search_css", "/wp-content/themes/n-abler/dist/pages/search.css", array(), THEME_VERSION);
			}
		}
	}
}

add_action( 'wp_enqueue_scripts', '_s_scripts' );
add_action('wp_enqueue_scripts', 'page_scripts');

/**
 * Search only for posts
 */
function search_only_for_posts($query) {
	if ($query->is_search) {
		$query->set('post_type', 'post');
	}
	return $query;
}
add_filter('pre_get_posts','search_only_for_posts');
