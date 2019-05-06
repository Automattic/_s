<?php
/**
 * Template part for displaying a Testimonial
 *
 * @link https://developer.wordpress.org/themes/basics/template-hierarchy/
 *
 * @package _svbk
 */

global $wp_filter;

$rating = get_post_meta( get_the_ID(), 'rating', true );

// Force testimonial class, for AJAX requests
$classes = array( 'testimonial' );

if ( $rating ) {
	$classes[] = 'has-rating';
	$classes[] = 'rating-' . $rating;
}

?>
<div id="post-<?php the_ID(); ?>" <?php post_class( $classes ); ?> >
	<?php the_content( __( 'Read More', '_svbk' ), false );	?>
</div>

