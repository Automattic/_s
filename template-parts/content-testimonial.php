<?php
/**
 * Template part for displaying a Testimonial
 *
 * @link https://developer.wordpress.org/themes/basics/template-hierarchy/
 *
 * @package _svbk
 */
global $more;

$real_more = $more;
$more      = 1;
?>
<div id="post-<?php the_ID(); ?>" <?php post_class(); ?> >
	<?php the_content(null, false); ?>
</div>
<?php $more = $real_more;

