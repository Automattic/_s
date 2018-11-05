<?php
/**
 * Template part for displaying post's pagination thumbs/previews
 *
 * @link https://codex.wordpress.org/Template_Hierarchy
 *
 * @package _svbk
 */
?>
<span class="nav-preview__adjacent"><?php  echo 'previous' === $navigation_adjacent ? __( 'Previous', '_svbk' ) : __('Next', '_svbk'); ?></span>
<?php the_post_thumbnail( 'content-half' ); ?>
<div class="nav-preview__header entry-header">
	<?php the_title( '<h3 class="nav-preview__title entry-title"><a href="' . esc_url( get_permalink() ) . '" rel="bookmark">', '</a></h3>' ); ?>
	<div class="nav-preview__terms categories-list"><?php _svbk_entry_terms() ?></div>	
</div><!-- .entry-header -->
