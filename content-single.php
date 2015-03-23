<?php
/**
 * @package YuMag
 */
?>

<article id="post-<?php the_ID(); ?>" <?php post_class(); ?>>
	<?php yumag_entry_image( "yumag-featured-photo", false ) ?>
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

	<footer class="footer entry-footer">
		<?php yumag_author_box(); ?>
		<?php yumag_entry_footer(); ?>
		<?php yumag_entry_tags(); ?>
	</footer><!-- .entry-footer -->
</article><!-- #post-## -->
