<?php
/**
 * Custom template tags for this theme
 *
 * Eventually, some of the functionality here could be replaced by core features.
 *
 * @package _svbk
 */

if ( ! function_exists( '_svbk_posted_on' ) ) :
/**
 * Prints HTML with meta information for the current post-date/time and author.
 */
function _svbk_posted_on() {
		$time_string = '<time class="entry-date published updated" datetime="%1$s">%2$s</time>';
		if ( get_the_time( 'U' ) !== get_the_modified_time( 'U' ) ) {
			$time_string = '<time class="entry-date published" datetime="%1$s">%2$s</time><time class="updated" datetime="%3$s">%4$s</time>';
			}

		$time_string = sprintf(
		 $time_string,
		esc_attr( get_the_date( 'c' ) ),
		esc_html( get_the_date() ),
		esc_attr( get_the_modified_date( 'c' ) ),
		esc_html( get_the_modified_date() )
			);

			$posted_on = sprintf(
			/* translators: %s: post date. */
			esc_html_x( 'Posted on %s', 'post date', '_svbk' ),
			'<a href="' . esc_url( get_permalink() ) . '" rel="bookmark">' . $time_string . '</a>'
			);

			$byline = sprintf(
			/* translators: %s: post author. */
			esc_html_x( 'by %s', 'post author', '_svbk' ),
			'<span class="author vcard"><a class="url fn n" href="' . esc_url( get_author_posts_url( get_the_author_meta( 'ID' ) ) ) . '">' . esc_html( get_the_author() ) . '</a></span>'
			);

			echo '<span class="posted-on">' . $posted_on . '</span><span class="byline"> ' . $byline . '</span>'; // WPCS: XSS OK.

}
endif;

if ( ! function_exists( '_svbk_entry_footer' ) ) :
/**
 * Prints HTML with meta information for the categories, tags and comments.
 */
function _svbk_entry_footer() {
		// Hide category and tag text for pages.
		if ( 'post' === get_post_type() ) {
			/* translators: used between list items, there is a space after the comma */
			$categories_list = get_the_category_list( esc_html__( ', ', '_svbk' ) );
			if ( $categories_list ) {
				/* translators: 1: list of categories. */
				printf( '<span class="cat-links">' . esc_html__( 'Posted in %1$s', '_svbk' ) . '</span>', $categories_list ); // WPCS: XSS OK.
			}

			/* translators: used between list items, there is a space after the comma */
			$tags_list = get_the_tag_list( '', esc_html_x( ', ', 'list item separator', '_svbk' ) );
			if ( $tags_list ) {
				/* translators: 1: list of tags. */
				printf( '<span class="tags-links">' . esc_html__( 'Tagged %1$s', '_svbk' ) . '</span>', $tags_list ); // WPCS: XSS OK.
			}
			}

		if ( ! is_single() && ! post_password_required() && ( comments_open() || get_comments_number() ) ) {
			echo '<span class="comments-link">';
			comments_popup_link(
				sprintf(
					wp_kses(
						/* translators: %s: post title */
						__( 'Leave a Comment<span class="screen-reader-text"> on %s</span>', '_svbk' ),
						array(
							'span' => array(
								'class' => array(),
							),
						)
					),
					get_the_title()
				)
			);
			echo '</span>';
			}

		edit_post_link(
			sprintf(
				wp_kses(
					/* translators: %s: Name of current post. Only visible to screen readers */
					__( 'Edit <span class="screen-reader-text">%s</span>', '_svbk' ),
					array(
						'span' => array(
							'class' => array(),
						),
					)
				),
				get_the_title()
			),
			'<span class="edit-link">',
			'</span>'
			);
}
endif;

add_action( 'wp', '_svbk_acf_fallbacks' );

if ( wp_doing_ajax() ) {
	add_action( 'admin_init', '_svbk_acf_fallbacks' );
}

/**
 * If ACF plugin not activated declare fallback functions
 */
