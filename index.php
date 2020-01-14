<?php
/**
 * The main template file
 *
 * This is the most generic template file in a WordPress theme
 * and one of the two required files for a theme (the other being style.css).
 * It is used to display a page when nothing more specific matches a query.
 * E.g., it puts together the home page when no home.php file exists.
 *
 * @link https://codex.wordpress.org/Template_Hierarchy
 *
 * @package nascsp
 */

get_header(); ?>
<?php 
$blog_id 			  = get_option('page_for_posts');
$page_title 		  = get_the_title($blog_id);
?>
<section class="content-section">
	<div class="container">
		<div class="row">
			<div class="col-md-8 page-content">
				<div class="page-heading">
					<div class="page-title"><?php echo $page_title; ?></div>
					<?php get_template_part('template-parts/social-sharing'); ?>
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
				 
					$args = array(	
						'ignore_sticky_posts' => 1,
						'status' => 'publish',
					    'paged' => ( get_query_var('paged') ? get_query_var('paged') : 1),
					    'posts_per_page' => 10 // limit of posts
					);
					query_posts($args);
					
					// echo "<pre>";
					// print_r($x);
					// echo "</pre>";exit;
				    // echo $wpdb->last_query;
				    //echo $wpdb->last_query;
				    if ( have_posts() ) : ?>
						<?php
							while(have_posts()) {
								the_post();
								$post_id = get_the_ID();
								$post_link = get_permalink($post_id);
								$post_title = get_the_title($post_id);
								
								$date = get_the_date($d='',$post_id);
								$date = strtotime($date);
								$date = date('F j, Y',$date);
								$post_author_id=$post->post_author;
								$post_author_array = get_user_by('ID',$post_author_id);
								$post_suthor_url = get_author_posts_url( $post_author_array->ID);
								$content     = get_the_content($post_id);
								$content = preg_replace('/(<img [^>]*>)/', '', wp_strip_all_tags($content));
								$content = strip_shortcodes($content);
								$content = preg_replace('#\[[^\]]+\]#', '',$content);
								$content = apply_filters('the_content', $content);
								$content = nascsp_limit_Text($content,200);
								$post_image = wp_get_attachment_image_src(get_post_thumbnail_id(),'thumbnail');
								// print_r($value);
								if(!empty($post_image)){
								$post_image_crop = $post_image[0];
								} //else {
								//$post_image_crop = " ";	
								//}
								// else {
								// $post_image_crop =get_template_directory_uri().'/images/success-story-no-image.png';					
								// } ?>
								<div class="state-poverty-blog">
									<?php if(!empty($post_image)) { ?>
									<div class="state-poverty-image">
										<a href="<?php echo $post_link; ?>">
										<img src="<?php echo $post_image_crop; ?>" alt="<?php echo $post_title; ?>" />
										</a>
									</div> 
									<?php } ?>
									<div class="state-poverty-content">
										<h3><a href="<?php echo $post_link;?>"><?php echo $post_title; ?></a></h3>
										<div class="state-poverty-meta">
											<span><?php echo  'Posted on '.$date ?></span>
											<span><?php echo  'Posted By ' ?></span>
											<a href="<?php echo $post_suthor_url;?>" title="<?php echo $post_suthor_url;?>" rel="author"><?php echo $post_author_array->data->user_login; ?></a>			
										</div>
										<p><?php echo $content."..."; ?></p>
										<a href="<?php echo $post_link;?>">Read More</a>										
									</div>
								</div>
						<?php 	} wp_reset_query();
							//echo '</ul>';
						?>
						<ul class="pagination">
							<li><?php post_pagination(); ?></li>
						</ul>
				   <?php endif; ?>
			</div>	
			<div class="col-md-4">
				<?php get_sidebar("blog"); ?>
				<?php get_sidebar('right'); ?>				
			</div>   
		</div>		
	</div>
</section>	
<?php
get_footer();
