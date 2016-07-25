/**
 * Setup the WordPress core custom background feature.
 * Hooks into the after_setup_theme action.
 */
 
function _s_register_custom_background() {
    $args = array(
        'default-color' => 'e6e6e6', // Defines the default background color
    );
 
    $args = apply_filters( 'shape_custom_background_args', $args );
 
    if ( function_exists( 'wp_get_theme' ) ) {
        add_theme_support( 'custom-background', $args );
    } else {
        define( 'BACKGROUND_COLOR', $args['default-color'] );
        define( 'BACKGROUND_IMAGE', $args['default-image'] );
        add_custom_background();
    }
}
add_action( 'after_setup_theme', '_s_register_custom_background' );
 
/**
