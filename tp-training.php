<?php
/*
Template Name: Training Center Page
*/

get_header(); ?>
<section class="content-section">
    <div class="container">
        <div class="row">
            <div class="col-md-8 page-content">
			<?php 
				$categories = get_terms( array(
					'taxonomy' => 'training-category',
					'hide_empty' => true,
				) );
				$category_id = $categories[0]->term_id;
				$category = get_term( $category_id );
				$category_name = $category->name;
				$category_link = get_term_link($category_id);
				$category_content = get_field('category_content','training-category_'.$category_id);							
				$category_text = get_field('category_text','training-category_'.$category_id);									
			?>
				
            <div class="page-heading">
                <div class="page-title"><?php echo $category_name; ?></div>
                <ul class="social-share">
                    <li class="facebook"><a target="_blank" href="http://www.facebook.com/sharer.php?s=100&p[title]=<?php echo $category_name; ?>&p[url]=<?php echo $category_link; ?>">facebook</a></li>
					<li class="twitter"><a target="_blank" href="https://twitter.com/share?url=<?php echo $category_link; ?>&text=<?php echo $category_name; ?>">twitter</a></li>
					<li class="linkedin"><a href="http://www.linkedin.com/shareArticle?mini=true&url=<?php echo $category_link; ?>&title=<?php echo $category_name; ?>&summary=&source=<?php bloginfo('name'); ?>" target="_new">linkedin</a></li>
                </ul>
            </div>
			<?php if(!empty($category_content)) : ?>
				<?php echo apply_filters('the_content',$category_content); ?>
			<?php endif; ?>
			
			<?php
				$categories = get_terms( array(
					'taxonomy' => 'training-category',
					'hide_empty' => true,
				) );
				
				
			?>
			<?php if(!empty($categories)) : ?>
				<div><!--class="category-list"-->
					<?php foreach($categories as $categories_data) : ?>
					<?php
						$cat_id = $categories_data->term_id;
						$cat_name = $categories_data->name;
						$category_link = get_term_link($cat_id);
					?>
					
					<?php if($cat_id == $category_id) : ?>
						<p><strong><?php echo $cat_name; ?></strong> | <a href="#training-content">Individual Centers</a></p>
					<?php else : ?>
						<p><strong><a href="<?php echo $category_link; ?>"><?php echo $cat_name; ?></a></strong> | <a href="#training-content">Individual Centers</a></p>
					<?php endif; ?>
					
					<?php endforeach; ?>
				</div>
			<?php endif; ?>
			
			<!--<div class="acf-map map-div" id="location-map" style="height:500px;">
			</div>	-->
			
			<div class="category-content"  id="training-content">
				<?php if(!empty($category_text)) : ?>			
					<?php echo apply_filters('the_content',$category_text); ?>				
				<?php endif; ?>
			</div>
			
			<?php
				$custom_args = array( 
					'orderby'=> 'title',
					'order' => 'ASC',
					'posts_per_page' => -1,  
					'nopaging' => true,
					'post_type' => 'training',
				);
				
				$query = new WP_Query($custom_args);
				
				
			if($query->have_posts()) :
			$i = 0;
				echo '<ul class="post_listing">';
			while ( $query->have_posts() ) : $query->the_post();
				$post_id = get_the_ID();
				$post_title = get_the_title($post_id);
				$location = get_field('google_map',$post_id);
				$post_permalink = get_the_permalink($post_id);
					
					
					$data[$i]['lat'] = $location['lat'];
					$data[$i]['lng'] = $location['lng'];
					$data[$i]['title'] = $post_title;
					$data[$i]['marker_link'] = $post_permalink;
			?>	
				<?php //echo multi_custom_map($data, 11, 'location-map', 0);  ?>
					
					
						<li> 
							<a href="<?php echo $post_permalink; ?>"><?php echo $post_title; ?></a>
						</li>
					
				
            <?php 
				$i++;
			endwhile;
				echo '</ul>';
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
get_footer();
