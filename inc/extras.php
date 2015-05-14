<?php
/**
 * Custom functions that act independently of the theme templates
 *
 * Eventually, some of the functionality here could be replaced by core features
 *
 * @package YuMag
 */

if ( ! function_exists( 'yumag_body_classes' ) ) :
/**
 * Adds custom classes to the array of body classes.
 *
 * @global $post WP_Post object
 *
 * @param array $classes Classes for the body element.
 * @return array
 */
function yumag_body_classes( $classes ) {
	global $post;

	$pp = new PeriodicalPress_Template_Tags();

	// Adds a class of group-blog to blogs with more than 1 published author.
	if ( is_multi_author() ) {
		$classes[] = 'group-blog';
	}

	// Add category-based classes.
	if ( is_single() || is_category() ) {
		$categories = get_the_category( $post->ID );
		foreach( $categories as $cat ) {
			$classes[] = 'category-' . $cat->slug;
		}
	}

	// Add template class. This is removed/replaced if it's a 2-col template.
	if ( is_single() ) {
		$classes[] = 'template-one-column';
	}

	return $classes;
}
add_filter( 'body_class', 'yumag_body_classes', 9 );
endif;

if ( ! function_exists( 'yumag_template_classes_single_scrolling_left' ) ) :
/**
 * Add template-targetting body classes.
 *
 * @since 1.0.0
 *
 * @param array $classes Classes for the body element.
 * @return array
 */
function yumag_template_classes_single_scrolling_left( $classes ) {
	$classes = array_diff( $classes, array( 'template-one-column' ) );
	$classes[] = 'template-two-columns';
	$classes[] = 'template-scrolling-left';
	return $classes;
}
endif;

if ( ! function_exists( 'yumag_template_classes_single_scrolling_right' ) ) :
/**
 * Add template-targetting body classes.
 *
 * @since 1.0.0
 *
 * @param array $classes Classes for the body element.
 * @return array
 */
function yumag_template_classes_single_scrolling_right( $classes ) {
	$classes = array_diff( $classes, array( 'template-one-column' ) );
	$classes[] = 'template-two-columns';
	$classes[] = 'template-scrolling-right';
	return $classes;
}
endif;

if ( ! function_exists( 'yumag_wp_title' ) ) :
/**
 * Filters wp_title to print a neat <title> tag based on what is being viewed.
 *
 * @param string $title Default title text for current view.
 * @param string $sep Optional separator.
 * @return string The filtered title.
 */
function yumag_wp_title( $title, $sep ) {
	if ( is_feed() ) {
		return $title;
	}

	global $page, $paged;

	// Add the blog name
	$title .= strtolower( get_bloginfo( 'name', 'display' ) );

	// Add a page number if necessary:
	if ( ( $paged >= 2 || $page >= 2 ) && ! is_404() ) {
		$title .= " $sep " . sprintf( __( 'Page %s', 'yumag' ), max( $paged, $page ) );
	}

	return $title;
}
add_filter( 'wp_title', 'yumag_wp_title', 10, 2 );
endif;

if ( ! function_exists( 'yumag_entry_classes' ) ) :
/**
 * Filter to add generic class for both posts and pages to the article element.
 *
 * Adds the class 'entry' in all cases. If this is a page or a single post,
 * also adds a 'single-entry' class. If this is a Notice, add a class for the
 * notice type.
 *
 * @since 1.0.0
 *
 * @param array $classes Array of classes to be added to this post/page.
 * @return array The classes array.
 */
function yumag_entry_classes( $classes ) {

	global $wp_query;

	$classes[] = 'entry';
	if ( ( is_single() && get_the_ID() === $wp_query->queried_object_id ) || is_page() ) {
		$classes[] = 'single-entry';
	}

	$tax = 'yumag_notice_type';
	if ( ( 'yumag_notice' === get_post_type() ) && taxonomy_exists( $tax ) ) {
		$notice_types = wp_get_post_terms( get_the_ID(), $tax );
		foreach ( $notice_types as $nt ) {
			$classes[] = 'type-' . $nt->slug;
		}
	}

	return $classes;
}
add_filter( 'post_class', 'yumag_entry_classes' );
endif;

if ( ! function_exists( 'yumag_image_size_choices' ) ) :
/**
 * Filter for image size options presented to content authors/editors.
 *
 * @since 1.0.0
 *
 * @param array $sizes Image sizes array (id => label).
 * @return array The image sizes array.
 */
