<?php

/* ==========================================================================
   Plugin Specific
   ========================================================================== */

/* Advanced Custom Fields
   -------------------------------------------------------------------------- */

/**
* Add Admin Options menu item
*
* @link http://www.advancedcustomfields.com/resources/acf_add_options_page/
*/
if ( function_exists( 'acf_add_options_page' ) ) {

    acf_add_options_page( array(
        'page_title' => 'Global Options'
    ) );

}





/**
 * Hide ACF admin menu from WordPress users
 *
 * Note: to allow all admins access, use: return current_user_can( 'manage_options' );
 *
 * @link http://www.advancedcustomfields.com/resources/how-to-hide-acf-menu-from-clients/
 */
function _s_hide_acf_menu( $show ) {

    // provide a list of usernames who can edit custom field definitions here
    $admins = array(
        'clnt0000'
    );

    // get the current user
    $current_user = wp_get_current_user();

    return ( in_array( $current_user->user_login, $admins ) ) ? true : false;

}
add_filter( 'acf/settings/show_admin', '_s_hide_acf_menu' );





/* Yoast SEO
   -------------------------------------------------------------------------- */

/**
 * Change order of Yoast SEO plugin meta box
 */
function _s_yoast_meta_order() {

    return 'low';

}
add_filter( 'wpseo_metabox_prio', '_s_yoast_meta_order' );





/**
 * Hide Yoast columns on overview screens
 *
 * @link https://yoast.com/wordpress/plugins/seo/api/
 */
function _s_hide_yoast_columns() {

    if ( ! is_admin() || ( defined( 'DOING_AJAX' ) && DOING_AJAX ) ) {
        return false;
    }

    add_filter( 'wpseo_use_page_analysis', '__return_false' );

}
add_action( 'init', '_s_hide_yoast_columns' );
