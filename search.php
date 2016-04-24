<?php
/**
 * The template for displaying search results pages.
 *
 * @link https://developer.wordpress.org/themes/basics/template-hierarchy/#search-result
 *
 * @package _bem
 */

get_header(); ?>

	<section id="primary" class="content-area _content__wrapper _content__wrapper--search">
		<main id="main" class="site-main _content__main _content__main--search" role="main">

		<?php
		if ( have_posts() ) : ?>

			<header class="page-header _content__header _content__header--search">
				<h1 class="page-title _content__title _content__title--search"><?php printf( esc_html__( 'Search Results for: %s', '_bem' ), '<span class="_content__title-query">' . get_search_query() . '</span>' ); ?></h1>
			</header><!-- .page-header -->

			<?php
			/* Start the Loop */
			while ( have_posts() ) : the_post();

				/**
				 * Run the loop for the search to output the results.
				 * If you want to overload this in a child theme then include a file
				 * called content-search.php and that will be used instead.
				 */
				get_template_part( 'template-parts/content', 'search' );

			endwhile;

			the_posts_navigation();

		else :

			get_template_part( 'template-parts/content', 'none' );

		endif; ?>

		</main><!-- #main -->
	</section><!-- #primary -->

<?php
get_sidebar();
get_footer();
