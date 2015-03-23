<?php
/**
 * The template for displaying search results pages.
 *
 * @package YuMag
 */

get_header(); ?>

	<section id="primary" class="content-area">
		<main id="main" class="site-main" role="main">

		<?php if ( have_posts() ) : ?>

			<section class="search-section">
				<header class="page-header search-header">
					<h1 class="page-title"><?php printf( __( 'Search for &ldquo;%s&rdquo;', 'yumag' ), '<span>' . get_search_query() . '</span>' ); ?></h1>
				</header><!-- .page-header -->

				<div class="index-content search-contents">
					<div class="index-posts search-posts">
						<div>

						<?php /* Start the Loop */ ?>
						<?php while ( have_posts() ) : the_post(); ?>
							<?php get_template_part( 'content', 'search' ); ?>
						<?php endwhile; ?>

						<?php the_posts_navigation(); ?>

						</div>
					</div><!-- .index-posts -->
				</div><!-- .index-content -->
			</section><!-- .search-section -->

		<?php else : ?>

			<?php get_template_part( 'content', 'none' ); ?>

		<?php endif; ?>

		</main><!-- #main -->
	</section><!-- #primary -->

<?php get_sidebar(); ?>
<?php get_footer(); ?>
