<?php
/*
Single Post Template: Images right, content left
*/

/**
 * Single post template for displaying content next to a right-aligned featured
 * image.
 *
 * @package YuMag
 */

/* Additional body classes. */
add_filter( 'body_class', 'yumag_template_classes_single_scrolling_right' );

get_header(); ?>

	<div id="primary" class="content-area">
		<main id="main" class="site-main" role="main">

		<?php while ( have_posts() ) : the_post(); ?>
			<?php get_template_part( 'content', 'single-two-column' ); ?>
			<?php
				// If comments are open or we have at least one comment, load up the comment template
				if ( comments_open() || get_comments_number() ) :
					comments_template();
				endif;
			?>
		<?php endwhile; // end of the loop. ?>

		</main><!-- #main -->

	</div><!-- #primary -->

<?php get_sidebar(); ?>
<?php get_footer(); ?>
