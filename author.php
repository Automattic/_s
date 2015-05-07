<?php
/**
 * The template file for author pages.
 *
 * @link http://codex.wordpress.org/Author_Templates
 *
 * @package YuMag
 */

// Retrieve author info for this author.
$curauth = get_query_var( 'author_name' )
	? get_user_by( 'slug', get_query_var( 'author_name' ) )
	: get_userdata( get_query_var( 'author' ) );

$curauth_student = yumag_author_student_details( $curauth->ID );

get_header(); ?>

	<div id="primary" class="content-area">
		<main id="main" class="site-main" role="main">

		<?php if ( have_posts() ) : ?>

			<section class="author-bio-section">
				<header class="author-header">
					<div class="author-image">
						<?php echo get_avatar( $curauth->ID, 300 ); ?>
					</div>
				</header><!-- .author-header -->
				<div class="author-bio-content">
					<?php the_archive_title( '<h1 class="author-title">', '</h1>' ); ?>
					<?php if ( ! empty( $curauth_student ) ) {
						printf( '<p class="author-student-details">(%s)</p>', $curauth_student );
					} ?>
					<?php printf( '<p class="author-description">%s</p>',
						esc_html( $curauth->description ) ); ?>
					<?php if ( ! empty( $curauth->user_url ) ) : ?>
						<p class="author-website">
							<a class="author-link" href="<?php echo $curauth->user_url ?>">
							<?php
							printf( _x( '%s&rsquo;s website', 'Author link', 'yumag' ),
								$curauth->display_name );
							?>
							</a>
						</p>
					<?php endif; ?>
				</div>
			</section><!-- .author-bio-section -->

			<section class="author-index-section">
				<div class="index-content author-index-content">
					<div class="index-posts author-index-posts">
						<div>
						<?php /* Start the Loop */ ?>
						<?php while ( have_posts() ) : the_post(); ?>
							<?php get_template_part( 'content', get_post_format() ); ?>
						<?php endwhile; ?>
						</div>
					</div><!-- .index-posts -->
				</div><!-- .index-content -->
				<footer class="next-prev-wrap">
					<?php the_posts_navigation(); ?>
				</footer><!-- .next-prev-wrap -->
			</section><!-- .author-index-section -->

		<?php else : ?>

			<?php get_template_part( 'content', 'none' ); ?>

		<?php endif; ?>

		</main><!-- #main -->
	</div><!-- #primary -->

<?php get_sidebar(); ?>
<?php get_footer(); ?>
