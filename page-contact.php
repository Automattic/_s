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

				<section class="page-width">
					<h1>Contact Details</h1>
					<div class="">
						<h3>Location</h3>
						<p>Administrative Office <br>
							John S. Watson Sr. Buiding <br>
							2205 Pennington Rd. <br>
							Ewing, NJ 08638
						</p>
					</div>
					<div class="">
						<h3>Contact</h3>
						<p>
							Phone: (609) 771-1600 <br>
							Fax: 609-530-1648 <br>
							<a href="mailto:info@lifeties.org">info@lifeties.org</a>
						</p>
					</div>

					<div>
						<?php echo do_shortcode('[ninja_form id=1]') ?>
					</div>
				</section>

				<section>
					<div class="yellow-house-pic">
						<div class="aligncenter">
							<h1>Our Mission</h1>
							<h2><?php the_content(); ?></h2>
						</div>
					</div>
				</section>

				<section class="page-width">
					<h1 class="aligncenter">Programs and Services Contacts</h1>
					<div class="aligncenter">
						<ul class="no-bullet quarter-wrapper">
							<li>
								<h3>Triad House</h3>
								<p>Phone: (609) 771-4221 <br>
									Fax: (609) 538-0106 <br>
									<a href="mailto:vharmon@lifeties.org">vharmon@lifeties.org</a>
								</p>
							</li>
							<li>
								<h3>Rainbow House</h3>
								<p>Phone: (609) 394-6747 <br>
									Fax: (609) 396-5848 <br>
									<a href="mailto:vharmon@lifeties.org">vharmon@lifeties.org</a>
								</p>
							</li>
							<li>
								<h3>Mary's Place & T.I.L.T.</h3>
								<p>Phone: (609) 671-0040 <br>
									Fax: (609) 671-1500 <br>
									<a href="mailto:twilkins@lifeties.org">twilkins@lifeties.org</a>
								</p>
							</li>
							<li>
								<h3>Clinical Services</h3>
								<p>Phone: (609) 882-4485 <br>
									Fax: (609) 882-4661 <br>
									<a href="mailto:emattek@lifeties.org">emattek@lifeties.org</a>
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
