<?php 
error_reporting(0);	
/*
 * Template Name: Board Page
 */
 get_header();
?>
<?php 
while ( have_posts() ) { 
the_post();
$page_id = get_the_ID();
$title = get_the_title();
$member_information = get_field('member_information');
$region_information = get_field('region_information');
$page_content 	= $post->post_content;

?>


<section class="content-section about">
	<div class="container">
		<div class="row">
			<div class="col-sm-8 page-content">
				<div class="page-heading">
					<div class="page-title"><?php echo $title; ?></div>					
				</div>
				<?php echo $page_content; ?>
				<div class="team-member">
					<div class="row member-listing-block">
					<?php if(!empty($member_information)) :
					echo '<div class="member-listing-title col-sm-12"><h2>Executive Officers</h2></div>';
					foreach( $member_information as $member_data ) :
					$about_members_image = $member_data['about_members_image']['url'];
					$about_members_image = !empty($about_members_image) ? $about_members_image['sizes']['member-image'] : 	get_template_directory_uri()."/images/member-no-image.png";
					$about_members_name = $member_data['about_members_name'];
					$about_members_position = $member_data['about_members_position'];
					$country_code = $member_data['country_code'];
					$phone = $member_data['phone'];
					$email = $member_data['email']; ?>					
						<div class="region-block col-sm-6 col-md-4">
							<div class=" member-single">
								<div class="member-image"><img src="<?php echo $about_members_image;?>" alt="team-member" height="200px" width="200px"/></div>
								<div class="member-data">
									<h4 class="member-name"><?php echo $about_members_name; ?></h4>
									<p>
									<?php echo $about_members_position; ?><br/>
									<?php echo $country_code; ?><br/>
									<?php echo $phone; ?><br/>
									<?php echo $email; ?><br/>
									</p>
								</div>
							</div>	 
						</div>					
					<?php endforeach ?>		<!-- member_information foreach end here -->
					</div> 
					<?php endif ?>		<!-- member_information if end here -->
					

					<?php
					foreach($region_information as $regine) : 
						$region_block_title = $regine['region_block_title'];?>
					<div class="regine-type col-sm-12"> 												
							<div class="member-listing-title"><?php echo $region_block_title; ?></div>
							<?php foreach($regine as $rows) : ?>
								<?php foreach($rows as $row) : ?>
							<div class="regine">
								<div class="region-title"><?php echo $row['region_title']; ?></div>
								<div class="member-listing-block row">
									<?php foreach($row['member_information'] as $member): 
									$about_members_image = $member['about_members_image'];
									$about_members_image = !empty($about_members_image) ? $about_members_image['sizes']['member-image'] : 	get_template_directory_uri()."/images/member-no-image.png";
									$about_members_name = $member['about_members_name'];
									$about_members_position = $member['about_members_position'];
									$country_code = $member['country_code'];
									$phone = $member['phone'];
									$email = $member['email']; ?>
									<div class="region-block col-sm-6 col-md-4">
										<div class=" member-single">
											<div class="member-image"><img src="<?php echo $about_members_image;?>" alt="team-member" height="200px" width="200px"/></div>
											<div class="member-data">
												<h4 class="member-name"><?php echo $about_members_name; ?></h4>
												<p>
												<?php echo $about_members_position; ?><br/>
												<?php echo $country_code; ?><br/>
												<?php echo $phone; ?><br/>
												<?php echo $email; ?><br/>
												</p>
											</div>
										</div>	 
									</div>
								<?php endforeach ?>		<!-- $row['member_information'] foreach and here -->
								</div>
							</div>
						<?php endforeach ?>		<!-- rows foreach and here -->
						<?php endforeach ?>		<!-- regine foreach and here -->
						
					</div>
					<?php endforeach ?>		<!-- region_information foreach and here -->


				</div>
			</div>
			<div class="col-sm-4">			
				<?php get_sidebar( 'right' ); ?>
			</div>
		</div>
	</div>
</section>

<?php
 } wp_reset_query();
 get_footer();

