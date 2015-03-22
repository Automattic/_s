<?php
/**
 * Custom template tags for this theme.
 *
 * Eventually, some of the functionality here could be replaced by core
 * features.
 *
 * @package YuMag
 */

if ( ! function_exists( 'yumag_issue_title' ) ) :
/**
 * Output the official Issue title (i.e. number then date).
 *
 * @since 1.0.0
 *
 * @param bool $linked Optional. Whether the Issue title should be wrapped in
 *                     a link. Default False.
 */
function yumag_issue_title( $linked = false ) {

	$pp = new PeriodicalPress_Template_Tags();

	// Prepare the issue number format.
	$number = $pp->get_the_issue_number();
	$number = sprintf( __( 'ISSUE %s', 'yumag' ),
		strtoupper( yumag_convert_number_to_words( $number ) )
	);

	// Output.
	if ( $linked ) {
		echo '<a href="' . $pp->get_the_issue_link() . '">';
	}
	echo '<span class="issue-number">' . $number . '</span>';
	$pp->the_issue_date( null, ' / <span class="issue-date">', '</span>' );
	if ( $linked ) {
		echo '</a>';
	}

}
endif;

if ( ! function_exists( 'yumag_byline' ) ) :
/**
 * Prints HTML with meta information for the current author.
 *
 * @since 1.0.0
 */
function yumag_byline() {

	// Don't show the byline if author is the generic 'Staff Writer'.
	if ( 'staff writer' !== strtolower( get_the_author() ) ) {
		$byline = sprintf(
			_x( 'by %s', 'post author', 'yumag' ),
			'<span class="author vcard"><a class="url fn n" href="' . esc_url( get_author_posts_url( get_the_author_meta( 'ID' ) ) ) . '">' . esc_html( get_the_author() ) . '</a></span>'
		);

		echo '<div class="entry-meta"><span class="byline"> ' . $byline . '</span></div>';
	}

}
endif;

if ( ! function_exists( 'yumag_author_box' ) ) :
/**
 * Prints HTML with author avatar, name, intro, and link to page.
 *
 * @since 1.0.0
 */
function yumag_author_box() {

	$author_id = get_the_author_meta( 'ID' );
	if ( $author_id ) {
		echo '<div class="entry-author">';

		$default_avatar = get_stylesheet_directory_uri() . '/assets/default-avatar-192.png';

		if ( function_exists( 'get_wp_user_avatar' ) ) {
			printf( '<a class="entry-author-avatar" href="%1$s" title="%2$s">%3$s</a>',
				get_author_posts_url( $author_id ),
				get_the_author(),
				get_avatar( $author_id, 96, $default_avatar )
			);

		}

		echo '<div class="entry-author-byline">';
		printf( _x( 'by %s', 'post author', 'yumag' ),
			'<a class="entry-author-name" href="' . get_author_posts_url( $author_id ) . '">' . get_the_author() . '</a>'
		);
		echo '</div>';

		$about = get_the_author_meta( 'description' );
		if ( $about ) {
			echo '<p class="entry-author-description">' . $about . '</p>';
		}

		// TODO: 'See all N posts by X' link.

		echo '</div>';
	}

}
endif;

if ( ! function_exists( 'yumag_entry_image' ) ) :
/**
 * Output the featured image (or 'post thumbnail') at the specified size.
 *
 * @since 1.0.0
 *
 * @param array|string $size   Optional. The size keyword or width/height array
 *                             for the image. Default 'thumbnail'.
 * @param bool         $linked Optional. Whether to wrap the image in a link to
 *                             the related post. Default True.
 */
function yumag_entry_image( $size = 'thumbnail', $linked = true ) {

	$classes = has_post_thumbnail()
		? 'entry-image'
		: 'entry-image no-image';

	echo '<div class="' . $classes . '">';
	if ( $linked ) {
		echo '<a class="entry-image-link" href="' . get_permalink() . '" title="' . the_title_attribute( 'echo=0' ) . '">';
	}

	if ( has_post_thumbnail() ) {
		the_post_thumbnail( $size );
	} else {
		echo '<img class="entry-image no-image" src="' . get_template_directory_uri() . '/assets/no-thumbnail.png" width="666" height="444" alt="">';
	}

	if ( $linked ) {
		echo '</a>';
	}
	echo '</div>';

}
endif;

if ( ! function_exists( 'yumag_entry_title' ) ) :
/**
 * Output the current post's/page's permalinked title within an H1 element.
 *
 * @since 1.0.0
 */
function yumag_entry_title() {
	$title = '<h1 class="entry-title">' . get_the_title() . '</h1>';
	$subtitle = function_exists( 'the_subtitle' )
		? the_subtitle( '<h2 class="entry-subtitle">', '</h2>', false )
		: '';
	printf( '<a class="entry-title-link" href="%3$s" rel="bookmark">%1$s %2$s</a>',
		$title,
		$subtitle,
		get_permalink()
	);
}
endif;

if ( ! function_exists( 'yumag_entry_footer' ) ) :
/**
 * Prints HTML with meta information for the categories, tags and comments.
 *
 * @since 1.0.0
 */
