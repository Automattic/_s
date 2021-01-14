<?php
/**
 * The template for displaying 404 pages (not found)
 *
 * @link https://codex.wordpress.org/Creating_an_Error_404_Page
 *
 * @package _s
 */

get_header();
?>

	<main id="primary" class="mr-main site-main">

		<section class="mr-section error-404 not-found">
			<header class="page-header">
				<h1 class="page-title"><?php esc_html_e( 'Oops! That page can&rsquo;t be found.', '_s' ); ?></h1>
			</header><!-- .page-header -->

			<div class="page-content">
				
				<?php
					if ( is_active_sidebar( 'empty-error' ) ) {
						dynamic_sidebar( 'empty-error' );
					}
				?>

			</div><!-- .page-content -->
		</section><!-- .error-404 -->

	</main><!-- #main -->

<?php
get_footer();
