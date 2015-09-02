<?php
/**
 * Template Name: Page Builder Only
 *
 * @package _s
 */

get_header(); ?>

	<div class="wrap">

		<div class="primary content-area">
			<main id="main" class="site-main" role="main">

				<?php wds_page_builder_load_parts(); ?>

			</main><!-- #main -->
		</div><!-- .primary -->

	</div><!-- .wrap -->

<?php get_footer(); ?>
