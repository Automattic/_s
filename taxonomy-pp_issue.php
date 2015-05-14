<?php
/**
 * The template for displaying an Issue page (using the taxonomy created by
 * PeriodicalPress plugin:
 * {@link http://www.github.com/cjbarnes/periodicalpress/}).
 *
 * @package YuMag
 */

/*
 * Start with a list of sections (specifically their slugs), in order. The key
 * holds the slug; the value defines how many flexbox columns to use (or
 * 0|False for no flexbox).
 */
$sections = array(
	'yorklife' => 0,
	'open-minds' => 2,
	'centre-stage' => 3,
	'all-about-yu' => 0,
	'back-page' => 0
);

// URL-path to images.
$src = get_template_directory_uri() . '/assets/';

get_header(); ?>

	<div id="primary" class="content-area">

		<?php if ( is_home() ) : ?>
			<section class="issue-section slider">
				<?php get_template_part( 'slider' ); ?>
			</section>
		<?php endif; ?>

		<main id="main" class="site-main" role="main">

		<?php if ( have_posts() ) : ?>

			<?php // Run through the loop, once for each section. ?>
			<?php foreach( $sections as $section => $flex ) : ?>
				<?php $cat = get_category_by_slug( $section ) ?>
				<section class="issue-section category-section category-<?php echo $section; ?>" id="<?php echo $cat->slug; ?>">
					<header class="issue-section-header category-header">
						<h2 class="taxonomy-title issue-section-title category-title">
							<a href="<?php echo get_category_link( $cat->cat_ID ); ?>" title="<?php printf( _x( '%s archives', 'Category archives link', 'yumag' ), esc_attr( $cat->name ) ); ?>">
							<img src="<?php echo $src . $cat->slug; ?>.png" srcset="<?php echo $src . $cat->slug; ?>@2x.png 2x, <?php echo $src . $cat->slug; ?>.png 1x" alt="<?php echo esc_attr( $cat->cat_name ); ?>">
							</a>
						</h2>
						<p class="taxonomy-description issue-section-description category-description"><?php echo esc_html( $cat->description ); ?></p>
						<p class="taxonomy-link issue-section-link category-archive-link">
							<a href="<?php echo get_category_link( $cat->cat_ID ); ?>" title="<?php printf( _x( '%s archives', 'Category archives link', 'yumag' ), esc_attr( $cat->name ) ); ?>">More in this section</a>
						</p>
					</header>
					<div class="category-content index-content issue-section-content">
						<div class="issue-section-posts index-posts category-posts category-<?php echo $section; ?>-posts">
							<div<?php
							if ( $flex ) {
								echo ' class="js-convert-to-flexbox issue-section-noflex"';
								echo ' data-flexbox-columns="' . $flex . '"';
							}
							?>>

							<?php /* The Loop */
							while ( have_posts() ) :
								yumag_section_the_post();
								if ( in_category( $section, $post->ID ) ) {
									yumag_section_setup_postdata();
									get_template_part( 'content', get_post_format() );
								}
							endwhile;
							rewind_posts();
							?>

							<?php if ( 'all-about-yu' === $section ) {
								get_template_part( 'grapevine-fake-article' );
							} ?>

							</div>
						</div><!-- .issue-section-posts -->
					</div><!-- .issue-section-content -->
				</section><!-- .issue-section -->
			<?php endforeach; ?>

			<footer class="next-prev-wrap issue-next-prev-wrap">
				<?php the_posts_navigation( array(
					'prev_text' => __( 'Previous Issue', 'yumag' ),
					'next_text' => __( 'Next Issue', 'yumag' ),
					'screen_reader_text' => __( 'Issues navigation', 'yumag' )
				) ); ?>
			</footer><!-- .next-prev-wrap -->

		<?php else : ?>

			<?php get_template_part( 'content', 'none' ); ?>

		<?php endif; ?>

		</main><!-- #main -->
	</div><!-- #primary -->

<?php get_sidebar(); ?>
<?php get_footer(); ?>
