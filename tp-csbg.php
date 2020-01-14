<?php 
/*
Template Name: CSBG Page
*/
get_header(); 
while ( have_posts() ) : the_post();
			$content = get_the_content();
			$content = apply_filters('the_content', $content);			
endwhile;
wp_reset_query();
$banner_section_banner_image = !empty(get_field('banner_section_banner_image')) ? get_field('banner_section_banner_image') : get_field('general_banner','option');
$banner_section_title = !empty(get_field('banner_section_title')) ? get_field('banner_section_title') : get_the_title();
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
<?php
$content_section_content = get_field('content_section_content');
$csbg_block = get_field('csbg_block');
?>
<?php if( !empty($content_section_content) || $csbg_block ): ?>
<section class="content-section">
	<div class="container">
		<div class="row">
			<div class="col-sm-8 page-content">
				<hr/>
				<?php echo $content ?>
				<hr/>
				<?php if( $csbg_block ): ?>
				<div class="csbg-blocks row">
					<?php foreach( $csbg_block as $row ): 
					$image = $row['csbg_block_image'];
					$icon = $row['csbg_block_icon'];
					$csbg_block_title = $row['csbg_block_title'];
					$csbg_block_learn_more = $row['csbg_block_learn_more'];
					
					?>
					<div class="col-sm-6">
						<?php if( $image || $icon || $csbg_block_title || $csbg_block_learn_more ): ?>
						<div class="csbg-block-single" style="background-image: url('<?php echo $image['url'] ?>');">
							<?php if( !empty($image['url']) ): ?>
							<img src="<?php echo $image['url'] ?>" alt="csbg-block" />
							<?php endif ?>	<!-- Image url if end -->
							<?php if( !empty($icon['url']) || !empty($csbg_block_title) || !empty($csbg_block_learn_more) ): ?>
							<div class="csbd-block-content">
								<a href="<?php echo $csbg_block_learn_more;?>" class="action-block">
									<?php if( !empty($icon['url']) ): ?>
									<div class="csbg-icons"><img src="<?php echo $icon['url']?>" alt="csbg-icon" /></div>
									<?php endif; ?>		<!-- $icon['url'] if end  -->
									<?php if( !empty($csbg_block_title) ): ?>
									<h3><?php echo $csbg_block_title ?></h3>
									<?php endif; ?>		<!-- csbg_block_title if end -->
									<?php /*if( !empty($csbg_block_learn_more) ): 
										<span class="link-bottom">Learn More:</span>
									 endif */ ?>	<!-- csbg_block_learn_more if end  -->
								 </a>
							</div>
							<?php endif; ?>	<!-- image icon title and lern more if end --> 				
						</div>

						<?php endif; ?>	<!-- image icon title and lern more if end --> 				
					</div>
					<?php endforeach ?>
				</div>	
			<?php endif; ?>		<!-- csbg_block if end-->
				
					<?php if( !empty($content_section_content) ) :
						echo $content_section_content;
						endif;	// content_section_content if end 
					?>
			</div>
			<div class="col-sm-4">
				<?php get_sidebar( 'right' ); ?>
			</div>
		</div>
	</div>
</section>
<?php endif ?>	<!-- content_section if End -->
<?php 
global $post;
$slug = $post->post_name;

$posts_array = get_posts(array(
    'post_type' => 'news',
    'numberposts' => 6,
    'tax_query' => array(
        array(
        'taxonomy' => 'news-type',
        'field' => 'slug',
        'terms' => $slug)
    ))
);
if( !empty($posts_array)) :
?>
<section class="news-slider-section">
	<div class="container">
		<div class="news-slider">
			<div class="owl-caresoul">
				<?php foreach( $posts_array as $row ) :
				$uploads = wp_upload_dir();
				
				$featured_image=wp_get_attachment_image_url(get_post_thumbnail_id($row->ID),'news-image');
				$image = !empty($featured_image) ? $featured_image : get_template_directory_uri().'/images/news-placeholder.jpg';

				setup_postdata($post);
				$author = get_the_author($row->post_author);
				$date = $row->post_date;
				$date = strtotime($date);
				$date = date('F j',$date);
				$news_link = get_permalink($row->ID);
				?>
				<div class="news-item" style="background-image: url('<?php echo $image ?>');">
					<?php if ( $image ) : ?>
					<img src="<?php echo  get_template_directory_uri().'/images/news-placeholder.jpg'; ?>" alt="news-slider" />
					<?php endif ?>
					<div class="slider-content">
						<h4>NASCSP News</h4>
						<div class="news-content">
							<?php if( !empty($row->post_title) ) : ?>
							<div class="news-title"><a href="<?php echo $news_link ?>" ><?php echo $row->post_title ?></a></div>
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






















