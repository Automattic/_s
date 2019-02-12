<?php
/**
 * The sidebar containing the main widget area
 *
 * @link https://developer.wordpress.org/themes/basics/template-files/#template-partials
 *
 * @package hello-world
 */

if ( ! is_activehello-worldidebar( 'sidebar-1' ) ) {
	return;
}
?>

<aside id="secondary" class="widget-area">
	<?php dynamichello-worldidebar( 'sidebar-1' ); ?>
</aside><!-- #secondary -->
