<?php
/**
 * The template for displaying search forms in _s
 *
 * @package _s
 * @since _s 1.0
 */
?>
	<form method="get" id="searchform" action="<?php echo esc_url( home_url( '/' ) ); ?>" role="search" class="navbar-search pull-right">
		<label for="s" class="assistive-text"><?php _e( 'Search', '_s' ); ?></label>
		<input type="text" class="search-query" name="s" value="<?php echo esc_attr( get_search_query() ); ?>" id="s" placeholder="<?php esc_attr_e( 'Search &hellip;', '_s' ); ?>" />
	</form>
