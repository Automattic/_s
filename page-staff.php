<?php
/**
 * The template for displaying the Staff page.
 *
 * @link https://codex.wordpress.org/Template_Hierarchy
 *
 * @package _s
 */

get_header(); ?>

	<div id="primary" class="content-area">
		<main id="main" class="site-main">
			<div class="banner-background">
				<div id="wall-teens-pic"></div>
			</div>
			<div class="page-width">

      <h1 class="aligncenter dark-blue font-boldest xx-large">LifeTies Staff</h1>
			<?php
			while ( have_posts() ) : the_post();
      $updated = get_field("updated");
      $size = "thumbnail";
      $name = get_field("name");
      $image = get_field("image");
      $position = get_field("position");
      $email = get_field("email");
      $bio = get_field("bio");
      $name_2 = get_field("name_2");
      $image_2 = get_field("image_2");
      $position_2 = get_field("position_2");
      $email_2 = get_field("email_2");
      $bio_2 = get_field("bio_2");
      $name_3 = get_field("name_3");
      $image_3 = get_field("image_3");
      $position_3 = get_field("position_3");
      $email_3 = get_field("email_3");
      $bio_3 = get_field("bio_3");
      $name_4 = get_field("name_4");
      $image_4 = get_field("image_4");
      $position_4 = get_field("position_4");
      $email_4 = get_field("email_4");
      $bio_4 = get_field("bio_4");
      $name_5 = get_field("name_5");
      $image_5 = get_field("image_5");
      $position_5 = get_field("position_5");
      $email_5 = get_field("email_5");
      $bio_5 = get_field("bio_5");
      $name_6 = get_field("name_6");
      $image_6 = get_field("image_6");
      $position_6 = get_field("position_6");
      $email_6 = get_field("email_6");
      $bio_6 = get_field("bio_6");
      $name_7 = get_field("name_7");
      $image_7 = get_field("image_7");
      $position_7 = get_field("position_7");
      $email_7 = get_field("email_7");
      $bio_7 = get_field("bio_7");
      $name_8 = get_field("name_8");
      $image_8 = get_field("image_8");
      $position_8 = get_field("position_8");
      $email_8 = get_field("email_8");
      $bio_8 = get_field("bio_8");
      $name_9 = get_field("name_9");
      $image_9 = get_field("image_9");
      $position_9 = get_field("position_9");
      $email_9 = get_field("email_9");
      $bio_9 = get_field("bio_9");
      $name_10 = get_field("name_10");
      $image_10 = get_field("image_10");
      $position_10 = get_field("position_10");
      $email_10 = get_field("email_10");
      $bio_10 = get_field("bio_10");
      $name_11 = get_field("name_11");
      $image_11 = get_field("image_11");
      $position_11 = get_field("position_11");
      $email_11 = get_field("email_11");
      $bio_11 = get_field("bio_11");
      $name_12 = get_field("name_12");
      $image_12 = get_field("image_12");
      $position_12 = get_field("position_12");
      $email_12 = get_field("email_12");
      $bio_12 = get_field("bio_12");
      ?>
      <p class="aligncenter"><?php echo $updated ?></p>

      <div class="staff-wrapper">

      <div class="grid-two-eq-rows aligncenter">
				<div>
					<?php if($image) {
	            echo wp_get_attachment_image( $image, $size );
	          } ?>
				</div>
				<div>
					<h4 class="dark-blue font-boldest"><?php echo $name ?></h4>
	        <h4 class="gray arial"><?php echo $position ?></h4>
	        <h5><a href="mailto:<?php echo $email ?>" class="orange font-bolder"><?php echo $email ?></a></h5>
	        <?php if($bio) : ?>
					<div class="accordion">
		        <!-- span to target fix closing accordion -->
		        <span class="target-fix" id="accordion"></span>

		        <!-- First Accoridon Option -->
		        <div>
	            <!-- span to target fix accordion -->
	            <span class="target-fix" id="accordion1"></span>

	            <!-- Link to open accordion, hidden when open -->
	            <a href="#accordion1" id="open-accordion1" title="open" class="dark-blue font-bolder">See full bio  &or;</a>

	            <!-- Link to close accordion, hidden when closed -->
	            <a href="#accordion" id="close-accordion1" title="close">See full bio &and;</a>

	            <!-- Accorion content goes in this div -->
	            <div class="accordion-content">
								<h4 class="dark-blue font-boldest"><?php echo $name ?></h4>
								<p><?php echo $bio ?></p>
	            </div>
	        	</div>
					</div>
      		<?php endif; ?>
				</div>
      </div>

      <div class="grid-two-eq-rows aligncenter">
				<div>
					<?php if($image_2) {
	            echo wp_get_attachment_image( $image_2, $size );
	          } ?>
				</div>
				<div>
        <h4 class="dark-blue font-boldest"><?php echo $name_2 ?></h4>
        <h4 class="gray arial"><?php echo $position_2 ?></h4>
        <h5><a href="mailto:<?php echo $email_2 ?>" class="orange font-bolder"><?php echo $email_2 ?></a></h5>

        <?php if($bio_2) : ?>
					<div class="accordion">
		        <span class="target-fix" id="accordion"></span>
		        <div>
	            <span class="target-fix" id="accordion2"></span>

	            <a href="#accordion2" id="open-accordion2" title="open" class="dark-blue font-bolder">See full bio  &or;</a>

	            <a href="#accordion" id="close-accordion2" title="close">See full bio &and;</a>

	            <div class="accordion-content">
								<h4 class="dark-blue font-boldest"><?php echo $name_2 ?></h4>
								<p><?php echo $bio_2 ?></p>
	            </div>
	        	</div>
					</div>
      	<?php endif; ?>
				</div>
      </div>

      <div class="grid-two-eq-rows aligncenter">
				<div>
					<?php if($image_3) {
	            echo wp_get_attachment_image( $image_3, $size );
	          } ?>
				</div>
        <div>
					<h4 class="dark-blue font-boldest"><?php echo $name_3 ?></h4>
	        <h4 class="gray arial"><?php echo $position_3 ?></h4>
	        <h5><a href="mailto:<?php echo $email_3 ?>" class="orange font-bolder"><?php echo $email_3 ?></a></h5>
	        <?php if($bio_3) : ?>
						<div class="accordion">
			        <span class="target-fix" id="accordion"></span>
			        <div>
		            <span class="target-fix" id="accordion3"></span>

		            <a href="#accordion3" id="open-accordion3" title="open" class="dark-blue font-bolder">See full bio  &or;</a>

		            <a href="#accordion" id="close-accordion3" title="close">See full bio &and;</a>

		            <div class="accordion-content">
									<h4 class="dark-blue font-boldest"><?php echo $name_3 ?></h4>
									<p><?php echo $bio_3 ?></p>
		            </div>
		        	</div>
						</div>
	      <?php endif; ?>
        </div>
      </div>

      <div class="grid-two-eq-rows aligncenter">
				<div>
					<?php if($image_4) {
	            echo wp_get_attachment_image( $image_4, $size );
	          } ?>
				</div>
        <div>
					<h4 class="dark-blue font-boldest"><?php echo $name_4 ?></h4>
	        <h4 class="gray arial"><?php echo $position_4 ?></h4>
	        <h5><a href="mailto:<?php echo $email_4 ?>" class="orange font-bolder"><?php echo $email_4 ?></a></h5>
	        <?php if($bio_4) : ?>
						<div class="accordion">
			        <span class="target-fix" id="accordion"></span>
			        <div>
		            <span class="target-fix" id="accordion4"></span>

		            <a href="#accordion4" id="open-accordion4" title="open" class="dark-blue font-bolder">See full bio  &or;</a>

		            <a href="#accordion" id="close-accordion4" title="close">See full bio &and;</a>

		            <div class="accordion-content">
									<h4 class="dark-blue font-boldest"><?php echo $name_4 ?></h4>
									<p><?php echo $bio_4 ?></p>
		            </div>
		        	</div>
						</div>
	        <?php endif; ?>
        </div>

      </div>

      <div class="grid-two-eq-rows aligncenter">
				<div>
					<?php if($image_5) {
	            echo wp_get_attachment_image( $image_5, $size );
	          } ?>
				</div>
        <div>
					<h4 class="dark-blue font-boldest"><?php echo $name_5 ?></h4>
	        <h4 class="gray arial"><?php echo $position_5 ?></h4>
	        <h5><a href="mailto:<?php echo $email_5 ?>" class="orange font-bolder"><?php echo $email_5 ?></a></h5>
	        <?php if($bio_5) : ?>
						<div class="accordion">
			        <span class="target-fix" id="accordion"></span>
			        <div>
		            <span class="target-fix" id="accordion5"></span>

		            <a href="#accordion5" id="open-accordion5" title="open" class="dark-blue font-bolder">See full bio  &or;</a>

		            <a href="#accordion" id="close-accordion5" title="close">See full bio &and;</a>

		            <div class="accordion-content">
									<h4 class="dark-blue font-boldest"><?php echo $name_5 ?></h4>
									<p><?php echo $bio_5 ?></p>
		            </div>
		        	</div>
						</div>
	      <?php endif; ?>
        </div>
      </div>

      <div class="grid-two-eq-rows aligncenter">
				<div>
					<?php if($image_6) {
	            echo wp_get_attachment_image( $image_6, $size );
	          } ?>
				</div>
        <div>
					<h4 class="dark-blue font-boldest"><?php echo $name_6 ?></h4>
	        <h4 class="gray arial"><?php echo $position_6 ?></h4>
	        <h5><a href="mailto:<?php echo $email_6 ?>" class="orange font-bolder"><?php echo $email_6 ?></a></h5>
	        <?php if($bio_6) : ?>
						<div class="accordion">
			        <span class="target-fix" id="accordion"></span>
			        <div>
		            <span class="target-fix" id="accordion6"></span>

		            <a href="#accordion6" id="open-accordion6" title="open" class="dark-blue font-bolder">See full bio  &or;</a>

		            <a href="#accordion" id="close-accordion6" title="close">See full bio &and;</a>

		            <div class="accordion-content">
									<h4 class="dark-blue font-boldest"><?php echo $name_6 ?></h4>
									<p><?php echo $bio_6 ?></p>
		            </div>
		        	</div>
						</div>
	      <?php endif; ?>
        </div>
      </div>

      <div class="grid-two-eq-rows aligncenter">
				<div>
					<?php if($image_7) {
	            echo wp_get_attachment_image( $image_7, $size );
	          } ?>
				</div>
        <div>
					<h4 class="dark-blue font-boldest"><?php echo $name_7 ?></h4>
	        <h4 class="gray arial"><?php echo $position_7 ?></h4>
	        <h5><a href="mailto:<?php echo $email_7 ?>" class="orange font-bolder"><?php echo $email_7 ?></a></h5>
	        <?php if($bio_7) : ?>
						<div class="accordion">
			        <span class="target-fix" id="accordion"></span>
			        <div>
		            <span class="target-fix" id="accordion7"></span>

		            <a href="#accordion7" id="open-accordion7" title="open" class="dark-blue font-bolder">See full bio  &or;</a>

		            <a href="#accordion" id="close-accordion7" title="close">See full bio &and;</a>

		            <div class="accordion-content">
									<h4 class="dark-blue font-boldest"><?php echo $name_7 ?></h4>
									<p><?php echo $bio_7 ?></p>
		            </div>
		        	</div>
						</div>
	      	<?php endif; ?>
        </div>
      </div>

      <div class="grid-two-eq-rows aligncenter">
				<div>
					<?php if($image_8) {
	            echo wp_get_attachment_image( $image_8, $size );
	          } ?>
				</div>
        <div>
					<h4 class="dark-blue font-boldest"><?php echo $name_8 ?></h4>
	        <h4 class="gray arial"><?php echo $position_8 ?></h4>
	        <h5><a href="mailto:<?php echo $email_8 ?>" class="orange font-bolder"><?php echo $email_8 ?></a></h5>
	        <?php if($bio_8) : ?>
						<div class="accordion">
			        <span class="target-fix" id="accordion"></span>
			        <div>
		            <span class="target-fix" id="accordion8"></span>

		            <a href="#accordion8" id="open-accordion8" title="open" class="dark-blue font-bolder">See full bio  &or;</a>

		            <a href="#accordion" id="close-accordion8" title="close">See full bio &and;</a>

		            <div class="accordion-content">
									<h4 class="dark-blue font-boldest"><?php echo $name_8 ?></h4>
									<p><?php echo $bio_8 ?></p>
		            </div>
		        	</div>
						</div>
	        <?php endif; ?>
        </div>
      </div>

      <div class="grid-two-eq-rows aligncenter">
				<div>
					<?php if($image_9) {
	            echo wp_get_attachment_image( $image_9, $size );
	          } ?>
				</div>
        <div>
					<h4 class="dark-blue font-boldest"><?php echo $name_9 ?></h4>
	        <h4 class="gray arial"><?php echo $position_9 ?></h4>
	        <h5><a href="mailto:<?php echo $email_9 ?>" class="orange font-bolder"><?php echo $email_9 ?></a></h5>
	        <?php if($bio_9) : ?>
						<div class="accordion">
			        <span class="target-fix" id="accordion"></span>
			        <div>
		            <span class="target-fix" id="accordion9"></span>

		            <a href="#accordion9" id="open-accordion9" title="open" class="dark-blue font-bolder">See full bio  &or;</a>

		            <a href="#accordion" id="close-accordion9" title="close">See full bio &and;</a>

		            <div class="accordion-content">
									<h4 class="dark-blue font-boldest"><?php echo $name_9 ?></h4>
									<p><?php echo $bio_9 ?></p>
		            </div>
		        	</div>
						</div>
	        <?php endif; ?>
        </div>
      </div>

      <div class="grid-two-eq-rows aligncenter">
				<div>
					<?php if($image_10) {
	            echo wp_get_attachment_image( $image_10, $size );
	          } ?>
				</div>
        <div>
					<h4 class="dark-blue font-boldest"><?php echo $name_10 ?></h4>
	        <h4 class="gray arial"><?php echo $position_10 ?></h4>
	        <h5><a href="mailto:<?php echo $email_10 ?>" class="orange font-bolder"><?php echo $email_10 ?></a></h5>
	        <?php if($bio_10) : ?>
						<div class="accordion">
			        <span class="target-fix" id="accordion"></span>
			        <div>
		            <span class="target-fix" id="accordion10"></span>

		            <a href="#accordion10" id="open-accordion10" title="open" class="dark-blue font-bolder">See full bio  &or;</a>

		            <a href="#accordion" id="close-accordion10" title="close">See full bio &and;</a>

		            <div class="accordion-content">
									<h4 class="dark-blue font-boldest"><?php echo $name_10 ?></h4>
									<p><?php echo $bio_10 ?></p>
		            </div>
		        	</div>
						</div>
	        <?php endif; ?>
        </div>
      </div>

      <div class="grid-two-eq-rows aligncenter">
				<div>
					<?php if($image_11) {
	            echo wp_get_attachment_image( $image_11, $size );
	          } ?>
				</div>
        <div>
					<h4 class="dark-blue font-boldest"><?php echo $name_11 ?></h4>
	        <h4 class="gray arial"><?php echo $position_11 ?></h4>
	        <h5><a href="mailto:<?php echo $email_11 ?>" class="orange font-bolder"><?php echo $email_11 ?></a></h5>
	        <?php if($bio_11) : ?>
						<div class="accordion">
			        <span class="target-fix" id="accordion"></span>
			        <div>
		            <span class="target-fix" id="accordion11"></span>

		            <a href="#accordion11" id="open-accordion11" title="open" class="dark-blue font-bolder">See full bio  &or;</a>

		            <a href="#accordion" id="close-accordion11" title="close">See full bio &and;</a>

		            <div class="accordion-content">
									<h4 class="dark-blue font-boldest"><?php echo $name_11 ?></h4>
									<p><?php echo $bio_11 ?></p>
		            </div>
		        	</div>
						</div>
	        <?php endif; ?>
        </div>
      </div>

      <div class="grid-two-eq-rows aligncenter">
				<div>
					<?php if($image_12) {
	            echo wp_get_attachment_image( $image_12, $size );
	          } ?>
				</div>
        <div>
					<h4 class="dark-blue font-boldest"><?php echo $name_12 ?></h4>
	        <h4 class="gray arial"><?php echo $position_12 ?></h4>
	        <h5><a href="mailto:<?php echo $email_12 ?>" class="orange font-bolder"><?php echo $email_12 ?></a></h5>
	        <?php if($bio_12) : ?>
						<div class="accordion">
			        <span class="target-fix" id="accordion"></span>
			        <div>
		            <span class="target-fix" id="accordion12"></span>

		            <a href="#accordion12" id="open-accordion12" title="open" class="dark-blue font-bolder">See full bio  &or;</a>

		            <a href="#accordion" id="close-accordion12" title="close">See full bio &and;</a>

		            <div class="accordion-content">
									<h4 class="dark-blue font-boldest"><?php echo $name_12 ?></h4>
									<p><?php echo $bio_12 ?></p>
		            </div>
		        	</div>
						</div>
	        <?php endif; ?>
        </div>

      </div>
			</div>
			<?php endwhile; ?>
		</div>
		</main><!-- #main -->
	</div><!-- #primary -->

<?php
get_footer();
