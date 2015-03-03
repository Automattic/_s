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

get_header(); ?>

	<div id="primary" class="content-area">
		<main id="main" class="site-main" role="main">

		<?php if ( have_posts() ) : ?>

			<header class="page-header">
				<?php
				if ( function_exists( 'get_wp_user_avatar' ) ) {
					echo get_wp_user_avatar( $curauth->ID, 'thumbnail' );
				}
				?>
				<?php
				the_archive_title( '<h1 class="page-title">', '</h1>' );
				printf( '<div class="taxonomy-description">%s</div>',
					esc_html( $curauth->description ) );
				?>
				<p><a class="author-link" href="<?php $curauth->user_url ?>">
					<?php
					printf( _x( '%s&rsquo;s website', 'Author link', 'yumag' ),
						$curauth->display_name );
					?>
				</a></p>
			</header><!-- .page-header -->

			<?php /* Start the Loop */ ?>
			<?php while ( have_posts() ) : the_post(); ?>

				<?php get_template_part( 'content', get_post_format() ); ?>

			<?php endwhile; ?>

			<?php the_posts_navigation(); ?>

		<?php else : ?>

			<?php get_template_part( 'content', 'none' ); ?>

		<?php endif; ?>

		</main><!-- #main -->
	</div><!-- #primary -->

<?php get_sidebar(); ?>
<?php get_footer(); ?>
