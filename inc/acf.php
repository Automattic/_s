<?php
use Svbk\WP\Helpers;
use Svbk\WP\Plugins\PrivateArea;

add_filter('acf/settings/show_admin', '_svbk_acf_show_admin');

function _svbk_acf_show_admin( $show ) {
    return current_user_can('manage_options');
}

add_action( 'after_setup_theme', '_svbk_acf_register_fields' );

function _svbk_acf_register_fields(){

	if( ! function_exists('acf_add_local_field_group') ){
		return;
	}

  /* add fields definitions here */

}
