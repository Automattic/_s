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
		'_svbk-blocks', // Handle.
		get_theme_file_uri( '/dist/css/blocks.style.build.css' ), // Block style CSS.
		array( 'wp-blocks' ) // Dependency to include the CSS after it.
	);
} // End function _svbk_block_assets().

// Hook: Frontend assets.
// add_action( 'enqueue_block_assets', '_svbk_blocks_assets' );

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
	// Scripts.
	wp_enqueue_script(
		'_svbk-blocks', // Handle.
		get_theme_file_uri( '/dist/js/blocks.build.js' ), // Block.build.js: We register the block here. Built with Webpack.
		array( 'wp-blocks', 'wp-i18n', 'wp-element' ), // Dependencies, defined above.
		null,
		true // Enqueue the script in the footer.
	);

	// Styles.
	// wp_enqueue_style(
	// '_svbk-blocks-editor', // Handle.
	// get_theme_file_uri( '/dist/css/blocks.editor.build.css'), // Block editor CSS.
	// array( 'wp-edit-blocks' ) // Dependency to include the CSS after it.
	// );
	// Styles.
	wp_enqueue_style(
		'_svbk-blocks-editor', // Handle.
		get_theme_file_uri( '/dist/css/block-editor.css' ), // Block editor CSS.
		array( 'wp-edit-blocks' ) // Dependency to include the CSS after it.
	);
} // End function _svbk_blocks_editor_assets().

// Hook: Editor assets.
add_action( 'enqueue_block_editor_assets', '_svbk_blocks_editor_assets' );

require 'testimonials/index.php';
