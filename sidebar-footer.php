<?php
/**
 * The Footer widget area.
 *
 * @package Maquina
 * @file
 */
?>
	<?php if ( is_active_sidebar( 'footer-sidebar' ) ) : ?>
	<div id="footer-widget" class="footer-widget widgetleft" role="complementary">
		<?php dynamic_sidebar( 'footer-sidebar' ); ?>
	</div><!-- footer-widget -->
	<?php endif; ?>