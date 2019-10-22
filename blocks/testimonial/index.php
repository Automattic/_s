<?php
$testimonials_block = new \Svbk\WP\Theme\_svbk\Post_List_Block( 'testimonial', array( 'block_name' => 'svbk/testimonials' ) );
$testimonial_embed_block = new \Svbk\WP\Theme\_svbk\Post_Block( 'testimonial', array( 'block_name' => 'svbk/testimonial-embed' ) );

add_action( 'init', '_svbk_register_testimonials_blocks', 20 );

function _svbk_register_testimonials_blocks() {

	register_block_type(
		'svbk/testimonial',
		array(
			'editor_script' => '_svbk-blocks',
			'attributes' => array(
				'backgroundColor' => array(
					'type' => 'string',
				),
				'customBackgroundColor' => array(
					'type' => 'string',
				),
				'textColor' => array(
					'type' => 'string',
				),
				'customTextColor' => array(
					'type' => 'string',
				),				
			),
			'render_callback' => '_svbk_testimonial_block_render',			
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
add_filter( 'block_editor_settings', '_svbk_rating_templates' );

function _svbk_testimonial_block_render($attributes, $content) {

    $classes = array( 'wp-block-svbk-testimonial' );

    if ( isset( $attributes['className'] )) {
        $classes[] = trim($attributes['className']);
    }

	$rating = get_post_meta( get_the_ID(), 'rating', true );

	
	if ( $rating ) {
		$classes[] = 'has-rating';
		$classes[] = 'rating-' . $rating;
	}

	$output = '<div class="'. join($classes, ' ') .'" >';
	
	ob_start();
	
		get_template_part( 'template-parts/meta', 'testimonial' ); 
		echo '<div class="wp-block-svbk-testimonial__content" >';
		echo $content;
		echo '</div>';
	
	$output .= ob_get_contents();
	ob_end_clean();   

    $output .= '</div>';

    return $output;
}


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