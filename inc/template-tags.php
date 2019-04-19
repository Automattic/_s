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
	 * Prints HTML with meta information for the current post-date/time.
	 */
	function _svbk_posted_on() {
		$time_string = '<time class="entry-date published updated" datetime="%1$s">%2$s</time>';
		if ( get_the_time( 'U' ) !== get_the_modified_time( 'U' ) ) {
			$time_string = '<time class="entry-date published" datetime="%1$s">%2$s</time><time class="updated" datetime="%3$s">%4$s</time>';
		}

		$time_string = sprintf(
			$time_string,
			esc_attr( get_the_date( DATE_W3C ) ),
			esc_html( get_the_date() ),
			esc_attr( get_the_modified_date( DATE_W3C ) ),
			esc_html( get_the_modified_date() )
		);

		$posted_on = sprintf(
			/* translators: %s: post date. */
			_x( 'Posted on %s', 'post date', '_svbk' ),
			'<a href="' . esc_url( get_permalink() ) . '" rel="bookmark">' . $time_string . '</a>'
		);

		echo '<span class="posted-on">' . $posted_on . '</span>'; // WPCS: XSS OK.

	}
endif;

if ( ! function_exists( '_svbk_posted_by' ) ) :
	/**
	 * Prints HTML with meta information for the current author.
	 */
	function _svbk_posted_by() {
		$byline = sprintf(
			/* translators: %s: post author. */
			esc_html_x( 'by %s', 'post author', '_svbk' ),
			'<span class="author vcard"><a class="url fn n" href="' . esc_url( get_author_posts_url( get_the_author_meta( 'ID' ) ) ) . '">' . esc_html( get_the_author() ) . '</a></span>'
		);

		echo '<span class="byline"> ' . $byline . '</span>'; // WPCS: XSS OK.

	}
endif;

if ( ! function_exists( '_svbk_entry_footer' ) ) :
	/**
	 * Prints HTML with meta information about comments.
	 */
	function _svbk_entry_footer() {

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

	}
endif;

if ( ! function_exists( '_svbk_entry_terms' ) ) :
	/**
	 * Prints HTML with meta information for the categories and tags.
	 */
	function _svbk_entry_terms() {

		// Hide category and tag text for pages.
		if ( 'post' === get_post_type() ) {
			/* translators: used between list items, there is a space after the comma */
			$categories_list = get_the_category_list( esc_html_x( ', ', 'list item separator', '_svbk' ) );
			if ( $categories_list ) {
				/* translators: 1: list of categories. */
				printf( '<span class="post__categories cat-links">' . esc_html__( 'Posted in %1$s', '_svbk' ) . '</span>', $categories_list ); // WPCS: XSS OK.
			}

			/* translators: used between list items, there is a space after the comma */
			$tags_list = get_the_tag_list( '', esc_html_x( ', ', 'list item separator', '_svbk' ) );
			if ( $tags_list ) {
				/* translators: 1: list of tags. */
				printf( '<span class="post__tags tags-links">' . esc_html__( 'Tagged %1$s', '_svbk' ) . '</span>', $tags_list ); // WPCS: XSS OK.
			}
		}

	}
endif;


if ( ! function_exists( '_svbk_post_thumbnail' ) ) :
	/**
	 * Displays an optional post thumbnail.
	 *
	 * Wraps the post thumbnail in an anchor element on index views, or a div
	 * element when on single views.
	 */
	function _svbk_post_thumbnail( $size = null, $attr = array() ) {
		if ( post_password_required() || is_attachment() || ! has_post_thumbnail() ) {
			return;
		}

		if ( is_singular() ) :
			?>

			<div class="post-thumbnail domready--show">
				<?php the_post_thumbnail( $size, $attr ); ?>
			</div><!-- .post-thumbnail -->

		<?php else : ?>

		<a class="post-thumbnail" href="<?php the_permalink(); ?>" aria-hidden="true" tabindex="-1">
			<?php
			the_post_thumbnail(
				$size,
				array_merge(
					array(
						'alt' => the_title_attribute(
							array(
								'echo' => false,
							)
						),
					),
					$merge
				)
			);
			?>
		</a>

			<?php
		endif; // End is_singular().
	}
endif;

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
		$value = function_exists( 'get_field' ) ? get_field( $field, $post_id ) : get_post_meta( $post_id, $field, true );
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
		$args,
		array(
			'title_li'        => '',
			'show_option_all' => false,
			'echo'            => 0,
		)
	);

	$categories = wp_list_categories( $args );
	if ( $categories ) :
		?>
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

