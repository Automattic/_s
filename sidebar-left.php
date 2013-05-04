<?php
/**
 * The Sidebar containing the main widget areas.
 *
 * @Maquina
 */
?>
	<div id="left-sidebar-secondary" class="left-widget-area" role="complementary">
		<?php do_action( 'before_sidebar' ); ?>
		<?php if ( ! dynamic_sidebar( 'left-sidebar' ) ) : ?>
		<?php endif; // end sidebar widget area ?>
	</div><!-- #secondary -->
