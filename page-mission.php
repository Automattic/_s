<?php
/**
 * The template for displaying the Mission page
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
			<div class="banner-container">
        <span id="wall-teens-pic">
          <span id="image-inner"></span>
        </span>
      </div>
			<?php
			while ( have_posts() ) : the_post();
				$impact = get_field('impact');
				$impact_explanation = get_field('impact_explanation');
				$impact_stat_1 = get_field('impact_stat_1');
				$impact_stat_1_explanation = get_field('impact_stat_1_explanation');
				$impact_stat_2 = get_field('impact_stat_2');
				$impact_stat_2_explanation = get_field('impact_stat_2_explanation');$impact_stat_3 = get_field('impact_stat_3');
				$impact_stat_3_explanation = get_field('impact_stat_3_explanation');$impact_stat_4 = get_field('impact_stat_4');
				$impact_stat_4_explanation = get_field('impact_stat_4_explanation');$impact_stat_5 = get_field('impact_stat_5');
				$impact_stat_5_explanation = get_field('impact_stat_5_explanation');
				$our_mission = get_field('our_mission');
				$our_mission_text = get_field('our_mission_text');
				$our_history = get_field('our_history');
				$our_history_text = get_field('our_history_text');
				?>
				<section class="aligncenter site-info large-btm-margin ">
					<div>
						<h1><?php echo $impact ?></h1>
						<p><?php echo $impact_explanation ?></p>
					</div>

					<div class="section">
						<h1 class="width-1-3 turquoise"><?php echo $impact_stat_1 ?></h1>
						<h2 class="width-2-3 turquoise"><?php echo $impact_stat_1_explanation ?></h2>
					</div>

					<div class="section">
						<h1 class="width-1-3 gold"><?php echo $impact_stat_2 ?></h1>
						<h2 class="width-2-3 gold"><?php echo $impact_stat_2_explanation ?></h2>
					</div>

					<div class="section">
						<h1 class="width-1-3 grass-green"><?php echo $impact_stat_3 ?></h1>
						<h2 class="width-2-3 grass-green"><?php echo $impact_stat_3_explanation ?></h2>
					</div>

					<div class="section">
						<h1 class="width-1-3 burnt-orange"><?php echo $impact_stat_4 ?></h1>
						<h2 class="width-2-3 burnt-orange"><?php echo $impact_stat_4_explanation ?></h2>
					</div>

					<div class="section">
						<h1 class="width-1-3 aqua-marine"><?php echo $impact_stat_5 ?></h1>
						<h2 class="width-2-3 aqua-marine"><?php echo $impact_stat_5_explanation ?></h2>
					</div>
				</section>

				<section class="section large-btm-margin">
					<div class="yellow-house-pic med-padding">
						<div class="site-info aligncenter">
							<h1><?php echo $our_mission ?></h1>
							<h2><?php echo $our_mission_text ?></h2>
						</div>
					</div>
				</section>

				<section class="site-info">
					<h1 class="aligncenter"><?php echo $our_history ?></h1>
					<p><?php echo $our_history_text ?></p>
				</section>

			<?php endwhile; ?>

			<!-- Sponsors -->
			<section>
			  <div>
			  <?php echo do_shortcode("[logoshowcase]"); ?>
			  </div>
			</section>
		</main><!-- #main -->
	</div><!-- #primary -->

<?php
get_footer();
