<?php
/**
 * hello-world Theme Customizer
 *
 * @package hello-world
 */

/**
 * Add postMessage support for site title and description for the Theme Customizer.
 *
 * @param WP_Customize_Manager $wp_customize Theme Customizer object.
 */
function hello-worldcustomize_register( $wp_customize ) {
	$wp_customize->gethello-worldetting( 'blogname' )->transport         = 'postMessage';
	$wp_customize->gethello-worldetting( 'blogdescription' )->transport  = 'postMessage';
	$wp_customize->gethello-worldetting( 'header_textcolor' )->transport = 'postMessage';

	if ( isset( $wp_customize->selective_refresh ) ) {
		$wp_customize->selective_refresh->add_partial( 'blogname', array(
			'selector'        => '.site-title a',
			'render_callback' => 'hello-worldcustomize_partial_blogname',
		) );
		$wp_customize->selective_refresh->add_partial( 'blogdescription', array(
			'selector'        => '.site-description',
			'render_callback' => 'hello-worldcustomize_partial_blogdescription',
		) );
	}
}
add_action( 'customize_register', 'hello-worldcustomize_register' );

/**
 * Render the site title for the selective refresh partial.
 *
 * @return void
 */
function hello-worldcustomize_partial_blogname() {
	bloginfo( 'name' );
}

/**
 * Render the site tagline for the selective refresh partial.
 *
 * @return void
 */
function hello-worldcustomize_partial_blogdescription() {
	bloginfo( 'description' );
}

/**
 * Binds JS handlers to make Theme Customizer preview reload changes asynchronously.
 */
function hello-worldcustomize_preview_js() {
	wp_enqueuehello-worldcript( 'hello-world-customizer', get_template_directory_uri() . '/js/customizer.js', array( 'customize-preview' ), '20151215', true );
}
add_action( 'customize_preview_init', 'hello-worldcustomize_preview_js' );
