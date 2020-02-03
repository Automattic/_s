<?php
/**
 * '_svbk' Theme Customizer
 *
 * @package _svbk
 */

use Svbk\WP\Helpers\Config;

/**
 * Add postMessage support for site title and description for the Theme Customizer.
 *
 * @param WP_Customize_Manager $wp_customize Theme Customizer object.
 */
function _svbk_customize_register( $wp_customize ) {
	$wp_customize->get_setting( 'blogname' )->transport         = 'postMessage';
	$wp_customize->get_setting( 'blogdescription' )->transport  = 'postMessage';
	$wp_customize->get_setting( 'header_textcolor' )->transport = 'postMessage';

	// Mobile Logo.
	$wp_customize->add_setting( 'custom_logo_mobile' );

	$wp_customize->add_control(
		new WP_Customize_Media_Control(
			$wp_customize,
			'custom_logo_mobile',
			array(
				'label'     => __( 'Mobile Logo', '_svbk' ),
				'section'   => 'title_tagline',
				'mime_type' => 'image',
			)
		)
	);

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

	// Set native image sizes settings to allow starter-content to save those options
	$native_image_sizes = array(
		'thumbnail',
		'medium',
		'medium_large',
		'large'
	);

	foreach( $native_image_sizes as $native_image_size ) {
		
		$wp_customize->add_setting(
			$native_image_size . '_size_w',
			array(
				'default'    => get_option( $native_image_size . '_size_w' ),
				'capability' => 'manage_options',
				'type'       => 'option',
			)
		);	

		$wp_customize->add_setting(
			$native_image_size . '_size_h',
			array(
				'default'    => get_option( $native_image_size . '_size_h' ),
				'capability' => 'manage_options',
				'type'       => 'option',
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

/**
 * Add mobile logo switching via <picture> tag
 */
function _svbk_custom_logo_with_mobile( $custom_logo_html, $blog_id ){

    $html          = '';
    $switched_blog = false;
	
	if ( is_multisite() && ! empty( $blog_id ) && (int) $blog_id !== get_current_blog_id() ) {
        switch_to_blog( $blog_id );
        $switched_blog = true;
    }

	$custom_logo_mobile_id = get_theme_mod( 'custom_logo_mobile' );
	$custom_logo_id = get_theme_mod( 'custom_logo' );

	// No mobile log set, use default behavior
	if ( !$custom_logo_id || !$custom_logo_mobile_id ) {
		return $custom_logo_html;
	}
 
	$custom_logo = wp_get_attachment_image_src( $custom_logo_id, 'medium' );
	$custom_logo_attr = array();
	$custom_logo_mobile_attr = array();

	if ( ! $custom_logo ) {
		return $custom_logo_html;
	}

	list($custom_logo_src, $width, $height) = $custom_logo;
	
	// Generate 'srcset' and 'sizes'
	$image_meta = wp_get_attachment_metadata( $custom_logo_id );

	if ( is_array( $image_meta ) ) {
		$size_array = array( absint( $width ), absint( $height ) );
		$custom_logo_attr['srcset'] = wp_calculate_image_srcset( $size_array, $custom_logo_src, $image_meta, $custom_logo_id );
		if ( $custom_logo_attr['srcset'] ) {
			$custom_logo_attr['sizes']  = wp_calculate_image_sizes( $size_array, $custom_logo_src, $image_meta, $custom_logo_id );
		}
	}

	$breakpoints = Config::get( 'main_breakpoints', '_svbk' );
	$custom_logo_attr['media'] = sprintf('(min-width: %dpx)', $breakpoints['tablet-landscape']);

	$custom_logo_attr_string = '';
	foreach ( $custom_logo_attr as $name => $value ) {
		$custom_logo_attr_string .= " $name=" . '"' . $value . '"';
	}	

	/*
	* If the logo alt attribute is empty, get the site title and explicitly
	* pass it to the attributes used by wp_get_attachment_image().
	*/
	$image_alt = get_post_meta( $custom_logo_id, '_wp_attachment_image_alt', true );
	if ( empty( $image_alt ) ) {
		$custom_logo_mobile_attr['alt'] = get_bloginfo( 'name', 'display' );
	}

	$image_html = 
		'<picture class="custom-logo" >' .
			'<source ' . $custom_logo_attr_string . '/>'.
			wp_get_attachment_image( $custom_logo_mobile_id, 'medium', false, $custom_logo_mobile_attr) .
		'</picture>';

	$html = sprintf(
		'<a href="%1$s" class="custom-logo-link" rel="home">%2$s</a>',
		esc_url( home_url( '/' ) ),
		$image_html
	);
 
    if ( $switched_blog ) {
		restore_current_blog();
	}

	return $html;
}

add_filter( 'get_custom_logo', '_svbk_custom_logo_with_mobile', 10, 2); 