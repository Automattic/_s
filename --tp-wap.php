<?php 
/*
Template Name: WAP Page
*/
get_header();
$banner_section_banner_image = !empty(get_field('banner_section_banner_image')) ? get_field('banner_section_banner_image') : get_field('general_banner','option');
$banner_section_title = !empty(get_field('banner_section_title')) ? get_field('banner_section_title') : get_the_title(); ?>
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
						<div class="csbg-block-single" style="background-image: url('<?php echo $image['url']; ?>');">
							<?php if( !empty($image['url']) ): ?>
							<img src="<?php echo $image['url']; ?>" alt="csbg-block" />
							<?php endif; ?>		<!-- Image URL if end --> 
							<div class="csbd-block-content">
								<?php if( !empty($icon['url']) ): ?>
								<div class="csbg-icons"><img src="<?php echo $icon['url']; ?>" alt="csbg-icon" /></div>
								<?php endif; ?>		<!-- Icon URL if end --> 
								<?php if( !empty($wap_block_title) ): ?>
								<h3><?php echo $wap_block_title; ?></h3>
								<?php endif; ?>		<!-- wap_block_title if end --> 
								<?php if( !empty($wap_block_learn_more) ): ?>
								<a href="<?php $wap_block_learn_more; ?>" class="link">Learn More:</a>
								<?php endif; ?>		<!-- wap_block_learn_more if end --> 
							</div>
						</div>
					<?php endif; ?>			<!-- image icon if end -->
					</div>
				<?php endforeach ?>
				</div>	
				<hr/>
				<?php endif; ?>		<!-- wap_block if end -->
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
$posts_array = get_posts(array(
    'post_type' => 'news',
    'tax_query' => array(
        array(
        'taxonomy' => 'news-type',
        'field' => 'term_id',
        'terms' => '10')
    ))
);
?>
<section class="news-slider-section">
	<div class="container">
		<div class="news-slider">
			<div class="owl-caresoul">
				<?php foreach( $posts_array as $row ) :
				$image = get_the_post_thumbnail_url( $row->ID ); 
				if(empty($image)) {
					$image = "http://localhost/nascsp/wp-content/uploads/2017/12/home-3.jpg";
				}
				setup_postdata($post);
				$author = get_the_author($row->post_author);
				$date = $row->post_date;
				$date = strtotime($date);
				$date = date('F j',$date);
				$content = nascsp_limit_Text($row->post_content,40);
				$news_link = get_permalink($row->ID);
				?>
				<div class="owl-item" style="background-image: url('<?php echo $image ?>');">
					<?php if ( $image ) : ?>
					<img src="<?php echo $image ?>" alt="news-slider" />
					<?php endif ?>
					<div class="slider-content">
						<h4><a href="<?php echo $news_link ?>" ><?php echo $row->post_title; ?></a></h4>
						<div class="news-content">
							<?php if( !empty($row->post_content) ) : ?>
							<div class="news-title"><?php echo $content ?></div>
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

<?php get_footer(); ?>






















