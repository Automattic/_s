<?php
/**
 * Content for posts presented on index pages, e.g. Issue, Search, Archive
 *
 * @package YuMag
 */

?>

<article id="post-<?php the_ID(); ?>" <?php post_class(); ?>>
	<header class="entry-header">
		<?php yumag_entry_image( array( 666, 444 ) ); ?>
		<?php yumag_entry_title() ?>
		<?php if ( 'post' == get_post_type() ) : ?>
			<?php yumag_byline(); ?>
		<?php endif; ?>
	</header><!-- .entry-header -->

	<div class="entry-content">
		<?php the_excerpt(); ?>
		<p class="read-more"><a href="<?php the_permalink(); ?>" title="<?php the_title_attribute(); ?>"><?php esc_html_e( 'Read more', 'yumag' ); ?></a></p>
	</div><!-- .entry-content -->

	<footer class="entry-footer">
		<?php yumag_entry_footer(); ?>
	</footer><!-- .entry-footer -->
</article><!-- #post-## -->
