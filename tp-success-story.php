<?php
/*
* Template Name: Success Story Page
*/

get_header(); ?>

			<?php
			while ( have_posts() ) : the_post();
				$title = get_the_title();
				$content = get_the_content();
				$content = apply_filters('the_content', $content);
				$slider = get_field('slider');
				
				?>
                <?php if(!empty($slider)){ ?>
                    <section class="banner-section">
                        <ul class="banner-slider">
                            <?php foreach($slider as $slide){ 
                                $image = $slide['slide'];
                                $title = $slide['title'];
                                $description = $slide['description'];
                                $link = $slide['link'];
								
                            ?>
                            <li style="background-image:url('<?php echo $image['url'];?>');">
                                <img src="<?php echo $image['url']; ?>" alt="post-image" />
                                <div class="banner-content">
									<?php if(!empty($title)){ ?>
										<div class="banner-title"><?php echo $title; ?></div>
									<?php } ?>
									<?php if(!empty($description)){ ?>
										<p><?php echo $description; ?></p>
									<?php } ?>
									<?php if(!empty($link)){ ?>
										<a class="button banner-btn btn-blue btn" href="<?php echo $link; ?>">register</a>
									<?php } ?>
								</div>
                            </li>
                            <?php } ?>
                        </ul>
                    </section>
                    <?php } ?>
                <section class="content-section">
                    <div class="container">
                        <div class="row">
                            <div class="col-md-8 page-content">
                                <div class="page-heading">
                                    <div class="page-title"><?php echo $title; ?></div>
                                    <ul class="social-share">
                                        <li class="facebook"><a target="_blank" href="http://www.facebook.com/sharer.php?s=100&p[title]=<?php the_title(); ?>&p[url]=<?php the_permalink() ?>">facebook</a></li>
										<li class="twitter"><a target="_blank" href="https://twitter.com/share?url=<?php the_permalink() ?>&text=<?php the_title(); ?>">twitter</a></li>
										<li class="linkedin"><a href="http://www.linkedin.com/shareArticle?mini=true&url=<?php the_permalink() ?>&title=<?php the_title(); ?>&summary=&source=<?php bloginfo('name'); ?>" target="_new">linkedin</a></li>
                                    </ul>
                                </div>	
                            
							<?php
									$custom_args = array( 
										'posts_per_page' => -1,  
										'nopaging' => true,
										'post_type' => 'success-story',
										'post_status' => 'publish',
									);
									
									$query = new WP_Query($custom_args);
										
										
									if($query->have_posts()) :
									$i = 0;
										echo '<div class="success-story-list">';
									while ( $query->have_posts() ) : $query->the_post();
										$post_id = get_the_ID();
										$post_title = get_the_title($post_id);
										$post_permalink = get_the_permalink($post_id);
										$post_content = get_the_content($post_id);	
										// $post_image = get_the_post_thumbnail_url($post_id);
										$post_image = wp_get_attachment_image_url(get_post_thumbnail_id($post->ID),'success-story-post-image');
										
										if(!empty($post_image)){
										$post_image_crop = $post_image;
										} else {
										$post_image_crop =get_template_directory_uri().'/images/success-story-no-image.png';					
										}
										
									?>	
										<div class="success-story-block">
											<div class="success-image-block">
												<a href="<?php echo $post_permalink; ?>">
												<img src="<?php echo $post_image_crop; ?>" alt="<?php echo $post_title; ?>" />
												</a>
											</div>
											<div class="success-content-block">
												<h3><a href="<?php echo $post_permalink; ?>"><?php echo $post_title; ?></a></h3>
												<p>
													<?php echo nascsp_limit_Text($post_content,200); ?>
													<?php if(strlen($post_content) > 200 ) : ?>
														<a href="<?php echo $post_permalink; ?>">...Read more</a>
													<?php endif; ?>
												</p>
											</div>
										</div>
									<?php 
										$i++;
									endwhile;
										echo '</div>';
										wp_reset_postdata();
										wp_reset_query();
									endif;
									?>		
							
                                
                            </div>   
                            <div class="col-md-4">
								<?php get_sidebar('right'); ?>
                            </div>                        
                        </div>
                    </div>
                </section>
            <?php 
			endwhile; // End of the loop.
			?>
<?php 
get_footer();

