<?php
/**
 * Template Name: Events
 * The template for displaying archive of events
 *
 *
 * @package _s
 */

get_header(); ?>

	<div id="primary" class="site-content">
		<div class="main-content" role="main">
			<div id="events-banner">
				<div class="center-in-banner">
					<h1 class="white">Events & Fundraisers</h1>
				</div>
			</div>

      <?php query_posts('posts_per_page=10&post_type=events&orderby=date&order=ASC'); ?>
			<?php while ( have_posts() ) : the_post();
      $date = get_field('date');
		 	$location= get_field('location');
      $image = get_field('image');
      $size = "medium";
      ?>
			<ul class="border-bottom page-width">
				<li class="aligncenter wrapper">
					<div class="title">
						<h3 class=""><?php the_title(); ?></h3>
			      <h3 class=""><?php echo $date; ?></h3>
						<h4 class=""><?php echo $location; ?></h4>
					</div>

					<div class="pic">
						<?php if($image) {
						 echo wp_get_attachment_image( $image, $size );
					 } ?>
					</div>

					<div class="content">
						<p><?php the_excerpt(); ?></p>
					</div>
					
					<div class="button">
						 <a href="<?php the_permalink(); ?>" class="btn">See Event Details</a>
					</div>
				</li>
			</ul>
			<?php endwhile; // end of the loop. ?>
      <?php wp_reset_query(); ?>
		</div><!-- #content -->
	</div><!-- #primary -->

<?php get_footer(); ?>
