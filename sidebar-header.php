<?php
/**
 * The Header widget areas.
 *
 * @package Maquina
 * @based on Twenty Eleven 1.0
 */
?>
<div id="header-widgets-container" class="header-widgets-container">
	<?php if ( is_active_sidebar( 'header-sidebar' ) ) : ?>
	<div id="header-widget" class="header-widget widgetleft" role="complementary">
		<?php dynamic_sidebar( 'header-sidebar' ); ?>
	</div><!-- #first .widget-area -->
	<?php endif; ?>
</div><!-- #header-widgets-container -->