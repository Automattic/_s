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
			<div class="footer-area">
				<?php echo wp_get_attachment_image( get_theme_mod( 'footer_logo', '' ), 'large' ); ?>
			</div>
			<?php endif ?>
	
			<div id="company-info" class="footer-area">
				<?php if ( get_theme_mod( 'company_name', false ) ) : ?>
				<span class="company-name"><?php echo get_theme_mod( 'company_name' ); ?></span><br/>
				<?php endif; ?>
				<?php if ( get_theme_mod( 'company_address', false ) ) : ?>
				<span class="company-address"><?php echo get_theme_mod( 'company_address' ); ?></span><br/>
				<?php endif; ?>
				<?php if ( get_theme_mod( 'company_phone', false ) ) : ?>
				<span class="company-phone">Tel: <a href="tel:<?php echo get_theme_mod( 'company_phone' ); ?>"><?php echo get_theme_mod( 'company_phone' ); ?></a></span>
				<?php endif; ?>				
			</div>
		</div>
	
		<div id="legal" class="sub-footer">
			<span class="copyright-notice">&copy; 2017</span>
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
	</footer><!-- #colophon -->

	<?php if ( get_theme_mod( 'fixed_footer_bar' ) ) : ?>
	<div class="footer-fixed-bar">
		<?php echo do_shortcode( get_theme_mod( 'fixed_footer_bar_content', __( 'Customize this text in Theme Customizer', '_svbk' ) ) ); ?>
	</div>
	<?php endif ?>

</div><!-- #page -->

<?php wp_footer(); ?>
