<?php
/**
 * The template for displaying all single posts.
 *
 * @link https://developer.wordpress.org/themes/basics/template-hierarchy/#single-post
 *
 * @package _bem
 */

get_header(); ?>

	<div id="primary" class="content-area _content__wrapper _content__wrapper--single">
		<main id="main" class="site-main _content__main _content__main--single" role="main">

		<?php
		while ( have_posts() ) : the_post();

			get_template_part( 'template-parts/content', get_post_format() ); ?>

			<ul class="_post-navigation">
				<li class="_post-navigation__item"><?php previous_post_link( '%link', '%title', true ); ?></li>
				<li class="_post-navigation__item"><?php next_post_link( '%link', '%title', true ); ?></li>
			</ul>
	
			<?php
			// If comments are open or we have at least one comment, load up the comment template.
			if ( comments_open() || get_comments_number() ) :
				comments_template();
			endif;

		endwhile; // End of the loop.
		?>

		</main><!-- #main -->
	</div><!-- #primary -->

<?php
get_sidebar();
get_footer();