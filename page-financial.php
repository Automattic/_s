<?php
/**
 * The template for displaying the Financials page.
 *
 * This is the template that displays all pages by default.
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

      <h1 class="aligncenter">Financial Documents</h1>
			<?php
			while ( have_posts() ) : the_post();
				$pdf_1 = get_field('pdf_1');
				$pdf_2 = get_field('pdf_2');
				$pdf_3 = get_field('pdf_3');
				$pdf_4 = get_field('pdf_4');
				$pdf_5 = get_field('pdf_5');
				$pdf_icon_1 = get_field('pdf_icon_1')
      ?>

      <div class="site-info financial-wrapper">
				<section class="graph-section">
					<?php
				echo do_shortcode(' [visualizer id="139"] ');
				?>
				</section>
				<section class="pdf-section">
				<div class="pdf-indiv">
					<?php if($pdf_1) :?>
						<i class="fa fa-file-pdf-o fa-2x pdf-img" aria-hidden="true"></i>

					<a href="<?php echo $pdf_1['url']; ?>">
						<h3><?php echo $pdf_1['title']; ?></h3></a>
					<?php endif; ?>
				</div>
				<div class="pdf-indiv">
					<?php if($pdf_2) :?>
						<i class="fa fa-file-pdf-o fa-2x pdf-img" aria-hidden="true"></i>

					<a href="<?php echo $pdf_2['url']; ?>">
						<h3><?php echo $pdf_2['title']; ?></h3></a>
					<?php endif; ?>
				</div>
				<div class="pdf-indiv">
					<?php if($pdf_3) :?>
						<i class="fa fa-file-pdf-o fa-2x pdf-img" aria-hidden="true"></i>

					<a href="<?php echo $pdf_3['url']; ?>">
						<h3><?php echo $pdf_3['title']; ?></h3></a>
					<?php endif; ?>
				</div>
				<div class="pdf-indiv">
					<?php if($pdf_4) :?>
						<i class="fa fa-file-pdf-o fa-2x pdf-img" aria-hidden="true"></i>

					<a href="<?php echo $pdf_4['url']; ?>">
						<h3><?php echo $pdf_4['title']; ?></h3></a>
					<?php endif; ?>
				</div>
				<div class="pdf-indiv">
					<?php if($pdf_5) :?>
						<i class="fa fa-file-pdf-o fa-2x pdf-img" aria-hidden="true"></i>

					<a href="<?php echo $pdf_5['url']; ?>">
						<h3><?php echo $pdf_5['title']; ?></h3></a>
					<?php endif; ?>
				</div>
			</section>

			</div>
			<?php endwhile; ?>

		</main><!-- #main -->
	</div><!-- #primary -->

<?php
get_footer();
