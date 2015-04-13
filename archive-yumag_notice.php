<?php
/**
 * The template for displaying all pages.
 *
 * This is the template that displays all pages by default.
 * Please note that this is the WordPress construct of pages
 * and that other 'pages' on your WordPress site will use a
 * different template.
 *
 * @package YuMag
 */

// URL-path to images.
$src = get_template_directory_uri() . '/assets/';
$slug = 'on-the-grapevine';

get_header(); ?>

	<div id="primary" class="content-area">
		<main id="main" class="site-main" role="main">

		<?php if ( have_posts() ) : ?>

			<section class="archive-section">
				<header class="page-header category-header notices-header">
					<h1 class="taxonomy-title category-title notices-title">
						<img src="<?php echo $src . $slug; ?>-42.png" srcset="<?php echo $src . $slug; ?>-84.png 2x, <?php echo $src . $slug; ?>-42.png 1x" height="42" alt="<?php esc_attr_e( 'On the Grapevine', 'yumag' ); ?>">
					</h1>
					<p class="taxonomy-description category-description"><?php esc_html_e( 'Standfirst to add here', 'yumag' ); ?></p>
				</header>
				<div class="index-content">
					<div class="index-posts">
						<div>

						<?php /* Start the Loop */ ?>

						<?php while ( have_posts() ) : the_post(); ?>

							<?php get_template_part( 'content', 'yumag_notice' ); ?>

							<?php
								// If comments are open or we have at least one comment, load up the comment template
								if ( comments_open() || get_comments_number() ) :
									comments_template();
								endif;
							?>

						<?php endwhile; ?>
						<?php the_posts_navigation(); ?>

						</div>
					</div><!-- .index-posts -->
				</div><!-- .index-content -->
			</section><!-- .archive-section -->

		<?php else : ?>

			<?php get_template_part( 'content', 'none' ); ?>

		<?php endif; ?>

		</main><!-- #main -->
	</div><!-- #primary -->

<?php get_sidebar(); ?>
<?php get_footer(); ?>
