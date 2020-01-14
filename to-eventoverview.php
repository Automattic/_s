<?php 
/*
Template Name: Event Overview Page
*/
get_header(); ?>
<?php
$page_title = get_the_title();
while ( have_posts() ) : the_post();
			$content = get_the_content();
			$content = apply_filters('the_content', $content);			
			
endwhile;
$slider = get_field('slider');
$contact_map = get_field('location','option');
$address = get_field('address','option');
$phone = get_field('phone','option');
$slug = get_queried_object()->post_name;
if(!empty($phone)) {
	$phone_no = preg_replace('/\D/', '', $phone);
}

?>
<?php if(!empty($slider)){ ?>
<section class="banner-section">
	<ul class="banner-slider">
	    <?php foreach($slider as $slide){ 
			$image = $slide['slide'];
			if(!empty($image['sizes'])){
				$banner_image = $image['sizes']['banner-image'];
			} else {
				$banner_image = $image['url'];
			}
			$title = $slide['title'];
			$description = $slide['description'];
			$link = $slide['link'];
			
		?>
		<li style="background-image:url('<?php echo $banner_image;?>');">
                <img src="<?php echo $banner_image; ?>" alt="banner-image" />
			<div class="banner-content">
				<?php if(!empty($title)){ ?>
					<div class="banner-title"><?php echo $title; ?></div>
				<?php } ?>
				<?php if(!empty($description)){ ?>
					<p><?php echo $description; ?></p>
				<?php } ?>
				<?php if(!empty($link)){ ?>
					<a class="button banner-btn btn-blue btn" href="<?php echo $link; ?>">register</a>
				<?php } ?>
			</div>
		</li>
		<?php } ?>
	</ul>
</section>
<?php } ?>
<section class="content-section">
	<div class="container">
		<div class="row">
			<div class="col-sm-8 page-content">
				<div class="page-heading">
					<div class="page-title"><?php echo $page_title; ?></div>
					<ul class="social-share">	
						<li class="facebook"><a target="_blank" href="https://www.facebook.com/sharer.php?s=100&p[title]=<?php the_title(); ?>&p[url]=<?php the_permalink() ?>">facebook</a></li>
						<li class="twitter"><a target="_blank" href="https://twitter.com/share?url=<?php the_permalink() ?>&text=<?php the_title(); ?>">twitter</a></li>
						<li class="linkedin"><a href="https://www.linkedin.com/shareArticle?mini=true&url=<?php the_permalink() ?>&title=<?php the_title(); ?>&summary=&source=<?php bloginfo('name'); ?>" target="_new">linkedin</a></li>
					</ul>
				</div>	
				<?php echo $content; ?>
				
			</div> 	
			
			
			<div class="col-sm-4">
				
					<?php if(get_the_title() == "Events") { ?>
					<?php get_sidebar('right'); ?>
					<?php } else { ?>
					<?php //if($slug == '2018-annual-training-coneference') { ?>
					<div class="sidebar">
					<?php
							
							 wp_nav_menu( array(
							 		'menu' => 'Conference Overview',
									'menu_class' => 'sidebar-links sidebarlink-purple',
									'menu_id'        => 'conference',
								) );
						?>					
						<?php //} ?>
						<?php// if($slug == 'contact') { ?>
						<div class="location-detail">
							<h2>Location Details</h2>
							<address>
							<?php echo $address; ?>

								<a href="callto:<?php echo $phone_no; ?>"><?php echo $phone; ?></a>
							</address>
						</div>

						<div id="map" class="contact-map">
                                                  <div class="marker">
                                                    <?php the_field('open_street_map_address', 'option', true); ?>
						  </div>
                                                </div>
						<?php //} ?>
					</div>
					<?php } ?>				
			</div>
		</div>
	</div>
</section>
<?php 
get_sidebar();
get_footer();
