<?php 
/*
Template Name: WAP Page
*/
get_header();
$banner_section_banner_image = get_field('banner_section_banner_image');
$banner_section_title = get_field('banner_section_title'); ?>
<?php if( ($banner_section_banner_image && !empty($banner_section_banner_image['url'])) || !empty($banner_section_title) ) : ?>
<section class="banner-single-section" style="background-image: url('<?php echo $banner_section_banner_image['url']; ?>');">
	<?php if( !empty($banner_section_banner_image['url']) ): ?>
	<img src="<?php echo $banner_section_banner_image['url']; ?>" alt="banner-single" />
	<?php endif ?>	<!-- banner_section_banner_image if end -->
	<?php if( !empty($banner_section_title) ): ?>
	<div class="heading-title green"><div class="container"><h3><span><?php echo $banner_section_title; ?></span></h3></div></div>
	<?php endif; ?>	<!-- banner_section_title if end -->
</section>
<?php endif ?>		<!-- banner_section if end -->
<?php
$wap_banner_content = get_field('wap_banner_content');
$wap_block = get_field('wap_block');
?>
<?php if( !empty($content_section_content) || $wap_block ): ?>
<section class="content-section about">
	<div class="container">
		<div class="row">
			<div class="col-sm-8 page-content">
				<?php if( !empty($wap_banner_content) ) : ?>
				<hr class="mt-0">
				<h2><?php echo $wap_banner_content; ?></h2>
				<hr/>
				<?php endif; ?>		<!-- wap_banner_content if end -->
				<?php if( $wap_block ): ?>
				<div class="csbg-blocks green row"><?php
				$wap_content_title = get_field('wap_content_title');
				$wap_content = get_field('wap_content');
				$wap_latest_news_link = get_field('wap_latest_news_link');
				$wap_latest_news_link_title = get_field('wap_latest_news_link_title');
				
				foreach( $wap_block as $row ): 
				$image = $row['wap_block_image'];
				$icon = $row['wap_block_icon'];
				$wap_block_title = $row['wap_block_title'];
				$wap_block_learn_more = $row['wap_block_learn_more'];
				
				?>
					<div class="col-sm-6">
						<?php if( $image || $icon || $wap_block_title || $wap_block_learn_more ): ?>
						<a href="<?php echo $wap_block_learn_more; ?>">
						<div class="csbg-block-single" style="background-image: url('<?php echo $image['url']; ?>');">
							<?php if( !empty($image['url']) ): ?>
							<img src="<?php echo $image['url']; ?>" alt="csbg-block" />
							<?php endif; ?>		<!-- Image URL if end --> 
							<div class="csbd-block-content">
								<a href="<?php echo $wap_block_learn_more; ?>" class="action-block">
									<?php if( !empty($icon['url']) ): ?>
									<div class="csbg-icons"><img src="<?php echo $icon['url']; ?>" alt="csbg-icon" /></div>
									<?php endif; ?>		<!-- Icon URL if end --> 
									<?php if( !empty($wap_block_title) ): ?>
									<h3><?php echo $wap_block_title; ?></h3>
									<?php endif; ?>		<!-- wap_block_title if end --> 
									<?php /*if( !empty($wap_block_learn_more) ): 
									<span class="link-bottom">Learn More:</span>
									endif; */?>		<!-- wap_block_learn_more if end --> 
								</a>
							</div>
						</div>
						</a>
					<?php endif; ?>			<!-- image icon if end -->
					</div>
				<?php endforeach  //wp_reset_postdata(); ?>
				</div>	
				
				<?php endif; ?>		<!-- wap_block if end -->
				<hr/>
				<?php if( !empty($wap_content_title) ): ?>
				<h2><?php echo $wap_content_title; ?></h2>
				<?php endif ?>		<!-- wap_content_title if end -->
				<?php if( !empty($wap_content) ): ?>
				<p></p>
				<p><?php echo $wap_content ?></p>
				<?php endif; ?>		<!-- wap_content if end -->
				<?php if( !empty($wap_latest_news_link_title) && !empty($wap_latest_news_link) ): ?>
				<a href="<?php echo $wap_latest_news_link ?>"><b><small><?php echo $wap_latest_news_link_title ?></small></b></a>
				<?php endif ?>		<!-- wap_latest_news_link_title if end -->
			</div>
			<div class="col-sm-4">
				<?php get_sidebar( 'right' ); ?>
			</div>
		</div>
	</div>
</section>
<?php endif; ?>		<!-- content_section_content if end -->

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
				
				// $image = !empty($image) ? $image : $uploads['baseurl'].'/2018/01/home-3.jpg'; 
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
					<img src="<?php echo get_template_directory_uri().'/images/news-placeholder.jpg'; ?>" alt="news-slider" />
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






















