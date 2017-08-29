<?php
/**
 * The template for displaying the footer
 *
 * Contains the closing of the #content div and all content after.
 *
 * @link https://developer.wordpress.org/themes/basics/template-files/#template-partials
 *
 * @package _svbk
 */

?>

	</div><!-- #content -->

	<footer id="colophon" class="site-footer" role="contentinfo">
		<?php
		$footer_logo = get_theme_mod( 'footer_logo', '' );
		if ( $footer_logo ) :
		?>
		<div class="footer-area">
			<?php echo wp_get_attachment_image( get_theme_mod( 'footer_logo', '' ), 'large' ); ?>
		</div>
		<?php endif ?>

		<div id="company-info" class="footer-area">
			<h3><?php esc_html_e( 'Headquarters', '_svbk' ); ?></h3>
			<span class="contact-address"><?php bloginfo( 'contact_address' ); ?></span><br/>
			<span class="contact-cap"><?php bloginfo( 'contact_cap' ); ?></span>
			<span class="contact-city"><?php bloginfo( 'contact_city' ); ?></span><br/>
			<span class="contact-phone">Tel: <a href="tel:<?php bloginfo( 'contact_phone' ); ?>"><?php bloginfo( 'contact_phone' ); ?></a></span><span class="contact-fax">Fax: <a href="tel:<?php bloginfo( 'contact_fax' ); ?>"><?php bloginfo( 'contact_fax' ); ?></a></span>
		</div>

		<div id="legal" class="footer-area sub-footer">
			<span class="copyright-notice">&copy; 2017</span>
			<span id="privacy-policy" class="privacy-link"><?php echo do_shortcode( '[privacy-link]Privacy Policy[/privacy-link]' ); ?></span>
			<?php ;/* translators: the first %s contains the target link */ ?>
			<span id="credits" class="made-by"><?php printf( esc_html__( 'Made with passion by %s', '_svbk' ), '<a target="_blank" href="http://www.silverbackstudio.it">Silverback Studio</a>' ); ?></span>
		</div>

	</footer><!-- #colophon -->

	<?php if ( get_theme_mod( 'fixed_footer_bar' ) ) : ?>
	<div class="footer-fixed-bar">
		<?php echo do_shortcode( get_theme_mod( 'fixed_footer_bar_content', __( 'Customize this text in Theme Customizer', '_svbk' ) ) ); ?>
	</div>
	<?php endif ?>

</div><!-- #page -->

<?php wp_footer(); ?>
