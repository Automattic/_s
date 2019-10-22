<?php
/**
 * Template part for displaying case-studies
 *
 * @link https://developer.wordpress.org/themes/basics/template-hierarchy/
 *
 * @package silverback
 */

?>

<article id="post-<?php the_ID(); ?>" <?php post_class( [ 'post' ] ); ?>>
	<header class="post__header entry-header first-paint">	
		
		<?php
		if ( is_singular() ) :
			the_title( '<h1 class="post__title entry-title screen-reader-text">', '</h1>' );
		else :
			the_title( '<h2 class="post__title entry-title screen-reader-text"><a href="' . esc_url( get_permalink() ) . '" rel="bookmark">', '</a></h2>' );
		endif;
		?>
		
	</header><!-- .entry-header -->

	<div class="post__content entry-content domready--show">
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
		?>
	</div><!-- .entry-content -->
</article><!-- #post-<?php the_ID(); ?> -->
