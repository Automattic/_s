<?php
/**
 * Sensei Compatibility File
 *
 * @link https://woocommerce.com/
 *
 * @package _svbk
 */

use \Svbk\WP\Helpers\Assets\Style;
use \Svbk\WP\Helpers\Assets\Script;
use \Svbk\WP\Integrations;

 /**
  * Sensei specific scripts & stylesheets.
  *
  * @return void
  */
function _svbk_sensei_scripts() {
	Style::enqueue(
		'_svbk-sensei',
		'/dist/css/sensei.css',
		[
			'source'    => 'theme',
			'condition' => is_sensei() || is_learner_profile(),
		]
	);
	Style::enqueue(
		'_svbk-sensei-lesson',
		'/dist/css/sensei-lesson.css',
		[
			'source'    => 'theme',
			'condition' => is_singular( 'lesson' ),
			'prefetch'  => is_sensei(),
		]
	);
}

add_action( 'wp_enqueue_scripts', '_svbk_sensei_scripts', 30 );

/**
 * Sensei setup function.
 *
 * @return void
 */
function _svbk_sensei_setup() {

	register_nav_menu( 'sensei-secondary', esc_html__( 'Sensei Secondary Menu', '_svbk' ) );

	remove_action( 'sensei_single_lesson_content_inside_before', array( 'Sensei_Lesson', 'the_lesson_image' ), 17 );

	remove_action( 'sensei_course_content_inside_before', array( Sensei()->course, 'course_image' ) );
	add_action( 'sensei_course_content_inside_before', array( Sensei()->course, 'course_image' ), 20 );

	add_action( 'sensei_course_content_inside_before', array( Sensei()->course, 'the_progress_meter' ), 15 );

	remove_action( 'sensei_pagination', array( Sensei()->frontend, 'sensei_breadcrumb' ), 80 );
	add_action( 'sensei_before_main_content', array( Sensei()->frontend, 'sensei_breadcrumb' ), 15 );
}
add_action( 'after_setup_theme', '_svbk_sensei_setup' );

/**
 * Register widgets areas.
 *
 * @link https://developer.wordpress.org/themes/functionality/sidebars/#registering-a-sidebar
 */
function _svbk_sensei_widgets_init() {

	register_sidebar(
		array(
			'name'          => esc_html__( 'Sensei Sidebar', '_svbk' ),
			'id'            => 'sensei',
			'description'   => esc_html__( 'This widgets will be shown in all LMS pages', '_svbk' ),
			'before_widget' => '<section id="%1$s" class="widget %2$s">',
			'after_widget'  => '</section>',
			'before_title'  => '<h2 class="widget-title">',
			'after_title'   => '</h2>',
		)
	);

}
add_action( 'widgets_init', '_svbk_sensei_widgets_init' );

function _svbk_sensei_navigation() {

	$output = '';

	if ( ! has_nav_menu( 'sensei-secondary' ) || ! is_user_logged_in() ) {
		return $output;
	}

	$output .= '<button class="secondary-navigation__toggle">' . esc_html__( 'Toggle Courses Menu', '_svbk' ) . '</button>';
	$output .= '<nav id="sensei-navigation" class="secondary-navigation" role="navigation">';
	$output .= wp_nav_menu(
		array(
			'theme_location' => 'sensei-secondary',
			'menu_id'        => 'sensei-menu',
			'echo'           => false,
			'depth'          => 1,
		)
	);
	$output .= '</nav><!-- #site-navigation -->';

	return $output;
}

add_shortcode( 'sensei_navigation', '_svbk_sensei_navigation' );

add_filter( 'sensei_show_main_header', '__return_true', 11 );
add_filter( 'sensei_show_main_footer', '__return_true', 11 );
add_filter( 'sensei_results_links', '__return_empty_string' );
add_filter( 'sensei_show_lesson_numbers', '__return_true' );


function _svbk_remove_meter_from_course_loop() {
	global $wp_filter;

	foreach ( $wp_filter['sensei_course_content_inside_after']->callbacks[10] as $handle => $hook ) {
		if ( strpos( $handle, 'attach_course_progress' ) !== false ) {
			unset( $wp_filter['sensei_course_content_inside_after']->callbacks[10][ $handle ] );
		}
	}

}

add_action( 'sensei_my_courses_before', '_svbk_remove_meter_from_course_loop' );

function _svbk_sensei_course_button() {
	?>
	<a class="button" href="<?php the_permalink(); ?>"><?php _e( 'View Course', '_svbk' ); ?></a>
	<?php
}
add_action( 'sensei_course_content_after', '_svbk_sensei_course_button', 20 );


function _svbk_sensei_item_classes( $classes, $class, $post_id ) {

	if ( 'lesson' !== get_post_type( $post_id ) ) {
		return $classes;
	}

	if ( Sensei_Utils::user_completed_lesson( $post_id, get_current_user_id() ) ) {
		$classes[] = 'lesson-completed';
		$classes[] = 'user-completed';
	}

	if ( ! Sensei_Lesson::is_prerequisite_complete( $post_id, get_current_user_id() ) ) {
		$classes[] = 'lesson-locked';
		$classes[] = 'user-locked';
	}

	return $classes;
}

add_filter( 'post_class', '_svbk_sensei_item_classes', 10, 3 );


