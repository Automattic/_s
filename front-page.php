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

    <?php
		while ( have_posts() ) : the_post();
		$top_title = get_field('top_title');
		$second_title = get_field('second_title');
    $second_title_blurb = get_field('second_title_blurb');
    $programs_blurb = get_field('programs_blurb');
    ?>

    <section class="page-width">
      <h2 class="dark-blue font-boldest aligncenter"><?php echo $top_title; ?></h2>

      <div class="page">
        <div class="orange-donation-pic center-in-banner med-padding donation-btn">
          <a href="<?php echo home_url(); ?>/donate" >
            <div class="present-icon image"></div>
            <h2 class="white aligncenter uppercase font-boldest h2-line-ht sm-margin-top">Make a Donation</h2>
            <h4 class="white aligncenter">Please consider giving a gift that will help transform the future of our youth.</h4>
          </a>
        </div>

        <div class="blue-vol-pic center-in-banner med-padding  vol-btn">
          <a href="<?php echo home_url(); ?>/volunteer">
            <div class="vol-icon image"></div>
            <h2 class="white aligncenter uppercase font-boldest h2-line-ht sm-margin-top">Volunteer Your Time</h2>
            <h4 class="white aligncenter">Make an impact in a youth's journey to adulthood by volunteering at our events and programs.</h4>
          </a>
        </div>
      </div>

      <div class="med-padding"></div>

      <div class="aligncenter">
        <h3 class="dark-blue font-bolder"><?php echo $second_title; ?></h3>
        <p class="gray"><?php echo $second_title_blurb; ?></p>
      </div>
    </section>

    <!-- Programs -->
    <section class="home-page-girl-pic med-padding">
      <div class="content-width">
        <p class="aligncenter large-scr-top-padding"><?php echo $programs_blurb; ?></p>
        <ul class="fp-girl-right-padding fp-grid">
    			<?php query_posts('posts_per_page=6&post_type=programs&orderby=date&order=ASC'); ?>
    				<?php while ( have_posts() ) : the_post();
    				$homepage_blurb = get_field("homepage_blurb");
    				?>
    				<li class="aligncenter">
    					<h2 class="aligncenter dark-blue font-boldest h2-line-ht"><?php the_title(); ?></h2>
              <p class="aligncenter dark-gray" style="margin-top: 0; margin-bottom: .5em"><?php echo $homepage_blurb; ?></p>
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
      <h2 class="aligncenter dark-blue sm-padding-bottom h2-line-ht">A big thanks to our supporters!</h2>
      <div>
        <?php echo do_shortcode('[gs_logo]'); ?>
      </div>
    </section>
  <?php endwhile; ?>

  </main><!-- #main -->
</div><!-- #primary -->

<?php get_footer(); ?>
