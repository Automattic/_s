<?php
/**
 * Template part for displaying results in search pages
 *
 * @link https://developer.wordpress.org/themes/basics/template-hierarchy/
 *
 * @package _s
 */

?>

<article id="post-<?php the_ID(); ?>" <?php post_class(); ?>>
	
	<?php do_action( "_s_content_search_section_start" ); ?> 
	
	<header class="entry-header">
		<?php the_title( sprintf( '<h2 class="entry-title"><a href="%s" rel="bookmark">', esc_url( get_permalink() ) ), '</a></h2>' ); ?>

		<?php do_action( "_s_content_search_in_header" ); ?> 
		
		<?php if ( 'post' === get_post_type() ) : ?>
		<div class="entry-meta">
			<?php
			_s_posted_on();
			_s_posted_by();
			?>
		</div><!-- .entry-meta -->
		<?php endif; ?>
	</header><!-- .entry-header -->

	<?php _s_post_thumbnail(); ?>

	<?php do_action( "_s_content_search_after_thumbnail" ); ?> 
	
	<div class="entry-summary">
		<?php the_excerpt(); ?>
	</div><!-- .entry-summary -->

	<?php do_action( "_s_content_search_after_content" ); ?> 
	
	<footer class="entry-footer">
		<?php _s_entry_footer(); ?>
	</footer><!-- .entry-footer -->
	
	<?php do_action( "_s_content_search_section_end" ); ?>
	
</article><!-- #post-<?php the_ID(); ?> -->
