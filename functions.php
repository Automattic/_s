<?php
/**
 * _sfork functions and definitions
 *
 * @package _sfork
 */


add_image_size( 'smallest', 300, 9999 ); 
add_image_size( 'small', 500, 9999 ); 
add_filter( 'image_size_names_choose', 'my_custom_sizes' );
function my_custom_sizes( $sizes ) {
    return array_merge( $sizes, array(
        'smallest' => __( 'Smallest' ),
		'small' => __( 'Small' )
    ) );
}

/**
* Function for responsive featured images.
* Creates a  element and populates it with appropriate image sizes for different screen widths.
* Works in place of the_post_thumbnail();
*/

function _sfork_the_responsive_thumbnail($post_id) {
// Check to see if there is a transient available. If there is, use it.
if ( false === ( $thumb_data = get_transient( 'featured_image_' . $post_id ) ) ) {
  _sfork_set_image_transient($post_id);
  $thumb_data = get_transient( 'featured_image_' . $post_id );
}

// Echo out <img> element (with srcset and size attributes) based on code from above
if ( is_front_page() ) {
echo '<img sizes="(min-width: 740px) 53vw, 75vw" srcset="' . $thumb_data['thumb_original'] . ' 1200w, ' . $thumb_data['thumb_medium'] . ' 700w, ' . $thumb_data['thumb_small'] . ' 500w, ' . $thumb_data['thumb_smallest'] . ' 300w" ' . 'alt="' . $thumb_data['thumb_alt'] . '">'; }
elseif ( is_archive () ){
// anchor link and img src need to match for fancybox manual gallery open. hmmmm...
global $x;
echo '<a class="fancybox" data-title-id="title-' . $x . '" href="' . $thumb_data['thumb_original'] . '"><img sizes="75vw" srcset="' . $thumb_data['thumb_original'] . ' 1200w, ' . $thumb_data['thumb_medium'] . ' 700w, ' . $thumb_data['thumb_small'] . ' 500w, ' . $thumb_data['thumb_smallest'] . ' 300w" ' . 'alt="' . $thumb_data['thumb_alt'] . '"></a>'; }

}

/**
* Create image transient to avoid looping through multiple image queries every time a post loads.
* Called any time a post is saved or updated right after existing transient is flushed.
* Called by simone_the_responsive_thumbnail when no transient is set.
*
* - Get the featured image ID
* - Get the alt text (if no alt text is defined, set the alt text to the post title)
* - Build an array with each of the available image sizes + the alt text
* - Set a transient with the label "featured_image_[post_id] that expires in 12 months
*/

function _sfork_set_image_transient($post_id) {
  $attachment_id = get_post_thumbnail_id($post_id);
  $alt_text = get_post_meta($attachment_id, '_wp_attachment_image_alt', true);
  if ( !$alt_text ) { $alt_text = esc_html( get_the_title($post_id) ); }
    $thumb_original = wp_get_attachment_image_src($attachment_id, 'full');
    $thumb_large   = wp_get_attachment_image_src($attachment_id, 'large');
    $thumb_medium   = wp_get_attachment_image_src($attachment_id, 'medium'); 
    $thumb_small   = wp_get_attachment_image_src($attachment_id, 'small');
	$thumb_smallest    = wp_get_attachment_image_src($attachment_id, 'smallest');
    $thumb_data = array(
		'thumb_original' => $thumb_original[0],
		'thumb_large'    => $thumb_large[0],
		'thumb_medium'   => $thumb_medium[0],
		'thumb_small'    => $thumb_small[0],
		'thumb_smallest'    => $thumb_smallest[0],
		'thumb_alt'      => $alt_text
		);

set_transient( 'featured_image_' . $post_id, $thumb_data, 52 * WEEK_IN_SECONDS );
}

/**
* Reset featured image transient when the post is updated
*/

add_action('save_post', '_sfork_reset_thumb_data_transient');

function _sfork_reset_thumb_data_transient( $post_id ) {
  delete_transient( 'featured_image_' . $post_id );
  if ( has_post_thumbnail($post_id) ) {
    _sfork_set_image_transient($post_id);
  }
}


/**
 * Set the content width based on the theme's design and stylesheet.
 */
if ( ! isset( $content_width ) ) {
	$content_width = 640; /* pixels */
}

if ( ! function_exists( '_sfork_setup' ) ) :
/**
 * Sets up theme defaults and registers support for various WordPress features.
 *
 * Note that this function is hooked into the after_setup_theme hook, which
 * runs before the init hook. The init hook is too late for some features, such
 * as indicating support for post thumbnails.
 */
function _sfork_setup() {

	/*
	 * Make theme available for translation.
	 * Translations can be filed in the /languages/ directory.
	 * If you're building a theme based on _sfork, use a find and replace
	 * to change '_sfork' to the name of your theme in all the template files
	 */
	load_theme_textdomain( '_sfork', get_template_directory() . '/languages' );

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
		'primary' => __( 'Primary Menu', '_sfork' ),
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

	// Set up the WordPress core custom background feature.
	add_theme_support( 'custom-background', apply_filters( '_sfork_custom_background_args', array(
		'default-color' => 'ffffff',
		'default-image' => '',
	) ) );
}
endif; // _sfork_setup
add_action( 'after_setup_theme', '_sfork_setup' );

/**
 * Register widget area.
 *
 * @link http://codex.wordpress.org/Function_Reference/register_sidebar
 */
