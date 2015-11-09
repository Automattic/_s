<?php
/**
 * _s Theme Customizer.
 *
 * @package _s
 */

/**
 * Add postMessage support for site title and description for the Theme Customizer.
 *
 * @param WP_Customize_Manager $wp_customize Theme Customizer object.
 */
function _s_customize_register( $wp_customize ) {
	$wp_customize->get_setting( 'blogname' )->transport         = 'postMessage';
	$wp_customize->get_setting( 'blogdescription' )->transport  = 'postMessage';
	$wp_customize->get_setting( 'header_textcolor' )->transport = 'postMessage';

	// Add our social link options
    $wp_customize->add_section(
        '_s_social_links_section',
        array(
            'title'       => __( 'Social Links', '_s' ),
            'description' => __( 'These are the settings for social links. Please limit the number of social links to 5.', '_s' ),
            'priority'    => 90,
        )
    );

    // Create an array of our social links for ease of setup
    $social_networks = array( 'twitter', 'facebook', 'instagram' );

    // Loop through our networks to setup our fields
    foreach( $social_networks as $network ) {

	    $wp_customize->add_setting(
	        '_s_' . $network . '_link',
	        array(
	            'default' => '',
	            'sanitize_callback' => '_s_sanitize_customizer_url'
	        )
	    );
	    $wp_customize->add_control(
	        '_s_' . $network . '_link',
	        array(
	            'label'   => sprintf( __( '%s Link', '_s' ), ucwords( $network ) ),
	            'section' => '_s_social_links_section',
	            'type'    => 'text',
	        )
	    );
    }

    // Add our Footer Customization section section
    $wp_customize->add_section(
        '_s_footer_section',
        array(
            'title'    => __( 'Footer Customization', '_s' ),
            'priority' => 90,
        )
    );

    // Add our copyright text field
    $wp_customize->add_setting(
        '_s_copyright_text',
        array(
            'default'           => '',
            'sanitize_callback' => '_s_sanitize_customizer_text'
        )
    );
    $wp_customize->add_control(
        '_s_copyright_text',
        array(
            'label'       => __( 'Copyright Text', '_s' ),
            'description' => __( 'The copyright text will be displayed beneath the menu in the footer.', '_s' ),
            'section'     => '_s_footer_section',
            'type'        => 'text',
        )
    );
}
add_action( 'customize_register', '_s_customize_register' );

/**
 * Binds JS handlers to make Theme Customizer preview reload changes asynchronously.
 */
function _s_customize_preview_js() {
	wp_enqueue_script( '_s_customizer', get_template_directory_uri() . '/js/customizer.js', array( 'customize-preview' ), '20130508', true );
}
add_action( 'customize_preview_init', '_s_customize_preview_js' );

/**
 * Sanitize our customizer text inputs
 */
function _s_sanitize_customizer_text( $input ) {
    return sanitize_text_field( force_balance_tags( $input ) );
}

/**
 * Sanitize our customizer URL inputs
 */
function _s_sanitize_customizer_url( $input ) {
    return esc_url( $input );
}