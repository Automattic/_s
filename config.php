<?php 
# SilverbackStudio Theme Config File
# Version: 1.2

return array(
    'version' =>'1.2',
    'textdomain' => '_svbk',
    'contact'=> [
        'company_name' => '[Company Name]',
        'address' => '[Company Address]',
        'cap' => '[0000]',
        'city' => '[city]',
        'country' => '[Country]',
        'address2' => '[AD2]',
        'phone' => '[+00 00000TEL]',
        'fax' => '[+00 00000FAX]',
        'email' => '[mail@example.com]',
        'vat' => '[000000VATID]',
    ],
    
    'google-fonts' => [
        'fonts' => 'Roboto:300,400',
    ],

    //'google-tag-manager' => [
    //    'id' => '',
    //],

    //'googlemaps' => [
    //    'key' => '',
    //    'callback' => 'initGMaps',
    //    'libraries' => 'places',
    //    'zoom' => '14',
    //    'styles' => ''
    //],

    'icons' => [
        'path' => 'icons/style.css',
    ],
    
    //'fonts_com' => [
    //    'api_key' => '',
    //],
    
    //'iubenda' => [
    //    'siteId' => '',
    //    'cookiePolicyId' => '',
    //    'privacyPolicyId' => '',
    //    'banner' => [
    //        'slideDown'=> false,
		//        'applyStyles' => false,
		//        'content'=> ''        
		//    ]
    //]
    
    # generate access token @ https://www.maestrooo.com/instagram || http://instagram.pixelunion.net/
    # lookup instagram id @ http://jelled.com/instagram/lookup-user-id    
    
    // 'instagram' => [
    //     'get' => 'user',
    //     'userId' => '', 
    //     'limit' => 6,
    //     'accessToken' => '',
    // ]
);
