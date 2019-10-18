<?php
$testimonials_block = new \Svbk\WP\Theme\_svbk\Post_List_Block( 'testimonial', array( 'block_name' => 'svbk/testimonials' ) );

add_action( 'init', '_svbk_register_testimonials_blocks', 20 );

function _svbk_register_testimonials_blocks() {

	register_block_type(
		'svbk/author',
		array(
			'editor_script' => '_svbk-blocks',
		)
	);

	register_block_type(
		'svbk/rating',
		array(
			'editor_script' => '_svbk-blocks',
		)
	);

}

add_filter( 'block_editor_settings', '_svbk_rating_templates' );

function _svbk_rating_templates( $editor_settings ) {

	global $post;

	if ( 'testimonial' === $post->post_type ) {

		//$editor_settings['templateLock'] = 'all';
		$editor_settings['template'] = array(
			array(
				'svbk/testimonial',
			),
		);			

	}

	return $editor_settings;
}
