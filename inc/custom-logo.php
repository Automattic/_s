<?php
/**
 * Sample implementation of the Custom Logo feature
 *
 * You can add an custom Logo attachment link to placeholder by running...
 *
 * <?php _s_the_custom_logo(); ?>
 *
 * @package _s
 */

/**
 * Function to get the custom Logo attachment link
 */
function _s_the_custom_logo() {
	$image = wp_get_attachment_image_src( get_theme_mod( 'custom_logo' ), 'full' );
	echo esc_url( $image[0] );
}
