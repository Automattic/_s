<?php
if ( ! defined( 'ABSPATH' ) ) {
	exit;
}
/**
 * Pagination - Lesson
 *
 * @author      Automattic
 * @package     Sensei
 * @category    Templates
 * @version     1.9.0
 */

global $post;

$lesson_id           = $post->ID;
$course_id           = Sensei()->lesson->get_course_id( $post->ID );
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
			|| ( isset( $item->ID ) && absint( $item->ID ) === absint( $lesson_id ) )
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
				<span class="prev-next notice"><?php _e( 'Next Lesson', 'woocommerce-funnels' ); ?>&colon;</span>
				<span class="next-title"><?php echo get_the_title( $next ); ?></span>
				<span class="goto"><?php _e( 'View next lesson', 'woocommerce-funnels' ); ?></span>    			
			</a>
		</div>
	</nav><!-- #post-entries -->
<?php } ?>
