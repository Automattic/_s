<?php
/**
 * nascsp functions and definitions
 *
 * @link https://developer.wordpress.org/themes/basics/theme-functions/
 *
 * @package nascsp
 */

if ( ! function_exists( 'nascsp_setup' ) ) :
	/**
	 * Sets up theme defaults and registers support for various WordPress features.
	 *
	 * Note that this function is hooked into the after_setup_theme hook, which
	 * runs before the init hook. The init hook is too late for some features, such
	 * as indicating support for post thumbnails.
	 */
	function nascsp_setup() {
		/*
		 * Make theme available for translation.
		 * Translations can be filed in the /languages/ directory.
		 * If you're building a theme based on nascsp, use a find and replace
		 * to change 'nascsp' to the name of your theme in all the template files.
		 */
		load_theme_textdomain( 'nascsp', get_template_directory() . '/languages' );

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
			'menu-1' => esc_html__( 'Primary', 'nascsp' ),
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
		add_theme_support( 'custom-background', apply_filters( 'nascsp_custom_background_args', array(
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
add_action( 'after_setup_theme', 'nascsp_setup' );

/**
 * Set the content width in pixels, based on the theme's design and stylesheet.
 *
 * Priority 0 to make it available to lower priority callbacks.
 *
 * @global int $content_width
 */
function nascsp_content_width() {
	$GLOBALS['content_width'] = apply_filters( 'nascsp_content_width', 640 );
}
add_action( 'after_setup_theme', 'nascsp_content_width', 0 );

/**
 * Register widget area.
 *
 * @link https://developer.wordpress.org/themes/functionality/sidebars/#registering-a-sidebar
 */
function nascsp_widgets_init() {
	register_sidebar( array(
		'name'          => esc_html__( 'Sidebar', 'nascsp' ),
		'id'            => 'sidebar-1',
		'description'   => esc_html__( 'Add widgets here.', 'nascsp' ),
		'before_widget' => '<section id="%1$s" class="widget %2$s">',
		'after_widget'  => '</section>',
		'before_title'  => '<h2 class="widget-title">',
		'after_title'   => '</h2>',
	) );
}
add_action( 'widgets_init', 'nascsp_widgets_init' );

/**
 * Enqueue scripts and styles.
 */
function nascsp_scripts() {

	wp_enqueue_style( 'nascsp-bootstrap-min-css', get_template_directory_uri() . '/css/bootstrap.min.css');
	wp_enqueue_style( 'nascsp-jquery-bxslider-css', get_template_directory_uri() . '/css/jquery.bxslider.css');
	wp_enqueue_style( 'nascsp-style', get_stylesheet_uri());
	wp_enqueue_style( 'nascsp-responsive', get_template_directory_uri() . '/css/responsive.css');



    wp_enqueue_script( 'jquery' );
	wp_enqueue_script( 'nascsp-touch-js', get_template_directory_uri() . '/js/bootstrap.min.js', array(), '20151215', true );
	wp_enqueue_script( 'nascsp-bootstrap-min-js', get_template_directory_uri() . '/js/modernizr.js', array(), '20151215', true );
	wp_enqueue_script( 'nascsp-jquery-bxslider-js', get_template_directory_uri() . '/js/jquery.bxslider.js', array(), '20151215', true );
	wp_enqueue_script( 'mask-js', get_template_directory_uri() . '/js/mask.js', array(), '20151215', true );

	wp_enqueue_script( 'nascsp-custom-js', get_template_directory_uri() . '/js/custom.js', array(), '20151215', true );
	if(is_page_template('to-eventoverview.php')){
		wp_enqueue_script('google_map', 'http://maps.google.com/maps/api/js?key=AIzaSyC1N181P8XUHtW38ub-l98zKMpAErT_drI', array(), '20151215', true);
		wp_enqueue_script( 'nascsp-location-js', get_template_directory_uri() . '/js/location-map.js', array(), '20151215', true );
	}

	if ( is_singular() && comments_open() && get_option( 'thread_comments' ) ) {
		wp_enqueue_script( 'comment-reply' );
	}

	wp_localize_script('nascsp-custom-js', 'nascsp_admin_URL', nascsp_admin_URL());
}
add_action( 'wp_enqueue_scripts', 'nascsp_scripts' );


function nascsp_admin_URL() {
    $MyTemplatepath = get_template_directory_uri();
    $MyHomepath = esc_url(home_url('/'));
    $admin_URL = admin_url('admin-ajax.php'); // Your File Path
    return array(
        'admin_URL' => $admin_URL,
        'MyTemplatepath' => $MyTemplatepath,
        'MyHomepath' => $MyHomepath,
    );
}


add_action('wp_ajax_member_check', 'member_check');
add_action('wp_ajax_nopriv_member_check', 'member_check');

function member_check() {
	$email = $_REQUEST['email'];
	if (($email = filter_var($email, FILTER_VALIDATE_EMAIL)) !== false) {
		$prefix = substr($email, 0, strrpos($email, '@'));
		$explode = explode("@",$email);



		$newstring = $explode[1];

		//echo $newstring;
		$exists = email_exists($email);
		$member_domains = get_field('member_domains','option');
		if(!empty($member_domains)){
			$domains = array();
			foreach($member_domains as $member_domain){
				$domains[] = $member_domain['domain'];
			}
		}
		if($exists){
			$user_meta=get_userdata($exists);
			$user_roles=$user_meta->roles;
			if(in_array("member", $user_roles)){
				echo "yes";
			} else if(in_array("administrator", $user_roles)){
				echo "yes";
			} elseif(in_array($newstring,$domains)){
				echo "yes";
			} else {
				echo "no ".$newstring;
			}
		} elseif(in_array($newstring,$domains)){
			echo "yes";
		} else {
			echo "no ".$newstring;
		}
	} else {
		echo "invalid email";
	}
	die();
}
/* function nascsp_scripts_css() {

wp_enqueue_style( 'nascsp-style', get_stylesheet_uri());
wp_enqueue_style( 'nascsp-responsive', get_template_directory_uri() . '/css/responsive.css');
}
add_action( 'get_footer', 'nascsp_scripts_css'); */
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
 * Customizer additions.
 */
require get_template_directory() . '/inc/customizer.php';

/**
 * Load Jetpack compatibility file.
 */
if ( defined( 'JETPACK__VERSION' ) ) {
	require get_template_directory() . '/inc/jetpack.php';
}


remove_action('wp_head', 'index_rel_link');
remove_action('wp_head', 'wlwmanifest_link');
remove_action('wp_head', 'feed_links_extra', 3);
remove_action('wp_head', 'adjacent_posts_rel_link', 10, 0);
remove_action('wp_head', 'wp_shortlink_wp_head', 10, 0 );
remove_action('wp_head', 'adjacent_posts_rel_link_wp_head', 10, 0 );
remove_action('wp_head', 'wp_generator');

function nascsp_remove_version() {
	return '';
}
add_filter('the_generator', 'nascsp_remove_version');

/**
 * Disable support for comments and trackbacks in post types
 */
function uncommon_disable_comments_post_types_support() {
	$post_types = get_post_types();
	foreach ($post_types as $post_type) {
		if(post_type_supports($post_type, 'comments')) {
			remove_post_type_support($post_type, 'comments');
			remove_post_type_support($post_type, 'trackbacks');
		}
	}
}
add_action('admin_init', 'uncommon_disable_comments_post_types_support');

/**
 * Close comments on the front-end
 */
function uncommon_disable_comments_status() {
	return false;
}
add_filter('comments_open', 'uncommon_disable_comments_status', 20, 2);
add_filter('pings_open', 'uncommon_disable_comments_status', 20, 2);

/**
 * Hide existing comments
 */
function uncommon_disable_comments_hide_existing_comments($comments) {
	$comments = array();
	return $comments;
}
add_filter('comments_array', 'uncommon_disable_comments_hide_existing_comments', 10, 2);

/**
 * Remove comments page in menu
 */
function uncommon_disable_comments_admin_menu() {
	remove_menu_page('edit-comments.php');
}
add_action('admin_menu', 'uncommon_disable_comments_admin_menu');

/**
 * Redirect any user trying to access comments page
 */
function uncommon_disable_comments_admin_menu_redirect() {
	global $pagenow;
	if ($pagenow === 'edit-comments.php') {
		wp_redirect(admin_url()); exit;
	}
}
add_action('admin_init', 'uncommon_disable_comments_admin_menu_redirect');

/**
 * Remove comments metabox from dashboard
 */
function uncommon_disable_comments_dashboard() {
	remove_meta_box('dashboard_recent_comments', 'dashboard', 'normal');
}
add_action('admin_init', 'uncommon_disable_comments_dashboard');

/**
 * Remove comments links from admin bar
 */
function uncommon_disable_comments_admin_bar() {
	if (is_admin_bar_showing()) {
		remove_action('admin_bar_menu', 'wp_admin_bar_comments_menu', 60);
	}
}
add_action('init', 'uncommon_disable_comments_admin_bar');

function remove_cssjs_ver( $src ) {
 if( strpos( $src, '?ver=' ) )
  $src = remove_query_arg( 'ver', $src );
 return $src;
}

if(!is_admin()){
 add_filter( 'style_loader_src', 'remove_cssjs_ver', 10, 2 );
 add_filter( 'script_loader_src', 'remove_cssjs_ver', 10, 2 );
}

/*
 General Page Settings
 */
if( function_exists('acf_add_options_page') ) {

 acf_add_options_page(array(
  'page_title'  => 'General Settings',
  'menu_title' => 'General Settings',
  'menu_slug'  => 'theme-general-settings',
  'capability' => 'edit_posts',
  'redirect'  => false
  ));
}

add_action( 'get_header', 'force_civi_scripts_to_load' );
function force_civi_scripts_to_load() {
  if ( is_page_template( 'tp-event.php' ) ) {
    add_action( 'wp_enqueue_scripts', array( civi_wp(), 'front_end_page_load' ), 100 );
  }
}

/* * ********* */
/* Google Map
  /************ */

function my_acf_google_map_api($api) {
    $api['key'] = 'AIzaSyC1N181P8XUHtW38ub-l98zKMpAErT_drI';
    return $api;
}

add_filter('acf/fields/google_map/api', 'my_acf_google_map_api');

/** Filter added to remove draft advertisements from General Settings Advertisement Fields in admin **/
add_filter('acf/fields/post_object/query', 'relationship_options_filter', 10, 3);
add_filter('acf/fields/relationship/query', 'relationship_options_filter', 99, 3);
add_filter('acf/fields/page_link/query', 'relationship_options_filter', 99, 3);
function relationship_options_filter($options, $field, $the_post) {
    $options['post_status'] = array('publish');
    return $options;
}

$result = add_role(
    'member',
    'Civi Member',
    array(
        'read'         => true,  // true allows this capability
        'edit_posts'   => true,
        'delete_posts' => false, // Use false to explicitly deny
    )
);

add_image_size('banner-image',2000,665,array('center','center'));

// Custom Pagination
function nascsp_pagination($query=NULL , $numpages=NULL) {
	global $wp_query;
	if(!empty($query)){
		$wp_query = $query;
	}
	$big = 99999999;
	if ($numpages) {
		// $total_posts = $qry->found_posts;
		$pages = $numpages;
	}
	else{
		// $total_posts = $wp_query->found_posts;
		$pages = $wp_query->max_num_pages;
	}
	$page_format = paginate_links( array(
		'base' => str_replace( $big, '%#%', esc_url( get_pagenum_link( $big ) ) ),
		'format' => '?paged=%#%',
		'current' => max( 1, get_query_var('paged') ),
		'total' => $pages,
		'prev_text'    => 'Previous',
		'next_text'    => 'Next',
		'type'  => 'array'
		)
	);

	if( is_array($page_format) ) {
		$paged = ( get_query_var('paged') == 0 ) ? 1 : get_query_var('paged');
		echo '<ul class="pagination">';
		if($paged == 1){
			echo '<li class="disabled page-item"><a>Previous</a><li>';
		}
		foreach ( $page_format as $page ) {

				echo "<li class='page-item'>$page</li>";

		}
		if($paged == $pages){
			echo '<li class="disabled page-item"><a>Next</a><li>';
		}
	    echo '</ul>';
	}
}
