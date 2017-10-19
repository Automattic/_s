<?php
/**
 * The template for displaying the homepage
 *
 * Please note that this is the WordPress construct of pages
 * and that other 'pages' on your WordPress site will use a
 * different template.
 *
 * @package _s
 */

get_header(); ?>

<!-- Slider -->
<section>
  <?php
echo do_shortcode('[smartslider3 slider=2]');
?>
</section>

<section>
  <h2>Help Our Youth Become Stable Responsible Adults</h2>
  <div>
    <a href="<?php echo home_url(); ?>/donate">
      <h2>Make a Donation</h2>
      <h6>Please consider giving a gift that will help transform the future of our youth.</h6>
    </a>
  </div>

  <div>
    <a href="<?php echo home_url(); ?>/volunteer">
      <h2>Volunteer Your Time</h2>
      <h6>Make an impact in a youth's journey to adulthood by volunteering at our events and programs.</h6>
    </a>
  </div>

  <div>
    <h3>Why LifeTies?</h3>
    <p>Help struggling adolescents and young adults successfully transition into adulthood. <br>We give our youth the groundwork for a bright future through safe housing, clinical services and life skills.</p>
  </div>
</section>

<!-- Programs -->
<section>
  <p>LifeTies, Inc. is a supportive network of professional staff and trained volunteers dedicated to creating programs for youth to overcome the effects of abuse, neglect or homelessness. Our programs offer a nuturing, safe environment to heal, learn and become equipped with the tools to work towards a brigher future.</p>
  <ul>
			<?php query_posts('posts_per_page=5&post_type=programs&orderby=date&order=ASC'); ?>
				<?php while ( have_posts() ) : the_post();
				$homepage_blurb = get_field("homepage_blurb");
				?>
				<li>
					<h3><?php the_title(); ?></h3>
          <p><?php echo $homepage_blurb; ?></p>
          <a href="<?php the_permalink(); ?>">Learn More</a>
				</li>
				<?php endwhile; ?>
			<?php wp_reset_query(); ?>
		</ul>
</section>

<!-- Social -->
<section>
  <h2>Get social and connect with LifeTies</h2>
  <div>
    <?php echo do_shortcode("[custom-facebook-feed]"); ?>
  </div>
  <div>
    <?php echo do_shortcode("[custom-twitter-feeds]") ?>
  </div>
</section>

<!-- Sponsors -->
<section>
  <h2>A big thanks to our supporters!</h2>
  <div>
    <?php echo do_shortcode("[logoshowcase]") ?>
  </div>
</section>

<?php get_footer(); ?>
