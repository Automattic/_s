<?php
/**
 * Template part for displaying a Testimonial
 *
 * @link https://developer.wordpress.org/themes/basics/template-hierarchy/
 *
 * @package _svbk
 */
?>
<div id="post-<?php the_ID(); ?>" <?php post_class(); ?>>
	<?php the_content( __('Read more', '_svbk'), false); ?>
</div>
