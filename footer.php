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
		<div class="wrap">
			<?php
			$footer_logo = get_theme_mod( 'footer_logo', '' );
			if ( $footer_logo ) :
				?>
			<div class="site-footer__section footer-area">
				<?php echo wp_get_attachment_image( get_theme_mod( 'footer_logo', '' ), 'large' ); ?>
			</div>
			<?php endif ?>
	
		</div>
	
		<?php if ( is_active_sidebar( 'footer' ) ) : ?>
		<div class="widget-area domready--show">
			<?php dynamic_sidebar( 'footer' ); ?>
		</div>
		<?php endif; ?>
	
		<div id="legal" class="site-footer__bar bar sub-footer">
			<span class="copyright-notice">&copy; 2017-<?php echo date( 'Y' ); ?></span>
			<div id="company-info" class="site-footer__section footer-area">
				<?php if ( get_theme_mod( 'company_name', false ) ) : ?>
				<span class="company-name"><?php echo get_theme_mod( 'company_name' ); ?></span>
				<?php endif; ?>
				<?php if ( get_theme_mod( 'company_address', false ) ) : ?>
				<span class="company-address"><?php echo get_theme_mod( 'company_address' ); ?></span>
				<?php endif; ?>
				<?php if ( get_theme_mod( 'company_vat', false ) ) : ?>
				<span class="company-vat"><?php _e('VAT ID', '_svbk') ?>:&nbsp;<?php echo get_theme_mod( 'company_vat' ); ?></span>
				<?php endif; ?>				
				<?php if ( get_theme_mod( 'company_phone', false ) ) : ?>
				<span class="company-phone">Tel: <a href="tel:<?php echo get_theme_mod( 'company_phone' ); ?>"><?php echo get_theme_mod( 'company_phone' ); ?></a></span>
				<?php endif; ?>				
			</div>
			<?php
			if ( has_nav_menu( 'legal-menu' ) ) :
				wp_nav_menu(
					array(
						'theme_location' => 'legal-menu',
						'menu_id'        => 'legal-menu',
					)
				);
			else :
				?>
				<ul id="legal-menu" class="menu">
					<?php the_privacy_policy_link( '<li class="menu-item">', '</li>' ); ?>
					<?php the_cookie_policy_link( '<li class="menu-item">', '</li>' ); ?>
				</ul>
			<?php endif; ?>
			<?php /* translators: the first %s contains the target link */ ?>
			<span id="credits" class="made-by"><?php printf( esc_html__( 'Made with passion by %s', '_svbk' ), '<a target="_blank" href="http://www.silverbackstudio.it">Silverback Studio</a>' ); ?></span>
		</div>
		
		<?php if ( get_theme_mod( 'fixed_footer_bar' ) ) : ?>
		<div class="site-footer__bar bar bar--fixed footer-fixed-bar">
			<?php echo do_shortcode( get_theme_mod( 'fixed_footer_bar_content', __( 'Customize this text in Theme Customizer', '_svbk' ) ) ); ?>
		</div>
		<?php endif ?>
		
		
	</footer><!-- #colophon -->
</div><!-- #page -->

<?php wp_footer(); ?>

</body>
</html>
