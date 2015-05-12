<?php
/**
 * The template for displaying 404 pages (not found).
 *
 * @package YuMag
 */

get_header(); ?>

	<div id="primary" class="content-area error-404 page-not-found">

		<header class="archive-header">
			<h1 class="archive-title"><?php printf( '%1$s: <span class="archive-term">%2$s</span>',
				_x( 'Error', '404 error title', 'yumag' ),
				_x( '404', '404 error title', 'yumag' )
			); ?></h1>
		</header><!-- .page-header -->

		<main id="main" class="site-main" role="main">
			<div class="entry single-entry">
				<div class="entry-above-footer single-entry-above-footer">
					<header class="entry-header">
						<h1 class="entry-title"><?php esc_html_e( 'Page not found', 'yumag' ); ?></h1>
					</header><!-- .entry-header -->

					<div class="entry-content">
						<p class="lead"><?php printf( __( 'Sorry, it looks like nothing was found at this web address. Click %1$s to go to the current issue of <i>yu magazine</i>, or try searching for what you’re looking for:', 'yumag' ),
							sprintf( '<strong><a href="%2$s">%1$s</a></strong>',
								__( 'Latest Issue', 'yumag' ),
								home_url( '/' )
							)
						); ?></p>

						<div class="page-search">
							<?php get_search_form(); ?>
						</div>

					</div>

				</div><!-- .entry-above-footer -->
			</div><!-- .entry -->

		</main><!-- #main -->
	</div><!-- #primary -->

<?php get_footer(); ?>
