<?php 
/*
 * Template Name: Media Library Page
 */
get_header(); 

global $wp;
$banner_section_banner_image = !empty(get_field('banner_section_banner_image')) ? get_field('banner_section_banner_image') : get_field('general_banner','option');
$banner_section_title = !empty(get_field('banner_section_title')) ? get_field('banner_section_title') : get_the_title();
$currURL = get_permalink( get_page_by_path( 'multi-media-library' ) );
$search = $_REQUEST['search'];
?>
<?php if( ($banner_section_banner_image && !empty($banner_section_banner_image['url'])) || !empty($banner_section_title) ) : ?>
<section class="banner-single-section" style="background-image: url('<?php echo $banner_section_banner_image['url']; ?>');">
	<?php if( !empty($banner_section_banner_image['url']) ): ?>
	<img src="<?php echo $banner_section_banner_image['url']; ?>" alt="banner-single" />
	<?php endif ?>	<!-- banner_section_banner_image if end -->
	<?php if( !empty($banner_section_title) ): ?>
	<div class="heading-title blue"><div class="container"><h3><span><?php echo $banner_section_title; ?></span></h3></div></div>
	<?php endif; ?>	<!-- banner_section_title if end -->
</section>
<?php endif ?>		<!-- banner_section if end -->
<section class="content-section about">
	<div class="container"> 
            <div class="categorey-select">
                <div class="row">
					<?php $videoCats = get_terms( array( 'taxonomy' => 'video_category', 'hide_empty' => true ) );
					if( !empty( $videoCats ) ){ ?>
						<div class="col-md-6">
						   <div class="category-title">
								<label>Please select a category</label>
								<div class="custom-select">
									<select id="video-cats" name="select_video">
										<option value="<?php echo $currURL; ?>">All</option>
										<?php foreach( $videoCats as $cats ){ 
										if($_REQUEST['categories'] == $cats->term_id){
											$selected = "selected";
										} else {
											$selected = " ";
										}
										?>
											<option value="<?php echo $currURL; ?>?categories=<?php echo $cats->term_id; ?>" <?php echo $selected; ?>><?php echo $cats->name; ?></option>
										<?php } ?>
									</select>
								</div>
							</div>
						</div>
					<?php } ?>
                    <div class="col-md-6">
                        <ul class="category-list">
							<?php if(!empty($_REQUEST['categories'])){ $id = "&categories=".$_REQUEST['categories']; } else {$id = " ";} ?>
                            <li><a href="<?php echo $currURL; ?>?search=recent<?php echo $id?>">Recently Added</a></li>
                            <li><a href="<?php echo $currURL; ?>?search=most-viewed<?php echo $id?>">Most Viewed</a></li>
                            <!--li><a href="">Most Favorited</a></li-->
                            <li><a href="<?php echo $currURL; ?>?search=top-rated<?php echo $id?>">Top Rated</a></li>
                        </ul>
                    </div>                    
                </div>
	        </div>
			<?php 
			$video_category_id = $_REQUEST['categories'];
			$posts_per_page = 18;
			$paged = ( get_query_var('paged') ) ? get_query_var('paged') : 1;
			$videoArgs = array( 
				'post_type'			=> 'videoes',
				'post_status'		=> array( 'publish' ),
				'posts_per_page'	=> $posts_per_page,
				'paged' => $paged,
			);
			
			if( $search == 'recent' ){
				
				if(!empty($_REQUEST['categories'])){
					$videoArgs['tax_query'] = array(
						array(
							'taxonomy' => 'video_category',
							'field' => 'term_id',
							'terms' => $_REQUEST['categories']
						)
					);
				}
				$videoArgs['orderBy'] = 'date';
				$videoArgs['order'] = 'DESC';
			} elseif( $search == 'most-viewed' ){
				if(!empty($_REQUEST['categories'])){
					$videoArgs['tax_query'] = array(
						array(
							'taxonomy' => 'video_category',
							'field' => 'term_id',
							'terms' => $_REQUEST['categories']
						)
					);
				}
				$videoArgs['meta_key'] = 'views';
				$videoArgs['orderby'] = 'meta_value';
				$videoArgs['order'] = 'DESC';
			} else if(!empty($video_category_id)){
				$videoArgs['tax_query'] = array(
						array(
							'taxonomy' => 'video_category',
							'field' => 'term_id',
							'terms' => $_REQUEST['categories']
						)
					);
			} 
			$videoQry = new WP_Query( $videoArgs );
				
				
			if( $search == 'top-rated' ){
				global $wpdb;
				if(!empty($video_category_id)){
					$video_category_id = $video_category_id;
				}else {
					$video_category_id = "";
				}
				// $resultRating = $wpdb->get_results ( 'select Distinct postid,rating,post_date from (SELECT id as postid,sum/counter as rating,"videoes" as post_type,"publish" as post_status  ,post_date FROM (SELECT '.$wpdb->prefix.'gdsr_votes_log.id, sum(vote) as sum, count(*) as counter ,post_date FROM '.$wpdb->prefix.'gdsr_votes_log inner join '.$wpdb->prefix.'posts on '.$wpdb->prefix.'gdsr_votes_log.id = '.$wpdb->prefix.'posts.ID where vote_type = "article" group by id order by vote desc) as t1 union select ID  as postid, 0 as rating,post_type,post_status,post_date from '.$wpdb->prefix.'posts where '.$wpdb->prefix.'posts.ID not in(select '.$wpdb->prefix.'gdsr_votes_log.id from '.$wpdb->prefix.'gdsr_votes_log)  ) as table2 where  table2.post_type="videoes" and post_status="publish" order by rating DESC,post_date DESC', ARRAY_A );
				
				$resultRating = $wpdb->get_results ( 'select Distinct postid,rating,post_date from (
	SELECT id as postid,sum/counter as rating,"videoes" as post_type,"publish" as post_status  ,post_date FROM (
		SELECT '.$wpdb->prefix.'gdsr_votes_log.id, sum(vote) as sum, count(*) as counter ,post_date FROM '.$wpdb->prefix.'gdsr_votes_log inner join '.$wpdb->prefix.'posts on '.$wpdb->prefix.'gdsr_votes_log.id = '.$wpdb->prefix.'posts.ID where vote_type = "article" group by id order by vote desc) as t1 union select ID  as postid, 0 as rating,post_type,post_status,post_date from '.$wpdb->prefix.'posts where '.$wpdb->prefix.'posts.ID not in(select '.$wpdb->prefix.'gdsr_votes_log.id from '.$wpdb->prefix.'gdsr_votes_log)  ) as table2 where  table2.post_type="videoes" and post_status="publish" AND postid IN ( SELECT '.$wpdb->prefix.'posts.ID FROM '.$wpdb->prefix.'posts LEFT JOIN '.$wpdb->prefix.'term_relationships ON ('.$wpdb->prefix.'posts.ID = '.$wpdb->prefix.'term_relationships.object_id) 
LEFT JOIN '.$wpdb->prefix.'term_taxonomy ON ('.$wpdb->prefix.'term_relationships.term_taxonomy_id = '.$wpdb->prefix.'term_taxonomy.term_taxonomy_id)
WHERE '.$wpdb->prefix.'term_taxonomy.term_id IN ('.$video_category_id.')
GROUP BY '.$wpdb->prefix.'posts.ID ) order by rating DESC,post_date DESC', ARRAY_A );
				
	
				if( !empty( $resultRating ) ){ ?>
					<div class="media-list">
						<div class="row">
							<?php 
							$posts_total = count($resultRating);  
							$max_num_pages = ceil($posts_total / $posts_per_page); 
							$rating = array_slice($resultRating, (($paged - 1) * $posts_per_page), $posts_per_page);
							$index = 1;
							foreach( $rating as $ratings  ){
									$videoID = $ratings['postid'];
									$videoTitle = get_the_title($videoID); 
									$videoLink = get_permalink($videoID); 
									
									// Video Image
									$thumbURL = get_field('thumb_url',$videoID); 
									$videoDetails = video_html($thumbURL);
									$thumb_url = $videoDetails['image_link'];
									$featured_image = wp_get_attachment_image_url(get_post_thumbnail_id(),'success-story-post-image');	
									
									if( !empty($thumb_url) ){
										$thumb_url = $thumb_url;
									}else if(!empty($featured_image)){
										$thumb_url = $featured_image;
									}
									
									// Date
									$videoDate = get_the_date('Y-m-d H:i:s',$videoID);
									$currentDate = date('Y-m-d H:i:s');															
									$currentDate = date_create_from_format('Y-m-d H:i:s', $currentDate);
									$videoDate = date_create_from_format('Y-m-d H:i:s', $videoDate);								
									$diffDate = date_diff($currentDate,$videoDate); 
									
									// Views
									$getViews = get_post_meta($videoID,'views');
									$views = ( !empty( $getViews[0] ) ) ? $getViews[0] : 0;

									?>
								<div class="col-sm-4">
									<div class="media-block">
										<div class="media-img">
										   <a data-postid="<?php echo $videoID; ?>" data-src="#detailsModal-<?php echo $index; ?>" href="javascript:;" class="postDetails"><img src="<?php echo $thumb_url; ?>" alt="<?php echo $videoTitle; ?>"></a>
										</div>
										<h4><?php echo $videoTitle; ?></h4>
										<p><?php echo $diffDate->y; ?> years ago - <?php echo $views; ?> views</p>
										<?php echo do_shortcode("[starrater post=$videoID tpl=5 size='20']"); ?>
								   </div>
								</div>
								<div style="display:none;" id="detailsModal-<?php echo $index; ?>" class="">
								<?php echo apply_filters( 'the_content',get_the_content( $videoID ) ); ?>
								</div>
						<?php $index++; } ?>
						</div>
						<div class="clerfix text-center">
							<?php echo nascsp_pagination(null,$max_num_pages); ?>
						</div> 
					</div>
			<?php 
				} else {
					echo "<h2>Not Found</h2>";
				} 
			} else if ( $videoQry->have_posts() ){ ?>
				<div class="media-list">
					<div class="row">
						<?php $index = 1;
							while ( $videoQry->have_posts() ) : $videoQry->the_post(); 
								$videoID = get_the_ID(); 
								$videoTitle = get_the_title($videoID); 
								$videoLink = get_permalink($videoID); 
								
								// Video Image
								$thumb_url = get_field('thumb_url',$videoID);
								$videoDetails = video_html($thumb_url);
								$thumb_url = $videoDetails['image_link'];
								$featured_image = wp_get_attachment_image_url( get_post_thumbnail_id(),'success-story-post-image' );
								
								if( !empty($thumb_url) ){
									$thumb_url = $thumb_url;
								}else if(!empty($featured_image)){
									$thumb_url = $featured_image;
								}
								
								// Date
								$videoDate = get_the_date('Y-m-d H:i:s',$videoID);
								$currentDate = date('Y-m-d H:i:s');															
								$currentDate = date_create_from_format('Y-m-d H:i:s', $currentDate);
								$videoDate = date_create_from_format('Y-m-d H:i:s', $videoDate);								
								$diffDate = date_diff($currentDate,$videoDate); 
								
								// Views
								$getViews = get_post_meta($videoID,'views');
								$views = ( !empty( $getViews[0] ) ) ? $getViews[0] : 0;
								?>
							<div class="col-sm-4">
								<div class="media-block">
									<div class="media-img">
									   <a data-postid="<?php echo $videoID; ?>" data-src="#detailsModal-<?php echo $index; ?>" href="javascript:;" class="postDetails"><img src="<?php echo $thumb_url; ?>" alt="<?php echo $videoTitle; ?>"></a>
									</div>
									<h4><?php echo $videoTitle; ?></h4>
									<p><?php echo $diffDate->y; ?> years ago - <?php echo $views; ?> views</p>
									<?php echo do_shortcode("[starrater tpl=5 size=20 stars=5]"); ?>
							   </div>
							</div>
							<?php /* ?><div style="display:none;" id="detailsModal-<?php echo $index; ?>" class="detailsModal">
								<?php echo apply_filters( 'the_content',get_the_content( $videoID ) ); ?>
							</div><?php */ ?>
						<?php $index++;
						endwhile; wp_reset_query(); wp_reset_postdata(); ?>
					</div>
					<div class="clerfix text-center">
						<?php echo nascsp_pagination(null,$videoQry->max_num_pages); ?>
					</div> 
				</div>
			<?php } else {
				echo "<h2>Not Found</h2>";
			} ?>
		</div>
	</div>
