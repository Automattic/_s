<?php
/**
 * The Sidebar containing the main widget areas.
 *
 * @Maquina
 */
?>
	<div id="right-sidebar-secondary" class="right-widget-area" role="complementary">
		<?php do_action( 'before_sidebar' ); ?>
		<?php if ( ! dynamic_sidebar( 'right-sidebar' ) ) : ?>
		<?php endif; // end sidebar widget area ?>
	</div><!-- #secondary -->
