<?php
/**
 * The Footer widget areas.
 *
 * @package Maquina
 * @based on Twenty Eleven 1.0
 */
?>
<div id="footer-widgets-container" class="footer-widgets-container">
	<?php if ( is_active_sidebar( 'footer-sidebar' ) ) : ?>
	<div id="footer-widget" class="footer-widget widgetleft" role="complementary">
		<?php dynamic_sidebar( 'footer-sidebar' ); ?>
	</div><!-- #first .widget-area -->
	<?php endif; ?>
</div><!-- #footer-widgets-container -->