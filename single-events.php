<?php
/**
* The template for displaying all events posts
*
* @link https://developer.wordpress.org/themes/basics/template-hierarchy/#single-post
*
* @package _s
*/

get_header(); ?>

	<div id="primary" class="content-area">
		<main id="main" class="site-main">
			<div id="events-banner">
				<div class="center-in-banner">
					<h1 class="white font-boldest threex-font">Events & Fundraisers</h1>
				</div>
			</div>

		<?php
		while ( have_posts() ) : the_post();
		$date = get_field('date');
		$location= get_field('location');
		$image = get_field('image');
		$attachment = get_field('attachment');
		$tickets_link = get_field('tickets_link');
		$size = "medium";
		?>
		<section class="page-width aligncenter alt-wrapper border-bottom">
			<div class="title">
				<h3 class="dark-blue font-boldest xx-large"><?php the_title(); ?></h3>
				<h3 class="orange font-boldest xx-large"><?php echo $date; ?></h3>
				<h4 class="gray font-bolder"><?php echo $location; ?></h4>
			</div>

			<div class="content">
				<p><?php the_content(); ?></p>

				<?php if($attachment) :?>
					<h3>Download Attachment:
					<a href="<?php echo $attachment['url']; ?>">
						<?php echo $attachment['title']; ?>
					</a>
					</h3>
				<?php endif; ?>
			</div>

			<div class="pic">
				<?php if($image) {
					echo wp_get_attachment_image( $image, $size );
				} ?>
			</div>

			<a href="<?php echo $tickets_link; ?>" class="btn button">Order Tickets Now</a>
		</section>

		<?php endwhile; // End of the loop.?>

		<!-- Sponsors -->
		<section class="sponsor-carousel">
			<h2 class="aligncenter ">Event Sponsors</h2>
			<div>
			<?php echo do_shortcode('[logoshowcase cat_id="4" dots="false"]'); ?>
			</div>
		</section>

		</main><!-- #main -->
	</div><!-- #primary -->

<?php
get_footer();
