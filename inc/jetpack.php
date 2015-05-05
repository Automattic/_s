<?php
/**
 * Jetpack Compatibility File
 * See: http://jetpack.me/
 *
 * @package YuMag
 */

if ( ! function_exists( 'yumag_get_featured_posts' ) ) :
/**
 * Getter function for Jetpack Featured Content module.
 *
 * @since 1.0.0
 * @link http://jetpack.me/support/featured-content/
 *
 * @return array The featured posts.
 */
function yumag_get_featured_posts() {
	return apply_filters( 'yumag_get_featured_posts', array() );
}
endif;

if ( ! function_exists( 'yumag_has_featured_posts' ) ) :
/**
 * Conditional function for Jetpack Featured Content module.
 *
 * @since 1.0.0
 * @link http://jetpack.me/support/featured-content/
 *
 * @param int $minimum Minimum number of featured posts being checked for.
 * @return bool Whether featured posts will be outputted and the minimum number
 *              of featured posts is present.
 */
function yumag_has_featured_posts( $minimum = 1 ) {

	$pp = new PeriodicalPress_Template_Tags();

	if ( ! $pp->is_issue() && ! is_home() ) {
		return false;
	}

	$minimum = absint( $minimum );
	$featured_posts = apply_filters( 'yumag_get_featured_posts', array() );

	if ( ! is_array( $featured_posts ) ) {
		return false;
	}

	if ( $minimum > count( $featured_posts ) ) {
		return false;
	}

	return true;
}
endif;

if ( ! function_exists( 'yumag_remove_related_posts' ) ) :
/**
 * Remove the Jetpack Related Posts section from the bottom of entry content,
 * so it can be manually re-added where we want it.
 *
 * @since 1.0.0
 */
function yumag_remove_related_posts() {
	if ( class_exists( 'Jetpack_RelatedPosts' ) ) {

		// Get rid of default placement for Related Posts.
		$jprp = Jetpack_RelatedPosts::init();
		remove_filter( 'the_content', array( $jprp, 'filter_add_target_to_dom' ), 40 );

		// Remove default CSS.
		wp_dequeue_style( 'jetpack_related-posts' );

	}
}
add_action( 'wp_head', 'yumag_remove_related_posts', 20 );
endif;

if ( ! function_exists( 'yumag_exclude_from_related_posts' ) ) :
/**
 * Filter to exclude posts in the Back Page from Jetpack Related Posts results.
 *
 * @since 1.0.0
 *
 * @param array $filters Filters for excluding posts from related posts list.
 * @return array The revised filters.
 */
function yumag_exclude_from_related_posts( $filters ) {
	$filters[] = array(
		'not' => array( 'term' => array( 'category.slug' => 'back-page' ) )
	);
	return $filters;
}
add_filter( 'jetpack_relatedposts_filter_filters', 'yumag_exclude_from_related_posts' );
endif;
