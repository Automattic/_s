<?php
/**
 * The template for displaying archive pages.
 *
 * Learn more: http://codex.wordpress.org/Template_Hierarchy
 *
 * @package YuMag
 */

get_header(); ?>

	<div id="primary" class="content-area">

		<header class="archive-header">
			<?php the_archive_title( '<h1 class="archive-title">', '</h1>' ); ?>
		</header><!-- .archive-header -->

		<main id="main" class="site-main" role="main">

		<?php if ( have_posts() ) : ?>

			<section class="archive-section">
				<div class="index-content">
					<div class="index-posts">
						<div>
						<?php /* Start the Loop */ ?>
						<?php while ( have_posts() ) : the_post(); ?>
							<?php get_template_part( 'content', get_post_format() ); ?>
						<?php endwhile; ?>
						</div>
					</div><!-- .index-posts -->
				</div><!-- .index-content -->
				<footer class="next-prev-wrap">
					<?php the_posts_navigation(); ?>
				</footer><!-- .next-prev-wrap -->
			</section><!-- .archive-section -->

		<?php else : ?>

			<?php get_template_part( 'content', 'none' ); ?>

		<?php endif; ?>

		</main><!-- #main -->
	</div><!-- #primary -->

<?php get_sidebar(); ?>
<?php get_footer(); ?>
