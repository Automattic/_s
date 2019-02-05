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

		$post_format = filter_input( INPUT_GET, 'post_format', FILTER_SANITIZE_STRING, FILTER_FLAG_STRIP_LOW | FILTER_FLAG_STRIP_HIGH | FILTER_FLAG_STRIP_BACKTICK );

		if ( ! $post_format ) {
			$post_format = $post->post_format;
		}

		switch ( $post_format ) {
			case 'video':
				$editor_settings['template'] = array(
					array(
						'core/columns',
						array(
							'className' => 'testimonial__wrapper',
							'columns'   => 2,
						),
						array(
							array(
								'core/column',
								array(
									'className' => 'testimonial__meta',
								),
								array(
									array(
										'core/video',
										array(
											'className' => 'testimonial__video',
										),
									),
									array(
										'svbk/author',
										array(
											'className' => 'testimonial__author-name',
										),
									),
									array(
										'svbk/rating',
										array(
											'className' => 'testimonial__rating',
										),
									),
								),
							),
							array(
								'core/column',
								array(
									'className' => 'testimonial__content',
								),
								array(
									array(
										'core/paragraph',
										array(
											'placeholder' => __( 'Testimonial content', '_svbk' ),
										),
									),
								),
							),
						),
					),
				);
				break;

			case 'image':
				$editor_settings['template'] = array(
					array(
						'core/image',
						array(
							'className' => 'testimonial__image',
						),
					),
					array(
						'svbk/author',
						array(
							'className' => 'testimonial__author-name',
						),
					),
					array(
						'svbk/rating',
						array(
							'className' => 'testimonial__rating',
						),
					),
				);
				break;

			case 'link':
				$editor_settings['template'] = array(
					array(
						'core/columns',
						array(
							'className' => 'testimonial__wrapper',
							'columns'   => 2,
						),
						array(
							array(
								'core/column',
								array(
									'className' => 'testimonial__meta',
								),
								array(
									array(
										'core/image',
										array(
											'className' => 'testimonial__company-logo',
										),
									),
									array(
										'core/paragraph',
										array(
											'className' => 'testimonial__date',
										),
									),
								),
							),
							array(
								'core/column',
								array(
									'className' => 'testimonial__content',
								),
								array(
									array(
										'core/paragraph',
										array(
											'className'   => 'testimonial__abstract',
											'placeholder' => __( 'Testimonials Abstract', '_svbk' ) . '...',
										),
									),
									array(
										'svbk/author',
										array(
											'className' => 'testimonial__author',
										),
									),
									array(
										'core/button',
										array(
											'className'   => 'testimonial__link',
											'placeholder' => __( 'Link to external resource', '_svbk' ),
										),
									),
								),
							),
						),
					),
				);
				break;
			default:
				$editor_settings['template'] = array(
					array(
						'core/columns',
						array(
							'className' => 'testimonial__wrapper',
							'columns'   => 2,
						),
						array(
							array(
								'core/column',
								array(
									'className' => 'testimonial__meta',
								),
								array(
									array(
										'core/image',
										array(
											'className' => 'testimonial__author-image',
										),
									),
									array(
										'svbk/author',
										array(),
									),
									array(
										'svbk/rating',
										array(),
									),
								),
							),
							array(
								'core/column',
								array(
									'className' => 'testimonial__content',
								),
								array(
									array(
										'core/paragraph',
										array(
											'placeholder' => __( 'Testimonial content', '_svbk' ),
										),
									),
								),
							),
						),
					),
				);
		}
	}

	return $editor_settings;
}

function _svbk_render_testimonials_block( $attributes, $content ) {

	$attributes = filter_var_array(
		$attributes,
		array(
			'loadMore'              => FILTER_VALIDATE_BOOLEAN,
			'postsToShow'           => array(
				'filter'    => FILTER_VALIDATE_INT,
				'options'   => array( 'min_range' => 1 ),
			),
			'paged'                 => array(
				'filter'    => FILTER_VALIDATE_INT,
				'options'   => array( 'min_range' => 1 ),
			),
			'offset'                => array(
				'filter'    => FILTER_VALIDATE_INT,
				'options'   => array( 'min_range' => 1 ),
			),
			'categories'            => array(
				'filter'    => FILTER_VALIDATE_INT,
				'options'   => array( 'min_range' => 1 ),
			),
			'order'                 => array(
				'filter'    => FILTER_SANITIZE_STRING,
				'options'   => FILTER_FLAG_STRIP_LOW | FILTER_FLAG_STRIP_HIGH | FILTER_FLAG_STRIP_BACKTICK,
			),
			'orderBy'               => array(
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

