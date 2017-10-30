<?php
/**
 * The template for displaying the Staff page.
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

      <h1 class="aligncenter">LifeTies Staff</h1>
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

      <div class="page">


      <div class="section width-1-2 width-1-4 flex-wrap-grid">
        <?php if($image) {
            echo wp_get_attachment_image( $image, $size );
          } ?>
        <h4><?php echo $name ?></h4>
        <p><?php echo $position ?></p>
        <h5><?php echo $email ?></h5>
        <?php if($bio) : ?>

        <div class="bio-dropdown">
          <label for="bio">See full bio</label>
          <input type="checkbox" name="bio" id="bio">
          <div class="hide">
          <h5><?php echo $name ?></h5>
          <p><?php echo $bio ?></p>
          </div>
        </div>
      <?php endif; ?>
      </div>

      <div class="section width-1-2 width-1-4 flex-wrap-grid">
        <?php if($image_2) {
            echo wp_get_attachment_image( $image_2, $size );
          } ?>
        <h4><?php echo $name_2 ?></h4>
        <p><?php echo $position_2 ?></p>
        <h5><?php echo $email_2 ?></h5>

        <?php if($bio_2) : ?>
        <div class="bio-dropdown">
          <label for="bio_2">See full bio</label>
          <input type="checkbox" name="bio" id="bio_2">
          <div class="hide">
            <h5><?php echo $name_2 ?></h5>
            <p><?php echo $bio_2 ?></p>
          </div>
        </div>
      <?php endif; ?>
      </div>

      <div class="section width-1-2 width-1-4 flex-wrap-grid">
        <?php if($image_3) {
            echo wp_get_attachment_image( $image_3, $size );
          } ?>
        <h4><?php echo $name_3 ?></h4>
        <p><?php echo $position_3 ?></p>
        <h5><?php echo $email_3 ?></h5>
        <?php if($bio_3) : ?>
        <div class="bio-dropdown">
          <label for="bio_3">See full bio</label>
          <input type="checkbox" name="bio" id="bio_3">
          <div class="hide">
            <h5><?php echo $name_3 ?></h5>
            <p><?php echo $bio_3 ?></p>
          </div>
        </div>
      <?php endif; ?>
      </div>

      <div class="section width-1-2 width-1-4 flex-wrap-grid">
        <?php if($image_4) {
            echo wp_get_attachment_image( $image_4, $size );
          } ?>
        <h4><?php echo $name_4 ?></h4>
        <p><?php echo $position_4 ?></p>
        <h5><?php echo $email_4 ?></h5>
        <?php if($bio_4) : ?>
        <div class="bio-dropdown">
          <label for="bio_4">See full bio</label>
          <input type="checkbox" name="bio" id="bio_4">
          <div class="hide">
            <h5><?php echo $name_4 ?></h5>
            <p><?php echo $bio_4 ?></p>
          </div>
        </div>
        <?php endif; ?>
      </div>

      <div>
        <?php if($image_5) {
            echo wp_get_attachment_image( $image_5, $size );
          } ?>
        <h4><?php echo $name_5 ?></h4>
        <p><?php echo $position_5 ?></p>
        <h5><?php echo $email_5 ?></h5>
        <?php if($bio_5) : ?>
        <div class="bio-dropdown">
          <label for="bio_5">See full bio</label>
          <input type="checkbox" name="bio" id="bio_5">
          <div class="hide">
            <h5><?php echo $name_5 ?></h5>
            <p><?php echo $bio_5 ?></p>
          </div>
        </div>
      <?php endif; ?>
      </div>

      <div>
        <?php if($image_6) {
            echo wp_get_attachment_image( $image_6, $size );
          } ?>
        <h4><?php echo $name_6 ?></h4>
        <p><?php echo $position_6 ?></p>
        <h5><?php echo $email_6 ?></h5>
        <?php if($bio_6) : ?>
        <div class="bio-dropdown">
          <label for="bio_6">See full bio</label>
          <input type="checkbox" name="bio" id="bio_6">
          <div class="hide">
            <h5><?php echo $name_6 ?></h5>
            <p><?php echo $bio_6 ?></p>
          </div>
        </div>
      <?php endif; ?>
      </div>

      <div>
        <?php if($image_7) {
            echo wp_get_attachment_image( $image_7, $size );
          } ?>
        <h4><?php echo $name_7 ?></h4>
        <p><?php echo $position_7 ?></p>
        <h5><?php echo $email_7 ?></h5>
        <?php if($bio_7) : ?>
        <div class="bio-dropdown">
          <label for="bio_7">See full bio</label>
          <input type="checkbox" name="bio" id="bio_7">
          <div class="hide">
            <h5><?php echo $name_7 ?></h5>
            <p><?php echo $bio_7 ?></p>
          </div>
        </div>
      <?php endif; ?>
      </div>

      <div>
        <?php if($image_8) {
            echo wp_get_attachment_image( $image_8, $size );
          } ?>
        <h4><?php echo $name_8 ?></h4>
        <p><?php echo $position_8 ?></p>
        <h5><?php echo $email_8 ?></h5>
        <?php if($bio_8) : ?>
        <div class="bio-dropdown">
          <label for="bio_8">See full bio</label>
          <input type="checkbox" name="bio" id="bio_8">
          <div class="hide">
            <h5><?php echo $name_8 ?></h5>
            <p><?php echo $bio_8 ?></p>
          </div>
        </div>
        <?php endif; ?>
      </div>

      <div>
        <?php if($image_9) {
            echo wp_get_attachment_image( $image_9, $size );
          } ?>
        <h4><?php echo $name_9 ?></h4>
        <p><?php echo $position_9 ?></p>
        <h5><?php echo $email_9 ?></h5>

        <?php if($bio_9) : ?>
          <div class="bio-dropdown">
            <label for="bio_9">See full bio</label>
            <input type="checkbox" name="bio" id="bio_9">
            <div class="hide">
              <h5><?php echo $name_9 ?></h5>
              <p><?php echo $bio_9 ?></p>
            </div>
          </div>
        <?php endif; ?>

      </div>

      <div>
        <?php if($image_10) {
            echo wp_get_attachment_image( $image_10, $size );
          } ?>
        <h4><?php echo $name_10 ?></h4>
        <p><?php echo $position_10 ?></p>
        <h5><?php echo $email_10 ?></h5>
        <?php if($bio_10) : ?>
          <div class="bio-dropdown">
            <label for="bio_10">See full bio</label>
            <input type="checkbox" name="bio" id="bio_10">
            <div class="hide">
              <h5><?php echo $name_10 ?></h5>
              <p><?php echo $bio_10 ?></p>
            </div>
          </div>
        <?php endif; ?>
      </div>

      <div>
        <?php if($image_11) {
            echo wp_get_attachment_image( $image_11, $size );
          } ?>
        <h4><?php echo $name_11 ?></h4>
        <p><?php echo $position_11 ?></p>
        <h5><?php echo $email_11 ?></h5>
        <?php if($bio_11) : ?>
          <div class="bio-dropdown">
            <label for="bio_11">See full bio</label>
            <input type="checkbox" name="bio" id="bio_11">
            <div class="hide">
              <h5><?php echo $name_11 ?></h5>
              <p><?php echo $bio_11 ?></p>
            </div>
          </div>
        <?php endif; ?>
      </div>

      <div>
        <?php if($image_12) {
            echo wp_get_attachment_image( $image_12, $size );
          } ?>
        <h4><?php echo $name_12 ?></h4>
        <p><?php echo $position_12 ?></p>
        <h5><?php echo $email_12 ?></h5>
        <?php if($bio_12) : ?>
          <div class="bio-dropdown">
            <label for="bio_12">See full bio</label>
            <input type="checkbox" name="bio" id="bio_12">
            <div class="hide">
              <h5><?php echo $name_12 ?></h5>
              <p><?php echo $bio_12 ?></p>
            </div>
          </div>
        <?php endif; ?>
      </div>
</div>
			<?php endwhile; ?>

		</main><!-- #main -->
	</div><!-- #primary -->

<?php
get_footer();
