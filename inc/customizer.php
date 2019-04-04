<?php
/**
 * '_svbk'Theme Customizer
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

	// Header.
	$wp_customize->get_section( 'header_image' )->title = __( 'Header', '_svbk' );

	$wp_customize->add_setting(
		'sticky_header',
		array(
			'default' => false,
		)
	);

	$wp_customize->add_control(
		'sticky_header',
		array(
			'label'       => __( 'Sticky Header', '_svbk' ),
			'description' => __( 'Makes the header stay on top of page after scroll', '_svbk' ),
			'section'     => 'header_image',
			'type'        => 'checkbox',
		)
	);

	$wp_customize->add_setting(
		'header_cycle_images',
		array(
			'default' => false,
		)
	);

	$wp_customize->add_control(
		'header_cycle_images',
		array(
			'label'       => __( 'Fade header images', '_svbk' ),
			'description' => __( 'Cycle through all header images with a CSS fade effect', '_svbk' ),
			'section'     => 'header_image',
			'type'        => 'checkbox',
		)
	);
	
	$wp_customize->add_setting(
		'header_top_bar',
		array(
			'default' => false,
		)
	);
	
	$wp_customize->add_control(
		'header_top_bar',
		array(
			'label'       => __( 'Show Top Header', '_svbk' ),
			'description' => __( 'Show either company phone number and/or opening hours in a top header bar', '_svbk' ),
			'section'     => 'header_image',
			'type'        => 'checkbox',
		)
	);

	// Archives.
	$wp_customize->add_section(
		'archives',
		array(
			'title'       => __( 'Archives', '_svbk' ),
			'description' => __( 'Archive Customizations', '_svbk' ),
			'priority'    => 160,
		)
	);

	// Archives descriptions.
	$custom_post_types = get_post_types(
		array(
			'public'   => true,
			'_builtin' => false,
		),
		'objects'
	);

	foreach ( $custom_post_types as $cpt ) {

		$wp_customize->add_setting(
			"archive_{$cpt->name}_image",
			array(
				'sanitize_callback' => 'wp_kses_post',
			)
		);

		$wp_customize->add_setting(
			"archive_{$cpt->name}_description",
			array(
				'sanitize_callback' => 'wp_kses_post',
			)
		);

		$wp_customize->add_control(
			new WP_Customize_Media_Control(
				$wp_customize,
				"archive_{$cpt->name}_image",
				array(
					/* translators: %s represents the post type name */
					'label'     => sprintf( __( '%s Archive Image', '_svbk' ), $cpt->label ),
					'section'   => 'archives',
					'mime_type' => 'image',
				)
			)
		);

		$wp_customize->add_control(
			"archive_{$cpt->name}_description",
			array(
				/* translators: %s represents the post type name */
				'label'   => sprintf( __( '%s Archive Description', '_svbk' ), $cpt->label ),
				'type'    => 'textarea',
				'section' => 'archives',
			)
		);

	}

	// Footer settings.
	$wp_customize->add_setting( 'footer_logo' );
	$wp_customize->add_section(
		'footer',
		array(
			'title'       => __( 'Footer', '_svbk' ),
			'description' => __( 'Footer Settings', '_svbk' ),
			'priority'    => 160,
		)
	);

	$wp_customize->add_control(
		new WP_Customize_Media_Control(
			$wp_customize,
			'footer_logo',
			array(
				'label'     => __( 'Footer Logo', '_svbk' ),
				'section'   => 'footer',
				'mime_type' => 'image',
			)
		)
	);

	$wp_customize->add_setting(
		'fixed_footer_bar_content',
		array(
			'sanitize_callback' => 'wp_kses_post',
		)
	);

	$wp_customize->add_setting(
		'fixed_footer_bar',
		array(
			'default' => false,
		)
	);

	$wp_customize->add_control(
		'fixed_footer_bar_content',
		array(
			'label'       => __( 'Fixed Footer Bar', '_svbk' ),
			'description' => __( 'Fixed Footer Bar Content (supports HTML and shortcode)', '_svbk' ),
			'section'     => 'footer',
			'type'        => 'textarea',
		)
	);

	$wp_customize->add_control(
		'fixed_footer_bar',
		array(
			'label'   => __( 'Show Fixed Footer Bar', '_svbk' ),
			'section' => 'footer',
			'type'    => 'checkbox',

		)
	);

	// Contacts.
	$wp_customize->add_section(
		'contacts',
		array(
			'title'       => __( 'Contacts', '_svbk' ),
			'description' => __( 'Contact informations', '_svbk' ),
			'priority'    => 180,
		)
	);

	$wp_customize->add_setting(
		'company_name',
		array(
			'sanitize_callback' => 'wp_kses_post',
		)
	);

	$wp_customize->add_setting(
		'company_address',
		array(
			'sanitize_callback' => 'wp_kses_post',
		)
	);

	$wp_customize->add_setting(
		'company_phone',
		array(
			'sanitize_callback' => 'wp_kses_post',
		)
	);

	$wp_customize->add_setting(
		'company_email',
		array(
			'sanitize_callback' => 'sanitize_email',
		)
	);
	
	$wp_customize->add_setting(
		'company_opening_hours',
		array(
			'sanitize_callback' => 'sanitize_post',
		)
	);
	
	$wp_customize->add_setting(
		'company_vat',
		array(
			'sanitize_callback' => 'wp_kses_post',
		)
	);	

	$wp_customize->add_control(
		'company_name',
		array(
			'label'   => __( 'Company Name', '_svbk' ),
			'type'    => 'text',
			'section' => 'contacts',
		)
	);

	$wp_customize->add_control(
		'company_address',
		array(
			'label'   => __( 'Address', '_svbk' ),
			'type'    => 'textarea',
			'section' => 'contacts',
		)
	);

	$wp_customize->add_control(
		'company_phone',
		array(
			'label'   => __( 'Phone', '_svbk' ),
			'type'    => 'text',
			'section' => 'contacts',
		)
	);

	$wp_customize->add_control(
		'company_email',
		array(
			'label'   => __( 'Email', '_svbk' ),
			'type'    => 'email',
			'section' => 'contacts',
		)
	);
	
	$wp_customize->add_control(
		'company_opening_hours',
		array(
			'label'   => __( 'Opening Hours', '_svbk' ),
			'type'    => 'textarea',
			'section' => 'contacts',
		)
	);

	$wp_customize->add_control(
		'company_vat',
		array(
			'label'   => __( 'VAT ID', '_svbk' ),
			'type'    => 'text',
			'section' => 'contacts',
		)
	);

	if ( isset( $wp_customize->selective_refresh ) ) {
		$wp_customize->selective_refresh->add_partial(
			'blogname',
			array(
				'selector'        => '.site-title a',
				'render_callback' => '_svbk_customize_partial_blogname',
			)
		);
		$wp_customize->selective_refresh->add_partial(
			'blogdescription',
			array(
				'selector'        => '.site-description',
				'render_callback' => '_svbk_customize_partial_blogdescription',
			)
		);
	}

}
add_action( 'customize_register', '_svbk_customize_register' );

/**
 * Render the site title for the selective refresh partial.
 *
 * @return void
 */
function _svbk_customize_partial_blogname() {
	bloginfo( 'name' );
}

/**
 * Render the site tagline for the selective refresh partial.
 *
 * @return void
 */
function _svbk_customize_partial_blogdescription() {
	bloginfo( 'description' );
}

/**
 * Binds JS handlers to make Theme Customizer preview reload changes asynchronously.
 */
function _svbk_customize_preview_js() {
	wp_enqueue_script( '_svbk-customizer', get_template_directory_uri() . '/js/customizer.js', array( 'customize-preview' ), '20151215', true );
}
add_action( 'customize_preview_init', '_svbk_customize_preview_js' );
