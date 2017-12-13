<?php
/**
* Template Name: Mentor
* Template Post Type: post, programs, mentor
* The template for displaying all house/mentoring posts
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
		$upcoming_mentoring = get_field('upcoming_mentoring');
		?>
		<div class="page-width">
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
					<?php if($program_services_5) : ?>
					<li class="check-blue">
						<h4 class="arial gray twox-font"><?php echo $program_services_5; ?></h4>
					</li>
					<?php endif; ?>
					<?php if($program_services_6) : ?>
					<li class="check-blue">
						<h4 class="arial gray twox-font"><?php echo $program_services_6; ?></h4>
					</li>
				<?php endif; ?>
					<?php if($program_services_7) : ?>
					<li class="check-blue">
						<h4 class="arial gray twox-font"><?php echo $program_services_7; ?></h4>
					</li>
					<?php endif; ?>
					<?php if($program_services_8) : ?>
					<li class="check-blue">
						<h4 class="arial gray twox-font"><?php echo $program_services_8; ?></h4>
					</li>
				<?php endif; ?>
					<?php if($program_services_9) : ?>
					<li class="check-blue">
						<h4 class="arial gray twox-font"><?php echo $program_services_9; ?></h4>
					</li>
				<?php endif; ?>
					<?php if($program_services_10) : ?>
					<li class="check-blue">
						<h4 class="arial gray twox-font"><?php echo $program_services_10; ?></h4>
					</li>
				<?php endif; ?>
					<?php if($program_services_11) : ?>
					<li class="check-blue">
						<h4 class="arial gray twox-font"><?php echo $program_services_11; ?></h4>
					</li>
				<?php endif; ?>
				</ul>
			</div>

			<div class="desktop-only-img right-section">
				<?php if($image) {
									echo wp_get_attachment_image( $image, $size );
								} ?>
			</div>
		</div>
		</div>

		<div class="light-blue-background aligncenter">
			<div class="site-info">

				<div>
					<h2 class="dark-blue font-boldest xx-large">Want to make a Youth Referral?</h2>
				</div>

				<div class="grid-wrapper-thirds">
					<div class="left">
						<p><b>Questions?</b> We would gladly accept questions regarding referrals, additional information and requests for presentation of services provided by LifeTies, Inc. by contacting Robin Wilkins.</p>
					</div>
					<div class="right-section" style="margin: 1em auto; padding: 1em;">
						<h3 class="dark-blue font-boldest">Robin Wilkins</h3>
						<h4 class="gray">(609) 671-0040</h4>
						<h5 class="perform-care">
							<a href="mailto:twilkins@lifeties.org" class="font-boldest orange ">twilkins@lifeties.org</a>
						</h5>
					</div>
				</div>
			</div>
		</div> <!-- referral -->

		<!-- mentoring info section -->
		<?php if($upcoming_mentoring) :?>
		<section class="site-info grid-wrapper">
			<div class="desktop-only-img left-section">
				<div class="raise-hand-pic"></div>
			</div>
			<div class="right-section">
				<h3 class="font-bolder sea-blue">Interested in becoming a mentor?</h3>
				<p><?php echo $upcoming_mentoring; ?></p>
				<p class="social-media">
					<strong>Mentors must be at least 21 and pass all background checks.</strong>
					Join our newsletter in the footer below or follow us on <a href="http://www.facebook.com/Lifeties" class="orange font-bolder">Facebook</a> and <a href="http://twitter.com/lifeties"class="orange font-bolder">Twitter</a> to keep informed of upcoming information sessions.
				</p>
				<a href="<?php echo home_url(); ?>/volunteer" class="btn">Volunteer Signup</a>
			</div>
		</section>
		<?php endif; ?>
		<?php endwhile; // End of the loop.?>

	</main><!-- #main -->
</div><!-- #primary -->

<?php
get_footer();
