<?php 

use Svbk\WP\Helpers;

if ( Helpers\Config::exists( 'googlemaps' ) ) {
    $admin_maps = new Helpers\Maps\GoogleMaps( Helpers\Config::get( array(), 'googlemaps' ) );
    $admin_maps->libraries = ['places'];
    add_action( 'enqueue_block_editor_assets', array( $admin_maps, 'enqueue_script' ) );
}