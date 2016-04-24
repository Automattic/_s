<?php
/**
 * The template for displaying 404 pages (not found).
 *
 * @link https://codex.wordpress.org/Creating_an_Error_404_Page
 *
 * @package _bem
 */

get_header(); ?>

	<div id="primary" class="content-area _content__wrapper _content__wrapper-404">
		<main id="main" class="site-main _content__main _content__main--404" role="main">

			<section class="error-404 not-found _content__section _content__section--404">
				<header class="page-header _content__header _content__header--404">
					<h1 class="page-title _content__title _content__title--404"><?php esc_html_e( 'Oops! That page can&rsquo;t be found.', '_bem' ); ?></h1>
				</header><!-- .page-header -->

				<div class="page-content _content__article-content _content__article-content--404">
					<p class="_content__404-text"><?php esc_html_e( 'It looks like nothing was found at this location. Maybe try one of the links below or a search?', '_bem' ); ?></p>

					<?php
						get_search_form();

						the_widget( 'WP_Widget_Recent_Posts' );

						// Only show the widget if site has multiple categories.
						if ( _bem_categorized_blog() ) :
					?>

					<div class="widget widget_categories _content__categories _content__category--404">
						<h2 class="widget-title _content__category-title _content__category-title--404"><?php esc_html_e( 'Most Used Categories', '_bem' ); ?></h2>
						<ul class="_content__category-list">
						<?php
							wp_list_categories( array(
								'orderby'    => 'count',
								'order'      => 'DESC',
								'show_count' => 1,
								'title_li'   => '',
								'number'     => 10,
							) );
						?>
						</ul>
					</div><!-- .widget -->

					<?php
						endif;

						/* translators: %1$s: smiley */
						$archive_content = '<p class="_content__404-text">' . sprintf( esc_html__( 'Try looking in the monthly archives. %1$s', '_bem' ), convert_smilies( ':)' ) ) . '</p>';
						the_widget( 'WP_Widget_Archives', 'dropdown=1', "after_title=</h2>$archive_content" );

						the_widget( 'WP_Widget_Tag_Cloud' );
					?>

				</div><!-- .page-content -->
			</section><!-- .error-404 -->

		</main><!-- #main -->
	</div><!-- #primary -->

<?php
get_footer();
