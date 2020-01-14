<?php

	$sidebar_block = get_field('sidebar_block', 'option');
	$sidebar_find_a_provider = get_field('sidebar_find_a_provider', 'option');
	$sidebar_membership = get_field('sidebar_membership', 'option'); 
	$sidebar_single_block_image = get_field('sidebar_single_block_image','option'); 
	$sidebar_content = get_field('sidebar_content','option'); 
	$sidebar_second_image = get_field('sidebar_second_image','option'); 
	$blog_page_link = get_field('blog_page_link','option');
?>
<div class="sidebar">
	<?php
	if( $sidebar_block || $sidebar_find_a_provider || $sidebar_membership ) : ?>
	<div class="sidebar-single-block">
		<div class="sidebar-block grey">
			<h2><?php echo $sidebar_block ?></h2>
			<div class="sidebar-block-btn">
				<?php if( !empty($sidebar_find_a_provider) ) : ?>
				<a href="<?php echo $sidebar_find_a_provider ; ?>" class="btn button btn-red" target="_blank">find a provider</a>
				<?php endif ?>	<!-- sidebar_find_a_provider if end -->
				<?php //if( !empty($sidebar_membership) ) : ?>
				<!--<a href="<?php //echo $sidebar_membership ; ?>" class="btn button btn-blue">MEBER LOGIN</a>-->
				<?php //endif ?>	<!-- sidebar_membership if end -->
				
				<?php $log_in_out_href = ( is_user_logged_in() ) ? wp_logout_url( get_permalink( get_page_by_path('login') ) ) : get_permalink( get_page_by_path('login') ); ?>
				<?php $log_in_out = ( is_user_logged_in() ) ? 'member logout' : 'member login'; ?>
				<a href="<?php echo $log_in_out_href; ?>" class="btn button member-login btn-blue"><?php echo $log_in_out; ?></a>
				
			</div>
		</div>
		<?php if( $sidebar_single_block_image && !empty($sidebar_single_block_image['url']) ) : ?>
		<div class="signle-block-image"><img src="<?php echo $sidebar_single_block_image['url']; ?>" alt="sidebar-image" /></div>
		<?php endif; ?>		<!-- sidebar_single_block_image if end -->
	</div>
	<?php endif ?> <!-- sidebar-single-block if end  -->
	
	<div class="sidebar-single-block">
		
		<?php if( !empty($sidebar_content) ) : ?>
		<a href="<?php echo $blog_page_link; ?>">
		<div class="sidebar-block blue">		
			<h2><?php echo $sidebar_content ?>		
		</div>
		</a>
		<?php endif; ?>		<!-- sidebar_content if end -->
		<?php if( $sidebar_second_image && !empty($sidebar_second_image['url']) ): ?>		
		<div class="signle-block-image">
		<a href="<?php echo $blog_page_link; ?>">
			<img src="<?php echo $sidebar_second_image['sizes']['sidebar-bottom-image'] ?>" alt="sidebar-image" />
		</a>
		</div>
		<?php endif; ?>		<!-- sidebar_second_image if end -->
		
	</div>
</div>