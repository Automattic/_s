<?php
/**
 * Jetpack Compatibility File
 *
 * @link https://jetpack.com/
 *
 * @package _svbk
 */

use Svbk\WP\Helpers\Config;

/**
 * Jetpack setup function.
 *
 * See: https://jetpack.com/support/infinite-scroll/
 * See: https://jetpack.com/support/responsive-videos/
 * See: https://jetpack.com/support/content-options/
 */
function _svbk_jetpack_setup() {

	// Add theme support for Responsive Videos.
	add_theme_support( 'jetpack-responsive-videos' );

	// Add theme support for Content Options.
	add_theme_support(
		'jetpack-content-options',
		array(
			'post-details' => array(
				'stylesheet' => '_svbk-style',
				'date'       => '.posted-on',
				'categories' => '.cat-links',
				'tags'       => '.tags-links',
				'author'     => '.byline',
				'comment'    => '.comments-link',
			),
			'featured-images' => array(
				'archive'    => true,
				'post'       => true,
				'page'       => true,
			),
		)
	);

	$jetpack_filter_the_content_priority = has_filter( 'the_content', array( Jetpack_Photon::class, 'filter_the_content' ) );

	if ( $jetpack_filter_the_content_priority ){
		add_filter( 'the_content', '_svbk_jetpack_set_max_image_size', $jetpack_filter_the_content_priority - 1 );
		add_filter( 'the_content', '_svbk_jetpack_unset_max_image_size', $jetpack_filter_the_content_priority + 1 );
	}
	
}
add_action( 'after_setup_theme', '_svbk_jetpack_setup' );


function _svbk_jetpack_set_max_image_size(){
	add_filter( 'get_content_width', '_svbk_jetpack_max_image_size' );
}

function _svbk_jetpack_max_image_size($content_width){

	$page_max_width = Config::get( 'page_max_width', '_svbk' );

	if ( $page_max_width && $page_max_width > $content_width) {
		$content_width = $page_max_width;
	}

	return $content_width;
}

function _svbk_jetpack_unset_max_image_size(){
	remove_filter( 'get_content_width', '_svbk_jetpack_max_image_size' );
}


