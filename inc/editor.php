<?php
/**
 *
 * Add custom buttons and styles to WP editor
 *
 * @package _svbk
 */

/**
 * Insert custom formats in the WP editor select
 *
 * @param array $init_array The tinyMCE config array (values are json encoded).
 *
 * @return array
 **/
function _svbk_mce_insert_formats( $init_array ) {

	// Define the style_formats array.
	$style_formats = array(
		// Each array child is a format with it's own settings.
		array(
			'title' => __( 'Dropcap', '_svbk' ),
			'inline' => 'span',
			'classes' => 'dropcap',
			'wrapper' => true,
		),
		array(
			'title' => __( 'Section', '_svbk' ),
			'block' => 'section',
			'classes' => 'content-section',
			'wrapper' => true,
		),
		array(
			'title' => __( 'Collapse', '_svbk' ),
			'block' => 'div',
			'classes' => 'collapsible',
			'wrapper' => true,
		),

		array(
			'title' => __( 'Accordion', '_svbk' ),
			'block' => 'div',
			'classes' => 'accordion',
			'wrapper' => true,
		),

		array(
			'title' => __( 'Subtitle', '_svbk' ),
			'block' => 'div',
			'classes' => 'subtitle',
			'wrapper' => true,
		),
		array(
			'title' => __( 'Callout / Pull Quote', '_svbk' ),
			'block' => 'aside',
			'classes' => 'callout',
			'wrapper' => true,
		),
		array(
			'title' => __( 'Highlighted Paragraph', '_svbk' ),
			'block' => 'p',
			'classes' => 'highlighted',
			'wrapper' => false,
		),

	);

	// Insert the array, JSON ENCODED, into 'style_formats'.
	$init_array['style_formats'] = json_encode( $style_formats );

	return $init_array;

}

// Attach callback to 'tiny_mce_before_init'.
add_filter( 'tiny_mce_before_init', '_svbk_mce_insert_formats' );

/**
 * Callback function to insert 'styleselect' into the $buttons array.
 *
 * @param array $buttons The existing tinyMCE buttons.
 *
 * @return array
 **/
function _svbk_mce_buttons( $buttons ) {
	array_unshift( $buttons, 'styleselect' );
	return $buttons;
}

// Register our callback to the appropriate filter.
add_filter( 'mce_buttons_2', '_svbk_mce_buttons' );

/**
 * This callback adds the tinyMCE buttons to WP editor.
 *
 * @return void
 **/
function _svbk_custom_tinymce_buttons() {

	  // Abort early if the user will never see TinyMCE.
	  if ( ! current_user_can( 'edit_posts' ) && ! current_user_can( 'edit_pages' ) && get_user_option( 'rich_editing' ) == 'true' ) {
	   return;
	  }

	  // Add a callback to regiser our tinymce plugin.
	  add_filter( 'mce_external_plugins', '_svbk_register_tinymce_plugins' );

	  // Add a callback to add our button to the TinyMCE toolbar.
	  add_filter( 'mce_buttons', '_svbk_add_tinymce_button' );
}

// init process for registering our button.
add_action( 'init', '_svbk_custom_tinymce_buttons' );

/**
 * This callback registers our plug-in.
 *
 * @param array $plugin_array The existing plugin array.
 *
 * @return array
 **/
function _svbk_register_tinymce_plugins( $plugin_array ) {
	$plugin_array['_svbk_helper_buttons'] = get_theme_file_uri( '/js/tinymce.plugins.js' );
	return $plugin_array;
}

/**
 * This callback adds our button to the toolbar.
 *
 * @param array $buttons The existing tinyMCE buttons.
 *
 * @return array
 **/
function _svbk_add_tinymce_button( $buttons ) {
	// Add the button ID to the $button array.
	$buttons[] = 'section_button';
	$buttons[] = 'split_section_button';

	return $buttons;
}
