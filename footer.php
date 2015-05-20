<?php
/**
 * The template for displaying the footer.
 *
 * Contains the closing of the #content div and all content after
 *
 * @package _s
 */
?>

	</div><!-- #content -->

	<footer id="colophon" class="site-footer" role="contentinfo">
		<div class="wrap">

			<div class="site-info">
				<a href="<?php echo esc_url( __( 'http://wordpress.org/', '_s' ) ); ?>"><?php printf( __( 'Proudly powered by %s', '_s' ), 'WordPress' ); ?></a>
				<span class="sep"> | </span>
				<?php printf( esc_html__( 'Theme: %1$s by %2$s.', '_s' ), '_s', '<a href="http://automattic.com/" rel="designer">Automattic</a>' ); ?>
			</div><!-- .site-info -->

			<?php
				if ( has_nav_menu( 'social' ) ) :
					// Social menu
					wp_nav_menu( array(
						'theme_location' => 'social',
						'container'      => false,
						'menu_class'     => 'menu-social menu menu-horizontal',
						'link_before'    => '<span class="screen-reader-text">',
						'link_after'     => '</span>'
						)
					);
				endif;
			?>

		</div><!-- .wrap -->
	</footer><!-- #colophon -->
</div><!-- #page -->

<?php wp_footer(); ?>

</body>
</html>
