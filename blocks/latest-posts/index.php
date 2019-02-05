<?php

/**
 * Renders the `core/latest-posts` block on server.
 *
 * @param array $attributes The block attributes.
 *
 * @return string Returns the post content with latest posts added.
 */
function _svbk_override_block_core_latest_posts() {
	$latest_posts_block                  = WP_Block_Type_Registry::get_instance()->get_registered( 'core/latest-posts' );
	$latest_posts_block->render_callback = '_svbk_render_block_core_latest_posts';
}

add_action( 'init', '_svbk_override_block_core_latest_posts', 11 );

/**
 * Renders the `core/latest-posts` block on server.
 *
 * @param array $attributes The block attributes.
 *
 * @return string Returns the post content with latest posts added.
 */
function _svbk_render_block_core_latest_posts( $attributes ) {
	$args = array(
		'posts_per_page' => $attributes['postsToShow'],
		'post_status'    => 'publish',
		'order'          => $attributes['order'],
		'orderby'        => $attributes['orderBy'],
	);

	if ( isset( $attributes['categories'] ) ) {
		$args['category'] = $attributes['categories'];
	}

	$posts_query = new WP_Query( $args );

	ob_start();

	while ( $posts_query->have_posts() ) :
		$posts_query->the_post();
		get_template_part( 'template-parts/preview', get_post_type() );
	endwhile;

	wp_reset_postdata();

	$items_markup = ob_get_contents();
	ob_end_clean();

	$classes = array( 'wp-block-latest-posts' );

	if ( isset( $attributes['align'] ) ) {
		$classes[] = 'align' . $attributes['align'];
	}

	if ( isset( $attributes['postLayout'] ) && 'grid' === $attributes['postLayout'] ) {
		$classes[] = 'is-grid';
	}

	if ( isset( $attributes['columns'] ) && 'grid' === $attributes['postLayout'] ) {
		$classes[] = 'columns-' . $attributes['columns'];
	}

	if ( isset( $attributes['displayPostDate'] ) && $attributes['displayPostDate'] ) {
		$classes[] = 'has-dates';
	}

	if ( isset( $attributes['className'] ) ) {
		$classes[] = $attributes['className'];
	}

	$block_content = sprintf(
		'<div class="%1$s">%2$s</div>',
		esc_attr( join( $classes, ' ' ) ),
		$items_markup
	);

	return $block_content;
}
