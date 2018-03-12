<?php
/**
 * _s Theme Customizer
 *
 * @package _s
 */

if ( ! function_exists( '_s_customize_register' ) ) :
	/**
	 * Add postMessage support for site title and description for the Theme Customizer.
	 *
	 * @param WP_Customize_Manager $wp_customize Theme Customizer object.
	 */
	function _s_customize_register( $wp_customize ) {
		$wp_customize->get_setting( 'blogname' )->transport         = 'postMessage';
		$wp_customize->get_setting( 'blogdescription' )->transport  = 'postMessage';
		$wp_customize->get_setting( 'header_textcolor' )->transport = 'postMessage';

		if ( isset( $wp_customize->selective_refresh ) ) {
			$wp_customize->selective_refresh->add_partial( 'blogname', array(
				'selector'        => '.site-title a',
				'render_callback' => '_s_customize_partial_blogname',
			) );
			$wp_customize->selective_refresh->add_partial( 'blogdescription', array(
				'selector'        => '.site-description',
				'render_callback' => '_s_customize_partial_blogdescription',
			) );
		}
	}
endif;
add_action( 'customize_register', '_s_customize_register' );

if ( ! function_exists( '_s_customize_partial_blogname' ) ) :
	/**
	 * Render the site title for the selective refresh partial.
	 *
	 * @return void
	 */
	function _s_customize_partial_blogname() {
		bloginfo( 'name' );
	}
endif;

if ( ! function_exists( '_s_customize_partial_blogdescription' ) ) :
	/**
	 * Render the site tagline for the selective refresh partial.
	 *
	 * @return void
	 */
	function _s_customize_partial_blogdescription() {
		bloginfo( 'description' );
	}
endif;
if ( ! function_exists( '_s_customize_preview_js' ) ) :
	/**
	 * Binds JS handlers to make Theme Customizer preview reload changes asynchronously.
	 */
	function _s_customize_preview_js() {
		wp_enqueue_script( '_s-customizer', get_template_directory_uri() . '/js/customizer.js', array( 'customize-preview' ), '20151215', true );
	}
endif;
add_action( 'customize_preview_init', '_s_customize_preview_js' );
