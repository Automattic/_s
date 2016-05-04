<?php
/**
 * Template part for displaying page content in page.php.
 *
 * @link https://codex.wordpress.org/Template_Hierarchy
 *
 * @package _bem
 */

?>

<article id="post-<?php the_ID(); ?>" <?php post_class( '_content__article _content__article--page' ); ?>>
	<header class="entry-header _content__header _content__header--page">
		<?php the_title( '<h1 class="entry-title _content__title _content__title--page">', '</h1>' ); ?>
	</header><!-- .entry-header -->

	<div class="entry-content _content__article-content _content__article-content--page">
		<?php
			the_content();

			wp_link_pages( array(
				'before' => '<div class="page-links">' . esc_html__( 'Pages:', '_bem' ),
				'after'  => '</div>',
			) );
		?>
	</div><!-- .entry-content -->

	<footer class="entry-footer _content__footer _content__footer--page">
		<?php
			edit_post_link(
				sprintf(
					/* translators: %s: Name of current post */
					esc_html__( 'Edit %s', '_bem' ),
					the_title( '<span class="screen-reader-text">"', '"</span>', false )
				),
				'<span class="edit-link _content__edit-item _content__edit-item--page">',
				'</span>'
			);
		?>
	</footer><!-- .entry-footer -->
</article><!-- #post-## -->