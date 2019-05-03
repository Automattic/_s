<?php
/**
 * Template part for displaying a Testimonial
 *
 * @link https://developer.wordpress.org/themes/basics/template-hierarchy/
 *
 * @package _svbk
 */

$rating = get_post_meta( get_the_ID(), 'rating', true );

// Force testimonial class, for AJAX requests
$classes = array( 'testimonial', 'testimonial--' . get_post_format() );

if ( $rating ) {
	$classes[] = 'has-rating';
	$classes[] = 'rating-' . $rating;
}

?>
<div id="post-<?php the_ID(); ?>" <?php post_class( $classes ); ?> >
	<?php echo force_balance_tags( apply_filters( 'the_content', get_the_content(false, false) ) ); ?>
</div>

