<?php

use Svbk\WP\Helpers\Assets\Asset;
use Svbk\WP\Helpers\Assets\Style;
use Svbk\WP\Helpers\Assets\Script;

function _svbk_conditionally_load_blocks_deps() {
	global $post;

	if ( ! function_exists( 'has_block' ) ) {
		return;
	}

	$has_gallery = has_block( 'gallery', $post );

	Script::enqueue(
		'flickity',
		'/dist/flickity.pkgd.min.js',
		[
			'version'   => '2',
			'defer'     => true,
			'async'     => true,
			'condition' => $has_gallery,
		]
	);

	Style::enqueue(
		'flickity',
		'/dist/flickity.min.css',
		[
			'version'   => '2',
			'defer'     => true,
			'condition' => $has_gallery,
		]
	);

}

add_action( 'wp_enqueue_scripts', '_svbk_conditionally_load_blocks_deps', 10 );


// Disable Jetpack LazyLoad on Galleries
function _svbk_exclude_flickity_from_lazyload( $classes ) {

	$classes[] = 'flickity-image';

	return $classes;
}

add_filter( 'jetpack_lazy_images_blacklisted_classes', '_svbk_exclude_flickity_from_lazyload' );
