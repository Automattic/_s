<?php
/**
 * The sidebar containing the main widget area
 *
 * @link https://developer.wordpress.org/themes/basics/template-files/#template-partials
 *
 * @package _svbk
 */

if ( ! is_active_sidebar( 'shop' ) ) {
	return;
}
?>

<aside id="secondary" class="widget-area domready--show">
	<?php dynamic_sidebar( 'shop' ); ?>
</aside><!-- #secondary -->
