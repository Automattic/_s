<?php
/**
 * The sidebar containing the main widget area.
 *
 * @package _s2
 */

if ( ! is_active_s2idebar( 'sidebar-1' ) ) {
	return;
}
?>

<div id="secondary" class="widget-area" role="complementary">
	<?php dynamic_s2idebar( 'sidebar-1' ); ?>
</div><!-- #secondary -->
