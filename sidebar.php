<?php
/**
 * The sidebar containing the main widget area.
 *
 * @package YuMag
 */

if ( ! is_active_sidebar( 'footer-widgets' ) ) {
	return;
}
?>

<div id="secondary" class="widget-area footer-widget-area" role="complementary">
	<?php dynamic_sidebar( 'footer-widgets' ); ?>
</div><!-- #secondary -->