</section>
<?php
$news_slider_section = get_field('news_slider_section');
if( $news_slider_section ) :
?>
<section class="news-slider-section">
	<div class="container">
		<div class="news-slider">
			<div class="owl-caresoul">
				<?php foreach( $news_slider_section as $row ) :
				$image = get_the_post_thumbnail_url( $row->ID ); 
				setup_postdata($post);
				$author = get_the_author($row->post_author);
				$date  = get_the_date( 'F j' ); 
				$news_link = get_permalink($row->ID);?>
				<div class="owl-item" style="background-image: url('<?php echo $image ?>');">
					<?php if ( $image ) : ?>
					<img src="<?php echo $image ?>" alt="news-slider" />
					<?php endif ?>
					<div class="slider-content">
						<h4><?php echo $row->post_title; ?></h4>
						<div class="news-content">
							<?php if( !empty($row->post_content) ) : ?>
							<div class="news-title"><a href="<?php echo $news_link ?>" ><?php echo $row->post_content ?></a></div>
							<?php endif ?>  <!-- post_content if end -->
							<?php if( $date ) : ?>
							<date><b><?php echo $date ?> -</b> <?php echo $author ?></date>
							<?php endif ?>	<!-- data if end -->
						</div>	
					</div>
				</div>
				<?php wp_reset_postdata(); ?>
				<?php endforeach; ?>	<!-- news_slider_section foreach end -->
			</div>
		</div>		
	</div>
</section>
<?php endif; ?>
<?php get_footer(); ?>