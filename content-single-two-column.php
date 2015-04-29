<?php
/**
 * @package YuMag
 */
?>

<article id="post-<?php the_ID(); ?>" <?php post_class(); ?>>
	<div class="entry-above-footer single-entry-above-footer">
		<?php yumag_entry_image( "yumag-featured-photo-portrait", false ) ?>
		<header class="entry-header">
			<?php yumag_entry_title() ?>
			<?php yumag_byline(); ?>
		</header><!-- .entry-header -->

		<div class="entry-content">
			<?php the_content(); ?>
			<?php
				wp_link_pages( array(
					'before' => '<div class="page-links">' . __( 'Pages:', 'yumag' ),
					'after'  => '</div>',
				) );
			?>
		</div><!-- .entry-content -->
	</div><!-- .entry-above-footer -->
	<div class="related-posts-wrap">
		<?php yumag_related_posts(); ?>
	</div><!-- .related-posts-wrap -->
	<div class="footer entry-footer-wrap">
		<footer class="entry-footer single-entry-footer">
			<?php yumag_author_box(); ?>
			<?php yumag_image_credits(); ?>
			<?php yumag_entry_footer(); ?>
			<?php yumag_entry_tags(); ?>
		</footer><!-- .entry-footer -->
	</div><!-- .entry-footer-wrap -->
</article><!-- #post-## -->
