<?php
/**
 * '_svbk'functions and definitions
 *
 * @link https://developer.wordpress.org/themes/basics/theme-functions/
 *
 * @package _svbk
 */

use Svbk\WP\Helpers;
use Svbk\WP\Helpers\Assets\Asset;
use Svbk\WP\Helpers\Assets\Style;
use Svbk\WP\Helpers\Assets\Script;
use Svbk\WP\Helpers\CDN\JsDelivr;
use Svbk\WP\Helpers\Menu;
use Svbk\WP\Helpers\Config;

use Svbk\WP\Widgets;
use Svbk\WP\Theme\_svbk;

if ( file_exists( __DIR__ . '/vendor/autoload.php' ) ) {
	require_once __DIR__ . '/vendor/autoload.php';
}

Config::load( get_theme_file_path( '/config.json' ), '_svbk' );

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

		// This theme uses wp_nav_menu() in one location.
		register_nav_menus(
			array(
				'primary'           => esc_html__( 'Primary', '_svbk' ),
				'language'          => esc_html__( 'Languages', '_svbk' ),
				'menu-404'          => esc_html__( 'Not Found (404) Page', '_svbk' ),
				'legal-menu'        => esc_html__( 'Legal Menu', '_svbk' ),
				'account-primary'   => esc_html__( 'Account Pages Primary Menu', '_svbk' ),
				'account-secondary' => esc_html__( 'Account Pages Secondary Menu', '_svbk' ),
				'account-profile'   => esc_html__( 'Profile Menu', '_svbk' ),
			)
		);

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
			)
		);

		/**
		 * Add support for core custom logo.
		 *
		 * @link https://codex.wordpress.org/Theme_Logo
		 */
		add_theme_support(
			'custom-logo',
			array(
				'height'      => 100,
				'width'       => 400,
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

		// Add support for Featured Images
		add_theme_support( 'post-thumbnails' );

		// Add theme support for selective refresh for widgets.
		add_theme_support( 'customize-selective-refresh-widgets' );

		// Add support for Block Styles.
		add_theme_support( 'wp-block-styles' );

		// Add support for full and wide align images.
		add_theme_support( 'align-wide' );

		// Enqueue editor styles.
		add_editor_style( 'style-editor.css' );

		// Add custom editor font sizes.
		$font_sizes = Config::get( 'font_sizes', '_svbk' );

		if ( $font_sizes ) {
			add_theme_support(
				'editor-font-sizes',
				_svbk_editor_support_from_config( $font_sizes )
			);
		}

		// Editor color palette.
		$palette_colors = Config::get( 'color_palette', '_svbk' );

		if ( $palette_colors ) {

			add_theme_support(
				'editor-color-palette',
				_svbk_editor_support_from_config( $palette_colors )
			);
		}

		// Add support for responsive embedded content.
		add_theme_support( 'responsive-embeds' );

		// Add support for style management
		add_theme_support(
			'styles-management',
			array(
				'default-async' => true,
			)
		);

		// Add support for script management
		add_theme_support(
			'scripts-management',
			array(
				'default-defer' => true,
			)
		);

		// Add support SVBK hubspot forms
		add_theme_support(
			'hubspot-forms',
			array(
				'style' => get_theme_file_uri( 'dist/css/form-standalone.css' ),
			)
		);

		// Add WooCommerce Support
		add_theme_support( 'woocommerce' );

		// Add Sensei Support
		add_theme_support( 'sensei' );

		// Load image sizes from config file
		$page_max_width = Config::get( 'page_max_width', '_svbk' );
		$content_width  = Config::get( 'content_width', '_svbk' );
		$page_width 	= Config::get( 'page_width', '_svbk' );
		$image_height_ratio = 1 / ( 4 / 3 );

		$sidebar_width_ratio = Config::get( 'sidebar_width_ratio', '_svbk' ) ?: 0.3;
		$sidebar_width = $page_width * $sidebar_width_ratio;
		$content_with_sidebar_width = $page_width - $sidebar_width;

		add_image_size( 'main-sidebar', $sidebar_width, 9999 );
		add_image_size( 'wide', $page_max_width, 9999 );

		set_post_thumbnail_size( ceil($content_width / 2), ceil($content_width / 2 * $image_height_ratio), true );

		// Define and register starter content to set up default values.
		$starter_content = array(
			'posts'     => array(
				'home'             => array(
					'post_type'    => 'page',
					'post_title'   => _x( 'Home', 'Theme starter content', '_svbk' ),
				),
				'about'            => array(
					'post_type'    => 'page',
					'post_title'   => _x( 'About', 'Theme starter content', '_svbk' ),
				),
				'contact'          => array(
					'post_type'    => 'page',
					'post_title'   => _x( 'Contact', 'Theme starter content', '_svbk' ),
				),
				'blog'             => array(
					'post_type'  => 'page',
					'post_title' => _x( 'Blog', 'Theme starter content', '_svbk' ),
				),				
			),			

			'options' => array(
				// Default to a static front page and assign the front and posts pages.
				'show_on_front'  => 'page',
				'page_on_front'  => '{{home}}',
				'page_for_posts' => '{{blog}}',

				// Set default image sizes to values that match the theme widths.
				'thumbnail_size_w' => ceil($content_width / 3),
				'thumbnail_size_h' => ceil($content_width / 3 * $image_height_ratio),
				'medium_size_w' => ceil($content_width / 2),
				'medium_size_h' => ceil(($content_width / 2) * $image_height_ratio),
				'medium_large_size_w' => $content_with_sidebar_width,
				'medium_large_size_h' => $content_with_sidebar_width * $image_height_ratio,
				'large_size_w' => $content_width,
				'large_size_h' => ceil($content_width * $image_height_ratio)
			),

			// Set up nav menus for each of the two areas registered in the theme.
			'nav_menus'   => array(
				// Assign a menu to the "top" location.
				'primary' => array(
					'name'  => __( 'Top Menu', '_svbk' ),
					'items' => array(
						'page_about'     => array(
							'type'      => 'post_type',
							'object'    => 'page',
							'object_id' => '{{about}}',
						),
						'page_blog'       => array(
							'type'      => 'post_type',
							'object'    => 'page',
							'object_id' => '{{blog}}',
						),
						'page_news'       => array(
							'type'      => 'post_type',
							'object'    => 'page',
							'object_id' => '{{news}}',
						),
						'page_contact'    => array(
							'type'      => 'post_type',
							'object'    => 'page',
							'object_id' => '{{contact}}',
						),
					),
				),
			),
		);

		add_theme_support( 'starter-content', $starter_content );

		// Load AMP overrides.
		Helpers\Theme\AMP::init();

		// Load Google Maps
		if ( Config::exists( 'googlemaps' ) ) {
			(new Helpers\Maps\GoogleMaps( Config::get( array(), 'googlemaps' ) ) )->setDefault();
		}

		// Load Iubenda
		if ( Config::exists( 'iubenda' ) ) {
			( new Helpers\Compliance\Iubenda( Helpers\Config::get( array(), 'iubenda' ) ) )->setDefault();
		}

		// Load Testimanial CPT
		_svbk\Feedback::register( 'testimonial', [ 'name' => __( 'Testimonials', '_svbk' ) ] );
	}
endif;


/**
 * Allow <picture> tags in post content
 * 
 * @param array $tags An array of tags and allowed attributes
 *  {
 *      "tagname" : {
 *          "param1":true,
 *          "param2":false
 *      },
 *  ...
 *  }** 
 * @param string $context The context in which these tags are allowed
 */
function _svbk_allow_picture_tag( $tags, $context ){
	
	if ( 'post' !== $context ){
		return $tags;
	}

	$tags['picture'] = array(
		'class' => true,
		'id' => true,
		'title' => true,
	);

	$tags['source'] = array(
		'src' => true,
		'srcset' => true,
		'sizes' => true,
		'type' => true,
		'media' => true,
	);

	return $tags;
}
add_filter( 'wp_kses_allowed_html', '_svbk_allow_picture_tag', 10, 2 );

/**
 * Converts the config array to be used with add_theme_support options for
 * blocks editor parameters
 *
 * @link https://wordpress.org/gutenberg/handbook/designers-developers/developers/themes/theme-support/
 *
 * @param array $options The associative array to convert with format:
 *  {
 *      "slug1" : {
 *          "param1":"Param 1",
 *          "param2":"Param 2"
 *      },
 *  ...
 *  }*
 * @return array The converted format
 *  [
 *      {
 *          "param1":"Param 1",
 *          "param2":"Param 2"
 *          "slug": "slug1",
 *      },
 *  ...
 *  ]
 */
function _svbk_editor_support_from_config( $options ) {

	$supports = array();

	foreach ( $options as $slug => $option ) {
		$supports[] = array_merge( array( 'slug' => $slug ), $option );
	}

	return $supports;
}

/**
 * Register widget area.
 *
 * @link https://developer.wordpress.org/themes/functionality/sidebars/#registering-a-sidebar
 */
function _svbk_widgets_init() {
	register_sidebar(
		array(
			'name'          => esc_html__( 'Sidebar', '_svbk' ),
			'id'            => 'sidebar-1',
			'description'   => esc_html__( 'Add widgets here.', '_svbk' ),
			'before_widget' => '<section id="%1$s" class="widget %2$s">',
			'after_widget'  => '</section>',
			'before_title'  => '<h2 class="widget-title">',
			'after_title'   => '</h2>',
		)
	);
	
	register_sidebar(
		array(
			'name'          => esc_html__( 'Footer', '_svbk' ),
			'id'            => 'footer',
			'description'   => esc_html__( 'Widgets in here goes into footer', '_svbk' ),
			'before_widget' => '<div id="%1$s" class="widget %2$s">',
			'after_widget'  => '</div>',
			'before_title'  => '<h2 class="widget-title">',
			'after_title'   => '</h2>',
		)
	);	
}
add_action( 'widgets_init', '_svbk_widgets_init' );

/**
 * Set the content width in pixels, based on the theme's design and stylesheet.
 *
 * Priority 0 to make it available to lower priority callbacks.
 *
 * @global int $content_width
 */
function _svbk_set_content_width() {
	// This variable is intended to be overruled from themes.
	// Open WPCS issue: {@link https://github.com/WordPress-Coding-Standards/WordPress-Coding-Standards/issues/1043}.
	// phpcs:ignore WordPress.NamingConventions.PrefixAllGlobals.NonPrefixedVariableFound
	$GLOBALS['content_width'] = apply_filters( '_svbk_content_width', Config::get( 'page_max_width', '_svbk' ) );
}
add_action( 'after_setup_theme', '_svbk_set_content_width', 0 );

/**
 * Gets critical CSS from files and prints it into page <head>
 */
function _svbk_print_critical_css(){

	$main_critical_file = get_theme_file_path( '/dist/css/critical.css' );
	$critical_css_path = apply_filters( '_svbk_critical_css_file', $main_critical_file );

	if ( !file_exists($critical_css_path) ) {
		$critical_css_path = $main_critical_file;
	} 

	if ( !file_exists($critical_css_path) ) {
		return;
	} 
	
	$code = apply_filters( '_svbk_critical_css', file_get_contents( $critical_css_path ) );
	echo '<style id="critical-css">'. $code .'</style>';
	
}

add_action('wp_head', '_svbk_print_critical_css', 5);

/**
 * Enqueue scripts and styles.
 */

function _svbk_scripts() {
	
	Script::register( 'waypoints', 'lib/jquery.waypoints.min.js', [ 'version' => '4.0.1', 'deps' => 'jquery', 'defer' => true ] );
	Script::register( 'waypoints-sticky', 'lib/shortcuts/sticky.min.js', [ 'version' => '4.0.1', 'deps' => ['jquery', 'waypoints'], 'package' => 'waypoints', 'defer' => true ] );	

	// Styles common to all pages
	Style::enqueue(
		'_svbk-common',
		'/dist/css/common.css',
		[
			'source' 	=> 'theme',
			'version' 	=> Config::get( 'theme_version', '_svbk' )
		]
	);	

	// Page-specific styles
	Style::enqueue(
		'_svbk-front-page',
		'/dist/css/front-page.css',
		[
			'deps'      => array( '_svbk-common' ),
			'source'    => 'theme',
			'condition' => is_front_page(),
			'prefetch'  => ! is_front_page(),
			'version' 	=> Config::get( 'theme_version', '_svbk' )
		]
	);
	
	Style::enqueue(
		'_svbk-blog',
		'/dist/css/blog.css',
		[
			'deps'      => array( '_svbk-common' ),
			'source'    => 'theme',
			'condition' => is_home() || is_category() || is_tag() || is_post_type_archive( 'post' ),
			'prefetch'  => ! is_home() && ! is_post_type_archive( 'post' ),
			'version' 	=> Config::get( 'theme_version', '_svbk' )
		]
	);

	Style::enqueue(
		'_svbk-single-post',
		'/dist/css/single-post.css',
		[
			'deps'      => array( '_svbk-common' ),
			'source'    => 'theme',
			'condition' => is_singular( 'post' ),
			'prefetch'  => is_home(),
			'version' 	=> Config::get( 'theme_version', '_svbk' )
		]
	);

	Style::enqueue(
		'_svbk-page',
		'/dist/css/page.css',
		[
			'deps'      => array( '_svbk-common' ),
			'source'    => 'theme',
			'condition' => is_page() && ! ( is_front_page() || is_home() ),
			'prefetch'  => is_page(),
			'version' 	=> Config::get( 'theme_version', '_svbk' )
		]
	);

	Style::enqueue(
		'_svbk-single-testimonial',
		'/dist/css/single-testimonial.css',
		[
			'deps'      => array( '_svbk-common' ),
			'source'    => 'theme',
			'condition' => is_singular( 'testimonial' ),
			'prefetch'  => is_post_type_archive( 'testimonial' ),
			'version' 	=> Config::get( 'theme_version', '_svbk' )
		]
	);	
	
	Style::enqueue(
		'_svbk-search',
		'/dist/css/search.css',
		[
			'deps'      => array( '_svbk-common' ),
			'source'    => 'theme',
			'condition' => is_search(),
			'version' 	=> Config::get( 'theme_version', '_svbk' )
		]
	);

	Style::enqueue(
		'_svbk-404',
		'/dist/css/404.css',
		[
			'deps'      => array( '_svbk-common' ),
			'source'    => 'theme',
			'condition' => is_404(),
			'version' 	=> Config::get( 'theme_version', '_svbk' )
		]
	);

	// IE compatibility
	Style::enqueue(
		'_svbk-ie9',
		'/dist/css/ie9.css',
		[
			'deps'   	=> array( '_svbk-common' ),
			'source' 	=> 'theme',
			'version' 	=> Config::get( 'theme_version', '_svbk' )
		]
	);
	wp_style_add_data( '_svbk-ie9', 'conditional', 'IE 9' );

	Style::enqueue(
		'_svbk-ie8',
		'/dist/css/ie8.css',
		[
			'deps'   	=> array( '_svbk-common' ),
			'source' 	=> 'theme',
			'version' 	=> Config::get( 'theme_version', '_svbk' )
		]
	);
	wp_style_add_data( '_svbk-ie8', 'conditional', 'lt IE 9' );

	// Sub menu toggling class
	Script::enqueue(
		'_svbk-navigation',
		'/dist/js/navigation.min.js',
		[
			'source' 	=> 'theme',
			'async'  	=> true,
			'defer'  	=> false,
			'version' 	=> Config::get( 'theme_version', '_svbk' )
		]
	);

	Script::register(
		'jquery-countdown',
		'dist/jquery.countdown.min.js',
		[
			'deps' 		=> array( 'jquery' ),
			'version' 	=> '2.2.0'
		]
	);

	// Main Theme JS file
	Script::enqueue(
		'_svbk-theme',
		'/dist/js/theme.min.js',
		[
			'deps'   	=> array( 'jquery', 'jquery-countdown' ),
			'source' 	=> 'theme',
			'version' 	=> Config::get( 'theme_version', '_svbk' )
		]
	);
	
	// Effects / Animations JS File
	Script::enqueue(
		'_svbk-theme-fx',
		'/dist/js/fx.min.js',
		[
			'deps'   	=> array( 'jquery', 'waypoints' ),
			'source' 	=> 'theme',
			'version' 	=> Config::get( 'theme_version', '_svbk' )
		]
	);	

	// Google Maps Managment script, enable this if you use Google Maps shortcodes in your theme
	Script::enqueue(
		'_svbk-maps',
		'/dist/js/map-block.min.js',
		[
			'deps'   	=> array( 'jquery' ),
			'source' 	=> 'theme',
			'version' 	=> Config::get( 'theme_version', '_svbk' )
		]
	);

	// CSS object-fit polyfill
	Script::enqueue(
		'object-fit-images',
		'dist/ofi.js',
		[
			'version' => '3.2.4',
			'defer'   => true,
		]
	);
	wp_add_inline_script( 'object-fit-images', 'objectFitImages();' );

	if ( get_theme_mod( 'sticky_header' ) ) {
		wp_enqueue_script( 'waypoints-sticky' );
		wp_add_inline_script(
			'waypoints-sticky',
			'
			var stickyHeaderContent = document.getElementById(\'masthead\'); 
			if (stickyHeaderContent != null) { 
				var sticky = new Waypoint.Sticky({ element: stickyHeaderContent, offset: -100 });
			};
		'
		);
	}

	if ( is_singular() && comments_open() && get_option( 'thread_comments' ) ) {
		wp_enqueue_script( 'comment-reply' );
	}

	wp_dequeue_script( 'jquery-migrate' );
	Script::set_async( 'wp-embed', true );

	_svbk_enqueue_config_fonts();
	_svbk_enqueue_config_fonts( 'icons' );

	Asset::hint( 'preconnect', '//cdn.jsdelivr.net' );
	Asset::hint( 'preconnect', '//fonts.googleapis.com' );
	Asset::hint( 'preconnect', '//fonts.gstatic.com' );

	Asset::preload( get_theme_file_uri('style/icons/fonts/theme-icons.woff'), 'font', array( 'crossorigin' => true, 'type' => 'font/woff' )  );

}
add_action( 'wp_enqueue_scripts', '_svbk_scripts', 15 );

/**
 * Gets critical CSS from files and prints it into page <head>
 */
function _svbk_select_critical_css_file($critical_css_path){
	
	if ( is_home() || is_single() ){
		$critical_css_path = get_theme_file_path( '/dist/css/critical-blog.css' );
	}

	return $critical_css_path;
}

add_filter( '_svbk_critical_css_file', '_svbk_select_critical_css_file', 15 );

/**
 * Enqueue Gutenberg block assets for backend editor.
 *
 * `wp-blocks`: includes block type registration and related functions.
 * `wp-element`: includes the WordPress Element abstraction for describing the structure of your blocks.
 * `wp-i18n`: To internationalize the block's text.
 *
 * @since 1.0.0
 */
function _svbk_blocks_editor_custom_assets() {
	wp_enqueue_style(
		'_svbk-blocks-editor-custom',
		get_theme_file_uri( '/dist/css/block-editor.css' ), 
		array( 'wp-edit-blocks' )
	);
} 


add_action( 'enqueue_block_editor_assets', '_svbk_blocks_editor_custom_assets' );


/**
 * Manage support for WebP images
 */
function _svbk_manage_support_for_webp() {
	?>
	<script>
	function e(){var n=document.createElement("canvas");return!(!n.getContext||!n.getContext("2d"))&&0==n.toDataURL("image/webp").indexOf("data:image/webp")}!function(){var n;-1!=(n=document.body).className.split(" ").indexOf("no-webp")||e()||(n.className+=" no-webp")}();
	</script>
	<?php
}
add_action( 'wp_print_footer_scripts', '_svbk_manage_support_for_webp' );

/**
 * Fix skip link focus in IE11.
 *
 * This does not enqueue the script because it is tiny and because it is only for IE11,
 * thus it does not warrant having an entire dedicated blocking script being loaded.
 *
 * @link https://git.io/vWdr2
 */
function _svbk_skip_link_focus_fix() {
	// The following is minified via `terser --compress --mangle -- js/skip-link-focus-fix.js`.
	?>
	<script>
	/(trident|msie)/i.test(navigator.userAgent)&&document.getElementById&&window.addEventListener&&window.addEventListener("hashchange",function(){var t,e=location.hash.substring(1);/^[A-z0-9_-]+$/.test(e)&&(t=document.getElementById(e))&&(/^(?:a|select|input|button|textarea)$/i.test(t.tagName)||(t.tabIndex=-1),t.focus())},!1);
	</script>
	<?php
}
add_action( 'wp_print_footer_scripts', '_svbk_skip_link_focus_fix' );

/**
 * Enqueue admin scripts and styles.
 */
function _svbk_admin_scripts() {
	Script::enqueue( '_svbk-admin', '/dist/js/admin.min.js', [ 'source' => 'theme' ] );
	Style::enqueue( '_svbk-admin', '/dist/css/admin.css', [ 'source' => 'theme' ] );
}

add_action( 'admin_enqueue_scripts', '_svbk_admin_scripts' );

/**
 * Enqueue fonts from config file
 *
 * @param string $config_key The config key containing the fonts definitions.
 * @param string $prefix The script handle prefix
 *
 * @return void
 */
function _svbk_enqueue_config_fonts( $config_key = 'fonts', $prefix = null, $check_chars = '' ) {

	$font_configs = Config::get( $config_key, '_svbk' );

	if ( ! $font_configs ) {
		return;
	}

	// Fontface Observer
	Script::enqueue(
		'fontfaceobserver',
		'fontfaceobserver.js',
		[
			'source' => JsDelivr::class,
			'version' => '2.1.0',
			'defer'  => true,
		]
	);

	$prefix = $prefix ?: ( $config_key . '-' );

	$font_families = [];
	$font_sources  = [];

	foreach ( $font_configs as $font_handle => $font_config ) {
		$font_url     = trim( $font_config['_source'], "'" );
		$font_familiy = trim( $font_config['font-family'], "'" );
		$is_absolute  = preg_match( '|^(https?:)?//|', $font_url );

		$font_sources[ $font_url ] = $font_handle;
		$font_families[]           = $font_familiy;

		if ( ! empty( $font_config['_chars'] ) ) {
			$check_chars .= $font_config['_chars'];
		}
	}

	foreach ( $font_sources as $font_url => $font_handle ) {
		$is_absolute = preg_match( '|^(https?:)?//|', $font_url );
		Style::enqueue( 
			$prefix . $font_handle, 
			$font_url, 
			[ 
				'source' => $is_absolute ? false : 'theme', 
				'version' => $is_absolute ? null : Config::get( 'theme_version', '_svbk' ) 
			] 
		); 
	}

	$observerCode = '(function(){ ';

	$font_families = array_unique( $font_families );

	if ( $check_chars ) {
		$check_chars = "'" . html_entity_decode( $check_chars ) . "'";
	}

	if ( count( $font_families ) > 1 ) {
		$observerCode .= 'var fontObservers = []; ';
		foreach ( $font_families as $font_familiy ) {
			$observerCode .= 'fontObservers.push( (new FontFaceObserver(\'' . $font_familiy . '\')).load(' . $check_chars . ') ); ';
		}
		$observerCode .= 'Promise.all(fontObservers)';
	} else {
		$observerCode .= 'var fontObs = new FontFaceObserver(\'' . $font_families[0] . '\').load(' . $check_chars . '); ';
		$observerCode .= 'fontObs';
	}

	$cookie_name = $config_key . '_loaded';
	$class_name  = $config_key . '-loaded';

	$observerCode .=
		'.then(function () {' .
		'	var date = new Date();' .
		'	date.setTime( date.getTime() + (30*24*60*60*1000) );' .
		'	document.cookie = "' . $cookie_name . '=1; expires=" + date.toUTCString() + "; path=/";' .
		'	document.documentElement.className += " ' . $class_name . '";' .
		'}); ';

	$observerCode .= ' })();';

	wp_add_inline_script( 'fontfaceobserver', $observerCode );

}

/**
 * Apply custom attributes to <html> element
 *
 * @param array $attributes The input attributes of the filter
 *
 * @return void
 */
function _svbk_html_attributes( $attributes ) {

	// $attributes['class'][] = 'domloading';
	if ( filter_input( INPUT_COOKIE, 'fonts_loaded', FILTER_VALIDATE_BOOLEAN ) ) {
		$attributes['class'][] = 'fonts-loaded';
	}

	if ( filter_input( INPUT_COOKIE, 'icons_loaded', FILTER_VALIDATE_BOOLEAN ) ) {
		$attributes['class'][] = 'icons-loaded';
	}

	return $attributes;
}
add_filter( '_svbk_html_attributes', '_svbk_html_attributes' );


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
 * Set default image `sizes` attribute to `page_max_width`
 *
 * @param int $sizes The previous image sizes.
 * @param int $size  The requested image size.
 *
 * @return int
 */
function _svbk_calculate_image_sizes( $sizes, $size ) {
	$width = $size[0];

	$page_max_width = Config::get( 'page_max_width', '_svbk' );
	$content_width = Config::get( 'content_width', '_svbk' );
	$main_breakpoints = Config::get( 'main_breakpoints', '_svbk' );
	$page_width = Config::get( 'page_width', '_svbk' );
	
	$sidebar_width_ratio = Config::get( 'sidebar_width_ratio', '_svbk' ) ?: 0.3;
	$sidebar_width = $page_width * $sidebar_width_ratio;
	$content_with_sidebar_width = $page_width - $sidebar_width;

	// Wide images
	if ( $width > $content_width ) {
		$sizes = sprintf('(max-width: %1$dpx) 100vw, %2$dpx', $main_breakpoints['desktop-stretch'], $page_width );
	}

	// Full width images
	if ( $width > $page_max_width ) {
		$sizes = sprintf('(max-width: %1$dpx) 100vw, %2$dpx', $main_breakpoints['desktop-stretch'], $width );
	}	

	$has_sidebar = is_active_sidebar( 'sidebar-1' ) && ( is_archive() || is_search() || is_home() || is_singular('post') );

	// Reduced content with sidebar
	if ( $has_sidebar ) {
		// If the image size is less than the sidebar with use that, instead set the max with to `$content_with_sidebar_width`.
		$sizes = sprintf( '(max-width: %1$dpx) 94vw, (max-width: %2$dpx) 68vw, %3$dpx', $main_breakpoints['tablet-landscape'], $main_breakpoints['desktop'], $width <= $content_with_sidebar_width ? $width : $content_with_sidebar_width);
	}

	return $sizes;
}

add_filter( 'wp_calculate_image_sizes', '_svbk_calculate_image_sizes', 10, 4);
 
/**
 * Add custom image sizes labels
 *
 * @param int $sizes The previous image sizes labels.
 *
 * @return int
 */
function _svbk_custom_image_sizes( $sizes ) {

	$theme_sizes = array(
        'main-sidebar' => __( 'Main Sidebar', '_svbk' ),
        'medium_large' => __( 'Medium Large', '_svbk' ),
        'wide' => __( 'Wide', '_svbk' ),
        'full' => __( 'Native', '_svbk' ),
	);

	$sizes = array_merge( $sizes, $theme_sizes );
	
	return $sizes;
}

add_filter( 'image_size_names_choose', '_svbk_custom_image_sizes' );


/**
 * Add classes to the document based on loading state
 *
 * @return void
 */
function _svbk_domready_loader() {
	?>
  <script type="text/javascript" >
  
	// var loaderTimeout = setTimeout( function(){
	// 	document.documentElement.classList.remove('domloading');
	// }, 10 );
	
	var domReadyClass = function(){
		document.documentElement.classList.add('domready');
		document.documentElement.classList.remove('domloading');
	}
  
	var tm = setTimeout( domReadyClass, 2000 );
	document.addEventListener("load", function(){
		clearTimeout(tm);
		//clearTimeout(loaderTimeout);
		domReadyClass();
	});
	
 </script>
	<?php
}
add_action( 'wp_print_footer_scripts', '_svbk_domready_loader', 100 );

/**
 * Removes the Jetpack Share icons from the excerpt
 *
 * @return void
 */
function _svbk_jetpack_remove_share() {
	remove_filter( 'the_excerpt', 'sharing_display', 19 );
}

add_action( 'loop_start', '_svbk_jetpack_remove_share' );

/**
 * Added Suppport to DuracellTomi's Google Tag Manager for WordPress
 *
 * @return void
 */
function _svbk_after_body_tag() {

	if ( function_exists( 'gtm4wp_the_gtm_tag' ) ) {
		gtm4wp_the_gtm_tag();
	}

	//Backward compatibility
	do_action( 'after_body_tag' );

}
add_action( 'wp_body_open', '_svbk_after_body_tag' );


/**
 * Disable the emoji's callback
 */
function _svbk_disable_emojis_callback() {
	 remove_action( 'wp_head', 'print_emoji_detection_script', 7 );
	 remove_action( 'admin_print_scripts', 'print_emoji_detection_script' );
	 remove_action( 'wp_print_styles', 'print_emoji_styles' );
	 remove_action( 'admin_print_styles', 'print_emoji_styles' );
	 remove_filter( 'the_content_feed', 'wp_staticize_emoji' );
	 remove_filter( 'comment_text_rss', 'wp_staticize_emoji' );
	 remove_filter( 'wp_mail', 'wp_staticize_emoji_for_email' );
}
add_action( 'init', '_svbk_disable_emojis_callback' );

/**
 * Register special Menu items for policy compliance
 */
function _svbk_register_compliance_menu_items() {

	new Menu\ItemGroup(
		'compliance',
		__( 'Compliance', '_svbk' ),
		array(
			new Menu\Item(
				'privacypolicy',
				__( 'Privacy Policy', '_svbk' ),
				array(
					'target'       => '_blank',
					'frontend_url' => get_privacy_policy_url(),
				)
			),
			new Menu\Item(
				'cookiepolicy',
				__( 'Cookie Policy', '_svbk' ),
				array(
					'target'       => '_blank',
					'frontend_url' => apply_filters( 'cookie_policy_url', '' ),
				)
			),
		)
	);

}
add_action( 'init', '_svbk_register_compliance_menu_items', 10, 2 );

/**
 * Allow to get company info via `get_bloginfo('contact_company_address');`
 */
function _svbk_extend_bloginfo( $output, $show ) {

	if ( substr( $show, 0, 8 ) == 'contact_' ) {
		$show   = substr( $show, 8 );
		$output = get_theme_mod( $show ) ?: $output;
	}

	return $output;
}
add_filter( 'bloginfo', '_svbk_extend_bloginfo', 9, 2 );

/**
 * Allow to get bloginfo data via [bloginfo value=".." /] shortcode
 */
function _svbk_bloginfo_shortcode( $attrs ) {
	return get_bloginfo( $attrs['value'], 'display' );
}
add_shortcode( 'bloginfo', '_svbk_bloginfo_shortcode' );

/**
 * Set the right excerpt lenght
 */
function _svbk_excerpt_length( $lenght ) {

	if ( ! is_singular( 'post' ) && 'post' == get_post_type() ) {
		return 25;
	}

	return $lenght;
}
add_filter( 'excerpt_length', '_svbk_excerpt_length', 10 );

/**
 * Disable blocks wpautop() reinit. Messes with dynamic blocks
 */
function _svbk_disable_blocks_wpautop_restore( $content ) {
	$priority = has_filter( 'the_content', '_restore_wpautop_hook' );
	if ( false !== $priority ) {
		remove_filter( 'the_content', '_restore_wpautop_hook', $priority );
	}

	return $content;
}

add_action( 'the_content', '_svbk_disable_blocks_wpautop_restore' );

/**
 * Implement the Custom Header feature.
 */
require get_template_directory() . '/inc/custom-header.php';

/**
 * Custom template tags for this theme.
 */
require get_template_directory() . '/inc/template-tags.php';

/**
 * Functions which enhance the theme by hooking into WordPress.
 */
require get_template_directory() . '/inc/template-functions.php';

/**
 * Shortcode UI
 */
require get_template_directory() . '/inc/shortcodes.php';

/**
 * Customizer additions.
 */
require get_template_directory() . '/inc/customizer.php';

/**
 * Load Jetpack compatibility file.
 */
if ( defined( 'JETPACK__VERSION' ) ) {
	require get_template_directory() . '/inc/jetpack.php';
}

/**
 * Load Advanced Custom Fields Definitions
 */
require get_template_directory() . '/inc/acf.php';

/**
 * Load Cutoms Post Types Definitions
 */
require get_template_directory() . '/inc/post-types.php';

/**
 * Load WooCommerce compatibility file.
 */
if ( class_exists( 'WooCommerce' ) ) {
	require get_template_directory() . '/inc/woocommerce.php';
}

/**
 * Load WooCommerce compatibility file.
 */
if ( function_exists( 'Sensei' ) ) {
	require get_template_directory() . '/inc/sensei.php';
}


/**
 * Load Theme Gutenberg Blocks
 */
require get_template_directory() . '/blocks/init.php';
