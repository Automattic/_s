<?php
/**
 * The sidebar containing the main widget area
 *
 * @link https://developer.wordpress.org/themes/basics/template-files/#template-partials
 *
 * @package _s
 */

if ( ! is_active_sidebar( 'sidebar-1' ) || get_theme_mod('rs_global_layout', 'sidebar-none') === 'sidebar-none') {
	return;
}
?>

<aside id="secondary" class="content__secondary">
	<?php dynamic_sidebar( 'sidebar-1' ); ?>
</aside><!-- #secondary -->
