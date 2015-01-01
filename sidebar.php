<?php
/**
 * The sidebar containing the main widget area.
 *
 * @package _s
 */

if ( ! is_active_sidebar( 'sidebar-1' ) ) {
	return;
}
?>

<?php tha_sidebars_before(); ?>
<div id="secondary" class="widget-area" role="complementary">
    <?php tha_sidebar_top(); ?>
	<?php dynamic_sidebar( 'sidebar-1' ); ?>
    <?php tha_sidebar_bottom(); ?>
</div><!-- #secondary -->
<?php tha_sidebars_after(); ?>
