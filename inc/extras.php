<?php
/**
 * Custom functions that act independently of the theme templates
 *
 * Eventually, some of the functionality here could be replaced by core features
 *
 * @package YuMag
 */

/**
 * Adds custom classes to the array of body classes.
 *
 * @param array $classes Classes for the body element.
 * @return array
 */
function yumag_body_classes( $classes ) {
	// Adds a class of group-blog to blogs with more than 1 published author.
	if ( is_multi_author() ) {
		$classes[] = 'group-blog';
	}

	return $classes;
}
add_filter( 'body_class', 'yumag_body_classes' );

if ( version_compare( $GLOBALS['wp_version'], '4.1', '<' ) ) :
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
	$title .= get_bloginfo( 'name', 'display' );

	// Add the blog description for the home/front page.
	$site_description = get_bloginfo( 'description', 'display' );
	if ( $site_description && ( is_home() || is_front_page() ) ) {
		$title .= " $sep $site_description";
	}

	// Add a page number if necessary:
	if ( ( $paged >= 2 || $page >= 2 ) && ! is_404() ) {
		$title .= " $sep " . sprintf( __( 'Page %s', 'yumag' ), max( $paged, $page ) );
	}

	return $title;
}
add_filter( 'wp_title', 'yumag_wp_title', 10, 2 );

/**
 * Title shim for sites older than WordPress 4.1.
 *
 * @link https://make.wordpress.org/core/2014/10/29/title-tags-in-4-1/
 * @todo Remove this function when WordPress 4.3 is released.
 */
function yumag_render_title() {
	?>
	<title><?php wp_title( '|', true, 'right' ); ?></title>
	<?php
}
add_action( 'wp_head', 'yumag_render_title' );
endif;

if ( ! function_exists( 'yumag_single_post_dropcap' ) ) :

function yumag_single_post_dropcap( $content ) {
	if ( is_single() ) {
		$content = yumag_create_dropcap( $content );
	}
	return $content;
}
add_action( 'the_content', 'yumag_single_post_dropcap' );
endif;

if ( ! function_exists( 'yumag_create_dropcap' ) ) :
/**
 * Add a span to the first letter of the first paragraph of the passed-in
 * content for dropcap styling.
 *
 * @since 1.0.0
 *
 * @param string $content HTML content to be drop-capped.
 *
 * @return string Amended content.
 */
function yumag_create_dropcap( $content ) {
	$result = stripos( $content, '<p' );

	if ( false !== $result ) {
		// Find the drop cap and wrap it in a placeholder.
		$pattern = '/(<p[^>]*\>(?:<\[A-Za-z][^>]*>)*)((?:[\W_-]|&[\w-]+;)?[A-Za-z0-9])/i';
		$matches = array();
		$result = preg_match( $pattern, $content, $matches );

		// Prepare the dropcap classes.
		if ( $result ) {
			$dropcap = $matches[2];
			$classes = 'dropcap dropcap-' . strtolower( substr( $dropcap, -1 ) );

			if ( 1 !== strlen( $dropcap ) ) {
				$classes .= ' dropcap-punctuation';
			}

			// Modify the output.
			$content = preg_replace( $pattern, '$1<span class="' . $classes . '">$2</span>', $content, 1 );
		}
	}

	return $content;
}
endif;

if ( ! function_exists( 'yumag_entry_classes' ) ) :
/**
 * Filter to add generic class for both posts and pages to the article element.
 *
 * Adds the class 'entry' in all cases. If this is a page or a single post,
 * also adds a 'single-entry' class.
 *
 * @since 1.0.0
 *
 * @param array $classes Array of classes to be added to this post/page.
 * @return array The classes array.
 */
function yumag_entry_classes( $classes ) {
	$classes[] = 'entry';
	if ( is_single() || is_page() ) {
		$classes[] = 'single-entry';
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
		'yumag-photo-large' => _x( 'Large', 'Image size name', 'yumag' ),
		'yumag-photo-small' => _x( 'Small', 'Image size name', 'yumag' )
	) );
}
add_filter( 'image_size_names_choose', 'yumag_image_size_choices', 9999 );
endif;
