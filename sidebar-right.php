<?php
/**
 * The right widget area.
 *
 * @package Maquina
 * @file
 */
?>
	<div id="right-sidebar" class="right-widget">
		<?php do_action( 'before_sidebar' ); ?>
		<?php if ( ! dynamic_sidebar( 'right-sidebar' ) ) : ?>
		<?php endif; // end right-sidebar ?>
	</div>