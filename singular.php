<?php
/**
 * The template for displaying all pages, single posts and attachments
 *
 * This is a new template file that WordPress introduced in
 * version 4.3: https://core.trac.wordpress.org/changeset/32846
 * Note that it uses conditional logic to display
 * different content based on the post type.
 *
 * @package _s
 */

get_header(); ?>

	<div id="primary" class="content-area">
		<main id="main" class="site-main" role="main">
			<?php
			while ( have_posts() ) : the_post();

				if ( is_singular( 'page' ) ) {
					get_template_part( 'template-parts/content', 'page' );
				} else {
					get_template_part( 'template-parts/content', 'single' );
				}

				// If comments are open or we have at least one comment, load up the comment template.
				if ( comments_open() || get_comments_number() ) {
					comments_template();
				}

				if ( is_singular( array( 'post', 'attachment' ) ) ) {
					the_post_navigation();
				}

			endwhile; // End of the loop.
			?>

		</main><!-- #main -->
	</div><!-- #primary -->

<?php get_sidebar(); ?>
<?php get_footer(); ?>
