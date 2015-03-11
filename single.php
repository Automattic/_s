<?php
/**
 * The template for displaying all single posts.
 *
 * @package YuMag
 */

get_header(); ?>

	<div id="primary" class="content-area">
		<main id="main" class="site-main" role="main">

		<?php // TODO MAKE THIS REAL CODE! ?>
		<header class="issue-header">
			<h1 class="issue-title"><a href="#"><span class="issue-number">Issue One</span> / <span class="issue-date">April 2015</span></a></h1>
		</header>

		<?php while ( have_posts() ) : the_post(); ?>

			<?php get_template_part( 'content', 'single' ); ?>

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