function _svbk_sensei_lesson_button( $lesson_id ) {
	if ( Sensei_Utils::user_completed_lesson( $lesson_id, get_current_user_id() ) ) :
		?>
		<a class="button to-single completed" href="<?php the_permalink(); ?>"><?php _e( 'Completed', '_svbk' ); ?></a>
	<?php elseif ( ! Sensei_Lesson::is_prerequisite_complete( $lesson_id, get_current_user_id() ) ) : ?>
		<a class="button to-single locked" href="<?php the_permalink(); ?>"><?php _e( 'Lesson Locked', '_svbk' ); ?></a>
	<?php else : ?>
		<a class="button to-single" href="<?php the_permalink(); ?>"><?php _e( 'Go to Lesson', '_svbk' ); ?></a>
	<?php
	endif;
}

add_action( 'sensei_content_lesson_after', '_svbk_sensei_lesson_button' );

function _svbk_sensei_single_course_meta( $course_id ) {

	echo '<div class="course-meta">';

	Sensei()->course->the_progress_statement( $course_id );
	Sensei()->course->the_progress_meter( $course_id );

	_svbk_sensei_teacher();

	echo '</div><!-- #course-meta --!>';
}

function _svbk_sensei_teacher( $course_id ) {

	$teacher_id = get_post_field( 'post_author', $course_id );

	if ( isset( Sensei()->settings->settings['course_author'] ) && ( Sensei()->settings->settings['course_author'] ) ) {
		?>
	<div class="course__teacher author vcard">
		<?php echo get_avatar( $teacher_id, 64 ); ?>		
		<span class="role"><?php _e( 'Teacher', '_svbk' ); ?>:</span>
		<span class="fn n" ><?php echo esc_html( get_the_author_meta( 'display_name', $teacher_id ) ); ?></span>
	</div>
		<?php
	}
}

add_action( 'sensei_single_course_content_inside_before', '_svbk_sensei_teacher', 17 );


function _svbk_lesson_quiz_button_intro( $lesson_id ) {

	$user_id = get_current_user_id();

	if ( ! sensei_can_user_view_lesson( $lesson_id, $user_id ) ) {
		return;
	}

	$lesson_prerequisite       = (int) get_post_meta( $lesson_id, '_lesson_prerequisite', true );
	$lesson_course_id          = (int) get_post_meta( $lesson_id, '_lesson_course', true );
	$quiz_id                   = Sensei()->lesson->lesson_quizzes( $lesson_id );
	$has_user_completed_lesson = Sensei_Utils::user_completed_lesson( intval( $lesson_id ), $user_id );
	$show_actions              = is_user_logged_in() ? true : false;

	if ( intval( $lesson_prerequisite ) > 0 ) {
		// If the user hasn't completed the prereq then hide the current actions
		$show_actions = Sensei_Utils::user_completed_lesson( $lesson_prerequisite, $user_id );
	}

	if ( $show_actions && $quiz_id && Sensei()->access_settings() ) {

		if ( Sensei_Lesson::lesson_quiz_has_questions( $lesson_id ) ) {
			?>
			<div id="quiz-intro" >
				<h2><?php _e( 'Take the quiz to complete the lesson', '_svbk' ); ?></h2>
				<p><?php _e( 'To check the skills you have acquired and complete the lesson, click on the button and immediately access the quiz.', '_svbk' ); ?></p>
			</div>
			<?php
		}
	}
}

add_filter( 'sensei_single_lesson_content_inside_after', '_svbk_lesson_quiz_button_intro', 9 );


function _svbk_register_post_type_course_attr( $args ) {

	$args['has_archive'] = false;

	return $args;
}

add_filter( 'sensei_register_post_type_course', '_svbk_register_post_type_course_attr' );

function _svbk_comment_form_defaults( $defaults ) {

	if ( 'lesson' === get_post_type() ) {
		$defaults['label_submit'] = _x( 'Leave a comment', 'lesson comment submit label', '_svbk' );
	}

	if ( 'course' === get_post_type() ) {
		$defaults['label_submit'] = _x( 'Leave a comment', 'course comment submit label', '_svbk' );
	}

	return $defaults;
}

add_filter( 'comment_form_defaults', '_svbk_comment_form_defaults' );

if ( ! function_exists( 'is_learner_profile' ) ) {
	function is_learner_profile() {
		global $wp_query;
		return isset( $wp_query->query_vars['learner_profile'] );
	}
}

function _svbk_sensei_normalize_learner_profile_query( $wp_query ) {

	if ( isset( $wp_query->query_vars['learner_profile'] ) ) {
		$wp_query->is_home = false;
	}

}

add_filter( 'parse_query', '_svbk_sensei_normalize_learner_profile_query' );

 /**
  * Add lesson--preview class when not in single lesson
  *
  * @return array
  */
function _svbk_sensei_lesson_classes( $classes, $class, $post_id ) {

	if ( 'lesson' === get_post_type( $post_id ) && ! is_singular( 'lesson' ) ) {
		$classes[] = 'lesson--preview';
	}

	return $classes;
}

add_filter( 'post_class', '_svbk_sensei_lesson_classes', 10, 3 );


/**
 * Add sensei classes to the body tag.
 *
 * @param  array $classes CSS classes applied to the body tag.
 * @return array $classes modified classes list.
 */
function _svbk_sensei_body_class( $classes ) {

	if ( ( is_sensei() || is_learner_profile() ) && is_user_logged_in() && has_nav_menu( 'sensei-secondary' ) ) {
		$classes[] = 'has-secondary-nav';
	}

	return $classes;
}
add_filter( 'body_class', '_svbk_sensei_body_class' );
