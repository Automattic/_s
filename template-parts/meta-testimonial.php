<?php
/**
 * Template part for displaying a Testimonial
 *
 * @link https://developer.wordpress.org/themes/basics/template-hierarchy/
 *
 * @package _svbk
 */

$rating = get_post_meta( get_the_ID(), 'rating', true );
$avatarId = get_post_meta( get_the_ID(), 'avatarId', true );
$authorName = get_post_meta( get_the_ID(), 'authorName', true );
$authorRole = get_post_meta( get_the_ID(), 'authorRole', true );
$publishDate = get_post_meta( get_the_ID(), 'publishDate', true );
$source = get_post_meta( get_the_ID(), 'testimonialSource', true );
$companyLogoId = get_post_meta( get_the_ID(), 'companyLogoId', true );

?>
<div class="wp-block-svbk-testimonial__header" >
	<?php if ( $avatarId ) : ?>
	<figure class="wp-block-svbk-testimonial__avatar" >
		<?php echo wp_get_attachment_image($avatarId, 'small'); ?>
	</figure> 
	<?php endif; ?>
	
	<?php if ( $authorName ) : ?>
	<div class="wp-block-svbk-testimonial__author">
		<div class="wp-block-svbk-testimonial__author-name" ><?php esc_html_e( $authorName ) ?></div>
		<?php if ( $authorRole ) :?>
			<div class="wp-block-svbk-testimonial__author-role" ><?php esc_html_e( $authorRole ) ?></div>
		<?php endif ?>
	</div>					
	<?php endif; ?>
	
	<?php if ( $rating ) : ?> 
	<div class="wp-block-svbk-testimonial__rating rating <?php echo $rating ? ('rating--'.$rating) : '' ?>" >
		<span class="rating__label"><?php _e('Rating', '_svbk') ?>:</span>
		<span class="rating__value"><?php esc_html_e($rating) ?></span>
	</div>
	<?php endif; ?>
	
	<?php if ($publishDate || $source) : ?> 
	<div class="wp-block-svbk-testimonial__meta" >
		<?php if ($publishDate) : ?><span class="wp-block-svbk-testimonial__date" ><?php esc_html_e($publishDate) ?></span><?php endif; ?>
		<?php if ($source) : ?><span class="wp-block-svbk-testimonial__source" ><?php esc_html_e($source) ?></span><?php endif; ?>
	</div>
	<?php endif; ?>
	
	<?php if ( $companyLogoId ) : ?>
	<figure class="wp-block-svbk-testimonial__company-logo" >
		<?php echo wp_get_attachment_image($companyLogoId, 'small'); ?>
	</figure> 
	<?php endif; ?>
</div>
				


