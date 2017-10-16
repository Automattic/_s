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
      <?php query_posts('posts_per_page=5&post_type=case_studies&orderby=date&order=ASC'); ?>
			<?php while ( have_posts() ) : the_post();
      $services = get_field('services');
      $image_1 = get_field("image_1");
      $size = "medium";
      ?>

      <article class="case-study">
        <aside class="case-study-sidebar">
          <p class="title"><a href="<?php the_permalink(); ?>"><?php the_title(); ?></a></p>
          <p class="lighter gray"><?php echo $services; ?></p>

          <?php the_excerpt(); ?>

          <h6 class="bold green-text"><a href="<?php the_permalink(); ?>">View Project &rsaquo;</a></h6>
        </aside>

        <div class="case-study-images">
          <a href="<?php the_permalink(); ?>">
          <?php if($image_1) {
            echo wp_get_attachment_image( $image_1, $size );
          } ?>
          </a>
        </div>
      </article>

			<?php endwhile; // end of the loop. ?>
      <?php wp_reset_query(); ?>
		</div><!-- #content -->
	</div><!-- #primary -->

<?php get_footer(); ?>
