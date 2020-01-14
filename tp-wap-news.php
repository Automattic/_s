<?php 
/*
Template Name: WAP News Page
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
					    'post_type' => 'news', // You can add a custom post type if you like
					    'paged' => $paged,
					    'posts_per_page' => 10, // limit of posts
					    'tax_query' => array( 
				        array( 
				            'taxonomy' => 'news-type', //or tag or custom taxonomy
				            'field' => 'id', 
				            'terms' => 25, 
				        	) 
				    	) 
					));
				    // echo $wpdb->last_query;
				    //echo $wpdb->last_query;
				    if ( have_posts() ) : ?>
						<?php
							foreach ($posts_query as $value) {
								$news_link = get_permalink($value->ID);
								$date = $value->post_date;
								$date = strtotime($date);
								$date = date('F j, Y',$date);
								$content = nascsp_limit_Text($value->post_content,200);
								
								echo '<strong>'.$value->post_title.'</strong><br />';
								echo 'Posted on '. $date.'<br /><br />';
								echo $content.'...'.'<br />';
								echo "<a href='$news_link'>Read More</a>";
								echo '<hr />';
							} wp_reset_postdata();
							// echo '</ul>';
						?>
						<ul class="pagination">
							<li><?php post_pagination(); ?></li>
						</ul>
				   <?php endif; ?>
			</div>	
			<div class="col-md-4">
				<?php get_sidebar('right'); ?>
			</div>	
		</div>
	</div>
</section>
<?php
get_footer(); ?>