<?php
/**
* Template Name: House
* Template Post Type: post, programs, house
* The template for displaying all house posts
*
* @link https://developer.wordpress.org/themes/basics/template-hierarchy/#single-post
*
* @package _s
*/

get_header(); ?>

	<div id="primary" class="content-area">
		<main id="main" class="site-main">

			<div class = "banner-background" >
				<div id="shoes-pic-2"></div>
			</div>
			<div class="page-width">
			<?php
			while ( have_posts() ) : the_post();
			$size = 'medium_large';
			$image = get_field('image');
			$program_services_1 = get_field('program_services_1');
			$program_services_2 = get_field('program_services_2');
			$program_services_3 = get_field('program_services_3');
			$program_services_4 = get_field('program_services_4');
			$program_services_5 = get_field('program_services_5');
			$program_services_6 = get_field('program_services_6');
			$program_services_7 = get_field('program_services_7');
			$program_services_8 = get_field('program_services_8');
			$program_services_9 = get_field('program_services_9');
			$program_services_10 = get_field('program_services_10');
			$program_services_11 = get_field('program_services_11');
			?>
			<div class="grid-wrapper">
				<div class="left-section">
					<h1 class="dark-blue font-boldest xx-large"><?php the_title(); ?></h1>
					<p><?php the_content(); ?></p>
				</div>

				<div class="second-row">
					<h3 class="dark-blue font-boldest xx-large">Program Services</h3>
					<ul class="listing">
						<li class="check-blue">
							<h4 class="arial gray twox-font"><?php echo $program_services_1; ?></h4>
						</li>
						<li class="check-blue">
							<h4 class="arial gray twox-font"><?php echo $program_services_2; ?></h4>
						</li>
						<li class="check-blue">
							<h4 class="arial gray twox-font"><?php echo $program_services_3; ?></h4>
						</li>
						<li class="check-blue">
							<h4 class="arial gray twox-font"><?php echo $program_services_4; ?></h4>
						</li>
						<li class="check-blue">
							<h4 class="arial gray twox-font"><?php echo $program_services_5; ?></h4>
						</li>
						<li class="check-blue">
							<h4 class="arial gray twox-font"><?php echo $program_services_6; ?></h4>
						</li>
						<li class="check-blue">
							<h4 class="arial gray twox-font"><?php echo $program_services_7; ?></h4>
						</li>
						<li class="check-blue">
							<h4 class="arial gray twox-font"><?php echo $program_services_8; ?></h4>
						</li>
						<li class="check-blue">
							<h4 class="arial gray twox-font"><?php echo $program_services_9; ?></h4>
						</li>
						<li class="check-blue">
							<h4 class="arial gray twox-font"><?php echo $program_services_10; ?></h4>
						</li>
						<li class="check-blue">
							<h4 class="arial gray twox-font"><?php echo $program_services_11; ?></h4>
						</li>
					</ul>
				</div>

				<div class="desktop-only-img right-section">
					<?php if($image) {
										echo wp_get_attachment_image( $image, $size );
									} ?>
				</div>
			</div>
			<?php endwhile; // End of the loop.?>
		</div>
		<div class="light-blue-background aligncenter">
			<div class="site-info">
				<div>
					<h2 class="dark-blue font-boldest xx-large">Want to make a Youth Referral?</h2>
					<h3 class="gray">(Triad & Rainbow Houses are accepting referrals!)</h3>
				</div>

				<div class="grid-wrapper">
				<div class="left-section perform-care">
					<p>All referrals will go through PerformCare's YouthLink. You can contact PerformCare to gain access to YouthLink via the number below.</p>
					<div class="aligncenter">
						<div class="perform-care-logo inline-block-display"></div>
					</div>

					<h1 class="aligncenter font-boldest xx-large sea-blue">(877) 652-7624</h1>
					<h5>
						<a href="http://www.performcarenj.org" class="orange font-boldest">www.performcarenj.org</a>
					</h5>
				</div>
				<div class="right-section">
					<p><b>Questions?</b> We would gladly accept questions regarding referrals, additional information and requests for presentation of services provided by LifeTies, Inc. by contacting the following:</p>
					<div class="grid-wrapper">
					<div class="left-section">
						<h3 class="dark-blue font-boldest">Vivian Harmon</h3>
						<h4> <span class="font-boldest sea-blue">Triad:</span> <span class="gray">(609) 771-4221</span></h4>
						<h4><span class="font-boldest sea-blue">Rainbow:</span><span class="gray">(609) 394-6747</span> </h4>
						<h5 class="perform-care">
							<a href="mailto:vharmon@lifeties.org" class="font-boldest orange ">vharmon@lifeties.org</a>
							</h5>
					</div>
					<div class="right-section">
						<h3 class="dark-blue font-boldest">Emily Mattek</h3>
						<h4 class="font-boldest sea-blue">Clinical Services</h4>
						<h4 class="gray">Phone: (609) 882-4485</h4>
						<h5 class="perform-care">
							<a href="mailto:emattek@lifeties.org" class="font-boldest orange ">emattek@lifeties.org</a>
							</h5>
					</div>
					</div>
					</div>
				</div>
			</div>
		</div> <!-- referral -->
		</main><!-- #main -->
	</div><!-- #primary -->

<?php
get_footer();
