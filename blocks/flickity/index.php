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

	// Retrigger resize/reposition after all CSS files has been loaded (fixes firefox bugs)
	wp_add_inline_script( 'flickity', "
	  window.addEventListener('load', function(event) {
		var flickityElements = document.querySelectorAll( '.flickity-enabled' );
		
		for (var i = 0; i < flickityElements.length; i++) {
		    var flickityInstance = Flickity.data( document.querySelectorAll( '[data-flickity]' )[i] );
		    if ( flickityInstance  ){ 
		    	flickityInstance.resize(); 
		    	flickityInstance.reposition(); 
		    }
		}
	});" );

}

add_action( 'wp_enqueue_scripts', '_svbk_conditionally_load_blocks_deps', 10 );


// Disable Jetpack LazyLoad on Galleries
function _svbk_exclude_flickity_from_lazyload( $classes ) {

	$classes[] = 'flickity-image';

	return $classes;
}

add_filter( 'jetpack_lazy_images_blacklisted_classes', '_svbk_exclude_flickity_from_lazyload' );