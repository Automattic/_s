<?php
if ( ! defined( 'ABSPATH' ) ) {
	exit;
}
/**
 * Pagination - Lesson
 *
 * @author      WooThemes
 * @package     Sensei/Templates
 * @version     1.1.0
 */

global $post;

$quiz_id             = $post->ID;
$quiz_lesson         = absint( get_post_meta( $quiz_id, '_quiz_lesson', true ) );
$course_id           = Sensei()->lesson->get_course_id( $quiz_lesson );
$modules_and_lessons = sensei_get_modules_and_lessons( $course_id );

if ( is_array( $modules_and_lessons ) && count( $modules_and_lessons ) > 0 ) {
	$found = false;

	foreach ( $modules_and_lessons as $item ) {
		$item_is_linkable = true;

		if ( $item instanceof WP_Term
			 && 'module' === $item->taxonomy
			 && ! Sensei()->modules->do_link_to_module( $item, true )
		) {
			$item_is_linkable = false;
		}

		if ( $found && $item_is_linkable ) {
			$next = $item;
			break;
		}

		if (
			// Is it the current module?
			( isset( $item->term_id ) && is_tax( Sensei()->modules->taxonomy, $item->term_id ) )

			// Is it the current lesson?
			|| ( isset( $item->ID ) && absint( $item->ID ) === absint( $quiz_lesson ) )
		) {
			$found = true;
		} elseif ( $item_is_linkable ) {
			$previous = $item;
		}
	}
}

// Output HTML
if ( isset( $next ) ) { ?>
	<nav id="post-entries" class="post-entries fix">
		<div class="nav-next fr">
			<a href="<?php echo esc_url( sensei_get_navigation_url( $course_id, $next ) ); ?>" rel="prev">
				<?php echo get_the_post_thumbnail( $next, 'thumbnail' ); ?>
				<span class="prev-next notice"><?php _e( 'Next Lesson', '_svbk' ); ?>&colon;</span>
				<span class="next-title"><?php echo get_the_title( $next ); ?></span>
				<span class="goto"><?php _e( 'View next lesson', '_svbk' ); ?></span>
			</a>
		</div>
	</nav><!-- #post-entries -->
<?php } ?>
