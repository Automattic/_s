<?php
/**
 * Template part for displaying posts
 *
 * @link https://developer.wordpress.org/themes/basics/template-hierarchy/
 *
 * @package _svbk
 */

?>

<article id="post-<?php the_ID(); ?>" <?php post_class( ['post'] ); ?>>
	<header class="post__header entry-header first-paint">
		
		<div class="post__meta entry-meta">
			<?php
			$categories_list = get_the_category_list( esc_html_x( ', ', 'list item separator', '_svbk' ) );
			if ( $categories_list ) {
				/* translators: 1: list of categories. */
				echo '<span class="post__categories cat-links">' . $categories_list . '</span>'; // WPCS: XSS OK.
			}
			?>
		</div><!-- .entry-meta -->		
		
		<?php
		if ( is_singular() ) :
			the_title( '<h1 class="post__title entry-title">', '</h1>' );
		else :
			the_title( '<h2 class="post__title entry-title"><a href="' . esc_url( get_permalink() ) . '" rel="bookmark">', '</a></h2>' );
		endif;
		?>
		
		<div class="post__meta entry-meta">
			<?php
			_svbk_posted_on();
			_svbk_posted_by();
			_svbk_post_reading_time();
			?>
		</div><!-- .entry-meta -->
		
		<div class="post__summary entry-summary">
			<?php the_excerpt(); ?>
		</div>		
		
		<?php _svbk_post_thumbnail( null, array( 'class' => 'skip-lazy' ) ); ?>
		
	</header><!-- .entry-header -->

	<div class="post__content entry-content domready--show">
		<?php
		the_content( sprintf(
			wp_kses(
				/* translators: %s: Name of current post. Only visible to screen readers */
				__( 'Continue reading<span class="screen-reader-text"> "%s"</span>', '_svbk' ),
				array(
					'span' => array(
						'class' => array(),
					),
				)
			),
			get_the_title()
		) );

		wp_link_pages( array(
			'before' => '<div class="page-links">' . esc_html__( 'Pages:', '_svbk' ),
			'after'  => '</div>',
		) );
		?>
	</div><!-- .entry-content -->

	<footer class="post__footer entry-footer domready--show">
		<?php _svbk_entry_footer(); ?>
		<?php 
			/* translators: used between list items, there is a space after the comma */
			$tags_list = get_the_tag_list( '', esc_html_x( ', ', 'list item separator', '_svbk' ) );
			if ( $tags_list ) {
				/* translators: 1: list of tags. */
				printf( '<span class="post__tags tags-links">' . esc_html__( 'Tagged %1$s', '_svbk' ) . '</span>', $tags_list ); // WPCS: XSS OK.
			}
		?>
	</footer><!-- .entry-footer -->
</article><!-- #post-<?php the_ID(); ?> -->