if ( ! function_exists( 'get_the_cookie_policy_link' ) ) {

	/**
	 * Returns the privacy policy link with formatting, when applicable.
	 *
	 * @since 4.9.6
	 *
	 * @param string $before Optional. Display before privacy policy link. Default empty.
	 * @param string $after  Optional. Display after privacy policy link. Default empty.
	 *
	 * @return string Markup for the link and surrounding elements. Empty string if it
	 *                doesn't exist.
	 */
	function get_the_cookie_policy_link( $before = '', $after = '' ) {
		$link               = '';
		$privacy_policy_url = get_cookie_policy_url();

		if ( $privacy_policy_url ) {
			$link = sprintf(
				'<a class="cookie-policy-link" href="%s">%s</a>',
				esc_url( $privacy_policy_url ),
				__( 'Cookie Policy' )
			);
		}

		/**
		 * Filters the privacy policy link.
		 *
		 * @since 4.9.6
		 *
		 * @param string $link               The privacy policy link. Empty string if it
		 *                                   doesn't exist.
		 * @param string $privacy_policy_url The URL of the privacy policy. Empty string
		 *                                   if it doesn't exist.
		 */
		$link = apply_filters( 'the_cookie_policy_link', $link, $privacy_policy_url );

		if ( $link ) {
			return $before . $link . $after;
		}

		return '';
	}
}

if ( ! function_exists( 'get_cookie_policy_url' ) ) {

	/**
	 * Retrieves the URL to the privacy policy page.
	 *
	 * @since 4.9.6
	 *
	 * @return string The URL to the privacy policy page. Empty string if it doesn't exist.
	 */
	function get_cookie_policy_url() {
		$url            = '';
		$policy_page_id = (int) get_option( 'wp_page_for_cookie_policy' );

		if ( ! empty( $policy_page_id ) && get_post_status( $policy_page_id ) === 'publish' ) {
			$url = (string) get_permalink( $policy_page_id );
		}

		/**
		 * Filters the URL of the privacy policy page.
		 *
		 * @since 4.9.6
		 *
		 * @param string $url            The URL to the privacy policy page. Empty string
		 *                               if it doesn't exist.
		 * @param int    $policy_page_id The ID of privacy policy page.
		 */
		return apply_filters( 'cookie_policy_url', $url, $policy_page_id );
	}
}

if ( ! function_exists( 'the_cookie_policy_link' ) ) {

	/**
	 * Displays the privacy policy link with formatting, when applicable.
	 *
	 * @since 4.9.6
	 *
	 * @param string $before Optional. Display before privacy policy link. Default empty.
	 * @param string $after  Optional. Display after privacy policy link. Default empty.
	 */
	function the_cookie_policy_link( $before = '', $after = '' ) {
		echo get_the_cookie_policy_link( $before, $after );
	}
}

/**
 * Prints post reading time
 *
 * @since 2.0.0
 *
 * @param int $words_per_minute Optional. The words per minute that will be used
 *                              in calculus
 *
 * @return string The HTML representing the post reading time
 */
function _svbk_post_reading_time( $words_per_minute = 200 ) {

		$word_count = get_post_meta( get_the_ID(), 'word_count', true );

	if ( ! $word_count ) {
		return;
	}

		$minutes = ceil( $word_count / $words_per_minute );

		$minutes = _svbk_get_post_reading_time( $words_per_minute );

		$est = sprintf( _n( '%s min', '%s mins', $minutes, '_svbk' ), $minutes );
	?>
		
		<span class="reading-time" data-wpm="<?php esc_attr_e( $words_per_minute ); ?>" data-wc="<?php esc_attr_e( $word_count ); ?>">
			<span  class="readind-time__label"><?php _ex( 'Reading', 'post reading time label', '_svbk' ); ?>: </span>
			<span class="reading-time__value"><?php echo $est; ?></span>
		</span>
		<?php
}

/**
 * Prints the selected contact info wrapped in a span tag
 *
 * @since 2.0.0
 *
 * @param string $info The field name to print (ex. phone, address)
 * @param string $link The URL to link the field to
 *
 * @return string
 */
function _svbk_contact_info( $info, $link = '' ) {

	$value = get_theme_mod( $info, false );

	if ( ! $value ) {
		return;
	}
	?>
	<span class="<?php esc_attr_e( $info ); ?>"><?php echo $value; ?></span>
	<?php
}


if ( ! function_exists( 'the_post_type' ) ) {

	/**
	 * Prints the post type of the current post or of a given post.
	 *
	 * @param int|WP_Post|null $post Optional. Post ID or post object. Default is global $post.
	 * @return void
	 */
	function the_post_type( $post = null ) {
		echo esc_attr( get_post_type( $post ) );
	}
}
