<?php
/**
 * The Header widget areas.
 *
 * @package Maquina
 * @based on Twenty Eleven 1.0
 */
?>
<div id="header-widgets-container" <?php maquina_header_sidebar_class(); ?>>
	<?php if ( is_active_sidebar( 'header-sidebar-1' ) ) : ?>
	<div id="header-widget-1" class="header-widget-1" role="complementary">
		<?php dynamic_sidebar( 'header-sidebar-1' ); ?>
	</div><!-- #first .widget-area -->
	<?php endif; ?>

	<?php if ( is_active_sidebar( 'header-sidebar-2' ) ) : ?>
	<div id="header-widget-2" class="header-widget-2" role="complementary">
		<?php dynamic_sidebar( 'header-sidebar-2' ); ?>
	</div><!-- #second .widget-area -->
	<?php endif; ?>

	<?php if ( is_active_sidebar( 'header-sidebar-3' ) ) : ?>
	<div id="header-widget-3" class="header-widget-3" role="complementary">
		<?php dynamic_sidebar( 'header-sidebar-3' ); ?>
	</div><!-- #third .widget-area -->
	<?php endif; ?>
	
	<?php if ( is_active_sidebar( 'header-sidebar-4' ) ) : ?>
	<div id="header-widget-4" class="header-widget-4" role="complementary">
		<?php dynamic_sidebar( 'header-sidebar-4' ); ?>
	</div><!-- #fourth .widget-area -->	
	<?php endif; ?>
</div><!-- #header-widgets-container -->