<?php
/**
 * Template part for displaying a message that posts cannot be found.
 *
 * @link https://codex.wordpress.org/Template_Hierarchy
 *
 * @package _bem
 */

?>

<section class="no-results not-found _content__article _content__article--no-content">
	<header class="page-header _content__header _content__header--no-content">
		<h1 class="page-title _content__title _content__title--no-content"><?php esc_html_e( 'Nothing Found', '_bem' ); ?></h1>
	</header><!-- .page-header -->

	<div class="page-content _content__article-content _content__article-content--no-content">
		<?php
		if ( is_home() && current_user_can( 'publish_posts' ) ) : ?>

			<p class="_content__no-content-text"><?php printf( wp_kses( __( 'Ready to publish your first post? <a class="_content__no-content-link" href="%1$s">Get started here</a>.', '_bem' ), array( 'a' => array( 'href' => array() ) ) ), esc_url( admin_url( 'post-new.php' ) ) ); ?></p>

		<?php elseif ( is_search() ) : ?>

			<p class="_content__no-content-text"><?php esc_html_e( 'Sorry, but nothing matched your search terms. Please try again with some different keywords.', '_bem' ); ?></p>
			<?php
				get_search_form();

		else : ?>

			<p class="_content__no-content-text"><?php esc_html_e( 'It seems we can&rsquo;t find what you&rsquo;re looking for. Perhaps searching can help.', '_bem' ); ?></p>
			<?php
				get_search_form();

		endif; ?>
	</div><!-- .page-content -->
</section><!-- .no-results -->
