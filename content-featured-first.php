<?php
/**
 * The template used for displaying the first individual featured content item
 * in the Ideal Image Slider.
 *
 * The IMG markup is slightly different to allow us to load the first slider
 * image only on page load, then lazy load the others.
 *
 * @since 1.0.0
 * @link https://github.com/gilbitron/Ideal-Image-Slider
 *
 * @package YuMag
 */

global $slider_captions;

$img_src = wp_get_attachment_image_src( get_post_thumbnail_id(), 'yumag-featured-photo' );
$caption_class = 'slider-caption-' . get_the_ID();

if ( $img_src ) : ?>
<a class="slider-link" href="<?php the_permalink(); ?>">
	<img class="slider-image" src="<?php echo $img_src[0]; ?>" alt="" title="<?php the_title_attribute(); ?>" data-caption=".<?php echo $caption_class; ?>">
</a>
<?php
$slider_captions .= '<div class="slider-caption ' . $caption_class . '">';
$slider_captions .= the_subtitle( '', '', false );
$slider_captions .= '</div>';

endif;
