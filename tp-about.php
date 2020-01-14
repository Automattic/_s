<?php 
/*
Template Name: About Page
*/
get_header(); ?>
<?php 
$banner_image = !empty(get_field('banner_image')) ? get_field('banner_image') : get_field('general_banner','option');
$banner_title = !empty(get_field('banner_title')) ? get_field('banner_title') : get_the_title();
if( $banner_image || $banner_title ) : ?>
<section class="banner-single-section" style="background-image: url('<?php echo $banner_image['url']; ?>');">
	<img src="<?php echo $banner_image['url'] ?>" alt="banner-single" />
	<?php if( $banner_title ) : ?>
	<div class="heading-title"><div class="container"><h3><span><?php echo $banner_title ?></span></h3></div></div>
	<?php endif ?>	<!-- banner_title if end-->
</section>
<?php endif ; ?>	<!-- banner_image if end --> 


<?php
$about_content = get_field('about_content');
$about_members = get_field('about_members');
if( $about_content || $about_members ) : ?>
<section class="content-section about">
	<div class="container">
		<div class="row">
			<div class="col-sm-8 page-content">
				<hr class="mt-0">
				<?php echo $about_content; ?>
				<?php if( $about_members ) : ?>
				<div class="row team-member">
					<?php foreach( $about_members as $row ) : 
						$about_members_image = $row['about_members_image'];
						$about_members_name = $row['about_members_name'];
						$about_members_position = $row['about_members_position'];
						?>
					<div class="col-md-4 member-single">
						<?php if( $about_members_image && !empty($about_members_image['url']) ) : ?>
						<div class="member-image"><img src="<?php echo $about_members_image['url']; ?>" alt="team-member" /></div>
						<?php endif ?>	<!-- about_members_image if end -->
						<?php if( !empty($about_members_name) || !empty($about_members_position) ) : ?>
						<div class="member-data">
							<?php if( !empty($about_members_name) ) : ?>
							<h4 class="member-name"><?php echo $about_members_name ?></h4>
							<?php endif; ?>		<!-- about_members_name if end -->
							<?php if( !empty($about_members_position) ) : ?>
							<p class="member-position"><?php echo $about_members_position ?></p>
							<?php endif; ?>		<!-- about_members_position if end -->
						</div>
						<?php endif; ?> <!-- about_members_name if end -->
					</div>
					<?php endforeach; ?>	<!-- about_members end foreach  -->
				</div>
				<?php endif; ?> <!-- about_members if end -->
			</div>	
			<div class="col-sm-4">
				<?php //echo get_template_part( 'content', 'none' ); ?>
				<?php get_sidebar( 'right' ); ?>
			</div>
		</div>
	</div>
</section>
<?php endif; ?>	<!-- about_content if end -->
<?php 

$posts_array = get_posts(array(
    'post_type' => 'news',
    'numberposts' => 6,
    )
);
?>
<?php  if(!empty($posts_array)): ?>
<section class="news-slider-section">
	<div class="container">
		<div class="news-slider">
			<div class="owl-caresoul">
				<?php foreach( $posts_array as $row ) :
				$image = get_the_post_thumbnail_url( $row->ID );
				$image = !empty($image) ? $image : get_template_directory_uri().'/images/home-3.jpg';
				
				setup_postdata($post);
				$author = get_the_author($row->post_author);
				$date = $row->post_date;
				$date = strtotime($date);
				$date = date('F j',$date);
				$news_link = get_permalink($row->ID);
				 ?>
				<div class="owl-item" style="background-image: url('<?php echo $image ?>');">
					<?php if ( $image ) : ?>
					<img src="<?php echo $image ?>" alt="news-slider" />
					<?php endif ?>
					<div class="slider-content">
						<h4>NASCSP News</h4>
						<div class="news-content">
							<?php if( !empty($row->post_title) ) : ?>
							<div class="news-title"><a href="<?php echo $news_link; ?>"><?php echo $row->post_title ?></a></div>
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






















