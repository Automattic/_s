<?php
/**
 * The Content widget area.
 *
 * @package Maquina
 * @file
 */
?>
	<div id="content-sidebar" class="content-widget">	
			<?php do_action( 'before_sidebar' ); ?>
			<?php if ( ! dynamic_sidebar( 'content-sidebar' ) ) : ?>
			<?php endif; // end content-sidebar ?>
	</div>