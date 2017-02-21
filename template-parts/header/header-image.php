<?php
/**
 * Displays header media
 *
 * @package WordPress
 * @subpackage Twenty_Seventeen
 * @since 1.0
 * @version 1.0
 */

if( get_theme_mod('header_cycle_images') && $hImages = get_uploaded_header_images()) :
	echo '<div class="page-featured-image-header css-crossfade">';
	echo Svbk\WP\Helpers\Gallery\CssEffects::crossfade('.page-featured-image-header img', count($hImages));
	foreach($hImages as $hImage){
		echo wp_get_attachment_image($hImage['attachment_id'], 'header');
	}
	echo '</div><!-- .page-featured-image-header -->';	
	
	return;
endif;
?>

<div class="custom-header-media">
	<?php the_custom_header_markup(); ?>
</div>