function yumag_image_size_choices( $sizes ) {

	// Remove the 'Medium' size.
	unset( $sizes['medium'] );
	unset( $sizes['large'] );

	// Rename 'Full Size' to 'Original'.
	$sizes['full'] = _x( 'Original', 'Image size name', 'yumag' );

	// Add the theme-specific sizes in.
	return array_merge( $sizes, array(
		'yumag-content-photo-full' => _x( 'Full width', 'Image size name', 'yumag' ),
		'yumag-content-photo-half' => _x( 'Half width', 'Image size name', 'yumag' )
	) );
}
add_filter( 'image_size_names_choose', 'yumag_image_size_choices', 9999 );
endif;

if ( ! function_exists( 'yumag_excerpt_length' ) ) :
/**
 * Filter to set the number of words in auto-generated excerpts.
 *
 * @since 1.0.0
 *
 * @param int $length Default number of words to truncate the content at.
 * @return int New number of words.
 */
function yumag_excerpt_length( $length ) {
	return 25;
}
add_filter( 'excerpt_length', 'yumag_excerpt_length', 11 );
endif;

if ( ! function_exists( 'yumag_posts_per_page' ) ) :
/**
 * Ensure that archive pages load a number of posts divisible by 3 (so that
 * balanced rows of posts are shown on normal-size screens).
 *
 * @since 1.0.0
 *
 * @param WP_Query $query The query object being assembled.
 */
function yumag_posts_per_page( $query ) {
	if ( is_admin() || is_singular() || ! $query->is_main_query() || $query->is_tax( 'pp_issue' ) ) {
		return;
	}

	$posts_per_page = $query->get( 'posts_per_page' );
	if ( empty( $posts_per_page ) ) {
		$posts_per_page = get_option( 'posts_per_page' );
	}

	if ( -1 !== $posts_per_page ) {
		if ( $posts_per_page % 3 ) {
			$posts_per_page += ( 3 - ( $posts_per_page % 3 ) );
		}
		$query->set( 'posts_per_page', $posts_per_page );
	}

}
add_action( 'pre_get_posts', 'yumag_posts_per_page', 11 );
endif;

if ( ! function_exists( 'yumag_split_archive_title' ) ) :
/**
 * Separate an archive title so the value is wrapped in a separate span to its
 * key, allowing separate styling.
 *
 * The value is wrapped in a `span.archive-term`.
 *
 * @since 1.0.0
 *
 * @param string $title Original archive title HTML.
 * @return string Modified HTML.
 */
function yumag_split_archive_title( $title ) {

	$replacement = '<span class="archive-term">%s</span>';

	if ( false !== strpos( $title, ': ' ) ) {
		$title = preg_replace(
			'/([^:]+: )(.*)/',
			// Convert sprintf-format placeholder to regex-format placeholder.
			sprintf( '$1' . $replacement, '$2' ),
			$title,
			1
		);
	} else {
		// If we can't find the 'term' part, treat the whole thing as the term.
		$title = sprintf( $replacement, $title );
	}

	return $title;
}
add_filter( 'get_the_archive_title', 'yumag_split_archive_title', 60 );
endif;

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

if ( ! function_exists( 'yumag_google_fonts' ) ) :
/**
 * Output the script element for async loading of Lato webfont.
 *
 * @since 1.0.0
 */
function yumag_google_fonts() {
?>
	<script type="text/javascript">
	WebFontConfig = {
	google: { families: [ 'Lato:300,700:latin' ] }
	};
	(function() {
	var wf = document.createElement('script');
	wf.src = ('https:' == document.location.protocol ? 'https' : 'http') +
	  '://ajax.googleapis.com/ajax/libs/webfont/1/webfont.js';
	wf.type = 'text/javascript';
	wf.async = 'true';
	var s = document.getElementsByTagName('script')[0];
	s.parentNode.insertBefore(wf, s);
	})(); </script>
<?php
}
add_action( 'wp_footer', 'yumag_google_fonts' );
endif;

if ( ! function_exists( 'yumag_tag_cloud_args' ) ) :
/**
 * Filter arguments of tag cloud widget to put a separator between tags.
 *
 * @since 1.0.0
 *
 * @param array $args Arguments for the tag cloud widget display.
 */
function yumag_tag_cloud_args( $args ) {
	$args['separator']= ' . ';
	return $args;
}
add_filter( 'widget_tag_cloud_args', 'yumag_tag_cloud_args');
endif;
