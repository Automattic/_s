<?php
/**
 * The template for displaying the contact page
 *
 * Please note that this is the WordPress construct of pages
 * and that other 'pages' on your WordPress site may use a
 * different template.
 *
 * @link https://codex.wordpress.org/Template_Hierarchy
 *
 * @package _s
 */

get_header(); ?>

	<div id="primary" class="content-area">
		<main id="main" class="site-main">
			<div id="map-canvas">
				<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3043.63070056928!2d-74.78494468518257!3d40.283953071629064!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c3fd4c8537ee03%3A0xb9d181ed161718fd!2sLife+Ties!5e0!3m2!1sen!2sus!4v1508015983247" width="100%" height="100%" frameborder="0" style="border:0" allowfullscreen></iframe>
			</div>

      <?php while ( have_posts() ) : the_post(); ?>

				<section class="page-width simple-grid">
					<div>
						<h1 class="dark-blue font-boldest xx-large">Contact Details</h1>

						<div class="contact-grid">
							<div>
								<h3 class="gray">Location</h3>
							</div>
							<div>
								<p class="gray" style="margin-top: 0;">Administrative Office <br>
									John S. Watson Sr. Buiding <br>
									2205 Pennington Rd. <br>
									Ewing, NJ 08638
								</p>
							</div>
						</div>

						<div class="contact-grid">
							<div>
								<h3 class="gray">Contact</h3>
							</div>
							<div>
								<p class="gray underline" style="margin-top: 0;">
									Phone: (609) 771-1600 <br>
									Fax: 609-530-1648 <br>
									<a href="mailto:info@lifeties.org" class="orange font-bolder martel">info@lifeties.org</a>
								</p>
							</div>
						</div>
					</div>

					<div>
						<?php echo do_shortcode('[ninja_form id=1]') ?>
					</div>
				</section>

				<section>
					<div class="yellow-house-pic med-padding">
						<div class="site-info aligncenter">
							<h1 class="font-boldest xx-large">Our Mission</h1>
							<h2 class="font-boldest xx-large martel"><?php the_content(); ?></h2>
						</div>
					</div>
				</section>

				<section class="page-width">
					<h1 class="aligncenter dark-blue font-boldest xx-large">Programs and Services Contacts</h1>
					<div class="aligncenter">
						<ul class="no-bullet quarter-wrapper">
							<li>
								<h3 class="sea-blue x-large font-boldest">Triad House</h3>
								<h3 class="dark-blue font-boldest">Vivian Harmon</h3>
								<p class="zero-margin gray">Program Director</p>
								<p class="gray martel  underline">Phone: (609) 771-4221 <br>
									Fax: (609) 538-0106 <br>
									<a href="mailto:vharmon@lifeties.org" class="orange font-bolder">vharmon@lifeties.org</a>
								</p>
							</li>
							<li>
								<h3 class="sea-blue x-large font-boldest">Rainbow House</h3>
								<h3 class="dark-blue font-boldest">Vivian Harmon</h3>
								<p class="zero-margin gray">Program Director</p>
								<p class="gray martel  underline">Phone: (609) 394-6747 <br>
									Fax: (609) 396-5848 <br>
									<a href="mailto:vharmon@lifeties.org" class="orange font-bolder">vharmon@lifeties.org</a>
								</p>
							</li>
							<li>
								<h3 class="sea-blue x-large font-boldest">Mary's Place & T.I.L.T.</h3>
								<h3 class="dark-blue font-boldest">Robin Wilkins</h3>
								<p class="zero-margin gray">Program Director</p>
								<p class="gray martel  underline">Phone: (609) 671-0040 <br>
									Fax: (609) 671-1500 <br>
									<a href="mailto:twilkins@lifeties.org" class="orange font-bolder">twilkins@lifeties.org</a>
								</p>
							</li>
							<li>
								<h3 class="sea-blue x-large font-boldest">Clinical Services</h3>
								<h3 class="dark-blue font-boldest">Emily Mattek</h3>
								<p class="zero-margin gray">Program Director</p>
								<p class="gray martel  underline">Phone: (609) 882-4485 <br>
									Fax: (609) 882-4661 <br>
									<a href="mailto:emattek@lifeties.org" class="orange font-bolder">emattek@lifeties.org</a>
								</p>
							</li>
						</ul>
					</div>
				</section>

			<?php endwhile; // end of the loop. ?>
		</main><!-- #main -->
	</div><!-- #primary -->

<?php
get_footer();
