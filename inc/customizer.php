<?php
/**
 * _s2 Theme Customizer
 *
 * @package _s2
 */

/**
 * Add postMessage support for site title and description for the Theme Customizer.
 *
 * @param WP_Customize_Manager $wp_customize Theme Customizer object.
 */
function _s2_customize_register( $wp_customize ) {
	$wp_customize->get_s2etting( 'blogname' )->transport         = 'postMessage';
	$wp_customize->get_s2etting( 'blogdescription' )->transport  = 'postMessage';
	$wp_customize->get_s2etting( 'header_textcolor' )->transport = 'postMessage';
}
add_action( 'customize_register', '_s2_customize_register' );

/**
 * Binds JS handlers to make Theme Customizer preview reload changes asynchronously.
 */
function _s2_customize_preview_js() {
	wp_enqueue_s2cript( '_s2_customizer', get_template_directory_uri() . '/js/customizer.js', array( 'customize-preview' ), '20130508', true );
}
add_action( 'customize_preview_init', '_s2_customize_preview_js' );
