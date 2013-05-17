<?php
/**
 * The Header widget area.
 *
 * @package Maquina
 * @file
 */
?>
	<?php if ( is_active_sidebar( 'header-sidebar' ) ) : ?>
	<div id="header-widget" class="header-widget" role="complementary">
		<?php dynamic_sidebar( 'header-sidebar' ); ?>
	</div><!-- header-widget -->
	<?php endif; ?>