function _svbk_acf_fallbacks() {

	if ( ! function_exists( 'get_field' ) ) {
		/**
		 * The fallback for ACF's get_field function
		 *
		 * @param string $key The field name.
		 * @param int    $post_id Optional. The post ID to retrieve the field from.
		 *
		 * @return string
		 */
		function get_field( $key, $post_id = null ) {

			if ( null === $post_id ) {
				$post_id = get_the_ID();
			}

			return get_post_meta( $post_id, $key, true );
		}
	}
	if ( ! function_exists( 'the_field' ) ) {
		/**
		 * The fallback for ACF's the_field function
		 *
		 * @param string $key The field name.
		 * @param int    $post_id Optional. The post ID to retrieve the field from.
		 *
		 * @return void
		 */
		function the_field( $key, $post_id = null ) {
			echo get_field( $key, $post_id );
		}
	}
}


if ( ! function_exists( 'the_field_template' ) ) {

	/**
	 * Prints the custom field if not empty
	 *
	 * @param string $field The field name.
	 * @param string $before Optional. Text to print before the field (if not empty).
	 * @param string $after Optional. Text to print after the field (if not empty).
	 * @param string $post_id Optional. The post_id or other reference @see get_field() in ACF.
	 *
	 * @return void
	 */
	function the_field_template( $field, $before = '', $after = '', $post_id = null ) {
		$value = get_field( $field, $post_id );
		if ( $value ) {
			echo $before . $value . $after;
		}
	}
}

add_filter(
	'get_the_archive_title',
	function( $title ) {
		/* translators: %s represents the post type name */
		return str_replace( sprintf( __( 'Archives: %s' ), '' ), '', $title );
	}
);

add_filter(
	'get_the_archive_description',
	function( $description ) {
		if ( ! $description && is_post_type_archive() ) {
				$description = get_theme_mod( 'archive_' . get_query_var( 'post_type' ) . '_description' );
		}
		return $description;
	}
);

/**
 * Prints the post type archive image defined in customizer
 *
 * @param string       $prefix Optional. Prints before the image tag.
 * @param string       $suffix Optional. Prints after the image tag.
 * @param string|array $size Optional.The image size @see wp_get_attachment_image() for valid input values. Defaults to 'content-header'.
 * @param string       $post_type Optional. The target post type, if not specified uses the current archive post type.
 *
 * @return void
 */
function _svbk_custom_post_type_archive_image( $prefix = '', $suffix = '', $size = 'content-header', $post_type = null ) {

	if ( null === $post_type ) {
		$post_type = get_query_var( 'post_type' );
	}

	$image = get_theme_mod( "archive_{$post_type}_image" );

	if ( is_post_type_archive() && $image ) {
			echo $prefix . wp_get_attachment_image( $image, $size ) . $suffix;
	}
}

/**
 * Prints the archive taxonomy filter
 *
 * @param array  $args Prints before the image tag.
 * @param string $all_label Optional. The label for the 'Show all' button.
 * @param string $id Optional. The HTML id of the ul tag. Defaults to 'category-filter'.
 *
 * @return void
 */
function _svbk_archive_taxonomy_filter( $args, $all_label = '', $id = 'category-filter' ) {

	$args = wp_parse_args(
		 $args, array(
			 'title_li' => '',
			 'show_option_all' => false,
			 'echo' => 0,
		 )
	);

	$categories = wp_list_categories( $args );
	if ( $categories ) : ?>
	<div class="filter-container">
	<ul id="<?php echo esc_attr( $id ); ?>" class="ajax-filter filter-list">
		<?php if ( ! $args['show_option_all'] ) : ?>
		<li class="cat-item-all<?php echo is_post_type_archive() ? ' current-cat' : ''; ?>">
			<a href="<?php get_post_type_archive_link( get_post_type() ); ?>"><?php echo $all_label; ?></a>
		</li>
		<?php endif; ?>
		<?php echo $categories; ?>
	</ul>
	</div>
	<?php
	endif;
}

/**
 * Prints the Infinite scrolling load more button
 *
 * @param string $label The button label.
 *
 * @return void
 */
function _svbk_load_more_button( $label = '' ) {
	if ( get_previous_posts_link() ) {
		return;
	}
	?>
	<button class="load-more"><?php echo $label ?: esc_html__( 'Load more', '_svbk' ); ?></button>
	<?php
}
