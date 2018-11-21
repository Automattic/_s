<?php
if ( ! defined( 'ABSPATH' ) ) {
	exit;
}
/**
 * List the Course Modules and Lesson in these modules
 *
 * Template is hooked into Single Course sensei_single_main_content. It will
 * only be shown if the course contains modules.
 *
 * All lessons shown here will not be included in the list of other lessons.
 *
 * @author      Automattic
 * @package     Sensei
 * @category    Templates
 * @version     1.9.0
 */
?>

<?php

	/**
	 * Hook runs inside single-course/course-modules.php
	 *
	 * It runs before the modules are shown. This hook fires on the single course page. It will show
	 * irrespective of irrespective the course has any modules or not.
	 *
	 * @since 1.8.0
	 */
	do_action( 'sensei_single_course_modules_before' );

?>

<?php if ( sensei_have_modules() ) : ?>

	<?php
	while ( sensei_have_modules() ) :
		sensei_setup_module();
		?>
		<?php if ( sensei_module_has_lessons() ) : ?>

			<article class="module">

				<?php

				/**
				 * Hook runs inside single-course/course-modules.php
				 *
				 * It runs inside the if statement after the article tag opens just before the modules are shown. This hook will NOT fire if there
				 * are no modules to show.
				 *
				 * @since 1.9.0
				 * @since 1.9.7 Added the module ID to the parameters.
				 *
				 * @hooked Sensei()->modules->course_modules_title - 20
				 *
				 * @param int sensei_get_the_module_id() Module ID.
				 */
				do_action( 'sensei_single_course_modules_inside_before', sensei_get_the_module_id() );

				?>

				<header>

					<h2>

						<a href="<?php sensei_the_module_permalink(); ?>" title="<?php sensei_the_module_title_attribute(); ?>">

							<?php sensei_the_module_title(); ?>

						</a>

					</h2>

				</header>

				<section class="entry">

					<p class="module-description"><?php sensei_the_module_description(); ?></p>

					<?php sensei_the_module_status(); ?>

					<section class="module-lessons">

						<header>

							<h3><?php _e( 'Lessons', 'woothemes-sensei' ); ?></h3>

						</header>

						<div class="lessons-list" >
							
							<?php
							while ( sensei_module_has_lessons() ) :
								the_post();
								?>
								<?php sensei_load_template_part( 'content', 'lesson' ); ?>
							<?php endwhile; ?>

						</div>

					</section><!-- .module-lessons -->

				</section>

				<?php

				/**
				 * Hook runs inside single-course/course-modules.php
				 *
				 * It runs inside the if statement before the closing article tag directly after the modules were shown.
				 * This hook will not trigger if there are no modules to show.
				 *
				 * @since 1.9.0
				 * @since 1.9.7 Added the module ID to the parameters.
				 *
				 * @param int sensei_get_the_module_id() Module ID.
				 */
				do_action( 'sensei_single_course_modules_inside_after', sensei_get_the_module_id() );

				?>

			</article>

		<?php endif; // sensei_module_has_lessons ?>

	<?php endwhile; // sensei_have_modules ?>

<?php endif; // sensei_have_modules ?>

<?php

/**
 * Hook runs inside single-course/course-modules.php
 *
 * It runs after the modules are shown. This hook fires on the single course page,but only if the course has modules.
 *
 * @since 1.8.0
 */
do_action( 'sensei_single_course_modules_after' );
