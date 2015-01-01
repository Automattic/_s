<?php
/**
 * The template for displaying search results pages.
 *
 * @package _s
 */

get_header(); ?>

	<section id="primary" class="content-area">
    <?php tha_content_top();
		<main id="main" class="site-main" role="main">

		<?php if ( have_posts() ) : ?>

			<header class="page-header">
				<h1 class="page-title"><?php printf( __( 'Search Results for: %s', '_s' ), '<span>' . get_search_query() . '</span>' ); ?></h1>
			</header><!-- .page-header -->

			<?php /* Start the Loop */ ?>
			<?php while ( have_posts() ) : the_post(); ?>
            <?php tha_entry_before(); ?>
				<?php
				/**
				 * Run the loop for the search to output the results.
				 * If you want to overload this in a child theme then include a file
				 * called content-search.php and that will be used instead.
				 */
				get_template_part( 'content', 'search' );
				?>

			<?php endwhile; ?>

			<?php _s_paging_nav(); ?>

		<?php else : ?>

			<?php get_template_part( 'content', 'none' ); ?>
        <?php tha_entry_after(); ?>
		<?php endif; ?>

		</main><!-- #main -->
    <?php tha_content_bottom(); ?>
	</section><!-- #primary -->
    <?php tha_content_after(); ?>

<?php get_sidebar(); ?>
<?php get_footer(); ?>
