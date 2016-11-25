<?php
# SilverbackStudio Theme Config File
# Version: 1.1

if ( ! defined( 'ABSPATH' ) ) {
	exit; // Exit if accessed directly
}

return array(
    'version' =>'1.1',
    'textdomain' => '_svbk',
    // 'contact'=> [
    //     'company_name' => '[Demo Company]',
    //     'address' => '[Example Street, 0001]',
    //     'cap' => '[00000]',
    //     'city' => '[City]',
    //     'country' => '[Country]',
    //     'address2' => '',
    //     'phone' => '[+00 000 000000]',
    //     'fax' => '[+00 000 000000]',
    //     'email' => '[email@company.com]',
    //     'vat' => '[000000000]',
    // ],

    'google-fonts' => [
        'fonts' => 'Roboto:300,400',
    ],

    // 'google-tag-manager' => [
    //     'id' => 'GTM-5C328V',
    // ],

    // 'googlemaps' => [
    //     'key' => '',
    //     'callback' => 'initGMaps',
    //     'libraries' => 'places',
    //     'zoom' => '14',
    //     'styles' => '[{"stylers":[{"saturation":-100},{"gamma":1}]},{"elementType":"labels.text.stroke","stylers":[{"visibility":"off"}]},{"featureType":"poi.business","elementType":"labels.text","stylers":[{"visibility":"off"}]},{"featureType":"poi.business","elementType":"labels.icon","stylers":[{"visibility":"off"}]},{"featureType":"poi.place_of_worship","elementType":"labels.text","stylers":[{"visibility":"off"}]},{"featureType":"poi.place_of_worship","elementType":"labels.icon","stylers":[{"visibility":"off"}]},{"featureType":"road","elementType":"geometry","stylers":[{"visibility":"simplified"}]},{"featureType":"water","stylers":[{"visibility":"on"},{"saturation":50},{"gamma":0},{"hue":"#50a5d1"}]},{"featureType":"administrative.neighborhood","elementType":"labels.text.fill","stylers":[{"color":"#333333"}]},{"featureType":"road.local","elementType":"labels.text","stylers":[{"weight":0.5},{"color":"#333333"}]},{"featureType":"transit.station","elementType":"labels.icon","stylers":[{"gamma":1},{"saturation":50}]}]'
    // ],

    'icons' => [
        'path' => 'icons/style.css',
    ],

    // 'fonts_com' => [
    //     'api_key' => '',
    // ],
		//
    // 'iubenda' => [
    //     'siteId' => '',
    //     'cookiePolicyId' => '',
    //     'privacyPolicyId' => '',
    // ]

    # generate access token @ https://www.maestrooo.com/instagram || http://instagram.pixelunion.net/
    # lookup instagram id @ http://jelled.com/instagram/lookup-user-id

    // 'instagram' => [
    //     'get' => 'user',
    //     'userId' => '',
    //     'limit' => 6,
    //     'accessToken' => '',
    // ]
);
