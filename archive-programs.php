<?php
/**
 * The template for displaying an archive of programs
 *
 * Please note that this is the WordPress construct of pages
 * and that other 'pages' on your WordPress site will use a
 * different template.
 *
 * @package _s
 */

get_header(); ?>

	<div id="primary" class="site-content">
		<div class="main-content" role="main">
			<div id="shoes-pic-2">
				<div class="center-in-banner">
					<h1 class="white">Support. Structure. Stability</h1>
				</div>
			</div>

			<div class="site-info">
	      <h1 class="aligncenter">Our Programs</h1>
				<p class="aligncenter">Creating programs that offer youths a nurturing, safe environment to heal, learn and grow towards a brighter future. Our youth face numerous challenges. LifeTies works with adolescents to manage and overcome the effects of physical, emotional and sexual abuse.</p>
				<ul class="fp-grid no-bullet">
	  			<?php query_posts('posts_per_page=6&post_type=programs&orderby=date&order=ASC'); ?>
	  				<?php while ( have_posts() ) : the_post();
	  				$programs_page_blurb = get_field("programs_page_blurb");
	  				?>
	  				<li class="large-btm-margin aligncenter">
	  					<h2 class="aligncenter"><?php the_title(); ?></h2>
	            <p class="aligncenter"><?php echo $programs_page_blurb; ?></p>
	            <a href="<?php the_permalink(); ?>" class="btn">More Info</a>
	  				</li>
	  				<?php endwhile; ?>
	  			<?php wp_reset_query(); ?>
	  		</ul>
				</div>
				<div class="light-blue-background aligncenter">
					<div class="site-info">

					<div class="">
						<h2>Want to make a Youth Referral?</h2>
						<h3>(Triad & Rainbow Houses are accepting referrals!)</h3>
					</div>

					<div class="grid-wrapper">
					<div class="left-section">
						<p>All referrals will go through PerformCare's YouthLink. You can contact PerformCare to gain access to YouthLink via the number below.</p>
						<div class="aligncenter">
							<div class="perform-care-logo inline-block-display"></div>
						</div>

						<h1>(877) 652-7624</h1>
						<h5>
							<a href="http://www.performcarenj.org">www.performcarenj.org</a>
						</h5>
					</div>
					<div class="right-section">
						<p><b>Questions?</b> We would gladly accept questions regarding referrals, additional information and requests for presentation of services provided by LifeTies, Inc. by contacting the following:</p>
						<div class="grid-wrapper">
						<div class="left-section">
							<h3>Vivian Harmon</h3>
							<h4>Triad: (609) 771-4221</h4>
							<h4>Rainbow: (609) 394-6747</h4>
							<h5>
								<a href="mailto:vharmon@lifeties.org">vharmon@lifeties.org</a>
								</h5>
						</div>
						<div class="right-section">
							<h3>Emily Mattek</h3>
							<h4>Clinical Services</h4>
							<h4>Phone: (609) 882-4485</h4>
							<h5>
								<a href="mailto:emattek@lifeties.org">emattek@lifeties.org</a>
								</h5>
						</div>
						</div>
						</div>
					</div>
				</div>
			</div> <!-- referral -->
		</div><!-- #content -->
	</div><!-- #primary -->

<?php get_footer(); ?>
