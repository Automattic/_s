<?php
/**
 * Sample implementation of the Custom Logo feature
 *
 * <?php _s_the_custom_logo(); ?>
 *
 * @package _s
 */

/**
 * Get the custom Logo attachment link
 *
 */

if ( ! function_exists( '_s_the_custom_logo' ) ) {
	function _s_the_custom_logo() {
		$image = wp_get_attachment_image_src( get_theme_mod( 'custom_logo' ), 'full' );
		echo esc_url( $image[0] );
	}
}
