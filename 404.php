<?php
/**
 * The template for displaying 404 pages (not found)
 *
 * @link https://codex.wordpress.org/Creating_an_Error_404_Page
 *
 * @package nascsp
 */

get_header(); ?>

	<div id="primary" class="content-area">
		<main id="main" class="site-main">

			<section class="error-404 not-found"> 
					 <h2>404</h2>		
					<h3><?php esc_html_e( 'Oops! That page can&rsquo;t be found.', 'jacquee' ); ?></h3>
				    <a class="button" href="<?php echo esc_url( home_url( '/' ) ); ?>">Back to Home</a> 
				
			</section><!-- .error-404 -->

		</main><!-- #main -->
	</div><!-- #primary -->

<?php
get_footer();
