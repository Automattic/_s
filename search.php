<?php
/**
 * The template for displaying search results pages
 *
 * @link https://developer.wordpress.org/themes/basics/template-hierarchy/#search-result
 *
 * @package nascsp
 */

get_header(); ?>

	<section id="primary" class="content-section about">
		<div id="main" class="container">
		<div class="row">
			<div class="col-md-8 page-content">
			<?php
			$restricted_page_id = array();
			$restricted_pages = get_field('restricted_pages','option');
			if(!empty($restricted_pages)){
				foreach($restricted_pages as $pages){
					$restricted_page_id[] = $pages['add_restricted_pages']->ID;
				}
			}
			if(!is_user_logged_in()){
				$restricted_page_arr = $restricted_page_id;
			}else{
				$restricted_page_arr = '';
			}
			$search = $_REQUEST['s'];
			$query_args = array( 's' => $search,
								 'post__not_in' => $restricted_page_arr,								 
								 // 'paged'	=>( get_query_var('paged') ? get_query_var('paged') : 1),
								 'post_type' => 'page',
								 'posts_per_page' => -1
								 );
			$search_query = new WP_Query( $query_args );			
			$page_ids_array = wp_list_pluck( $search_query->posts, 'ID' );
			// wp_reset_query();			
			$query_args_post = array( 
								 's' => $search,
								 'post__not_in' => $page_ids_array,								 
								 // 'paged'	=>( get_query_var('paged') ? get_query_var('paged') : 1),	
								 // 'post_type' => 'post',
								 'posts_per_page' => -1
								 );
			$search_query_post = new WP_Query( $query_args_post);			
			$post_ids_array = wp_list_pluck( $search_query_post->posts, 'ID' );
			// wp_reset_query();			
		
			$final_args = array( 
								'ignore_sticky_posts' => 1,
								'orderby'  => 'post__in',
								'post__in' => array_merge($page_ids_array,$post_ids_array),										
								'paged'   =>( get_query_var('paged') ? get_query_var('paged') : 1),
								'post_type' => 'any',								
								 );
			
			$search_query_final = new WP_Query( $final_args);			
						
			if ( $search_query_final->have_posts() ){ ?>

				<header class="page-header">
					<h1 class="page-title"><?php
						/* translators: %s: search query. */
						printf( esc_html__( 'Search Results for: %s', 'nascsp' ), '<span>' . get_search_query() . '</span>' );				
					?></h1>
				</header><!-- .page-header -->

				 <?php
						/* Start the Loop */
						while ( $search_query_final->have_posts() ) : $search_query_final->the_post();						
							/**
							 * Run the loop for the search to output the results.
							 * If you want to overload this in a child theme then include a file
							 * called content-search.php and that will be used instead.
							 */						 
							$post_id = get_the_ID();
							$post_title = get_the_title($post_id);
							$post_content = get_the_content($post_id);
							$post_content = nascsp_limit_Text($post_content,340);
							$post_link = get_the_permalink($post_id);
							$post_date = get_the_date($d='',$post_id);						
							$content = apply_filters('the_content',$post_content); 
							$excerpt= get_the_excerpt($post_id); ?>
							
							<div class="state-poverty-blog">
								
								<?php if(!empty($post_title)) { ?>
								<div class="state-poverty-content"><a href="<?php echo $post_link; ?>"><?php echo $post_title; ?></a></div>
								<?php } ?>							
								<?php if(!empty($excerpt)) { ?>
								<p><?php echo $excerpt; ?></p>
								<?php }  ?>                        
							</div> 
							
						<?php endwhile; wp_reset_query();?>
						<?php
						global $wp_query;
						
						$big = 999999999; // need an unlikely integer
						$args = array(
							'base' 	  => str_replace( $big, '%#%', esc_url( get_pagenum_link( $big ) ) ),
							'format'  => '?paged=%#%',												
							'prev_next'          => true,
							'prev_text'        	   => __('Previous '),
							'next_text'            => __(' Next'),
							'current' => max( 1, get_query_var('paged') ),
							'total'   => $wp_query->max_num_pages,
						);
						 
						?>														  
						<ul class="pagination">
							<li><?php echo paginate_links($args);?></li>
						</ul>												
					<?php
					}else{
						get_template_part( 'template-parts/content', 'none' );

					} ?>
			</div>
			<div class="col-md-4">					
				<?php get_sidebar('right_below'); ?>				
			</div> 
		</div>
	</div>
</section><!-- #primary -->

<?php
get_sidebar();
get_footer();
