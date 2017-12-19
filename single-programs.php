<?php
/**
* The template for displaying all programs posts
*
* @link https://developer.wordpress.org/themes/basics/template-hierarchy/#single-post
*
* @package _s
*/

get_header(); ?>

	<div id="primary" class="content-area">
		<main id="main" class="site-main">
			<div class="banner-background">
				<div id="shoes-pic-2"></div>
			</div>

		<?php
		while ( have_posts() ) : the_post();
		$size = 'medium_large';
		$image = get_field('image');
    $program_services_1 = get_field('program_services_1');
		$program_services_2 = get_field('program_services_2');
		$program_services_3 = get_field('program_services_3');
		?>
		<div class="grid-wrapper site-info">
			<div class="left-section">
				<h1 class="dark-blue font-boldest xx-large"><?php the_title(); ?></h1>
				<p><?php the_content(); ?></p>
			</div>

			<div class="desktop-only-img right-section">
				<?php if($image) {
									echo wp_get_attachment_image( $image, $size );
								} ?>
			</div>

			<div class="second-row">
				<h3 class="sea-blue font-boldest x-large">Youth can access a variety of services:</h3>
				<ul class="no-bullet">
					<?php if($program_services_1) : ?>
					<li class="check-blue">
						<h4 class="arial gray twox-font"><?php echo $program_services_1; ?></h4>
					</li>
					<?php endif; ?>
					<?php if($program_services_2) : ?>
					<li class="check-blue">
						<h4 class="arial gray twox-font"><?php echo $program_services_2; ?></h4>
					</li>
					<?php endif; ?>
					<?php if($program_services_3) : ?>
					<li class="check-blue">
						<h4 class="arial gray twox-font"><?php echo $program_services_3; ?></h4>
					</li>
					<?php endif; ?>
				</ul>
			</div>
		</div>
		<?php endwhile; // End of the loop.?>
		</main><!-- #main -->
	</div><!-- #primary -->

<?php

get_footer();
