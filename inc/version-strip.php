<?php
/**
 * Remove the auto generated wordpress versioning in theme i.e.
 * Remove meta data generator version number
 *
 * Remove all strings attached to css and scripts in theme 
 * except those of installed plugins and theme purposed version addition.
 *
 * @package _s
 */

/**
 * Setup function to query version attachements to scripts and style
 *
 */

function _s_remove_wp_version_strings( $src ) {
    global $wp_version;
    
    //check for PHP version
    parse_str( parse_url($src, PHP_URL_QUERY), $ver_query );
    
    //Check if current version number is appended to file
    if ( !empty( $ver_query['ver'] ) && $ver_query['ver'] === $wp_version ) {
        
        //Strip version number from file
        $src = remove_query_arg( 'ver', $src );
    }
    
    return $src; //Return the clean file
}

//Filter for footer scripts and styles files using the same function
add_filter( 'script_loader_src', '_s_remove_wp_version_strings' );
add_filter( 'style_loader_src', '_s_remove_wp_version_strings' );

//Strip meta data generator WordPress version in <head>
function _s_remove_meta_version()  {
    return '';
}

add_filter( 'the_generator', '_s_remove_meta_version' );