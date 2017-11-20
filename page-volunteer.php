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
					<div class="vol-icon"></div>
					<h1 class="white">Become a Volunteer</h1>
				</div>
			</div>

		<?php
		while ( have_posts() ) : the_post();
		?>
		<div class="site-info aligncenter">
			<h1>Make an Impact:</h1>
			<h1>Guidance. Direction. Connection.</h1>
			<h4>Get involved in one of our amazing programs to help young people who need you the most.</h4>
		</div>
		 <section class="light-blue-background">
			 <div class="site-info">
				 <ul class="listing">
 			 		<li class="aligncenter">
 			 			<h1>BE A MENTOR</h1>
 						<h4>SHARE POSITIVE INFLUENCE</h4>
 						<p>Join our Teenage Independent living training (T.I.L.T.) mentoring program. Our mentors provide guidance and direction to youth ages 14-21. They meet with their mentees at least 4 hours a month. <strong>All mentees must be at least 21 and pass all background checks.</strong> Learn more about <a href="<?php echo home_url(); ?>/t-i-l-t-mentoring">T.I.L.T. here.</a></p>
 			 		</li>
 					<li class="aligncenter">
 			 			<h1>BE A LIFELINK</h1>
 						<h4>TEACH LIFE SKILLS</h4>
 						<p>Lifelink Volunteers help our youth attain additional life skills through presentations, activities and talks. Share your knowledge to provide lessons on budgeting, career/college counseling, job interviewing, fitness & wellbeing, meditation, yoga and more! <strong>All volunteers must be at least 25 and pass all background checks.</strong>
 						</p>
 			 		</li>
 					<li class="aligncenter">
 			 			<h1>BE A CORPORATE VOLUNTEER</h1>
 						<h4>DEDICATE YOUR TALENTS</h4>
 						<p>Looking for a corporate volunteer initiative? LifeTies has one-day community service projects that need you!
 						Our homes get quite a work out! We need a group of volunteers to helps us maintain the facilities for our youth, including exterior/interior painting, weeding and simple landscaping. We are seeking corporate partners to help with gifts for our youth during holiday drives, birthdays and other special events.
 						</p>
 			 		</li>
 					<li class="aligncenter">
 			 			<h1>BE A COMMITTEE VOLUNTEER</h1>
 						<h4>JOIN THE CAUSE</h4>
 						<p>We are seeking volunteers from corporations and the community to serve on our special events committee. Come join us as we plan a tremendous event for a fabulous cause. The annual signature event will be our primary fundraiser to assist us in serving our youth and is critical to cover our operational costs.
 						</p>
 			 		</li>
 			 	</ul>
			 </div>
		 </section>

		 <section>
		 	<h1>We're looking for volunteers like you!</h1>
			<h3>
				<strong>Interested in becoming a volunteer?</strong> Complete the brief online form below or email us at <a href="mailto:info@lifeties.org">info@lifeties.org</a> and someone will reach out to you.
			</h3>
			<p>(All fields marked with an asterick(*) are REQUIRED to complete submission)</p>
			<div class="">
				<?php echo do_shortcode('[ninja_form id=3]') ?>
			</div>
		 </section>

		<?php endwhile; // End of the loop.?>

		<!-- Sponsors -->
		<section class="sponsor-carousel">
			<div>
			<?php echo do_shortcode('[logoshowcase dots="false"]'); ?>
			</div>
		</section>

		</main><!-- #main -->
	</div><!-- #primary -->

<?php

get_footer();
