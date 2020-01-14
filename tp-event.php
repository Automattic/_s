<?php 
/*
Template Name: Event Page
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
$slug   = get_queried_object()->post_name;

?>
<?php if(!empty($slider)){ ?>
<section class="banner-section">
	<ul class="banner-slider">
	    <?php foreach($slider as $slide){ 
			$image = $slide['slide'];
			$title = $slide['title'];
			$description = $slide['description'];
			$link = $slide['link'];
			
		?>
		<li style="background-image:url('<?php echo $image['url']; ?>">
			<img src="<?php echo $image['url']; ?>" alt="banner-image" />
			<div class="banner-content">
				<div class="banner-title"><?php echo $title; ?></div>
				<p><?php echo $description; ?></p>
				<a class="button banner-btn btn-blue btn" href="<?php echo $link; ?>">register</a>
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
						<li class="facebook"><a target="_blank" href="http://www.facebook.com/sharer.php?s=100&p[title]=<?php the_title(); ?>&p[url]=<?php the_permalink() ?>">facebook</a></li>
						<li class="twitter"><a target="_blank" href="https://twitter.com/share?url=<?php the_permalink() ?>&text=<?php the_title(); ?>">twitter</a></li>
						<li class="linkedin"><a href="http://www.linkedin.com/shareArticle?mini=true&url=<?php the_permalink() ?>&title=<?php the_title(); ?>&summary=&source=<?php bloginfo('name'); ?>" target="_new">linkedin</a></li>
					</ul>
				</div>
				<?php  echo $content; ?>
			</div>
			
			<div class="col-sm-4">
				<div class="sidebar">
					<ul class="sidebar-links">
						<li <?php if($slug == "2018-annual-training-coneference"){ ?>class="active"<?php } ?>><a href="<?php echo get_permalink(get_page_by_path('2018-annual-training-coneference')); ?>">Conference Overview</a></li>
						<li <?php if($slug == "agenda"){ ?>class="active"<?php } ?>><a href="<?php echo get_permalink(get_page_by_path('agenda')); ?>">Agenda</a></li>
						<?php /* <li><a href="<?php echo get_permalink(get-page_by_path('fees')); ?>">Fees</a></li>
						<li><a href="<?php echo get_permalink(get-page_by_path('letter-of-support')); ?>">Letter of Support</a></li>
						<li><a href="<?php echo get_permalink(get-page_by_path('conference-venue')); ?>">Conference Venue</a></li> */ ?>
                        <li <?php if($slug == "exhibitors-and-sponsors"){ ?>class="active"<?php } ?>><a href="<?php echo get_permalink(get_page_by_path('exhibitors-and-sponsors')); ?>">Exhibitors and Sponsors</a></li>
                        <li <?php if($slug == "venue-visiting-vadc"){ ?>class="active"<?php } ?>><a href="<?php echo get_permalink(get_page_by_path('venue-visiting-vadc')); ?>">Visiting VA/DC</a></li>
						<li <?php if($slug == "board-meeting"){ ?>class="active"<?php } ?>><a href="<?php echo get_permalink(get_page_by_path('board-meeting')); ?>">Board Meeting</a></li>						
						
						<li <?php if($slug == "contact"){ ?>class="active"<?php } ?>><a href="<?php echo get_permalink(get_page_by_path('contact')); ?>">Contact Us</a></li>
					</ul>
					<div class="location-detail">
						<h2>Location Details</h2>
						<address>
						<?php echo $address; ?>

							<a href="tel:<?php echo $phone; ?>"><?php echo $phone; ?></a>
						</address>
					</div>
					<div id="map" class="contact-map">
						<div class="marker" data-lat="<?php echo $contact_map['lat']; ?>" data-lng="<?php echo $contact_map['lng']; ?>" data-address="<?php echo $contact_map['address']; ?>"></div>
					</div>
				</div>
			</div>
		</div>
	</div>
</section>
<?php 
get_sidebar();
get_footer();
?>