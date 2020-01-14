<?php 
/*
Template Name: Staff Contacts 
*/
get_header(); ?>
<?php 
$banner_image = get_field('banner_image','option');
$banner_title = get_the_title();
if( $banner_image || $banner_title ) : ?>
<section class="banner-single-section" style="background-image: url('<?php echo $banner_image['url']; ?>');">
	<img src="<?php echo $banner_image['url'] ?>" alt="banner-single" />
	<?php if( $banner_title ) : ?>
	<div class="heading-title"><div class="container"><h3><span><?php echo $banner_title ?></span></h3></div></div>
	<?php endif ?>	<!-- banner_title if end-->
</section>
<?php endif ; ?>	<!-- banner_image if end --> 


<?php
$about_content = get_the_content();
$about_members = get_field('members');
if( $about_content || $about_members ) : ?>
<section class="content-section about">
	<div class="container">
		<div class="row">
			<div class="col-sm-8 page-content">
				<hr class="mt-0">
				<?php echo $about_content; ?>
				<?php if( $about_members ) : ?>
				<div class="row">
					<?php foreach( $about_members as $key => $row ) : 
						$about_members_image = $row['image'];
						$about_members_image = !empty($about_members_image) ? $about_members_image['sizes']['member-image'] : get_template_directory_uri()."/images/member-no-image.png";
						$about_members_name = $row['name'];
						$about_member_email = $row['email_id'];
						$member_phone_no = $row['phone_no'];
						$about_members_position = $row['position'];
						$about_members_description = $row['description']; 
						$members_extra_detail = $row['extra_detail']; 						
						$about_member_email = !empty($about_member_email) ? $about_member_email : "javascript:void(0)";
						/*  Remove Spces From Phone Number */
						 if(!empty($member_phone_no)) {
										$phone_number = preg_replace('/\D/', '', $member_phone_no);
									}
						?>
					<div class="col-md-4 col-sm-6 staff-member">
						<?php if( $about_members_image && !empty($about_members_image) ) : ?>
						<div class="member-image"><a class="fancybox" href="#team<?php echo $key; ?>"><img src="<?php echo $about_members_image; ?>" alt="team-member" /></a></div>
						<div id="team<?php echo $key; ?>" class="member-popupbox">
							<div class="member-info">
								<h3><a href="mailto:<?php echo $about_member_email; ?>"><?php echo $about_members_name; ?></a></h3>
								<span><?php if(!empty($members_extra_detail)){  echo $members_extra_detail."-"; } ?><?php echo $about_members_position; ?>								
								</span>								
							</div>
							<p>
								<img src="<?php echo $about_members_image; ?>" alt="team-member" class="alignleft" />
								<?php echo $about_members_description; ?></br>
								<?php if(!empty($member_phone_no)) { ?>
								Contact: <a href="callto:<?php echo $phone_number; ?>"><?php echo $member_phone_no; ?></a>
								<?php } ?>
							</p>
						</div>
						<?php endif ?>	<!-- about_members_image if end -->
						<?php if( !empty($about_members_name) || !empty($about_members_position)) : ?>
						<div class="member-data">
							<?php if( !empty($about_members_name) ) : ?>
							<h4 class="member-name"><a href="mailto:<?php echo $about_member_email; ?>"><?php echo $about_members_name; ?></a></h4>
							<?php endif; ?>		<!-- about_members_name if end -->
							<?php if( !empty($about_members_position) ) : ?>
							<p class="member-position"><?php echo $about_members_position; ?></p>
							<p class="member-position"><a href="callto:<?php echo $phone_number; ?>"><?php echo $member_phone_no; ?></a></p>
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






















