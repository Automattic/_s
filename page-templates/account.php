<?php
/**
 * Template Name: Account
 *
 * This template has the following changes:
 * HEADER: no menu, no top header
 * FOOTER: no logo, no fixed bar, company info
 * COMMENTS: none
 *
 * @link https://codex.wordpress.org/Template_Hierarchy
 *
 * @package _svbk
 */

get_header( 'account' );
?>

	<div id="primary" class="content-area">
		<main id="main" class="site-main">

		<?php
		while ( have_posts() ) :
			the_post();

			get_template_part( 'template-parts/content', 'page' );

		endwhile; // End of the loop.
		?>

		</main><!-- #main -->
	</div><!-- #primary -->

<?php
get_footer();
