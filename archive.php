<?php
/**
 * The template for displaying archive pages
 *
 * @link https://codex.wordpress.org/Template_Hierarchy
 *
 * @package nascsp
 */

get_header(); 
$page_title = get_the_archive_title();

?>
<section class="content-section">
	<div class="container">
		<div class="row">
			<div class="col-md-8 page-content">
				<div class="page-heading">
					  <div class="page-title">
						 <h1><?php echo $page_title;?></h1>
						 <?php get_template_part('template-parts/social-sharing'); ?>
					  </div>
				</div>	
					
						<?php if ( have_posts() ) { ?>			
						
							
									<?php 
									while ( have_posts() ) { the_post();
										
									
											$title 	  = $post->post_title;
											
											$link	  = get_permalink($post->ID);
											$image_blog   = wp_get_attachment_image_src( get_post_thumbnail_id($post->ID),'home-page-news');
											
											$post_date = get_the_date($d='',$post->ID);
											
											$category_list = get_the_category_list(', ','westset');
											
											if(!empty($image_blog)){
												$image_b = $image_blog[0];
												$length = 200;
											
											}else{
												$image_b  = "";
												$length = 400;
											}	
											
											$content  = nascsp_limit_Text($post->post_content,$length);	
										
											?>					
										  <div class="success-content-block">
												<?php if(!empty($title)) { ?>
														<h3><a href ="<?php echo $link;?>"><?php echo $title;?></a></h3>
														<div class="date"><?php echo $post_date; ?></div>
												<?php }  ?>
																		
												<?php if(!empty($content)) {
													 echo '<p>'.$content.'</p>';													
												  }	?>
												<?php if(!empty($category_list)){ ?>
												<div class="category-list"><strong>Category :</strong> <?php echo $category_list; ?> </div>
												<?php } ?>
												<a href="<?php echo $link?>" class="link"> READ MORE </a> 
												<hr />
										  </div>
									<?php } wp_reset_postdata(); ?>
					<div class="pager">
					<?php              
					$args = array('prev_next'          => true,
								'prev_text'        	   => __('« '),
								'next_text'            => __(' »'),);
					echo paginate_links($args);					
					?>
					</div>
								
				</div>				
				<div class="col-md-4">
						<?php get_sidebar("blog"); ?>
						<?php get_sidebar('right'); ?>				
				</div>   
			</div>			
	</div>
</section>				
							  
							
								 
						
	<?php } ?>

<?php

get_footer();
