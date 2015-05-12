<?php
/**
 * Custom functions that customise the Admin area for improved compatibility
 * with this theme.
 *
 * @package YuMag
 */

if ( ! function_exists( 'yumag_tinymce_setup' ) ) :
/**
 * Customize the TinyMCE editor used for editing of posts and pages.
 *
 * @since 1.0.0
 *
 * @param array $settings TinyMCE initialization settings.
 * @return array Revised TinyMCE settings.
 */
function yumag_tinymce_setup( $settings ) {

	// Get the Formats dropdown contents.
	if ( ! empty( $settings['block_formats'] ) ) {
		$block_formats = explode( ';', $settings['block_formats'] );

		/*
		 * Don't allow user to select these default formats:
		 * - Pre
		 * - Heading 1
		 * - Heading 2
		 * - Heading 6
		 */
		$block_formats = array_diff( $block_formats, array(
			'Pre=pre',
			'Heading 1=h1',
			'Heading 2=h2',
			'Heading 6=h6'
		) );
	} else {
		$block_formats = array(
			'Paragraph=p',
			'Heading 3=h3',
			'Heading 4=h4',
			'Heading 5=h5'
		);
	}

	// Re-add some block formats with different names.
	$block_formats[] = 'Title=h2';

	$settings['block_formats'] = implode( ';', $block_formats );

	// Tell TinyMCE how to style the new formats.
	if ( ! empty( $settings['style_formats'] ) ) {
		$style_formats = json_decode( $settings['style_formats'] );
	} else {
		$style_formats = array();
	}

	$new_styles = array(
		array(
			'title' => _x( 'Lead', 'TinyMCE styles dropdown', 'yumag' ),
			'block' => 'p',
			'classes' => 'lead'
		),
		array(
			'title' => _x( 'Coloured box (full width)', 'TinyMCE styles dropdown', 'yumag' ),
			'block' => 'aside',
			'classes' => 'textbox',
			'wrapper' => true
		),
		array(
			'title' => _x( 'Coloured box (half width)', 'TinyMCE styles dropdown', 'yumag' ),
			'block' => 'aside',
			'classes' => 'textbox side',
			'wrapper' => true
		),
		array(
			'title' => _x( '60 Seconds box', 'TinyMCE styles dropdown', 'yumag' ),
			'block' => 'aside',
			'classes' => 'sixty-seconds',
			'wrapper' => true
		),
		array(
			'title' => _x( 'What\'s On box', 'TinyMCE styles dropdown', 'yumag' ),
			'block' => 'aside',
			'classes' => 'whats-on',
			'wrapper' => true
		),
		array(
			'title' => _x( 'Details block', 'TinyMCE styles dropdown', 'yumag' ),
			'block' => 'div',
			'classes' => 'content-details',
			'wrapper' => true
		),
		array(
			'title' => _x( 'Dept/college/class-of', 'TinyMCE styles dropdown', 'yumag' ),
			'inline' => 'i',
			'classes' => 'student-details'
		),
		array(
			'title' => _x( 'Quote source', 'TinyMCE styles dropdown', 'yumag' ),
			'block' => 'p',
			'classes' => 'quote-source'
		),
		array(
			'title' => _x( 'Call-to-action', 'TinyMCE styles dropdown', 'yumag' ),
			'block' => 'aside',
			'classes' => 'call-to-action',
			'wrapper' => true
		)
	);
	$style_formats = array_merge( $style_formats, $new_styles );
	$settings['style_formats'] = json_encode( $style_formats );

	return $settings;
}
add_filter( 'tiny_mce_before_init', 'yumag_tinymce_setup' );
endif;

if ( ! function_exists( 'yumag_tinymce_buttons_row_1' ) ) :
/**
 * Customize the first row of TinyMCE.
 *
 * @since 1.0.0
 *
 * @param array $buttons Buttons to be displayed in the first row.
 * @return array Buttons to display.
 */
function yumag_tinymce_buttons_row_1( $buttons ) {

	// Add buttons.
	array_unshift( $buttons,
		'undo',
		'redo',
		'formatselect',
		'styleselect'
	);

	// Remove buttons.
	$buttons = array_diff( $buttons, array(
		'alignleft',
		'aligncenter',
		'alignright',
		'wp_more',
		'strikethrough',
		'wpUserAvatar'
	) );

	return $buttons;
}
// Priority 11 to override the button added by WP User Avatar plugin.
add_filter( 'mce_buttons', 'yumag_tinymce_buttons_row_1', 11 );
endif;

if ( ! function_exists( 'yumag_tinymce_buttons_row_2' ) ) :
/**
 * Customize the second (usually hidden) row of TinyMCE.
 *
 * @since 1.0.0
 *
 * @param array $buttons Buttons to be displayed in the second row.
 * @return array Buttons to display.
 */
function yumag_tinymce_buttons_row_2( $buttons ) {

	// Add buttons.
	array_unshift( $buttons,
		'wp_more',
		'alignleft',
		'aligncenter',
		'alignright',
		'strikethrough'
	);

	// Remove buttons.
	$buttons = array_diff( $buttons, array(
		'formatselect',
		'underline',
		'alignjustify',
		'forecolor',
		'undo',
		'redo'
	) );

	return $buttons;
}
add_filter( 'mce_buttons_2', 'yumag_tinymce_buttons_row_2' );
endif;
