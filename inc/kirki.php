<?php
/**
 * Moon Boy Theme Customizer via Kirki
 *
 * @package moon-boy
 */

$theme_mod_defaults = [
	'fixed_background_image' => 'https://github.com/craigiswayne/moon-boy/wiki/assets/images/fixed-background-netnuus.png',
];

/**
 * Ensure that theme mods serve back the default value if none was ever set
 * ...independent of whether kirki is active or not
 */
foreach ( $theme_mod_defaults as $setting_name => $default_value ) {
	add_filter( "theme_mod_{$setting_name}", function ( $value ) use ($theme_mod_defaults, $setting_name) {
		return false === $value ? ( $theme_mod_defaults[$setting_name] ?? $value ) : $value;
	}, MoonBoy\DEFAULT_FILTER_PRIORITY );
}

$filter_defaults = [
	'get_custom_logo' => sprintf( '<a href="%1$s" class="custom-logo-link" rel="home" itemprop="url"><img alt="%3$s" class="custom-logo" src="%2$s" itemprop="logo" /></a>',
		esc_url( home_url( '/' ) ),
		'https://github.com/craigiswayne/moon-boy/wiki/assets/images/logo-netnuus.png',
		get_bloginfo( 'name', 'display' )
	),
];


/**
 * Set a default custom logo if none is set
 * ... allows for setting this via the customizer as well :)
 */
add_filter( 'get_custom_logo', function( $html, $blog_id ) use ($filter_defaults) {
	$result = $html === '' || ( is_customize_preview() && !has_custom_logo() ) ? ( $filter_defaults[ current_filter() ] ?? $html ) : $html;
	return $result;
}, MoonBoy\DEFAULT_FILTER_PRIORITY, 2);


/**
 * Guard clause in the event the kirki plugin is inactive or not installed
 */
if( !class_exists( 'Kirki') ){
	return;
}


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
	'default'     => $theme_mod_defaults['fixed_background_image'],
) );