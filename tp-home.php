<?php 
/*
Template Name: Home Page
*/
get_header(); 
$banner_slider = get_field('banner_slider');
if( $banner_slider ): ?>
<section class="banner-section">
	<ul class="banner-slider"> <?php
		foreach ( $banner_slider as $row )  : 
			$banner_slider_image = $row['banner_slider_image'];
			$banner_slider_logo = $row['banner_slider_logo'];
			$banner_slider_content = $row['banner_slider_content'];
			$banner_slider_title = $row['banner_slider_title'];
			$banner_slider_learn_more = $row['banner_slider_learn_more'];
			$banner_slider_link_title = $row['banner_slider_link_title'];
			if( $banner_slider_image || $banner_slider_logo || $banner_slider_content || $banner_slider_title ) : ?>
				<li style="background-image:url('<?php echo $banner_slider_image['url']; ?>');">
					<?php if ( $banner_slider_image && !empty($banner_slider_image['url']) ) : ?>
					<img src="<?php echo $banner_slider_image['url']; ?>" alt="banner-image" />
					<?php endif ?>			<!-- if banner_slider_image END -->
					<div class="banner-content banner-content-big">
						<?php if( $banner_slider_logo && !empty($banner_slider_logo['url'])) : ?>
						<div class="banner-logo"><img src="<?php echo $banner_slider_logo['url']; ?>" alt="<?php echo  $banner_slider_logo['alt']; ?>" /></div>
						<?php endif	;	/* IF banner_slider_logo end */
						if ( !empty($banner_slider_title) ) : ?>
						<div class="banner-title"><?php echo $banner_slider_title; ?></div>
						<?php endif ;
						if( !empty($banner_slider_content) ) : ?>
						<p><?php echo $banner_slider_content; ?></p>
						<?php endif;		/* if banner_slider_content end */
						if(!empty($banner_slider_learn_more)) : 
							$banner_slider_link_title = $banner_slider_link_title ? $banner_slider_link_title : 'Learn More';
							$postURL = get_permalink($banner_slider_learn_more->ID); ?>
							<a class="button banner-btn btn-white btn" href="<?php echo $postURL ?>"><?php echo $banner_slider_link_title ?></a>
						<?php endif; ?>		<!-- Lern More if End  -->
					</div>
				</li>
			<?php endif; ?>		<!-- image Slider if end -->
			<?php
		endforeach; ?>		
	</ul>
	<span id="scroll-to-content" class="down-arrow floating"><a href="#next-section"><i class="wheel"></i></a></span>
</section>
<?php
endif;	//banner if end
$bottom_section_repeater = get_field('bottom_section_repeater');
if( $bottom_section_repeater ): ?>
	<section class="banner-bottom-section" id="next-section">
	<div class="container-fluid">
		<div class="row">
		<?php
			foreach ( $bottom_section_repeater as $row ) : 
				$bottom_background_color = $row['bottom_background_color'];
				$bottom_icon = $row['bottom_icon'];
				$bottom_title = $row['bottom_title'];
				$bottom_content = $row['bottom_content'];
				$bottom_learn_more = $row['bottom_learn_more'];
								
				// if( $bottom_background_color || $bottom_icon || $bottom_title || $bottom_content || $bottom_learn_more ) : 
				if( !empty($bottom_icon) && !empty($bottom_title) && !empty($bottom_learn_more)) : ?>
				<div class="col-md-4 banner-bottom-block <?php echo $bottom_background_color ?>" >
					<div class="banner-block-single">
						<?php if(!empty($bottom_icon['url'])) : ?>
						<div class="block-icon"><img src="<?php echo $bottom_icon['url'] ?>" alt="<?php echo $bottom_icon['alt'] ?>" /></div>
						<?php endif; ?>		<!-- bottom_icon if end -->
						<?php if(!empty($bottom_title)) : ?>
						<div class="block-title"><?php echo $bottom_title; ?></div>
						<?php endif ?> <!-- bottom_title if end  -->
						<?php if(!empty($bottom_content)) : ?>
						<p><?php echo $bottom_content; ?></p>
						<?php endif ?> <!-- bottom_content if end -->
						<?php if(!empty($bottom_learn_more)) : 
							$postURL = get_permalink($bottom_learn_more->ID); ?>
						<a class="button btn-white btn" href="<?php echo $postURL ?>">Learn More</a>
						<?php endif; ?>	<!-- bottom_learn_more if end -->
					</div>	
				</div>
				<?php endif; ?>		<!-- Main contact if end -->
			<?php endforeach; ?>
		</div>
	</div>
</section>
<?php
endif;
$list_post = get_field('list_post_repeater');
if( $list_post ): ?>
	<section class="homelist-section">
	<?php
	foreach ( $list_post as $row ) :
	$list_post_background_color = $row['list_post_background_color'];
	$list_post_image = $row['list_post_image'];
	$list_post_title = $row['list_post_title'];
	$post_description = $row['list_post_description'];
	$list_post_description = nascsp_limit_Text($post_description,400);
	$list_post_learn_more = $row['list_post_learn_more'];
	$link_title = $row['link_title'];
	$list_tag_title = $row['list_tag_title'];
	$list_tag_sub_title = $row['list_tag_sub_title'];
	if( $list_post_background_color || $list_post_image || $list_post_title || $list_post_description || $list_post_learn_more ) : ?>
		<div class="home-list">
			<div class="vertical-align what-we-do" style="background-color:<?php echo $list_post_background_color; ?>">
				<div class="col-sm-6 main-serviceimage">
				<?php if( $list_post_image && !empty($list_post_image['url']) ): ?>
					<div class="list-image" style="background-image:url('<?php echo $list_post_image['url'] ?>');">
						<a href="<?php echo get_permalink($row['list_post_learn_more']->ID); ?>"><img src="<?php echo $list_post_image['url'] ?>"></a>
					</div>
				<?php endif; ?> <!-- list_post_image if end -->
				</div>
				<div class="col-sm-6">
					<div class="list-data">
						<?php if( !empty($list_post_title) ): ?>
						<h3><?php echo $list_post_title ?></h3>
						<?php endif; ?> <!-- list_post_title if end-->
						<?php if( !empty($list_tag_title) ||  !empty($list_tag_sub_title)) { ?>
						<div class="big-title">
							<?php if( !empty($list_tag_title)){ ?>
								<?php echo $list_tag_title; ?>
							<?php } ?>
							<?php if( !empty($list_tag_sub_title)){ ?>
								<span><?php echo $list_tag_sub_title; ?></span>
							<?php } ?>
						</div> 
						
						<?php } ?>
						<?php if( !empty($list_post_description) ) : ?>
						<div><?php echo  $list_post_description ?></div> 
						<?php endif ; ?> <!-- list_post_description if end -->
						<?php
						if( !empty($list_post_learn_more) && !empty($link_title)) :
							$postURL = get_permalink($row['list_post_learn_more']->ID); ?>
							<a href="<?php echo $postURL ; ?>" class="btn button btn-white"><?php echo $link_title; ?></a>
						<?php endif; ?> <!-- list_post_learn_more if end -->
					</div>  
				</div>
			 </div>
		</div>
		<?php endif ?>	<!-- main if end -->
		<?php endforeach; ?>
	</section>
<?php
endif;

get_footer(); ?>