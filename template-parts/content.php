<?php
/**
 * Template part for displaying posts
 *
 * @link https://developer.wordpress.org/themes/basics/template-hierarchy/
 *
 * @package _svbk
 */
?>

<article id="post-<?php the_ID(); ?>" <?php post_class( [ 'post' ] ); ?>>
	<header class="<?php the_post_type(); ?>__header post__header entry-header">
		<?php
		if ( is_singular() ) :
			the_title( '<h1 class="' . esc_attr( get_post_type() ) . '__title post__title entry-title">', '</h1>' );
		else :
			the_title( '<h2 class="' . esc_attr( get_post_type() ) . '__title post__title entry-title"><a href="' . esc_url( get_permalink() ) . '" rel="bookmark">', '</a></h2>' );
		endif;
		?>
	</header><!-- .entry-header -->

	<div class="<?php the_post_type(); ?>__content post__content entry-content">
		<?php
		the_content(
			sprintf(
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
			)
		);

		wp_link_pages(
			array(
				'before' => '<div class="page-links">' . esc_html__( 'Pages:', '_svbk' ),
				'after'  => '</div>',
			)
		);
		?>
	</div><!-- .entry-content -->

	<footer class="<?php the_post_type(); ?>__footer post__footer entry-footer">
		<?php _svbk_entry_footer(); ?>
	</footer><!-- .entry-footer -->
</article><!-- #post-<?php the_ID(); ?> -->
