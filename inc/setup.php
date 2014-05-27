<?php

/* ==========================================================================
   Admin Setup
   ========================================================================== */

/**
 * Set the content width based on the theme's design and stylesheet.
 */
if ( ! isset( $content_width ) )
    $content_width = 640; /* pixels */





if ( ! function_exists( '_s_setup' ) ) :
/**
 * Sets up theme defaults and registers support for various WordPress features.
 *
 * Note that this function is hooked into the after_setup_theme hook, which runs
 * before the init hook. The init hook is too late for some features, such as indicating
 * support post thumbnails.
 */
function _s_setup() {

    /**
     * Add default posts and comments RSS feed links to head
     */
    add_theme_support( 'automatic-feed-links' );

    /**
     * Add html5 elements
     */
    add_theme_support( 'html5', array( 'comment-list', 'search-form', 'comment-form', ) );

    /**
     * Enable support for Post Thumbnails on posts and pages
     *
     * @link http://codex.wordpress.org/Function_Reference/add_theme_support#Post_Thumbnails
     */
    add_theme_support( 'post-thumbnails' );
    add_image_size( '640x', 640 );

    /**
     * Add custom image sizes to display settings in Media Library
     * @param  array $sizes list of sizes
     * @return array
     */
    function _s_media_library_image_options( $sizes ) {

        $new_sizes = array_merge( $sizes, array(
            // name must be string, not integer
            '640x' => __( 'Main Content' ),
        ) );

        return $new_sizes;

    }
    add_filter( 'image_size_names_choose', '_s_media_library_image_options' );

    /**
     * This theme uses wp_nav_menu() in one location.
     */
    register_nav_menus( array(
        'primary' => __( 'Primary Menu', '_s' ),
    ) );

}
endif; // _s_setup
add_action( 'after_setup_theme', '_s_setup' );





/**
 * Register widgetized area and update sidebar with default widgets
 */
function _s_widgets_init() {
    register_sidebar( array(
        'name'          => __( 'Sidebar', '_s' ),
        'id'            => 'sidebar-1',
        'before_widget' => '<aside id="%1$s" class="widget %2$s">',
        'after_widget'  => '</aside>',
        'before_title'  => '<h1 class="widget-title">',
        'after_title'   => '</h1>',
    ) );
}
add_action( 'widgets_init', '_s_widgets_init' );





/**
 * Enqueue scripts and styles
 */
function _s_scripts() {

    if ( !is_admin() ) {

        // Styles
        wp_enqueue_style( 'googlefonts', add_query_arg( 'family', 'Open+Sans:400,300,700|Roboto:400,100,900italic', '//fonts.googleapis.com/css' ), array(), null );
        wp_enqueue_style( 'main', get_template_directory_uri() . '/css/main.css', array(), null );
        wp_enqueue_style( '_s-style', get_stylesheet_uri(), array( 'main' ) );

        // IE Conditional
        wp_register_style( 'no-mq', get_template_directory_uri() . '/css/no-mq.css', array(), null );
        $GLOBALS['wp_styles']->add_data( 'no-mq', 'conditional', 'lte IE 8' );
        wp_enqueue_style( 'no-mq' );

        // Scripts
        wp_enqueue_script( 'jquery' );
        wp_enqueue_script( 'modernizr', get_template_directory_uri() . '/js/plugins/modernizr-2.6.2.min.js', array(), null );
        wp_enqueue_script( 'plugins', get_template_directory_uri() . '/js/min/plugins.min.js', array( 'jquery' ), null, true );
        wp_enqueue_script( 'main', get_template_directory_uri() . '/js/min/main.min.js', array( 'jquery', 'plugins' ), null, true );

        // values available to js
        wp_localize_script( 'main', 'ELEV', array(
                'siteUrl' => site_url(),
                'directoryUrl' => get_template_directory_uri()
            )
        );
    }
    if ( is_singular() && comments_open() && get_option( 'thread_comments' ) ) {
        wp_enqueue_script( 'comment-reply' );
    }
}
add_action( 'wp_enqueue_scripts', '_s_scripts' );





/**
 * Add Admin Options menu item
 *
 * Managed by Advanced Custom Fields Plugin
 *
 */
function _s_acf_options_page_settings( $settings )
{
    $settings['title'] = 'Global Options';
    // $settings['pages'] = array('Header', 'Sidebar', 'Footer');

    return $settings;
}

add_filter('acf/options_page/settings', '_s_acf_options_page_settings');





/**
 * Order Menu Items
 */
function _s_custom_menu_order( $menu_ord ) {
    if ( !$menu_ord ) return true;
    return array(
        'index.php', // Dashboard
        'edit.php?post_type=page', // Pages
        'edit.php', // Posts
        'admin.php?page=gf_edit_forms', // Forms
        'upload.php' // Media
    );
}
add_filter('custom_menu_order', '_s_custom_menu_order');
add_filter('menu_order', '_s_custom_menu_order');





/**
 * Modify main query
 */
function _s_modify_main_query( $query ) {
    if ( is_admin() || ! $query->is_main_query() )
        return;

    // Events Taxonomy
    // if ( is_tax( 'type' ) ) {
        // $query->set( 'meta_key', 'date' );
        // $query->set( 'orderby', 'date' );
    // }
    // Volunteers
    // if ( is_post_type_archive( 'volunteers' ) ) {
    //  $query->set( 'posts_per_page', -1 );
    //  $query->set( 'orderby', 'menu_order' );
    //  $query->set( 'order', 'ASC' );
    //  $query->set( 'meta_key', 'active' );
    //  $query->set( 'meta_value', true );
    // }
}
add_action( 'pre_get_posts', '_s_modify_main_query', 1 );
