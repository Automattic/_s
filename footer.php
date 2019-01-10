<?php
/**
 * The template for displaying the footer
 *
 * Contains the closing of the #content div and all content after.
 *
 * @link https://developer.wordpress.org/themes/basics/template-files/#template-partials
 *
 * @package _s
 */

?>

	</div><!-- #content -->

	<?php do_action( "_s_footer_head" );?>

	<footer id="colophon" class="site-footer">
		
		<?php do_action( "_s_footer_middle" );?>
		
		<div class="site-info"> 
			
			<a href="<?php echo esc_url( apply_filters( "footer_site_info_url", __( 'https://wordpress.org/', '_s' ) ) ); ?>">
				<?php
				/* translators: %s: CMS name, i.e. WordPress. */
				echo apply_filters( "footer_site_info_text", sprintf( esc_html__( 'Proudly powered by %s', '_s' ), 'WordPress' ) );
				?>
			</a>
			<span class="sep"> | </span>
				<?php
				/* translators: 1: Theme name, 2: Theme author. */
				echo apply_filters( "footer_site_info_text", sprintf( esc_html__( 'Theme: %1$s by %2$s.', '_s' ), '_s', '<a href="https://automattic.com/">Automattic</a>' ) );
				?>
		</div><!-- .site-info --> 
		
	</footer><!-- #colophon -->

	<?php do_action( "_s_footer_foot" );?>

</div><!-- #page -->

<?php wp_footer(); ?>

</body>
</html>