function yumag_entry_footer() {

	$pp = new PeriodicalPress_Template_Tags();

	// Hide category and tag text for pages.
	if ( 'post' == get_post_type() ) {

		yumag_author_box();

		$time_string = '<time class="entry-date published updated" datetime="%1$s">%2$s</time>';
		if ( get_the_time( 'U' ) !== get_the_modified_time( 'U' ) ) {
			$time_string = '<time class="entry-date published" datetime="%1$s">%2$s</time><time class="updated" datetime="%3$s">%4$s</time>';
		}

		$time_string = sprintf( $time_string,
			esc_attr( get_the_date( 'c' ) ),
			esc_html( get_the_date() ),
			esc_attr( get_the_modified_date( 'c' ) ),
			esc_html( get_the_modified_date() )
		);

		/* translators: used between list items, there is a space on each side of the slash */
		$categories_list = get_the_category_list( __( ' / ', 'yumag' ) );

		// Prepare the issue number format.
		$number = $pp->get_the_issue_number();
		$number = sprintf( __( 'ISSUE %s', 'yumag' ),
			strtoupper( yumag_convert_number_to_words( $number ) )
		);
		$number = '<a class="entry-issue" href="' . $pp->get_the_issue_link() . '">' . $number . '</a>';

		/* Prepare categories and datestamp output. */
		if ( $categories_list && yumag_categorized_blog() ) {
			$posted_on = sprintf( _x( '%1$s / %2$s / %3$s', 'Post footer metadata order', 'yumag' ),
				$number,
				sprintf( '<span class="cat-links">%s</span>', $categories_list ),
				$time_string
			);
		} else {
			$posted_on = sprintf( _x( '%1$s / %2$s', 'Post footer metadata order (no category)', 'yumag' ),
				$number,
				$time_string
			);
		}

		echo '<span class="posted-on">' . $posted_on . '</span>';

		/* translators: used between list items, there is a space on each side of the slash */
		$tags_list = get_the_tag_list( '', __( ' / ', 'yumag' ) );
		if ( $tags_list ) {
			printf( '<span class="tags-links">' . __( 'Tagged %1$s', 'yumag' ) . '</span>', $tags_list );
		}

	}

}
endif;

if ( ! function_exists( 'yumag_section_the_post' ) ) :
/**
 * Iterates through the Loop without setting up postdata.
 *
 * Basically `the_post()` without the call to `WP_Query::setup_postdata()`,
 * which allows us to iterate over a Loop multiple times without setting up the
 * postdata for the same post multiple times.
 *
 * By using this, we can perform a conditional on the current post **before**
 * calling `setup_postdata()` on it (which we do using another custom template
 * tag, `yumag_section_setup_postdata()`).
 *
 * Used for the one-loop-per-section structure of the Issue pages.
 *
 * @since 1.0.0
 *
 * @global WP_Query $wp_query The main query object.
 * @global WP_Post  $post     The current post in the Loop.
 */
function yumag_section_the_post() {
	global $wp_query;
	global $post;

	$wp_query->in_the_loop = true;

	if ( $wp_query->current_post == -1 ) {
		/** This filter is documented in wp-includes/query.php */
		do_action_ref_array( 'loop_start', array( &$wp_query ) );
	}

	$post = $wp_query->next_post();

}
endif;

if ( ! function_exists( 'yumag_section_setup_postdata' ) ) :
/**
 * Sets up postdata for the current post in the Loop, without changing our
 * position in the Loop at all.
 *
 * Accompanies `yumag_section_the_post()`.
 *
 * @since 1.0.0
 *
 * @see yumag_section_the_post()
 * @global WP_Post $post The current post in the Loop.
 */
function yumag_section_setup_postdata() {
	global $post;
	setup_postdata( $post );
}
endif;

/**
 * Returns true if a blog has more than 1 category.
 *
 * @since 1.0.0
 *
 * @return bool
 */
function yumag_categorized_blog() {
	if ( false === ( $all_cats = get_transient( 'yumag_categories' ) ) ) {
		// Create an array of all the categories that are attached to posts.
		$all_cats = get_categories( array(
			'fields'     => 'ids',
			'hide_empty' => 1,

			// We only need to know if there is more than one category.
			'number'     => 2,
		) );

		// Count the number of categories that are attached to the posts.
		$all_cats = count( $all_cats );

		set_transient( 'yumag_categories', $all_cats );
	}

	if ( $all_cats > 1 ) {
		/*
		 * This blog has more than 1 category so yumag_categorized_blog should
		 * return true.
		 */
		return true;
	} else {
		/*
		 * This blog has only 1 category so yumag_categorized_blog should
		 * return false.
		 */
		return false;
	}
}

/**
 * Flush out the transients used in yumag_categorized_blog.
 *
 * @since 1.0.0
 */
function yumag_category_transient_flusher() {
	if ( defined( 'DOING_AUTOSAVE' ) && DOING_AUTOSAVE ) {
		return;
	}
	delete_transient( 'yumag_categories' );
}
add_action( 'edit_category', 'yumag_category_transient_flusher' );
add_action( 'save_post',     'yumag_category_transient_flusher' );
