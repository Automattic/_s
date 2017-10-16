<?php
/**
 * The template for displaying the contact page
 *
 * Please note that this is the WordPress construct of pages
 * and that other 'pages' on your WordPress site may use a
 * different template.
 *
 * @link https://codex.wordpress.org/Template_Hierarchy
 *
 * @package _s
 */

get_header(); ?>

	<div id="primary" class="content-area">
		<main id="main" class="site-main">

			<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3043.63070056928!2d-74.78494468518257!3d40.283953071629064!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c3fd4c8537ee03%3A0xb9d181ed161718fd!2sLife+Ties!5e0!3m2!1sen!2sus!4v1508015983247" width="600" height="450" frameborder="0" style="border:0" allowfullscreen></iframe>
      <?php while ( have_posts() ) : the_post(); ?>
				<h2><?php the_title(); ?></h2>
				<?php the_content(); ?>
			<?php endwhile; // end of the loop. ?>
		</main><!-- #main -->
	</div><!-- #primary -->

<?php
get_footer();
