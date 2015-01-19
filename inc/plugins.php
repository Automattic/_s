<?php

/* ==========================================================================
   Plugin Specific
   ========================================================================== */

/**
* Add Admin Options menu item
*
* Managed by Advanced Custom Fields Plugin
*
*/
if( function_exists( 'acf_add_options_page' ) ) {

    acf_add_options_page(array(
        'page_title'    => 'Global Options',
        'menu_title'    => 'Global Options'
    ));

}





/**
 * Hide ACF menu from regular wp users
 *
 * Plugin: Advanced Custom Fields
 */
function _s_hide_acf_menu() {

    // provide a list of usernames who can edit custom field definitions here
    $admins = array(
        'elevator'
    );

    // get the current user
    $current_user = wp_get_current_user();

    // match and remove if needed
    if( !in_array( $current_user->user_login, $admins ) ) {

        // Plugins
        remove_menu_page( 'edit.php?post_type=acf' ); // Advanced Custom Fields

    }

}
add_action( 'admin_menu', '_s_hide_acf_menu', 999 );





/**
 * Change order of Yoast SEO plugin meta box
 *
 * Plugin: Yoast SEO
 */
function _s_yoast_meta_order() {

    return 'low';

}
add_filter( 'wpseo_metabox_prio', '_s_yoast_meta_order' );





/**
 * Hide Yoast columns on overview screens
 *
 * Plugin: Yoast SEO
 */
function _s_hide_yoast_columns() {

    if ( ! is_admin() || ( defined( 'DOING_AJAX' ) && DOING_AJAX ) ) {
        return false;
    }


    add_filter( 'wpseo_use_page_analysis', '__return_false' );
}
add_action( 'init', '_s_hide_yoast_columns' );
