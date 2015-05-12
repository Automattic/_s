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

// URL-path to images.
$src = get_template_directory_uri() . '/assets/';

get_header(); ?>

	<div id="primary" class="content-area">
		<main id="main" class="site-main" role="main">

			<?php if ( have_posts() ) : ?>

				<section class="category-section">
					<header class="page-header category-header">
						<h1 class="taxonomy-title category-title">
							<img src="<?php echo $src . $cat->slug; ?>.png" srcset="<?php echo $src . $cat->slug; ?>@2x.png 2x, <?php echo $src . $cat->slug; ?>.png 1x" alt="<?php echo esc_attr( $cat->cat_name ); ?>">
						</h1>
						<p class="taxonomy-description category-description"><?php echo esc_html( $cat->description ); ?></p>
						<p class="taxonomy-link category-archive-link">
							<a href="<?php echo esc_url( home_url( '/#' . $cat->slug ) ); ?>" rel="home" title="<?php _e( 'Go to latest issue', 'yumag' ); ?>">Back to latest issue</a>
						</p>
					</header><!-- .category-header -->
					<div class="category-content index-content">
						<div class="category-posts index-posts category-<?php echo $cat->slug; ?>-posts">
							<div>
							<?php /* Start the Loop */ ?>
							<?php while ( have_posts() ) : the_post(); ?>
								<?php get_template_part( 'content', get_post_format() ); ?>
							<?php endwhile; ?>
							</div>
						</div><!-- .category-posts -->
					</div><!-- .category-content -->
					<footer class="next-prev-wrap">
						<?php the_posts_navigation(); ?>
					</footer><!-- .next-prev-wrap -->
				</section><!-- .category-section -->

			<?php else : ?>

				<?php get_template_part( 'content', 'none' ); ?>

			<?php endif; ?>

		</main><!-- #main -->
	</div><!-- #primary -->

<?php get_sidebar(); ?>
<?php get_footer(); ?>
