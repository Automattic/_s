<?php
/**
 * The Template for displaying course archives, including the course page template.
 *
 * Override this template by copying it to yourtheme/sensei/archive-course.php
 *
 * @author 		Automattic
 * @package 	Sensei
 * @category    Templates
 * @version     1.9.0
 */
?>

<?php  get_sensei_header();  ?>

<?php
/**
 * This hook fire inside learner-profile.php before the content
 *
 * @since 1.9.0
 *
 * @hooked Sensei_Learner_Profiles::deprecate_sensei_learner_profile_content_hook   - 10
 * @hooked Sensei_Templates::fire_sensei_complete_course_hook                      - 20
 */
do_action( 'sensei_learner_profile_content_before' );

?>

<article class="post">

    <section id="learner-info" class="learner-info entry fix">

        <?php
        /**
         * This hook fire inside learner-profile.php inside directly before the content
         *
         * @since 1.9.0
         *
         * @hooked  Sensei_Templates::fire_frontend_messages_hook
         */
        do_action( 'sensei_learner_profile_inside_content_before' );
        ?>

        <?php  $learner_user = Sensei_Learner::find_by_query_var( get_query_var('learner_profile') ); ?>

        <?php if(  is_a( $learner_user, 'WP_User' ) ){ ?>

            <?php

            // show the user information
            Sensei_Learner_Profiles::user_info( $learner_user );

            ?>

            <?php

            // show the user courses
            //Sensei()->course->load_user_courses_content( $learner_user ); ?>
            <?php remove_action('sensei_my_courses_content_inside_before', '_svbk_sensei_navigation', 9); ?>    
            <div id="my-courses">
    			<ul>
    				<li><a href="#active-courses"><?php esc_html_e('Active Courses', '_svbk' ) ?></a></li>
    				<li><a href="#completed-courses"><?php esc_html_e('Completed Courses', '_svbk' ) ?></a></li>
    			</ul>
    
    			<div id="active-courses"><?php echo do_shortcode('[sensei_user_courses status="active"]'); ?></div>
    			<div id="completed-courses"><?php echo do_shortcode('[sensei_user_courses status="complete"]'); ?></div>
			
		    </div>

        <?php } else {  ?>

            <p class="sensei-message">

                <?php _e( 'The user requested does not exist.', 'woothemes-sensei'); ?>

            </p>

        <?php } ?>

        <?php
        /**
         * This hook fire inside learner-profile.php inside directly after the content
         *
         * @since 1.9.0
         */
        do_action( 'sensei_learner_profile_inside_content_after' );
        ?>

    </section>

</article>

<?php
/**
 * This hook fire inside learner-profile.php after the content
 *
 * @since 1.9.0
 */
do_action( 'sensei_learner_profile_content_after' );
?>

<?php get_sensei_footer(); ?>
