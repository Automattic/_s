<?php
/**
 * Blocks Initializer
 *
 * Enqueue CSS/JS of all the blocks.
 *
 * @since   1.0.0
 * @package CGB
 */

// Exit if accessed directly.
if ( ! defined( 'ABSPATH' ) ) {
	exit;
}

/**
 * Enqueue Gutenberg block assets for both frontend + backend.
 *
 * `wp-blocks`: includes block type registration and related functions.
 *
 * @since 1.0.0
 */
function _svbk_blocks_assets() {
	// Styles.
	wp_enqueue_style(
		'_svbk-blocks',
		get_theme_file_uri( '/dist/css/blocks.style.build.css' ),
		array( 'wp-blocks' ) 
	);
} 

// Hook: Frontend assets.
add_action( 'enqueue_block_assets', '_svbk_blocks_assets' );

/**
 * Enqueue Gutenberg block assets for backend editor.
 *
 * `wp-blocks`: includes block type registration and related functions.
 * `wp-element`: includes the WordPress Element abstraction for describing the structure of your blocks.
 * `wp-i18n`: To internationalize the block's text.
 *
 * @since 1.0.0
 */
function _svbk_blocks_editor_assets() {
	
	wp_enqueue_script(
		'_svbk-blocks',
		get_theme_file_uri( '/dist/js/blocks.build.js' ), 
		array( 'wp-blocks', 'wp-i18n', 'wp-element', 'wp-editor' ),
		null,
		true
	);

	wp_enqueue_style(
		'_svbk-blocks-editor',
		get_theme_file_uri( '/dist/css/blocks.editor.build.css' ), 
		array( 'wp-edit-blocks' )
	);
} 


add_action( 'enqueue_block_editor_assets', '_svbk_blocks_editor_assets' );

require 'testimonials/index.php';
require 'latest-posts/index.php';
require 'countdown/index.php';
require 'product/index.php';
require 'flickity/index.php';
require 'call-us/index.php';
