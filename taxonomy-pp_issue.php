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

// URL-path to images.
$src = get_template_directory_uri() . '/assets/';

get_header(); ?>

	<div id="primary" class="content-area">

		<header class="archive-header issue-header">
			<h1 class="archive-title issue-title"><?php yumag_issue_title(); ?></h1>
		</header><!-- .archive-header -->

		<main id="main" class="site-main" role="main">

		<?php if ( have_posts() ) : ?>

			<?php // Run through the loop, once for each section. ?>
			<?php foreach( $sections as $section ) : ?>
				<?php $cat = get_category_by_slug( $section ) ?>
				<section class="issue-section category-section category-<?php echo $section; ?>">
					<header class="issue-section-header category-header">
						<h2 class="taxonomy-title issue-section-title category-title">
							<a href="<?php echo get_category_link( $cat->cat_ID ); ?>" title="<?php printf( _x( '%s archives', 'Category archives link', 'yumag' ), esc_attr( $cat->name ) ); ?>">
							<img src="<?php echo $src . $cat->slug; ?>-42.png" srcset="<?php echo $src . $cat->slug; ?>-84.png 2x, <?php echo $src . $cat->slug; ?>-42.png 1x" height="42" alt="<?php echo esc_attr( $cat->cat_name ); ?>">
							</a>
						</h2>
						<p class="taxonomy-description issue-section-description category-description"><?php echo esc_html( $cat->description ); ?></p>
					</header>
					<div class="category-content index-content issue-section-content">
						<div class="issue-section-posts index-posts category-posts category-<?php echo $section; ?>-posts">
							<div<?php if ( 'centre-stage' === $section ) echo ' class="js-convert-to-flexbox issue-section-noflex"'; ?>>

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

							</div>
						</div><!-- .issue-section-posts -->
					</div><!-- .issue-section-content -->
				</section><!-- .issue-section -->
			<?php endforeach; ?>

		<?php else : ?>

			<?php get_template_part( 'content', 'none' ); ?>

		<?php endif; ?>

		</main><!-- #main -->
	</div><!-- #primary -->

<?php get_sidebar(); ?>
<?php get_footer(); ?>
