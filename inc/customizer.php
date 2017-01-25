<?php
/**
 * _svbk Theme Customizer
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
	
}
add_action( 'customize_register', '_svbk_customize_register' );

/**
 * Binds JS handlers to make Theme Customizer preview reload changes asynchronously.
 */
function _svbk_customize_preview_js() {
	wp_enqueue_script( '_svbk_customizer', get_template_directory_uri() . '/js/customizer.js', array( 'customize-preview' ), '20151215', true );
}
add_action( 'customize_preview_init', '_svbk_customize_preview_js' );
