<?php

get_header(); ?>

			<?php
			while ( have_posts() ) : the_post();
				$title = get_the_title();
				$content = get_the_content();
				$content = apply_filters('the_content', $content);
				$return_link = !empty(wp_get_referer()) ? wp_get_referer() : get_home_url();
			?>
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
								<div class="return-link pull-right">
									<a href="<?php echo $return_link; ?>"> Return</a>
								</div>
                                <?php echo $content; ?>
                                
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
