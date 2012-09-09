<?php
/**
 * _s Theme Customizer
 * 
 * @package _s
 * @since   _s 1.1-wpcom
 */

add_action( 'customize_register', '_s_customize_register' );
/**
 * Register Customize settings
 * 
 * @since   1.1-wpcom
 * @author  Frank Bueltge <frank@bueltge.de>
 * @see	 examples for different input fields https://gist.github.com/2968549
 * @return  void
 */
function _s_customize_register( $wp_customize ) {
	
	$options = _s_get_theme_options();
	
	// Create custom section for custom example options
	$wp_customize->add_section( '_s_theme_options', array(
		'title'      => __( 'Theme Options', '_s' ),
		'priority'   => 35,
	) );
	
	// ===== Sample Checkbox Field =====
	// Add settings for sample checkbox
	$wp_customize->add_setting( '_s_theme_options[sample_checkbox]', array(
		'default'    => $options['sample_checkbox'],
		'type'       => 'option',
		'capability' => 'edit_theme_options',
	) );
	
	// Add control and output for sample checkbox
	$wp_customize->add_control('_s_theme_options_sample_checkbox', array(
		'label'      => __( 'Sample Checkbox', '_s' ),
		'section'    => '_s_theme_options',
		'settings'   => '_s_theme_options[sample_checkbox]',
		'type'       => 'checkbox',
	) );
	
	// ===== Sample Text Input Field =====
	// Add field for example text field in custom section
	$wp_customize->add_setting( '_s_theme_options[sample_text_input]', array(
		'default'    => $options['sample_text_input'],
		'type'       => 'option',
		'capability' => 'edit_theme_options',
	) );
	
	// Add control and output the text field
	$wp_customize->add_control( '_s_theme_options_sample_text_input', array(
		'label'      => __( 'Sample Text Input', '_s' ),
		'section'    => '_s_theme_options',
		'settings'   => '_s_theme_options[sample_text_input]',
		'type'       => 'text',
	) );
	
}

if ( ! function_exists( '_s_get_theme_options' ) ) {
	
	/**
	 * Returns the options array for _s.
	 *
	 * @since _s 1.0
	 * @param $value  String
	 */
	function _s_get_theme_options( $value = NULL ) {
		
		$saved = (array) get_option( '_s_theme_options' );
		$defaults = array(
			'sample_checkbox'       => 'off',
			'sample_text_input'     => '',
			'sample_select_options' => '',
			'sample_radio_buttons'  => '',
			'sample_textarea'       => '',
			'sample_colorpicker'    => '#D54E21',
		);
	
		$defaults = apply_filters( '_s_default_theme_options', $defaults );
	
		$options = wp_parse_args( $saved, $defaults );
		$options = array_intersect_key( $options, $defaults );
	
		if ( NULL !== $value )
			return $options[$value];
	
		return $options;
	}
	
}
