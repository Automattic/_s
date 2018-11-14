<?php
/**
 * Template part for displaying posts thumbs/previews
 *
 * @link https://codex.wordpress.org/Template_Hierarchy
 *
 * @package _svbk
 */

?>

<div id="post-<?php the_ID(); ?>" <?php post_class( [ 'post', 'post--preview', get_post_type() . '--preview', 'post-thumb' ] ); ?>>

	<?php if ( has_post_thumbnail() ) : ?>
	<a class="<?php the_post_type(); ?>__thumbnail post__thumbnail" href="<?php the_permalink(); ?>" rel="bookmark" ><?php the_post_thumbnail(); ?></a>
	<?php endif; ?>

	<div class="<?php the_post_type(); ?>__header post__header entry-header">
		<?php the_title( '<h3 class="' . esc_attr(get_post_type()) . '__title post__title entry-title"><a href="' . esc_url( get_permalink() ) . '" rel="bookmark">', '</a></h3>' ); ?>
	</div><!-- .entry-header -->

	<?php if ( 'post' === get_post_type() ) : ?>
		<div class="<?php the_post_type(); ?>__meta post__meta entry-meta">
			<?php
			echo get_the_category_list();
			_svbk_post_reading_time();
			?>
		</div><!-- .entry-meta -->
	<?php endif; ?>

	<div class="<?php the_post_type(); ?>__excerpt post__excerpt entry-summary"><?php the_excerpt(); ?></div>
	<a class="<?php the_post_type(); ?>__readmore post__readmore readmore" href="<?php the_permalink(); ?>" ><?php esc_html_e( 'Read More', '_svbk' ); ?></a>

</div><!-- #post-## -->
