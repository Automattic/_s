<?php
/**
* The template for displaying the Careers page
*
* @link https://developer.wordpress.org/themes/basics/template-hierarchy/#single-post
*
* @package _s
*/

get_header(); ?>

	<div id="primary" class="content-area">
		<main id="main" class="site-main">

			<div id="career-banner">
				<div class="center-in-banner">
					<div class="team-icon"></div>
					<h1 class="white">Join Our Team</h1>
				</div>
			</div>

		<?php
		while ( have_posts() ) : the_post();
		?>
		<div class="aligncenter page-width">

		<div>
			<h1>Our Youth Need You!</h1>
			<h1>Be a part of an inspiring journey to empower youth with support, skills and tools for a brighter future.</h1>
			<p>(All fields marked with an asterick(*) are REQUIRED to complete submission)</p>
		</div>

		 <section>
			<div>
				<?php echo do_shortcode('[ninja_form id=2]') ?>
			</div>
		 </section>

		 <section class="large-btm-margin">
			 <hr>
		 	<h1>Interested in Volunteering</h1>
			<h4><a href="<?php echo home_url(); ?>/volunteer">Check out the volunteer page!</a> Take a look and see what volunteer category you fit in and apply!</h4>
		 </section>
	</div>
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
