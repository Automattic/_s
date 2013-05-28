<?php
/**
 * The template for displaying search forms in Maquina
 *
 * @package Maquina
 * @file 
 */
?>
	<form method="get" id="searchform" class="searchform" action="<?php echo esc_url( home_url( '/' ) ); ?>" role="search">
		<label for="s" class="screen-reader-text"><?php _ex( 'Search', 'assistive text', 'maquina' ); ?></label>
		<input type="search" class="field" name="s" value="<?php echo esc_attr( get_search_query() ); ?>" id="s" placeholder="<?php echo esc_attr_x( 'Search &hellip;', 'placeholder', 'maquina' ); ?>" />
		<input type="submit" class="submit" id="searchsubmit" value="<?php echo esc_attr_x( 'Search', 'submit button', 'maquina' ); ?>" />
	</form>
