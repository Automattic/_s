<?php 
/*
 * Template Name: Board And Staff Page
 */
 get_header();
?>
<?php 
$banner_image = get_field('banner_image','option');
$banner_title = get_the_title();
$content = get_the_content();
if( $banner_image || $banner_title ) : ?>
<section class="banner-single-section" style="background-image: url('<?php echo $banner_image['url']; ?>');">
	<img src="<?php echo $banner_image['url'] ?>" alt="banner-single" />
	<?php if( $banner_title ) : ?>
	<div class="heading-title"><div class="container"><h3><span><?php echo $banner_title ?></span></h3></div></div>
	<?php endif ?>	<!-- banner_title if end-->
</section>
<?php endif ; ?>	<!-- banner_image if end --> 
<?php $board_members = get_field('board_members');?>
<section class="content-section about">
	<div class="container">
		<div class="row">
			<div class="col-sm-8 page-content">			
				<hr class="mt-0">
				<?php if(!empty($content)) { ?>
				<?php echo apply_filters('the_content',$content); ?>
				<?php } ?>
				<?php if( !empty($board_members) ) : ?>
				<?php foreach( $board_members as $member_data ) : 
					$member_listing_title = $member_data['member_listing_title'];
					$member_information = $member_data['member_information'];
				?>
					<?php if(!empty($member_listing_title) && !empty($member_information)) : ?>					
					<div class="member-listing-title"><?php echo $member_listing_title; ?></div>
					
					<hr class="mt-0">
					<?php if(!empty($member_information)){ ?>
				<div class="row team-member">
					<?php foreach( $member_information as $row ) : 
						$about_members_image = $row['about_members_image'];
						$about_members_name = $row['about_members_name'];
						$about_members_position = $row['about_members_position'];
						$country_code = $row['country_code'];
						$phone = $row['phone'];
						$email = $row['email'];
						$about_members_image = !empty($about_members_image) ? $about_members_image['sizes']['member-image'] : 		get_template_directory_uri()."/images/member-no-image.png";

						?>
					<div class="col-md-4 member-single">						
						<div class="member-image"><img src="<?php echo $about_members_image; ?>" alt="team-member" /></div>				
						<?php if( !empty($about_members_name) || !empty($about_members_position) ) : ?>
						<div class="member-data">
							<?php if( !empty($about_members_name) || !empty($about_members_position)) : ?>
							<h4 class="member-name"><?php echo $about_members_name ?></h4>							
							<?php endif; ?>		
							<?php if( !empty($about_members_position) ) : ?>
							<p class="member-position"><?php echo $about_members_position ?></p>
							<?php endif; ?>		<!-- about_members_position if end -->							
							<?php if(!empty($country_code)) : ?>
							<p class="member-position"><?php echo $country_code; ?></p>
							<?php endif; ?>
							<?php if(!empty($phone)) : ?>
							<p class="member-position">Ph:<?php echo $phone; ?></p>
							<?php endif; ?>
							<?php if(!empty($email)) : ?>
							<p class="member-position">Email:<a href="mailto:<?php echo $email; ?>"><?php echo $email; ?></a></p>
							<?php endif; ?>							
						</div>
						<?php endif; ?> <!-- about_members_name if end -->
					</div>
					<?php endforeach; ?>					
				</div>
				<?php } ?>
				<?php endif; ?>
				<?php endforeach; ?>	<!-- about_members end foreach  -->
				<?php endif; ?> <!-- about_members if end -->
			</div>	
			<div class="col-sm-4">
				<?php //echo get_template_part( 'content', 'none' ); ?>
				<?php get_sidebar( 'right' ); ?>
			</div>
		</div>
	</div>
</section>
<?php //endif; ?>	<!-- about_content if end -->
<?php
 get_footer();