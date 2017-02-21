<?php
/**
 *'_svbk'Theme Customizer
 *
 * @package _svbk
 */

/**
 * Add postMessage support for site title and description for the Theme Customizer.
 *
 * @param WP_Customize_Manager $wp_customize Theme Customizer object.
 */
function _svbk_customize_register( $wp_customize ) {
	$wp_customize->get_setting( 'blogname' )->transport         = 'postMessage';
	$wp_customize->get_setting( 'blogdescription' )->transport  = 'postMessage';
	$wp_customize->get_setting( 'header_textcolor' )->transport = 'postMessage';

	//Header
	$wp_customize->get_section( 'header_image' )->title = __('Header', '_svbk');

	$wp_customize->add_setting( 'sticky_header', array(
	  'default' => false,
	));

	$wp_customize->add_control( 'sticky_header', array(
	  'label' => __( 'Sticky Header', '_svbk' ),
	  'description' => __( 'Makes the header stay on top of page after scroll', '_svbk' ),
	  'section' => 'header_image',
	  'type' => 'checkbox',
	));

	$wp_customize->add_setting( 'header_cycle_images', array(
	  'default' => false,
	));

	$wp_customize->add_control( 'header_cycle_images', array(
	  'label' => __( 'Fade header images', '_svbk' ),
	  'description' => __( 'Cycle through all header images with a CSS fade effect', '_svbk' ),
	  'section' => 'header_image',
	  'type' => 'checkbox',
	));

	//Archives
	$wp_customize->add_section( 'archives', array(
	  'title' => __( 'Archives', '_svbk' ),
	  'description' => __( 'Archive Customizations', '_svbk' ),
	  'priority' => 160,
	) );

	//Archives descriptions
	$custom_post_types =  get_post_types( array('public' => true, '_builtin' => false) , 'objects' );

	foreach($custom_post_types as $cpt){

		$wp_customize->add_setting( "archive_{$cpt->name}_image", array(
		'sanitize_callback'=>'wp_kses_post',
		));
		$wp_customize->add_setting( "archive_{$cpt->name}_description", array(
		'sanitize_callback'=>'wp_kses_post',
		));

		$wp_customize->add_control( new WP_Customize_Media_Control( $wp_customize, "archive_{$cpt->name}_image", array(
		  'label' => sprintf(__( '%s Archive Image', '_svbk' ), $cpt->label),
		  'section' => 'archives',
		  'mime_type' => 'image',
		) ) );

		$wp_customize->add_control( "archive_{$cpt->name}_description", array(
		  'label' =>  sprintf(__( '%s Archive Description', '_svbk' ), $cpt->label),
		  'type' => 'textarea',
		  'section' => 'archives',
		) );

	}

	//Footer setings
	$wp_customize->add_setting( 'footer_logo' );
	$wp_customize->add_section( 'footer', array(
	  'title' => __( 'Footer', '_svbk' ),
	  'description' => __( 'Footer Settings', '_svbk' ),
	  'priority' => 160,
	) );

	$wp_customize->add_control( new WP_Customize_Media_Control( $wp_customize, 'footer_logo', array(
	  'label' => __( 'Footer Logo', '_svbk' ),
	  'section' => 'footer',
	  'mime_type' => 'image',
	) ) );

	$wp_customize->add_setting( 'fixed_footer_bar_content', array(
		'sanitize_callback'=>'wp_kses_post',
	));
	$wp_customize->add_setting( 'fixed_footer_bar', array(
	  'default' => false,
	));

	$wp_customize->add_control( 'fixed_footer_bar_content', array(
	  'label' => __( 'Fixed Footer Bar', 'studiolegalemauro' ),
	  'description' => __( 'Fixed Footer Bar Content (supports HTML and shortcode)', 'studiolegalemauro' ),
	  'section' => 'footer',
	  'type' => 'textarea',
	));

	$wp_customize->add_control( 'fixed_footer_bar', array(
	  'label' => __( 'Show Fixed Footer Bar', 'studiolegalemauro' ),
	  'section' => 'footer',
	  'type' => 'checkbox',

	));

}
add_action( 'customize_register', '_svbk_customize_register' );

/**
 * Binds JS handlers to make Theme Customizer preview reload changes asynchronously.
 */
function _svbk_customize_preview_js() {
	wp_enqueue_script( '_svbk_customizer', get_template_directory_uri() . '/js/customizer.js', array( 'customize-preview' ), '20151215', true );
}
add_action( 'customize_preview_init', '_svbk_customize_preview_js' );
