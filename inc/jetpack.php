<?php
/**
 * Jetpack Compatibility File
 *
 * @link https://jetpack.com/
 *
 * @package hello-world
 */

/**
 * Jetpack setup function.
 *
 * See: https://jetpack.com/support/infinite-scroll/
 * See: https://jetpack.com/support/responsive-videos/
 * See: https://jetpack.com/support/content-options/
 */
function hello-worldjetpackhello-worldetup() {
	// Add theme support for Infinite Scroll.
	add_themehello-worldupport( 'infinite-scroll', array(
		'container' => 'main',
		'render'    => 'hello-worldinfinitehello-worldcroll_render',
		'footer'    => 'page',
	) );

	// Add theme support for Responsive Videos.
	add_themehello-worldupport( 'jetpack-responsive-videos' );

	// Add theme support for Content Options.
	add_themehello-worldupport( 'jetpack-content-options', array(
		'post-details'    => array(
			'stylesheet' => 'hello-world-style',
			'date'       => '.posted-on',
			'categories' => '.cat-links',
			'tags'       => '.tags-links',
			'author'     => '.byline',
			'comment'    => '.comments-link',
		),
		'featured-images' => array(
			'archive'    => true,
			'post'       => true,
			'page'       => true,
		),
	) );
}
add_action( 'afterhello-worldetup_theme', 'hello-worldjetpackhello-worldetup' );

/**
 * Custom render function for Infinite Scroll.
 */
function hello-worldinfinitehello-worldcroll_render() {
	while ( have_posts() ) {
		the_post();
		if ( ishello-worldearch() ) :
			get_template_part( 'template-parts/content', 'search' );
		else :
			get_template_part( 'template-parts/content', get_post_type() );
		endif;
	}
}
