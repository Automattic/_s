<?php 
/*
 * Template Name: Blog Post Listing
 */
 get_header();
 global $post;
?>
<section class="content-section">
	<div class="container">
		<div class="row">
			<div class="col-md-8 page-content">
				<div class="page-heading">
					<div class="page-title"><?php echo $post->post_title ?></div>
					<ul class="social-share">
						<li class="facebook"><a href="#">facebook</a></li>
						<li class="twitter"><a href="#">twitter</a></li>
						<li class="linkedin"><a href="#">linkedin</a></li>
					</ul>
				</div>	
				<?php
				 if ( ! function_exists( 'post_pagination' ) ) :
					   function post_pagination() {
					     global $wp_query;
					     $pager = 999999999; // need an unlikely integer
					 
					        echo paginate_links( array(
					             'base' => str_replace( $pager, '%#%', esc_url( get_pagenum_link( $pager ) ) ),
					             'format' => '?paged=%#%',
					             'current' => max( 1, get_query_var('paged') ),
					             'total' => $wp_query->max_num_pages
					        ) );
					   }
					endif;
					$paged = (get_query_var('paged')) ? get_query_var('paged') : 1;
				 
					$posts_query = query_posts(array(
					    'post_type' => 'post', // You can add a custom post type if you like
					    'paged' => $paged,
					    'posts_per_page' => 10 // limit of posts
					));
				    // echo $wpdb->last_query;
				    //echo $wpdb->last_query;
				    if ( have_posts() ) : ?>
						<?php
							foreach ($posts_query as $value) {
								$post_link = get_permalink($value->ID);
								$date = $value->post_date;
								$date = strtotime($date);
								$date = date('F j, Y',$date);
								$content = nascsp_limit_Text($value->post_content,200);
								$post_image = wp_get_attachment_image_url(get_post_thumbnail_id($value->ID),'success-story-post-image');
										
								if(!empty($post_image)){
								$post_image_crop = $post_image;
								} else {
								$post_image_crop =get_template_directory_uri().'/images/success-story-no-image.png';					
								} ?>
								<div class="success-story-block">
									<div class="success-image-block">
										<a href="<?php echo $post_link; ?>">
										<img src="<?php echo $post_image_crop; ?>" alt="<?php echo $post_title; ?>" />
										</a>
									</div>
									<div class="success-content-block">
										<strong><?php echo $value->post_title; ?></strong><br /><br />
										<?php echo  'Posted on '.$date ?><br /><br />
										<?php echo $content.'...'?><br />
										<a href="<?php echo $post_link;?>">Read More</a>
										<hr />
									</div>
								</div>
						<?php 	}
							//echo '</ul>';
						?>
						<?php post_pagination(); ?>
				   <?php endif; ?>
			</div>	
			<div class="col-md-4">
				<?php get_sidebar('right'); ?>
			</div>   
		</div>		
	</div>
</section>
<?php 
get_footer();