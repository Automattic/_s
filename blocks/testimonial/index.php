<?php

use Svbk\WP\Theme\_svbk;

function _svbk_register_testimonials_blocks() {

	register_block_type(
		'svbk/testimonials',
		array(
			'attributes'                  => array(
				'align' => array(
					'type' => 'string',
				),
				'categories' => array(
					'type' => 'string',
				),
				'className' => array(
					'type' => 'string',
				),
				'postsToShow' => array(
					'type'    => 'number',
					'default' => 5,
				),
				'displayPostDate' => array(
					'type'    => 'boolean',
					'default' => false,
				),
				'postLayout' => array(
					'type'    => 'string',
					'default' => 'list',
				),
				'columns' => array(
					'type'    => 'number',
					'default' => 3,
				),
				'align' => array(
					'type' => 'string',
				),
				'order' => array(
					'type'    => 'string',
					'default' => 'desc',
				),
				'orderBy' => array(
					'type'    => 'string',
					'default' => 'date',
				),
				'offset' => array(
					'type'    => 'number',
					'default' => 3,
				),
				'loadMore' => array(
					'type'    => 'boolean',
					'default' => false,
				),
			),
			'render_callback'             => '_svbk_render_testimonials_block',
			'editor_script'               => '_svbk-blocks',
		)
	);

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

add_action( 'init', '_svbk_register_testimonials_blocks', 20 );

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

function _svbk_render_testimonials_block( $attributes, $content ) {

	$attributes = filter_var_array(
		$attributes,
		array(
			'loadMore'		=> FILTER_VALIDATE_BOOLEAN,
			'postsToShow' => array(
				'filter'    => FILTER_VALIDATE_INT,
				'options'   => array( 'min_range' => 1 ),
			),
			'paged' => array(
				'filter'    => FILTER_VALIDATE_INT,
				'options'   => array( 'min_range' => 1 ),
			),
			'offset' => array(
				'filter'    => FILTER_VALIDATE_INT,
				'options'   => array( 'min_range' => 1 ),
			),
			'categories' => array(
				'filter'    => FILTER_VALIDATE_INT,
				'options'   => array( 'min_range' => 1 ),
			),
			'order' => array(
				'filter'    => FILTER_SANITIZE_STRING,
				'options'   => FILTER_FLAG_STRIP_LOW | FILTER_FLAG_STRIP_HIGH | FILTER_FLAG_STRIP_BACKTICK,
			),
			'orderBy' => array(
				'filter'    => FILTER_SANITIZE_STRING,
				'options'   => FILTER_FLAG_STRIP_LOW | FILTER_FLAG_STRIP_HIGH | FILTER_FLAG_STRIP_BACKTICK,
			),
		)
	);

	$matches = array();
	$classes = '';
	if ( preg_match( '/class="([^"]+)"/i', $content, $matches ) ) {
		$classes = $matches[1];
	}

	$attributes = array(
		'orderby'        => $attributes['orderBy'],
		'order'          => $attributes['order'],
		'posts_per_page' => $attributes['postsToShow'],
		'paged'          => $attributes['paged'],
		'offset'         => $attributes['offset'],
		'categories'     => $attributes['categories'],
		'load_more'      => $attributes['loadMore'],
		'containerClass' => $classes,
	);

	$content = apply_filters( 'feedback_render_testimonial', '', $attributes );

	return $content;
}

