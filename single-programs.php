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
		<div class="light-blue-background aligncenter">
			<div class="site-info">

				<div>
					<h2 class="dark-blue font-boldest xx-large">Want to make a Referral?</h2>
				</div>

				<div class="grid-wrapper-thirds">
					<div class="left">
						<p><b>Questions?</b> We would gladly accept questions regarding referrals, additional information and requests for presentation of services provided by LifeTies, Inc. by contacting Emily Mattek.</p>
					</div>
					<div class="right-section" style="margin: 1em auto; padding: 1em;">
						<h3 class="dark-blue font-boldest">Emily Mattek, LCSW</h3>
						<p class="zero-margin gray">Clinical Services Director</p>
						<h4 class="gray"> (609)  882-4485</h4>
						<h5 class="perform-care">
							<a href="mailto:emattek@lifeties.org" class="font-boldest orange ">emattek@lifeties.org</a>
						</h5>
					</div>
				</div>
			</div>
		</div> <!-- referral -->
		</main><!-- #main -->
	</div><!-- #primary -->

<?php

get_footer();
