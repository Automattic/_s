<?php
/**
 * SilverbackStudio Theme Config File
 *
 * Version: 1.2
 *
 * @package _svbk
 **/

return array(
	'version'      => '1.2',
	'textdomain'   => '_svbk',
	'contact'      => [
		'company_name' => '[Company Name]',
		'address'      => '[Company Address]',
		'cap'          => '[0000]',
		'city'         => '[city]',
		'country'      => '[Country]',
		'address2'     => '[AD2]',
		'phone'        => '[+00 00000TEL]',
		'fax'          => '[+00 00000FAX]',
		'email'        => '[mail@example.com]',
		'vat'          => '[000000VATID]',
	],

	'google-fonts' => [
		'fonts' => 'Roboto:300,400',
	],

	// 'google-tag-manager' => [
	// 'id' => '',
	// ],
	// 'googlemaps' => [
	// 'key' => '',
	// 'callback' => 'initGMaps',
	// 'libraries' => 'places',
	// 'mapOptions' => [
	// 'zoom' => '14',
	// 'styles' => ''
	// ],
	// 'markerOptions' => [
	// 'icon' => get_stylesheet_directory_uri().'/media/pin.png',
	// ]
	// ],
	'icons'        => [
		'path' => 'icons/style.css',
	],

	// 'fonts_com' => [
	// 'api_key' => '',
	// ],
	// 'mailing' => [
	// 'recipientEmail' => '',
	// 'mc_apikey' => '',
	// 'mc_list_id' => '',
	// 'md_apikey' => '',
	// 'template_new_supporter' => '',
	// 'template_new_member' => '',
	// ],
	//
	// 'paypal' => [
	// 'clientId' => '',
	// 'clientSecret' => '',
	// 'receiver_email' => '',
	// 'currency' => 'EUR',
	// 'mode' => 'sandbox',
	// 'config' => array(
	// 'mode' => 'sandbox',
	// 'log.LogEnabled' => true,
	// 'log.FileName' => '../PayPal.log',
	// 'log.LogLevel' => 'DEBUG', // PLEASE USE `INFO` LEVEL FOR LOGGING IN LIVE ENVIRONMENTS
	// 'cache.enabled' => true,
	// 'http.CURLOPT_CONNECTTIMEOUT' => 30
	// 'http.headers.PayPal-Partner-Attribution-Id' => '123123123'
	// 'log.AdapterFactory' => '\PayPal\Log\DefaultLogFactory' // Factory class implementing \PayPal\Log\PayPalLogFactory
	// )
	// ],
	// 'iubenda' => [
	// 'siteId' => '',
	// 'cookiePolicyId' => '',
	// 'privacyPolicyId' => '',
	// 'banner' => [
	// 'slideDown'=> false,
	// 'applyStyles' => false,
	// 'content'=> ''
	// ]
	// ]
	// generate access token @ https://www.maestrooo.com/instagram || http://instagram.pixelunion.net/
	// lookup instagram id @ http://jelled.com/instagram/lookup-user-id
	// 'instagram' => [
	// 'get' => 'user',
	// 'userId' => '',
	// 'limit' => 6,
	// 'accessToken' => '',
	// ]
);
