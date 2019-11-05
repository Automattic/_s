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
			$company_name = get_theme_mod( 'company_name', '' );
			if ( $footer_logo || $company_name ) :	?>
			<div id="company-info" class="site-footer__section">
				<?php echo wp_get_attachment_image( get_theme_mod( 'footer_logo', '' ), 'large' ); ?>
				<aside class="widget-area">
					<?php dynamic_sidebar( 'footer' ); ?>
				</aside>
			</div>
			<?php endif ?>
	
			<div id="company-contacts" class="site-footer__section">
				<h3 class="footer-section__title"><?php _e('Contacts', '_svb') ?></h3>
				<?php if ( get_theme_mod( 'company_phone', false ) ) : ?>
				<span class="company-phone">Tel: <a href="tel:<?php echo get_theme_mod( 'company_phone' ); ?>"><?php echo get_theme_mod( 'company_phone' ); ?></a></span><br/>
				<?php endif; ?>
				<?php if ( get_theme_mod( 'company_email', false ) ) : ?>
				<span class="company-email">Email: <a href="mailto:<?php echo get_theme_mod( 'company_email' ); ?>"><?php echo get_theme_mod( 'company_email' ); ?></a></span>
				<?php endif; ?>		
			</div>
			
			<?php if ( get_theme_mod( 'company_opening_hours', false ) ) : ?>
			<div id="company-opening-hours" class="site-footer__section">
				<h3 class="footer-section__title"><?php _e('Opening Hours', '_svb') ?></h3>
				<span class="company-opening-hours"><?php echo nl2br( get_theme_mod( 'company_opening_hours' ) ); ?></span>
			</div>
			<?php endif; ?>

			<?php if ( get_theme_mod( 'company_address', false ) ) : ?>
			<div id="company-address" class="site-footer__section">
				<h3 class="footer-section__title"><?php _e('Address', '_svb') ?></h3>
				<span class="company-address"><?php echo nl2br( get_theme_mod( 'company_address' ) ); ?></span>
			</div>
			<?php endif; ?>			
		</div>
		
		<div id="legal" class="site-footer__bar bar sub-footer">
			<span class="copyright-notice">&copy; 2017-<?php echo date( 'Y' ); ?></span> - 
			<?php if ( get_theme_mod( 'company_name', false ) ) : ?>
			<span class="company-name"><?php echo get_theme_mod( 'company_name' ); ?></span> - 
			<?php endif; ?>
			<?php if ( get_theme_mod( 'company_vat', false ) ) : ?>
			<span>
				<?php _e('VAT', '_svb'); ?>
				<span class="company-vat"><?php echo get_theme_mod( 'company_vat' ); ?></span> 
			</span>
			<?php endif; ?>
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
		</div>
		
		<?php if ( get_theme_mod( 'fixed_footer_bar' ) ) : ?>
		<div class="site-footer__bar bar bar--fixed footer-fixed-bar">
			<?php echo do_shortcode( get_theme_mod( 'fixed_footer_bar_content', __( 'Customize this text in Theme Customizer', '_svb' ) ) ); ?>
		</div>
		<?php endif ?>
		
		
	</footer><!-- #colophon -->
</div><!-- #page -->

<?php wp_footer(); ?>

</body>
</html>
