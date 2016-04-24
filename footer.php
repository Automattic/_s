<?php
/**
 * The template for displaying the footer.
 *
 * Contains the closing of the #content div and all content after.
 *
 * @link https://developer.wordpress.org/themes/basics/template-files/#template-partials
 *
 * @package _bem
 */

?>

	</div><!-- #content -->

	<footer id="colophon" class="site-footer _footer" role="contentinfo">
		<div class="site-info _footer__info">
			<a class="_footer__info-tagline" href="<?php echo esc_url( __( 'https://wordpress.org/', '_bem' ) ); ?>"><?php printf( esc_html__( 'Proudly powered by %s', '_bem' ), 'WordPress' ); ?></a>
			<span class="sep _footer__separator"> | </span>
			<?php printf( esc_html__( 'Theme: %1$s by %2$s.', '_bem' ), '_bem', '<a class="_footer__info-author" href="https://github.com/maliMirkec" rel="designer">maliMirkec</a>' ); ?>
		</div><!-- .site-info -->
	</footer><!-- #colophon -->
</div><!-- #page -->

<?php wp_footer(); ?>

</body>
</html>
