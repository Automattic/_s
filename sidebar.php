<?php
/**
 * The Sidebar.
 *
 * @package Maquina
 * @file
 * @see /inc/theme-widgets.php
 */
?>
	<div id="sidebar-one" class="widget-one">
		<?php do_action( 'before_sidebar' ); ?>
		<?php if ( ! dynamic_sidebar( 'sidebar-one' ) ) : ?>
		<?php endif; // end sidebar-one ?>
	</div>
	
	<div id="sidebar-two" class="widget-two">	
		<?php do_action( 'before_sidebar' ); ?>
		<?php if ( ! dynamic_sidebar( 'sidebar-two' ) ) : ?>
		<?php endif; // end sidebar-two ?>
	</div>	