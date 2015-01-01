<?php
/**
 * The template for displaying all pages.
 *
 * This is the template that displays all pages by default.
 * Please note that this is the WordPress construct of pages
 * and that other 'pages' on your WordPress site will use a
 * different template.
 *
 * @package _s
 */

get_header(); ?>

	<div id="primary" class="content-area">
    <?php tha_content_top(); ?>
		<main id="main" class="site-main" role="main">

			<?php while ( have_posts() ) : the_post(); ?>
            <?php tha_entry_before() ?>
				<?php get_template_part( 'content', 'page' ); ?>

				<?php
					// If comments are open or we have at least one comment, load up the comment template
					if ( comments_open() || get_comments_number() ) :
						comments_template();
					endif;
				?>
            <?php tha_entry_after(); ?>
			<?php endwhile; // end of the loop. ?>

		</main><!-- #main -->
    <?php tha_content_bottom(); ?>
	</div><!-- #primary -->
    <?php tha_content_after(); ?>

<?php get_sidebar(); ?>
<?php get_footer(); ?>
