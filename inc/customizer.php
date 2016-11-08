<?php
/**
 * _svbkvbk Theme Customizer.
 *
 * @package _svbkvbk
 */

/**
 * Add postMessage support for site title and description for the Theme Customizer.
 *
 * @param WP_Customize_Manager $wp_customize Theme Customizer object.
 */
function _svbkvbk_customize_register( $wp_customize ) {
	$wp_customize->get_svbketting( 'blogname' )->transport         = 'postMessage';
	$wp_customize->get_svbketting( 'blogdescription' )->transport  = 'postMessage';
	$wp_customize->get_svbketting( 'header_textcolor' )->transport = 'postMessage';
}
add_action( 'customize_register', '_svbk_customize_register' );

/**
 * Binds JS handlers to make Theme Customizer preview reload changes asynchronously.
 */
function _svbkvbk_customize_preview_js() {
	wp_enqueue_svbkcript( '_svbk_customizer', get_template_directory_uri() . '/js/customizer.js', array( 'customize-preview' ), '20151215', true );
}
add_action( 'customize_preview_init', '_svbk_customize_preview_js' );
