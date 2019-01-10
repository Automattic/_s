<?php
/**
 * Template part for displaying a message that posts cannot be found
 *
 * @link https://developer.wordpress.org/themes/basics/template-hierarchy/
 *
 * @package _s
 */

?>

<section class="no-results not-found">
	
	<header class="page-header">
		<h1 class="page-title"><?php esc_html_e( 'Nothing Found', '_s' ); ?></h1>
	</header><!-- .page-header -->
	
	<div class="page-content">

		<?php do_action( "_s_content_none_head" );?>
		
		<?php
		if ( is_home() && current_user_can( 'publish_posts' ) ) :

			printf(
				'<p>' . wp_kses(
					/* translators: 1: link to WP admin new post page. */
					__( 'Ready to publish your first post? <a href="%1$s">Get started here</a>.', '_s' ),
					array(
						'a' => array(
							'href' => array(),
						),
					)
				) . '</p>',
				esc_url( admin_url( 'post-new.php' ) )
			);

		elseif ( is_search() ) :
			?>

			<p><?php echo apply_filter( "_s_content_none_nothing_matched", esc_html( 'Sorry, but nothing matched your search terms. Please try again with some different keywords.', '_s' ) ); ?></p>
			<?php
			get_search_form();

		else :
			?>

			<p><?php echo apply_filter( "_s_content_none_empty_page", esc_html( 'It seems we can&rsquo;t find what you&rsquo;re looking for. Perhaps searching can help.', '_s' ); ?></p>
			<?php
			get_search_form();

		endif;
		?>
	
		<?php do_action( "_s_content_none_foot" );?>
		
	</div><!-- .page-content -->
	
</section><!-- .no-results -->
