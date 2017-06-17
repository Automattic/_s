<?php
/**
 * Function to get the custom Logo attachment link
 *
 * You can add an custom Logo attachment link to placeholder by running...
 *
 * <?php _s_the_custom_logo(); ?>
 *
 * @package _s
 */
if ( ! function_exists( '_s_the_custom_logo' ) ) {
	function _s_the_custom_logo() {
		$image = wp_get_attachment_image_src( get_theme_mod( 'custom_logo' ), 'full' );
		echo esc_url( $image[0] );
	}
}
