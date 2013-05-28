<?php
/**
 * The left widget area.
 *
 * @package Maquina
 * @file
 */
?>
	<div id="left-sidebar" class="left-widget">
 		<?php do_action( 'before_sidebar' ); ?>
		<?php if ( ! dynamic_sidebar( 'left-sidebar' ) ) : ?>
		<?php endif; // end left-sidebar ?>
	</div>