<?php
/**
 * Content for posts presented on index pages, e.g. Issue, Search, Archive
 *
 * @package YuMag
 */

?>

<article id="post-<?php the_ID(); ?>" <?php post_class( 'yumag-related-post' ); ?>>
	<header class="entry-header">
		<?php yumag_entry_image( array( 666, 444 ) ); ?>
		<?php yumag_entry_title() ?>
		<?php if ( 'post' == get_post_type() ) : ?>
			<?php yumag_byline(); ?>
		<?php endif; ?>
	</header><!-- .entry-header -->

	<footer class="entry-footer">
		<?php yumag_entry_footer(); ?>
	</footer><!-- .entry-footer -->
</article><!-- #post-## -->
