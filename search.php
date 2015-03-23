<?php
/**
 * The template for displaying search results pages.
 *
 * @package YuMag
 */

get_header(); ?>

	<div class="search-results-search">
		<?php get_search_form(); ?>
	</div>

	<section id="primary" class="content-area">

		<header class="archive-header search-header">
			<h1 class="archive-title search-title"><?php printf( __( 'Search results for &ldquo;%s&rdquo;', 'yumag' ), '<span class="search-term">' . get_search_query() . '</span>' ); ?></h1>
		</header><!-- .archive-header -->

		<main id="main" class="site-main" role="main">

		<?php if ( have_posts() ) : ?>

			<section class="search-section">
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
