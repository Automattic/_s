<?php
/**
 *
 * @package YuMag
 */

get_header(); ?>

	<div id="primary" class="content-area">
		<main id="main" class="site-main" role="main">

		<?php if ( have_posts() ) : ?>

			<section class="archive-section">
				<div class="index-content">
					<div class="index-posts">
						<div>

						<?php /* Start the Loop */ ?>

						<?php while ( have_posts() ) : the_post(); ?>

							<?php get_template_part( 'content', 'yumag_notice' ); ?>

							<?php
								// If comments are open or we have at least one comment, load up the comment template
								if ( comments_open() || get_comments_number() ) :
									comments_template();
								endif;
							?>

						<?php endwhile; ?>
						<?php the_posts_navigation(); ?>

						</div>
					</div><!-- .index-posts -->
				</div><!-- .index-content -->
			</section><!-- .archive-section -->

		<?php else : ?>

			<?php get_template_part( 'content', 'none' ); ?>

		<?php endif; ?>

		</main><!-- #main -->
	</div><!-- #primary -->

<?php get_sidebar(); ?>
<?php get_footer(); ?>
