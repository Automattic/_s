<?php
/*
 * Maquina functions and definitions 
 * 
 * @package Maquina
 * @file 
 *    
 * Set the content width based on the theme's design and stylesheet.
 */
if ( ! isset( $content_width ) )
	$content_width = 640; /* pixels */

if ( ! function_exists( 'maquina_setup' ) ) :
/**
 * Sets up theme defaults and registers support for various WordPress features.
 *
 * Note that this function is hooked into the after_setup_theme hook, which runs
 * before the init hook. The init hook is too late for some features, such as indicating
 * support post thumbnails.
 */
function maquina_setup() { 

	/**
	 * Make theme available for translation
	 * Translations can be filed in the /languages/ directory
	 * If you're building a theme based on _s, use a find and replace
	 * to change '_s' to the name of your theme in all the template files
	 */
	load_theme_textdomain( 'maquina', get_template_directory() . '/languages' );

	/**
	 * Add default posts and comments RSS feed links to head
	 */
	add_theme_support( 'automatic-feed-links' );

	/**
	 * Enable support for Post Thumbnails on posts and pages
	 *
	 * @link http://codex.wordpress.org/Function_Reference/add_theme_support#Post_Thumbnails
	 */
	//add_theme_support( 'post-thumbnails' );

	/**
	 * This theme uses wp_nav_menu() in two locations.
	 */
	register_nav_menus( array(
		'top_menu' => __( 'Top Menu', 'maquina' ),
		'after_header_menu' => __( 'After Header Menu', 'maquina' ),
		) );

	/**
	 * Enable support for Post Formats
	 */
	add_theme_support( 'post-formats', array( 'aside', 'image', 'video', 'quote', 'link' ) );
}
endif; // Maquina_setup
add_action( 'after_setup_theme', 'maquina_setup' );

/**
 * //Setup the WordPress core custom background feature.
 *
 * Use add_theme_support to register support for WordPress 3.4+
 * as well as provide backward compatibility for WordPress 3.3
 * using feature detection of wp_get_theme() which was introduced
 * in WordPress 3.4.
 *
 * @todo Remove the 3.3 support when WordPress 3.6 is released.
 *
 * Hooks into the after_setup_theme action.
 */
function maquina_register_custom_background() {
	$args = array(
		'default-color' => 'ffffff',
		'default-image' => '',
	);

	$args = apply_filters( 'maquina_custom_background_args', $args );

	if ( function_exists( 'wp_get_theme' ) ) {
		add_theme_support( 'custom-background', $args );
	} else {
		define( 'BACKGROUND_COLOR', $args['default-color'] );
		if ( ! empty( $args['default-image'] ) )
			define( 'BACKGROUND_IMAGE', $args['default-image'] );
		add_custom_background();
	}
}
add_action( 'after_setup_theme', 'maquina_register_custom_background' );

	/*
	 * Grab Maquina widgets.
	 */
require_once get_template_directory() . '/inc/theme-widgets.php';
	
/**
 * Enqueue scripts and styles
 */
 
function maquina_scripts() {
	    
	wp_enqueue_script( 'maquina-prefixfree', get_template_directory_uri() . '/js/prefixfree.min.js' );

	wp_enqueue_script( 'maquina-navigation', get_template_directory_uri() . '/js/navigation.js', array(), '20120206', true );

	wp_enqueue_script( 'maquina-skip-link-focus-fix', get_template_directory_uri() . '/js/skip-link-focus-fix.js', array(), '20130115', true );

	if ( is_singular() && comments_open() && get_option( 'thread_comments' ) ) {
		wp_enqueue_script( 'comment-reply' );
	}

	if ( is_singular() && wp_attachment_is_image() ) {
		wp_enqueue_script( 'maquina-keyboard-image-navigation', get_template_directory_uri() . '/js/keyboard-image-navigation.js', array( 'jquery' ), '20120202' );
	}
}
add_action( 'wp_enqueue_scripts', 'maquina_scripts' );

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
 * WordPress.com-specific functions and definitions.
 */
//require get_template_directory() . '/inc/wpcom.php';

	// Change admin welcome message Wordpress 3.5.1
	
function replace_howdy( $wp_admin_bar ) {
	
	$my_account=$wp_admin_bar->get_node('my-account');
	$newtitle = str_replace( 'Howdy,', __( 'Welcome', 'maquina' ),
	$my_account->title );
	$wp_admin_bar->add_node( array(
	'id' => 'my-account',
	'title' => $newtitle,
	) );
	}

add_filter( 'admin_bar_menu', 'replace_howdy',25 );

/**
 * Admin footer modification
 */
 
function remove_footer_admin () {
	echo '<span id="footer-thankyou"> ' . __( 'Developed by', 'maquina' ) . '<a href="http://vnlweb.com" 
    target="_blank"> Vitor Lopes - vnlweb.com</a></span>';
	}

add_filter('admin_footer_text', 'remove_footer_admin');

/**
 * Loading stylesheets without inline styles and accommodate prefixfree syntax  "info - prefixfree does not validate in wc3!"
 */

function maquina_load_stylesheets () {
	echo '<link rel="data-noprefix stylesheet" href="' . get_template_directory_uri() . '/style.css' . '" type="text/css" media="all" />';
	}

add_action('wp_head', 'maquina_load_stylesheets');

function google_analytics_tracking_code(){ // @todo tracking code needs to be finish and implemented in theme options

	$maquina_ga_code = ''; // GA ID

	if ($options['ga_enable']) { ?>

		<script type="text/javascript">
		  var _gaq = _gaq || [];
		  _gaq.push(['_setAccount', '<?php echo $maquina_ga_code; ?>']);
		  _gaq.push(['_trackPageview']);

		  (function() {
		    var ga = document.createElement('script'); ga.type = 'text/javascript'; ga.async = true;
		    ga.src = ('https:' == document.location.protocol ? 'https://ssl' : 'http://www') + '.google-analytics.com/ga.js';
		    var s = document.getElementsByTagName('script')[0]; s.parentNode.insertBefore(ga, s);
		  })();
		</script>

<?php }
}

//  tracking code before the closing body tag
add_action('wp_footer', 'google_analytics_tracking_code');

function add_logo_to_customizer( $wp_customize ) {
   
    $wp_customize->add_section( 'maquina_logo_section' , array(
    'title'       => __( 'Logo', 'maquina' ),
    'priority'    => 30,
    'description' => __( 'Upload a logo to replace the default site name and description in the header','maquina' ),
) );
	$wp_customize->add_setting( 'maquina_logo' );
	
	$wp_customize->add_control( new WP_Customize_Image_Control( $wp_customize, 'maquina_logo', array(
    'label'    => __( 'Logo', 'maquina' ),
    'section'  => 'maquina_logo_section',
    'settings' => 'maquina_logo',
) ) );

}
add_action('customize_register', 'add_logo_to_customizer');

function maquina_add_customizer_menu_item() {
    add_theme_page( 'Customize', 'Customize', 'edit_theme_options', 'customize.php' );
}
add_action ('admin_menu', 'maquina_add_customizer_menu_item');
