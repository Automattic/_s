<?php
/**
 * The template for displaying an Issue page (using the taxonomy created by
 * PeriodicalPress plugin:
 * {@link http://www.github.com/cjbarnes/periodicalpress/}).
 *
 * @package YuMag
 */

// Start with a list of sections (specifically their slugs), in order.
$sections = array(
	'yorklife',
	'open-minds',
	'centre-stage',
	'all-about-yu',
	'back-page'
);

get_header(); ?>

	<div id="primary" class="content-area">
		<main id="main" class="site-main" role="main">

		<?php if ( have_posts() ) : ?>

			<header class="issue-header">
				<h1 class="issue-title"><?php yumag_issue_title(); ?></h1>
			</header><!-- .issue-header -->

			<?php // Run through the loop, once for each section. ?>
			<?php foreach( $sections as $section ) : ?>
				<?php $cat = get_category_by_slug( $section ) ?>
				<section class="issue-section category-<?php echo $section; ?>">
					<h2 class="taxonomy-title category-title"><?php echo esc_html( $cat->cat_name ) ?></h2>
					<div class="issue-section-posts">
					<?php /* Start the Loop */
					while ( have_posts() ) : the_post();
						if ( in_category( $section ) ) {
							get_template_part( 'content', get_post_format() );
						}
					endwhile;
					rewind_posts();
					?>
					</div><!-- .issue-section-posts -->
				</section><!-- .issue-section -->
			<?php endforeach; ?>

		<?php else : ?>

			<?php get_template_part( 'content', 'none' ); ?>

		<?php endif; ?>

		</main><!-- #main -->
	</div><!-- #primary -->

<?php get_sidebar(); ?>
<?php get_footer(); ?>
