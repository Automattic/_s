<?php
/**
 * The template part for displaying a link to the On the Grapevine archive - if
 * it exists - as if it were an article.
 *
 * @package YuMag
 */

if ( post_type_exists( 'yumag_notice' ) ) : ?>

<article class="has-post-thumbnail hentry category-all-about-yu entry grapevine-fake-article">
	<header class="entry-header">
		<div class="entry-image">
			<a class="entry-image-link" href="<?php echo get_post_type_archive_link( 'yumag_notice' ); ?>">
				<img src="<?php echo get_template_directory_uri(); ?>/assets/on-the-grapevine-thumbnail.png" width="666" height="444" alt="">
			</a>
		</div>
		<a class="entry-title-link" href="<?php echo get_post_type_archive_link( 'yumag_notice' ); ?>" rel="bookmark">
			<h1 class="entry-title"><?php esc_html_e( 'On the grapevine', 'yumag' ); ?></h1>
			<h2 class="entry-subtitle"><?php esc_html_e( 'News from fellow alumni', 'yumag' ); ?></h2>
		</a>
	</header><!-- .entry-header -->

	<div class="entry-content">
		<p><?php esc_html_e( 'Catch up with alumni memories, awards, career updates and other news &ndash; all submitted by fellow University of York graduates and retired staff.', 'yumag' ); ?></p>
		<p class="read-more"><a href=""><?php esc_html_e( 'Read more', 'yumag' ); ?></a></p>
	</div><!-- .entry-content -->
</article><!-- #post-## -->

<?php endif; ?>