function _sfork_widgets_init() {
	register_sidebar( array(
		'name'          => __( 'Sidebar', '_sfork' ),
		'id'            => 'sidebar-1',
		'description'   => '',
		'before_widget' => '<aside id="%1$s" class="widget %2$s">',
		'after_widget'  => '</aside>',
		'before_title'  => '<h1 class="widget-title">',
		'after_title'   => '</h1>',
	) );
	register_sidebar( array(
		'name'          => __( 'blog', '_sfork' ),
		'id'            => 'sidebar-8',
		'description'   => '',
		'before_widget' => '<aside id="%1$s" class="widget %2$s">',
		'after_widget'  => '</aside>',
		'before_title'  => '<h1 class="widget-title">',
		'after_title'   => '</h1>',
	) );
}
add_action( 'widgets_init', '_sfork_widgets_init' );

/**
 * Enqueue scripts and styles.
 */
function _sfork_scripts() {
	wp_enqueue_style( '_sfork-style', get_stylesheet_uri() );
	wp_enqueue_style( 'flexslider-style', get_template_directory_uri() . '/flexslider.css' );
	wp_enqueue_style( 'fancybox-style', get_template_directory_uri() . '/fancybox/jquery.fancybox.css', array(), '2.1.5', 'screen' );
	

	
	
/*
if (!is_admin() && is_front_page()) add_action("wp_enqueue_scripts", "my_jquery_enqueue", 11);
function my_jquery_enqueue() {
    wp_deregister_script('jquery');
    wp_register_script('jquery', "http" . ($_SERVER['SERVER_PORT'] == 443 ? "s" : "") .    "://ajax.googleapis.com/ajax/libs/jquery/1.6.2/jquery.min.js", false, null);
   wp_enqueue_script('jquery');
}*/   
/*uncomment this if remove jquery updater plugin, or flexslider 2 won't work with wordpress jquery*/
 
	wp_enqueue_script( 'picturefill', get_template_directory_uri() . '/js/picturefill.min.js', false, null);
	wp_enqueue_script( 'flexslider-jquery', get_template_directory_uri() . '/js/jquery.flexslider-min.js', array('jquery'), null);
	wp_enqueue_script( 'fancybox-jquery', get_template_directory_uri() . '/fancybox/jquery.fancybox.pack.js', array('jquery'), null);
	wp_enqueue_script( '_sfork-navigation', get_template_directory_uri() . '/js/navigation.js', array(), '20120206', true );

	wp_enqueue_script( '_sfork-skip-link-focus-fix', get_template_directory_uri() . '/js/skip-link-focus-fix.js', array(), '20130115', true );
	
	
	if ( is_singular() && comments_open() && get_option( 'thread_comments' ) ) {
		wp_enqueue_script( 'comment-reply' );
	}
}
add_action( 'wp_enqueue_scripts', '_sfork_scripts' );

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


//Disables comments in lightbox

function filter_media_comment_status( $open, $post_id ) {
	$post = get_post( $post_id );
	if( $post->post_type == 'attachment' ) {
		return false;
	}
	return $open;
}

//Excludes testimonials from blog 

/*function exclude_testimonials( $query ) {
    if ( !$query->is_category('testimonials') && $query->is_main_query() ) {
        $query->set( 'cat', '-15' );
    }
}
add_action( 'pre_get_posts', 'exclude_testimonials' );*/

//custom post type for current season shows
function WD_work_init() {
	$labels = array(
	'name' => 'Work',
	'singular_name' => 'Work',
	'edit_item' => 'Edit Post',
	'view_item' => 'View Post' 
	);
    $args = array(
      'labels' => $labels,
        'public' => true,
        'show_ui' => true,
        'capability_type' => 'post',
        'hierarchical' => false,
        'rewrite' => array('with_front' => false,'slug' => 'our-work'),
        'query_var' => true,
		'menu_position' => 5,
        'menu_icon' => 'dashicons-admin-appearance',
        'supports' => array(
            'title',
            'editor',
            'excerpt',
            'custom-fields',
            'revisions',
            'thumbnail',
            'author',
            'page-attributes'),
			'has_archive' => true
        );
    register_post_type( 'WD_work', $args );
}
add_action( 'init', 'WD_work_init' );


function wd_work_cats_init() {
  $labels = array(
    'name'              => _x( 'Work Categories', 'taxonomy general name' ),
    'singular_name'     => _x( 'Work Category', 'taxonomy singular name' ),
    'search_items'      => __( 'Search Work Categories' ),
    'all_items'         => __( 'All Work Categories' ),
    'parent_item'       => __( 'Parent Work Category' ),
    'parent_item_colon' => __( 'Parent Work Category:' ),
    'edit_item'         => __( 'Edit Work Category' ), 
    'update_item'       => __( 'Update Work Category' ),
    'add_new_item'      => __( 'Add New Work Category' ),
    'new_item_name'     => __( 'New Work Category' ),
    'menu_name'         => __( 'Work Categories' ),
  );
  $args = array(
    'labels' => $labels,
	'rewrite' => array( 'with_front' => false, 'slug' => 'work'),
    'hierarchical' => true,
	'show_admin_column' => true,
  );
register_taxonomy( 'wd_work_cats', 'wd_work', $args );
}
add_action( 'init', 'wd_work_cats_init' );

