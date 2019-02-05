<?php
/**
 * Functions which enhance the theme by hooking into WordPress
 *
 * @package _svbk
 */

/**
 * Adds custom classes to the array of body classes.
 *
 * @param array $classes Classes for the body element.
 * @return array
 */
function _svbk_body_classes( $classes ) {
	// Adds a class of group-blog to blogs with more than 1 published author.
	if ( is_multi_author() ) {
		$classes[] = 'group-blog';
	}

	if ( is_singular() ) {
		// Adds `singular` to singular pages.
		$classes[] = 'singular';
	} else {
		// Adds `hfeed` to non singular pages.
		$classes[] = 'hfeed';
	}

	// Adds a class of no-sidebar when there is no sidebar present.
	if ( ! is_active_sidebar( 'sidebar-1' ) ) {
		$classes[] = 'no-sidebar';
	}

	if ( is_page_template( 'page-templates/account.php' ) && is_user_logged_in() && has_nav_menu( 'sensei-secondary' ) ) {
		$classes[] = 'has-secondary-nav';
	}

	return $classes;
}
add_filter( 'body_class', '_svbk_body_classes' );

/**
 * Add a pingback url auto-discovery header for single posts, pages, or attachments.
 */
function _svbk_pingback_header() {
	if ( is_singular() && pings_open() ) {
		echo '<link rel="pingback" href="', esc_url( get_bloginfo( 'pingback_url' ) ), '">';
	}
}
add_action( 'wp_head', '_svbk_pingback_header' );

add_filter( 'get_the_archive_title', '_svbk_archive_title' );

function _svbk_archive_title( $title ) {

	if ( is_category() ) {
		$title = single_cat_title( '', false );
	} elseif ( is_tag() ) {
		$title = single_tag_title( '', false );
	} elseif ( is_author() ) {
		$title = '<span class="vcard">' . get_the_author() . '</span>';
	}

	return $title;
}

function _svbk_post_has_more() {
	global $post;

	return boolval( strpos( $post->post_content, '<!--more-->' ) );
}

function _svbk_the_whole_content() {
	global $more;

	$real_more = $more;
	$more      = 1;
	the_content( null, true );
	$more = $real_more;
}

function _svbk_update_word_count( $post_ID, $post, $update ) {
	$content = apply_filters( 'the_content', $post->post_content );
	$words   = str_word_count( strip_tags( $content ) );

	update_post_meta( $post_ID, 'word_count', $words );
}

add_action( 'save_post_post', '_svbk_update_word_count', 10, 3 );

function _svbk_get_post_reading_time( $words_per_minute = 200 ) {

	$word_count = get_post_meta( get_the_ID(), 'word_count', true );

	if ( ! $word_count ) {
		return;
	}

	return ceil( $word_count / $words_per_minute );
}

function _svbk_preview_navigation_link( $output, $format, $link, $adjacent_post, $adjacent ) {

	global $post, $wp_query;

	$current_post = $post;
	$post         = $adjacent_post;
	setup_postdata( $adjacent_post );

	ob_start();

	$wp_query->query_vars['navigation_adjacent'] = $adjacent;

	get_template_part( 'template-parts/pagination', get_post_type() );

	unset( $wp_query->query_vars['navigation_adjacent'] );

	$html = ob_get_contents();
	ob_end_clean();

	if ( $html ) {
		$output = '<div class="nav-' . $adjacent . ' nav-preview">' . $html . '</div>';
	}

	$post = $current_post;
	wp_reset_postdata();

	return $output;
}

add_filter( 'next_post_link', '_svbk_preview_navigation_link', 10, 5 );
add_filter( 'previous_post_link', '_svbk_preview_navigation_link', 10, 5 );


function _svbk_navigation_markup_template( $template, $class ) {

	$template = str_replace( 'class="navigation', 'class="navigation domready--show', $template );

	return $template;
}

add_filter( 'navigation_markup_template', '_svbk_navigation_markup_template', 10, 2 );

function _svbk_bem_categories_list( $htmllist, $separator ) {

	if ( ! $separator ) {
		$htmllist = str_replace( '"post-categories"', '"post__categories post-categories"', $htmllist );
	}

	return $htmllist;
}

add_filter( 'the_category', '_svbk_bem_categories_list', 10, 2 );


if ( ! function_exists( 'the_post_meta' ) ) {
	function the_post_meta( $post_id, $meta, $before = '', $after = '', $echo = true ) {
		$post_meta = get_post_meta( $post_id, $meta, true );
		$output    = '';
		if ( $post_meta ) {
			$output .= $before . $post_meta . $after;
		}

		if ( ! $echo ) {
			return $output;
		}

		echo $output;
	}
}
