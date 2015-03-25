<?php
/**
 * The template used for displaying individual featured content items in the
 * Ideal Image Slider.
 *
 * @since 1.0.0
 * @link https://github.com/gilbitron/Ideal-Image-Slider
 *
 * @package YuMag
 */

global $slider_captions;

$img_src = wp_get_attachment_image_src( get_post_thumbnail_id(), 'yumag-slider-photo' );
$caption_class = 'slider-caption-' . get_the_ID();
$category_class = '';

$cats = get_the_category();
if ( ! empty( $cats ) ) {
	foreach ( $cats as $cat ) {
		$category_class .= 'category-' . $cat->slug . ' ';
	}
}

if ( $img_src ) : ?>
<a class="slider-link" href="<?php the_permalink(); ?>">
	<img class="slider-image test" src="" data-src="<?php echo $img_src[0]; ?>" alt="" title="<?php the_title_attribute(); ?>" data-caption=".<?php echo $caption_class; ?>" data-category="<?php echo $category_class; ?>">
</a>
<?php
$slider_captions .= '<div class="slider-caption ' . $caption_class . '">';
$slider_captions .= the_subtitle( '<div class="slider-subtitle">', '</div>', false );
$slider_captions .= '<p class="slider-caption-excerpt">' . get_the_excerpt() . '</p>';
$slider_captions .= '<div class="slider-caption-footer">' . yumag_entry_footer( false ) . '</div>';
$slider_captions .= '</div>';

endif;
