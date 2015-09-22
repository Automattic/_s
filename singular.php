<?php
/**
 * The template for displaying all pages, single posts and attachments
 *
 * This is a new template file that WordPress introduced in
 * version 4.3: https://core.trac.wordpress.org/changeset/32846
 * Note that it uses conditional logic to display
 * different content based on the post type.
 *
 * @package _s
 */

get_header(); ?>

	<div id="primary" class="content-area">
		<main id="main" class="site-main" role="main">
			<?php
			// Start the loop.
			while ( have_posts() ) : the_post();

				// Include the page content template.
				if ( is_singular( 'page' ) ) {
					get_template_part( 'template-parts/content', 'page' );
				} else {
					get_template_part( 'template-parts/content', 'single' );
				}

				// If comments are open or we have at least one comment, load up the comment template.
				if ( comments_open() || get_comments_number() ) {
					comments_template();
				}

				if ( is_singular( 'attachment' ) ) {
					// Parent post navigation
					the_post_navigation( array(
						'prev_text' => _x( '<span class="meta-nav">Published in</span><span class="post-title">%title</span>', 'Parent post link', '_s' ),
					) );
				}

				if ( is_singular( 'post' ) ) {
					// Previous/next post navigation.
					the_post_navigation( array(
						'next_text' => '<span class="meta-nav" aria-hidden="true">' . esc_html__( 'Next', '_s' ) . '</span> ' .
							'<span class="screen-reader-text">' . esc_html__( 'Next post:', '_s' ) . '</span> ' .
							'<span class="post-title">%title</span>',
						'prev_text' => '<span class="meta-nav" aria-hidden="true">' . esc_html__( 'Previous', '_s' ) . '</span> ' .
							'<span class="screen-reader-text">' . esc_html__( 'Previous post:', '_s' ) . '</span> ' .
							'<span class="post-title">%title</span>',
					) );
				}

				// End of the loop.
			endwhile;
			?>

		</main><!-- #main -->
	</div><!-- #primary -->

<?php get_sidebar(); ?>
<?php get_footer(); ?>