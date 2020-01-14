<?php
/**
 * The template for displaying all single posts
 *
 * @link https://developer.wordpress.org/themes/basics/template-hierarchy/#single-post
 *
 * @package nascsp
 */

get_header(); 
$featured_image		  = wp_get_attachment_image_url(get_post_thumbnail_id(),'success-story-post-image');?>

	<section class="content-section">
<div class="container">
	<div class="row">
		<div class="col-md-8 page-content">
			<div class="page-heading">
				<div class="page-title"><?php echo $post->post_title; ?></div>
				<hr/>
				<?php /*if(!empty($featured_image)) { 
				$featured_image_title = get_post(get_post_thumbnail_id())->post_title;
				?>
				<div class="post-image">
					<img src="<?php echo $featured_image;?>" alt="<?php echo $featured_image_title;?>" />
				</div>
				<?php } */?>				
				<?php echo apply_filters('the_content',$post->post_content); ?>
			</div>					
		</div>
		<div class="col-md-4">
				<?php get_sidebar("blog"); ?>
				<?php get_sidebar('right'); ?>				
		</div>   
	</div>
</div>
</section>

<?php
get_sidebar();
get_footer();
