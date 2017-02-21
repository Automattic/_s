<?php
/**
 * Template part for displaying posts thumbs/previews
 *
 * @link https://codex.wordpress.org/Template_Hierarchy
 *
 * @package _svbk
 */

?>

<div id="post-<?php the_ID(); ?>" <?php post_class(array('post-thumb')); ?>>

	<?php if (has_post_thumbnail()): ?>
	<a href="<?php the_permalink() ?>" rel="bookmark" ><?php the_post_thumbnail(); ?></a>
	<?php endif; ?>

	<div class="entry-header">
		<?php the_title( '<h3 class="entry-title"><a href="' . esc_url( get_permalink() ) . '" rel="bookmark">', '</a></h3>' ); ?>
		<p class="entry-excerpt"><?php the_excerpt(); ?></p>
		<a class="readmore" href="<?php the_permalink() ?>" ><?php __('View More', '_svbk'); ?></a>
	</div><!-- .entry-header -->

</div><!-- #post-## -->
