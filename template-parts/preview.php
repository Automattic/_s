<?php
/**
 * Template part for displaying posts thumbs/previews
 *
 * @link https://codex.wordpress.org/Template_Hierarchy
 *
 * @package _svbk
 */

?>

<div id="post-<?php the_ID(); ?>" <?php post_class( [ 'post', 'post--preview', 'post-thumb' ] ); ?>>

	<?php if ( has_post_thumbnail() ) : ?>
	<a class="post__thumbnail" href="<?php the_permalink(); ?>" rel="bookmark" ><?php the_post_thumbnail(); ?></a>
	<?php endif; ?>

	<?php if ( 'post' === get_post_type() ) : ?>
		<div class="post__meta entry-meta">
			<?php
			_svbk_entry_terms();
			_svbk_posted_on();
			_svbk_posted_by();
			_svbk_post_reading_time();
			?>
		</div><!-- .entry-meta -->
	<?php endif; ?>

	<div class="post__header entry-header">
		<?php the_title( '<h3 class="post__title entry-title"><a href="' . esc_url( get_permalink() ) . '" rel="bookmark">', '</a></h3>' ); ?>
	</div><!-- .entry-header -->

	<div class="post__excerpt entry-summary"><?php the_excerpt(); ?></div>
	<a class="post__readmore readmore" href="<?php the_permalink(); ?>" ><?php esc_html_e( 'Read More', '_svbk' ); ?></a>

</div><!-- #post-## -->
