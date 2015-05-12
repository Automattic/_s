<?php
/**
 * The partial for displaying a Featured Content area using Ideal Image Slider.
 *
 * @since 1.0.0
 * @link https://github.com/gilbitron/Ideal-Image-Slider
 *
 * @package YuMag
 */

global $post;
$GLOBALS['slider_captions'] = '';

// All HTML for the post captions (which must be outputted outside the slider
// object) will be added to this string.
if ( yumag_has_featured_posts() ) : ?>

	<?php
	// Get the featured posts, in random order.
	$featured_posts = yumag_get_featured_posts();
	shuffle( $featured_posts );
	?>

	<div class="js-slider">
		<?php
		// First featured post.
		$post = $featured_posts[0];
		setup_postdata( $post );
		get_template_part( 'content-featured', 'first' );

		// All other featured posts.
		for ( $i = 1, $l = count( $featured_posts ); $i < $l; $i++ ) {
			$post = $featured_posts[ $i ];
			setup_postdata( $post );
			get_template_part( 'content-featured' );
		}

		// Clean up ready for the Loop.
		wp_reset_postdata();
		?>
	</div>

	<?php // Output the captions.
	echo $GLOBALS['slider_captions'];
	?>

<?php endif; ?>
