<?php
/**
 * Template part for displaying results in search pages.
 *
 * @link https://codex.wordpress.org/Template_Hierarchy
 *
 * @package _bem
 */

?>

<article id="post-<?php the_ID(); ?>" <?php post_class( '_content__article _content__article--search' ); ?>>
	<header class="entry-header _content__header _content__header--search">
		<?php the_title( sprintf( '<h2 class="entry-title _content__title _content__title--search"><a class="_content__title-link _content__title-link--search" href="%s" rel="bookmark">', esc_url( get_permalink() ) ), '</a></h2>' ); ?>

		<?php if ( 'post' === get_post_type() ) : ?>
		<div class="entry-meta _content__meta _content__meta--search">
			<?php _bem_posted_on( 'search' ); ?>
		</div><!-- .entry-meta -->
		<?php endif; ?>
	</header><!-- .entry-header -->

	<div class="entry-summary _content__summary _content__summary--search">
		<?php the_excerpt(); ?>
	</div><!-- .entry-summary -->

	<footer class="entry-footer _content__footer _content__footer--search">
		<?php _bem_entry_footer( 'search' ); ?>
	</footer><!-- .entry-footer -->
</article><!-- #post-## -->
