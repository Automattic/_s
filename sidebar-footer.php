<?php
/**
 * The Footer widget areas.
 *
 * @package Maquina
 * @based on Twenty Eleven 1.0
 */
?>

<div id="footer-widgets-container" <?php maquina_footer_sidebar_class(); ?>>
	<?php if ( is_active_sidebar( 'footer-sidebar-1' ) ) : ?>
	<div id="footer-widget-1" class="footer-widget-1" role="complementary">
		<?php dynamic_sidebar( 'footer-sidebar-1' ); ?>
	</div><!-- #first .widget-area -->
	<?php endif; ?>

	<?php if ( is_active_sidebar( 'footer-sidebar-2' ) ) : ?>
	<div id="footer-widget-2" class="footer-widget-2" role="complementary">
		<?php dynamic_sidebar( 'footer-sidebar-2' ); ?>
	</div><!-- #second .widget-area -->
	<?php endif; ?>

	<?php if ( is_active_sidebar( 'footer-sidebar-3' ) ) : ?>
	<div id="footer-widget-3" class="footer-widget-3" role="complementary">
		<?php dynamic_sidebar( 'footer-sidebar-3' ); ?>
	</div><!-- #third .widget-area -->
	<?php endif; ?>
</div><!-- #supplementary -->
