<?php
/**
 * _s functions and definitions
 *
 * @link https://developer.wordpress.org/themes/basics/theme-functions/
 *
 * @package _s
 */

function _s_get_asset_enqueues( $asset_name, $asset_extension ) {
	$is_hot = (!empty( $_GET['dev'] ));

	if ( 'css' === $asset_extension && $is_hot ) {
		// Do not include CSS assets when hot reloading, as they are part of the
		// js bundle.
		return;
	}

	$uri = $is_hot ? '//localhost:8080' : get_template_directory_uri() . '/static';

	$enqueue_function = ( 'css' === $asset_extension ) ?
		'wp_enqueue_style' : 'wp_enqueue_script';

	return $enqueue_function(
			"_s-{$asset_name}-{$asset_extension}",
			"{$uri}/{$asset_name}.min.{$asset_extension}",
			array(),
			'1.0'
		);
}

/**
 * Enqueue scripts and styles.
 */
function _s_scripts() {
	$assets = [
		'css' => 'global',
		'js' => 'global',
	];

	foreach( $assets as $asset_extension => $asset_name ) {
		_s_get_asset_enqueues( $asset_name, $asset_extension );
	}
}
add_action( 'wp_enqueue_scripts', '_s_scripts' );
