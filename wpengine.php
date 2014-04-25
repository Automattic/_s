<?php
/**
 * Varnish cache clearing for JSON REST API routes
 *
 * WP Engine caches all sorts of things to keep your WordPress site up & running.
 * One layer of caching is the venerable Varnish. WP Engine's purging code doesn't
 * include JSON REST API endpoints however so public requests to them suffer from
 * 10 minute delays. This code purges the standard routes when content is updated,
 * avoiding such delays.
 *
 * Access to Varnish isn't publicly exposed, but is possible via the WP Engine plugin
 * installed for all customers.
 *
 * Technique is borrowed from https://github.com/cftp/WPEngine-Clear-URL-Cache
*/

function purge_cached_post( $post_id ){
    $varnish = 'localhost';
    $hostname = $_SERVER['SERVER_NAME'];

    $endpoints = array(
        '/wp-json/posts',
        '/wp-json/posts/'.$post_id
    );

    foreach( $endpoints as &$endpoint ){
        error_log( 'PURGE! '.$endpoint );
        WpeCommon::http_request_async( 'PURGE', $varnish, 9002, $hostname, $endpoint, array( ), 0 );
    }

}

add_action( 'save_post', 'purge_cached_post' );