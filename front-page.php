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
<div id="primary" class="content-area">
  <main id="main" class="site-main">

    <!-- Slider -->
    <section>
      <?php
    echo do_shortcode('[smartslider3 slider=2]');
    ?>
    </section>

    <section class="page-width">
      <h2 class="dark-blue font-boldest aligncenter">Help Our Youth Become Stable Responsible Adults</h2>

      <div class="page">
        <div class="orange-donation-pic center-in-banner med-padding section donation-btn">
          <a href="<?php echo home_url(); ?>/donate">
            <div class="present-icon image"></div>
            <h2 class="white aligncenter uppercase font-boldest">Make a Donation</h2>
            <h4 class="white aligncenter">Please consider giving a gift that will help transform the future of our youth.</h4>
          </a>
        </div>

        <div class="blue-vol-pic center-in-banner med-padding section vol-btn">
          <a href="<?php echo home_url(); ?>/volunteer">
            <div class="vol-icon image"></div>
            <h2 class="white aligncenter uppercase font-boldest">Volunteer Your Time</h2>
            <h4 class="white aligncenter">Make an impact in a youth's journey to adulthood by volunteering at our events and programs.</h4>
          </a>
        </div>
      </div>

      <div class="med-padding"></div>

      <div class="aligncenter">
        <h3 class="dark-blue font-bolder">Why LifeTies?</h3>
        <p class="gray">Help struggling adolescents and young adults successfully transition into adulthood. <br>We give our youth the groundwork for a bright future through safe housing, clinical services and life skills.</p>
      </div>
    </section>

    <!-- Programs -->
    <section class="home-page-girl-pic med-padding">
      <div class="content-width">
        <p class="aligncenter large-scr-top-padding">LifeTies, Inc. is a supportive network of professional staff and trained volunteers dedicated to creating programs for youth to overcome the effects of abuse, neglect or homelessness. Our programs offer a nuturing, safe environment to heal, learn and become equipped with the tools to work towards a brigher future.</p>
        <ul class="fp-girl-right-padding fp-grid">
    			<?php query_posts('posts_per_page=6&post_type=programs&orderby=date&order=ASC'); ?>
    				<?php while ( have_posts() ) : the_post();
    				$homepage_blurb = get_field("homepage_blurb");
    				?>
    				<li class="aligncenter">
    					<h2 class="aligncenter dark-blue font-boldest"><?php the_title(); ?></h2>
              <p class="aligncenter dark-gray"><?php echo $homepage_blurb; ?></p>
              <a href="<?php the_permalink(); ?>" class="btn">Learn More</a>
    				</li>
    				<?php endwhile; ?>
    			<?php wp_reset_query(); ?>
    		</ul>
      </div>
    </section>

    <!-- Social -->
    <div class="site-info">
      <section>
        <h2 class="aligncenter dark-blue font-wgt-normal">Get social and connect with LifeTies</h2>
        <div class="sm-border">
          <?php echo do_shortcode("[custom-facebook-feed]"); ?>
        </div>
      </section>
    </div>

    <div class="med-padding"></div>

    <!-- Sponsors -->
    <section class="sponsor-carousel">
      <h2 class="aligncenter dark-blue">A big thanks to our supporters!</h2>
      <div>
      <?php echo do_shortcode('[logoshowcase dots="false"]'); ?>
      </div>
    </section>
  </main><!-- #main -->
</div><!-- #primary -->
<?php get_footer(); ?>
