<?php
/**
* The template for displaying the Volunteer page
*
* @link https://developer.wordpress.org/themes/basics/template-hierarchy/#single-post
*
* @package _s
*/

get_header(); ?>

	<div id="primary" class="content-area">
		<main id="main" class="site-main">

			<div id="volunteer-banner">
				<div class="center-in-banner">
					<div class="vol-icon sm-btm-margin"></div>
					<h1 class="white font-boldest threex-font aligncenter h2-line-ht">Become a Volunteer</h1>
				</div>
			</div>

		<?php
		while ( have_posts() ) : the_post();
		$volunteer_signup = get_field('volunteer_signup');
		?>
		<div class="site-info aligncenter">
			<h1 class="uppercase dark-blue font-boldest xx-large h2-line-ht ">Make an Impact:</h1>
			<h1 class="gray h2-line-ht" style="margin: 0;">Guidance. Direction. Connection.</h1>
			<h3 class="gray arial">Get involved in one of our amazing programs to help young people who need you the most.</h3>
		</div>
		 <section class="light-blue-background">
			 <div class="site-info">
				 <ul class="listing">
 			 		<li class="aligncenter">
 			 			<h1 class="sea-blue uppercase xx-large font-boldest" style="margin-bottom: 0; line-height: 1.25;">BE A MENTOR</h1>
 						<h4 class="arial font-boldest twox-font">SHARE POSITIVE INFLUENCE</h4>
 						<p class="underline">Join our Teenage Independent living training (T.I.L.T.) mentoring program. Our mentors provide guidance and direction to youth ages 14-21. They meet with their mentees at least 4 hours a month. <strong>All mentees must be at least 21 and pass all background checks.</strong> Learn more about <a href="<?php echo home_url(); ?>/t-i-l-t-mentoring" class="orange font-bolder">T.I.L.T. here.</a></p>
 			 		</li>
 					<li class="aligncenter">
 			 			<h1 class="sea-blue uppercase xx-large font-boldest" style="margin-bottom: 0; line-height: 1.25;">BE A LIFELINK</h1>
 						<h4 class="arial font-boldest twox-font">TEACH LIFE SKILLS</h4>
 						<p>Lifelink Volunteers help our youth attain additional life skills through presentations, activities and talks. Share your knowledge to provide lessons on budgeting, career/college counseling, job interviewing, fitness & wellbeing, meditation, yoga and more! <strong>All volunteers must be at least 25 and pass all background checks.</strong>
 						</p>
 			 		</li>
 					<li class="aligncenter">
 			 			<h1 class="sea-blue uppercase xx-large font-boldest" style="margin-bottom: 0; line-height: 1.25;">BE A CORPORATE VOLUNTEER</h1>
 						<h4 class="arial font-boldest twox-font">DEDICATE YOUR TALENTS</h4>
 						<p>Looking for a corporate volunteer initiative? LifeTies has one-day community service projects that need you!
 						Our homes get quite a work out! We need a group of volunteers to helps us maintain the facilities for our youth, including exterior/interior painting, weeding and simple landscaping. We are seeking corporate partners to help with gifts for our youth during holiday drives, birthdays and other special events.
 						</p>
 			 		</li>
 					<li class="aligncenter">
 			 			<h1 class="sea-blue uppercase xx-large font-boldest" style="margin-bottom: 0; line-height: 1.25;">BE A COMMITTEE VOLUNTEER</h1>
 						<h4 class="arial font-boldest twox-font">JOIN THE CAUSE</h4>
 						<p>We are seeking volunteers from corporations and the community to serve on our special events committee. Come join us as we plan a tremendous event for a fabulous cause. The annual signature event will be our primary fundraiser to assist us in serving our youth and is critical to cover our operational costs.
 						</p>
 			 		</li>
 			 	</ul>
			 </div>
		 </section>

		 <section class="page-width">
			 <div class="aligncenter">
				 <h1 class="orange font-boldest xx-large h2-line-ht">We're looking for volunteers like you!</h1>

				 <h3 class="arial gray underline"><strong>Interested in becoming a volunteer?</strong> Complete the brief online form below or email us at <a class="orange font-bolder" href="mailto:info@lifeties.org">info@lifeties.org</a> and someone will reach out to you.</h3>
				 <h3><?php echo $volunteer_signup ?></h3>
				 <p class="orange font-bolder">(All fields marked with an asterick(*) are REQUIRED to complete submission)</p>
			 </div>
			 <div>
			 	<?php echo do_shortcode('[ninja_form id=3]') ?>
			 </div>
		 </section>
		<?php endwhile; // End of the loop.?>

		<!-- Sponsors -->
		<section class="sponsor-carousel light-gray-background">
			<h2 class="aligncenter">A big thanks to our supporters!</h2>
			<div>
			<?php echo do_shortcode('[logoshowcase cat_id="3" dots="false"]'); ?>
			</div>
		</section>

		</main><!-- #main -->
	</div><!-- #primary -->

<?php

get_footer();
