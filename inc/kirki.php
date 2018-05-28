<?php

if( !class_exists( 'Kirki') ){
	return;
}

$field_defaults = [
	'fixed_background_image' => get_theme_file_uri( 'assets/images/defaults/fixed_background.png' )
];

/**
 * @see http://aristath.github.io/kirki/docs/config
 */
\Kirki::add_config( 'moon_boy', array(
	'capability'    => 'edit_theme_options',
	'option_type'   => 'theme_mod',
) );

/**
 * @see http://aristath.github.io/kirki/docs/adding-panels-and-sections
 */
\Kirki::add_panel( 'moon_boy_panel', array(
	'priority'    => 10,
	'title'       => esc_attr__( 'Moon Boy', 'moon_boy' ),
	'description' => esc_attr__( 'All theme related Moon Boy customizations can be found here', 'moon_boy' ),
) );

/**
 * @see http://aristath.github.io/kirki/docs/adding-panels-and-sections
 */
\Kirki::add_section( 'moon_boy_front_page', array(
	'title'          => esc_attr__( 'Front Page', 'moon_boy' ),
	'description'    => esc_attr__( 'Customize the Landing Page', 'moon_boy' ),
	'panel'          => 'moon_boy_panel',
	'priority'       => 160,
) );

/**
 * @see http://aristath.github.io/kirki/docs/controls/image.html
 */
\Kirki::add_field( 'moon_boy', array(
	'type'        => 'image',
	'settings'    => 'fixed_background_image',
	'label'       => esc_attr__( 'Fixed Background Image (URL)', 'moon_boy' ),
	'description' => esc_attr__( 'Configure the fixed background image.', 'moon_boy' ),
	'section'     => 'moon_boy_front_page',
	'default'     => $field_defaults['fixed_background_image'],
) );

/**
 * Ensure that theme mods serve back the default value if none was ever set
 */
foreach ( $field_defaults as $setting_name => $default_value ) {
	add_filter( "theme_mod_{$setting_name}", function ( $value ) use ($field_defaults, $setting_name) {
		return false === $value ? ( $field_defaults[$setting_name] ?? $value ) : $value;
	}, MoonBoy\DEFAULT_FILTER_PRIORITY );
}
