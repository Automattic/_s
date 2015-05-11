<?php
/**
 * The template part for displaying a message that posts cannot be found.
 *
 * Learn more: http://codex.wordpress.org/Template_Hierarchy
 *
 * @package YuMag
 */
?>

<section class="entry single-entry no-results">
	<div class="entry-above-footer single-entry-above-footer">

		<div class="entry-content">
			<?php if ( is_home() && current_user_can( 'publish_posts' ) ) : ?>

				<p class="lead"><?php printf( __( 'Ready to publish your first post? <a href="%1$s">Get started here</a>.', 'yumag' ), esc_url( admin_url( 'post-new.php' ) ) ); ?></p>

			<?php elseif ( is_search() ) : ?>

				<p class="lead"><?php _e( 'Sorry, but nothing matched your search terms. Please try again with some different keywords.', 'yumag' ); ?></p>

			<?php else : ?>

				<p class="lead"><?php _e( 'It seems we can&rsquo;t find what you&rsquo;re looking for. Perhaps searching can help:', 'yumag' ); ?></p>

				<div class="page-search">
					<?php get_search_form(); ?>
				</div>

			<?php endif; ?>
		</div><!-- .entry-content -->

	</div><!-- .entry-above-footer -->
</section><!-- .no-results -->
