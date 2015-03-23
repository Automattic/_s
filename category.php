<?php
/**
 * The template for displaying sections.
 *
 * Learn more: http://codex.wordpress.org/Template_Hierarchy
 *
 * @package YuMag
 */

$section_id = get_queried_object_id();
$cat = get_category( intval( $section_id ) );

get_header(); ?>

	<div id="primary" class="content-area">
		<main id="main" class="site-main" role="main">

			<?php if ( have_posts() ) : ?>

				<section class="category-section">
					<header class="page-header category-header">
						<h1 class="taxonomy-title category-title"><img src="<?php echo get_template_directory_uri(); ?>/assets/<?php echo $cat->slug; ?>-42.png" height="42" alt="<?php echo esc_attr( $cat->cat_name ); ?>"></h1>
						<p class="taxonomy-description category-description"><?php echo esc_html( $cat->description ); ?></p>
					</header><!-- .page-header -->
					<div class="category-content index-content">
						<div class="category-posts index-posts category-<?php echo $cat->slug; ?>-posts">
							<div>

							<?php /* Start the Loop */ ?>
							<?php while ( have_posts() ) : the_post(); ?>
								<?php get_template_part( 'content', get_post_format() ); ?>
							<?php endwhile; ?>

							<?php the_posts_navigation(); ?>

							</div>
						</div><!-- .category-posts -->
					</div><!-- .category-content -->
				</section><!-- .category-section -->

			<?php else : ?>

				<?php get_template_part( 'content', 'none' ); ?>

		<?php endif; ?>

		</main><!-- #main -->
	</div><!-- #primary -->

<?php get_sidebar(); ?>
<?php get_footer(); ?>
