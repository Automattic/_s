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
					<h1 class="white font-boldest threex-font">Join Our Team</h1>
				</div>
			</div>

		<?php
		while ( have_posts() ) : the_post();
		$form_1 = get_field('form_1');
		$form_2 = get_field('form_2');
		$form_3 = get_field('form_3');
		$employment_blurb = get_field('employment_blurb');
		$form_blurb = get_field('form_blurb');
		?>
		<div class="aligncenter page-width">

		<div>
			<h1 class="uppercase dark-blue font-boldest xx-large" style="margin-bottom: 0;">Our Youth Need You!</h1>
			<h1 class="gray font-bolder" style="margin-top: 0; line-height: 1.25;">Be a part of an inspiring journey to empower youth with support, skills and tools for a brighter future.</h1>

			<p class="orange font-bolder">(All fields marked with an asterick(*) are REQUIRED to complete submission)</p>
		</div>

		 <section>
			<div>
				<?php echo do_shortcode('[ninja_form id=2]') ?>
			</div>
			<p class="orange x-large font-boldest "><?php echo $form_blurb ?></p>
			<div class="inline-flex-display underline">
				<?php if($form_1) :?>
					<i class="fa fa-file-pdf-o fa-2x pdf-img" aria-hidden="true"></i>
					<a href="<?php echo $form_1['url']; ?>">
						<h3 class="arial black font-bolder">  -  <?php echo $form_1['title']; ?>
						</h3>
					</a>
				<?php endif; ?>
			</div>
			<div class="inline-flex-display">
				<?php if($form_2) :?>
					<i class="fa fa-file-pdf-o fa-2x pdf-img" aria-hidden="true"></i>
					<a href="<?php echo $form_2['url']; ?>">
						<h3 class="arial black font-bolder">  -  <?php echo $form_2['title']; ?>
						</h3>
					</a>
				<?php endif; ?>
			</div>
			<div class="inline-flex-display">
				<?php if($form_3) :?>
					<i class="fa fa-file-pdf-o fa-2x pdf-img" aria-hidden="true"></i>
					<a href="<?php echo $form_3['url']; ?>">
						<h3 class="arial black font-bolder">  -  <?php echo $form_3['title']; ?>
						</h3>
					</a>
				<?php endif; ?>
			</div>
			<h4 class="med-padding"><?php echo $employment_blurb ?></h4>
		 </section>

		 <section class="large-btm-margin">
			 <hr>
		 	<h1 class="uppercase dark-blue font-boldest xx-large" style="margin-bottom: 0;">Interested in Volunteering</h1>
			<h4 class="underline arial"><a href="<?php echo home_url(); ?>/volunteer" class="orange font-bolder">Check out the volunteer page!</a> <span class="gray">Take a look and see what volunteer category you fit in and apply!</span></h4>
		 </section>
		</div>

		<!-- Sponsors -->
		<section class="sponsor-carousel light-gray-background">
			<h2 class="aligncenter">A big thanks to our supporters!</h2>
			<div>
			<?php echo do_shortcode('[logoshowcase cat_id="3" dots="false"]'); ?>
			</div>
		</section>
		<?php endwhile; ?>
		</main><!-- #main -->
	</div><!-- #primary -->

<?php

get_footer();
