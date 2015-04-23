<?php
/**
 * The template used for displaying page content in page.php
 *
 * @package YuMag
 */
?>

<article id="post-<?php the_ID(); ?>" <?php post_class(); ?>>
	<div class="entry-above-footer single-entry-above-footer">
		<header class="entry-header">
			<?php yumag_entry_title() ?>
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
</article><!-- #post-## -->
