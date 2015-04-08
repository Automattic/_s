<?php
/**
 * Custom functionality for this theme.
 *
 * @package _s
 */

/* ==========================================================================
   Comments
   ========================================================================== */

if ( ! function_exists( '_s_comment' ) ) :
/**
 * Template for comments and pingbacks.
 *
 * Used as a callback by wp_list_comments() for displaying the comments.
 */
function _s_comment( $comment, $args, $depth ) {
    $GLOBALS['comment'] = $comment;

    if ( 'pingback' == $comment->comment_type || 'trackback' == $comment->comment_type ) : ?>

    <li id="comment-<?php comment_ID(); ?>" <?php comment_class(); ?>>
        <div class="comment-body">
            <?php _e( 'Pingback:', '_s' ); ?> <?php comment_author_link(); ?> <?php edit_comment_link( __( 'Edit', '_s' ), '<span class="edit-link">', '</span>' ); ?>
        </div>

    <?php else : ?>

    <li id="comment-<?php comment_ID(); ?>" <?php comment_class( empty( $args['has_children'] ) ? '' : 'parent' ); ?>>
        <article id="div-comment-<?php comment_ID(); ?>" class="comment-body">
            <footer class="comment-meta">
                <div class="comment-author vcard">
                    <?php if ( 0 != $args['avatar_size'] ) { echo get_avatar( $comment, $args['avatar_size'] ); } ?>
                    <?php printf( __( '%s <span class="says">says:</span>', '_s' ), sprintf( '<cite class="fn">%s</cite>', get_comment_author_link() ) ); ?>
                </div><!-- .comment-author -->

                <div class="comment-metadata">
                    <a href="<?php echo esc_url( get_comment_link( $comment->comment_ID ) ); ?>">
                        <time datetime="<?php comment_time( 'c' ); ?>">
                            <?php printf( _x( '%1$s at %2$s', '1: date, 2: time', '_s' ), get_comment_date(), get_comment_time() ); ?>
                        </time>
                    </a>
                    <?php edit_comment_link( __( 'Edit', '_s' ), '<span class="edit-link">', '</span>' ); ?>
                </div><!-- .comment-metadata -->

                <?php if ( '0' == $comment->comment_approved ) : ?>
                <p class="comment-awaiting-moderation"><?php _e( 'Your comment is awaiting moderation.', '_s' ); ?></p>
                <?php endif; ?>
            </footer><!-- .comment-meta -->

            <div class="comment-content">
                <?php comment_text(); ?>
            </div><!-- .comment-content -->

            <?php
                comment_reply_link( array_merge( $args, array(
                    'add_below' => 'div-comment',
                    'depth'     => $depth,
                    'max_depth' => $args['max_depth'],
                    'before'    => '<div class="reply">',
                    'after'     => '</div>',
                ) ) );
            ?>
        </article><!-- .comment-body -->

    <?php
    endif;
}
endif; // ends check for _s_comment()





/* ==========================================================================
   Excerpt / Content
   ========================================================================== */

// Append read more link to excerpt
function _s_excerpt_more( $more ) {

    global $post;
    return '... <a class="more-link" href="' . get_permalink( $post->ID ) . '">Read More &raquo;</a>';
}
add_filter('excerpt_more', '_s_excerpt_more');





if ( ! function_exists( '_s_excerpt' ) ) :
/**
 * Limit the Excerpt by 'x' amount of words
 *
 * @param int $limit, str $copy
 * @return str $content
 */
function _s_excerpt( $limit, $copy = NULL ) {

    global $post;

    if( $copy ) {
        $excerpt = explode( ' ', $copy, $limit );
    } else {
        $excerpt = explode( ' ', get_the_excerpt(), $limit );
    }

    if ( count( $excerpt ) >= $limit ) {
        array_pop( $excerpt );
        $excerpt = implode( " ",$excerpt ).'...';
    } else {
        $excerpt = implode( " ",$excerpt );
    }
    $excerpt = preg_replace( '`[[^]]*]`','',$excerpt );

    return $excerpt;
}
endif;





if ( ! function_exists( '_s_content' ) ) :
/**
 * Limit the Content by 'x' amount of words
 *
 * @param int $limit, str $copy
 * @return str $content
 */
function _s_content( $limit, $copy = NULL ) {

    if( $copy ) {
        $content = explode( ' ', $copy, $limit );
    } else {
        $content = explode( ' ', get_the_content(), $limit );
    }

    if ( count( $content ) >= $limit ) {
        array_pop( $content );
        $content = implode( " ",$content ).'...';
    } else {
        $content = implode( " ",$content );
    }
    $content = preg_replace( '/[+]/','', $content );
    $content = apply_filters( 'the_content', $content );
    $content = str_replace( ']]>', ']]>', $content );

    return $content;
}
endif;





/* ==========================================================================
   Pagination
   ========================================================================== */

if ( ! function_exists( '_s_pagination' ) ) :
/**
* Display custom pagination
*
* @param str $echo
* @return str $r
*/
function _s_pagination( $echo = true ) {

   global $wp_query;

   $total_pages  = $wp_query->max_num_pages;
   $current_page = max( 1, get_query_var('paged') );

   $big = 999999999; // need an unlikely integer

   $pages = paginate_links( array(
       'base'               => str_replace( $big, '%#%', esc_url( get_pagenum_link( $big ) ) ),
       'format'             => '?paged=%#%',
       'total'              => $total_pages,
       'current'            => $current_page,
       'prev_next'          => true,
       'prev_text'          => '&laquo; Prev',
       'next_text'          => 'Next &raquo;',
       'type'               => 'array',
       'show_all'           => false,
       'end_size'           => 1,
       'mid_size'           => 2,
       'add_args'           => false,
       'add_fragment'       => '',
       'before_page_number' => '',
       'after_page_number'  => ''
   ) );

   // only show pagination if needed
   if( !$pages ) // returns null if only 1 page of results
       return;

   $r = '<div class="pagination-wrap pagination-centered">' . "\n";
   $r .= '    <ul class="pagination">' . "\n";

   foreach( $pages as $page ) {
       $r .= '        <li class="pagination__item">' . $page . '</li>' . "\n";
   }

   $r .= '    </ul>' . "\n";

   $page_count = _s_result_count_output( array( 'echo' => false ) );

   $r .= '    ' . $page_count . "\n";
   $r .= '</div>' . "\n";

   if( $echo ) {
       echo $r;
   } else {
       return $r;
   }
}
endif;





if ( ! function_exists( '_s_result_count' ) ) :
/**
 * Result Count Meta
 * @param  boolean $echo echo or return result
 * @return string        output
 */
function _s_result_count( $echo = true ) {

    $r = '';

    global $wp_query;

    $total_pages  = $wp_query->max_num_pages;
    $total_items  = $wp_query->found_posts;
    $current_page = max( 1, get_query_var('paged') );
    $per_page     = $wp_query->get( 'posts_per_page' );
    $page_start   = ( $per_page * $current_page ) - $per_page + 1;
    $page_end     = min( $total_items, $per_page * $current_page );

    if ( 1 == $total_items ) :

        __( 'Showing: 1 Result', '_s' );

    elseif ( $total_items <= $per_page || -1 == $per_page ) :

        sprintf( __( 'Showing: %d Results', '_s' ), $total_items );

    else :

        $r .= 'Showing: ' . sprintf( _x( '%1$d&ndash;%2$d of %3$d', '%1$d = page_start, %2$d = page_end, %3$d = total_items', '_s' ), $page_start, $page_end, $total_items ) . "\n";

    endif;

    if ( $echo ) {
        echo $r;
    } else {
        return $r;
    }

}
endif;





if ( ! function_exists( '_s_result_count_output' ) ) :
/**
 * Result Count Meta Output
 * @param array $args options
 * @return string           html output
 */
function _s_result_count_output( $args = array() ) {

    $r = '';

    $defaults = array (
        'container'       => 'div',
        'container_class' => '',
        'echo'            => true
    );

    // Parse incoming $args into an array and merge it with $defaults
    $args = wp_parse_args( $args, $defaults );

    // OPTIONAL: Declare each item in $args as its own variable i.e. $type, $before.
    extract( $args, EXTR_SKIP );

    $result = _s_result_count( false );

    if ( $result ) :

        $classes = ( $container_class ) ? ' ' . $container_class : '';

        $r = '<' . $container . ' class="page-count' . $classes . '">' . $result . '</' . $container . '>';

    endif;

    if ( $echo ) {
        echo $r;
    } else {
        return $r;
    }

}
endif;





/* ==========================================================================
   Social Icons
   ========================================================================== */

if ( ! function_exists( '_s_social_icons' ) ) :
/**
 * Output social icons
 *
 * @param boolean $echo echo or return result
 * @return str $r
 */
function _s_social_icons( $args = array() ) {

    $defaults = array (
        'container_class' => '',
        'field_id'        => false,
        'echo'            => true
    );

    // Parse incoming $args into an array and merge it with $defaults
    $args = wp_parse_args( $args, $defaults );

    // OPTIONAL: Declare each item in $args as its own variable i.e. $type, $before.
    extract( $args, EXTR_SKIP );

    $r = false;

    if( $profiles = get_field( 'social_profiles', $field_id ) ) :

        $c = 1;
        $total = count( $profiles );

        $container_class = ( $container_class ) ? ' ' . $container_class : '';

        $r .= '<ul class="social-profiles' . $container_class . '">' . "\n";

        while( has_sub_field( 'social_profiles', $field_id ) ) :

            // Account for email addresses
            $link = get_sub_field( 'link' );
            $link = ( get_sub_field( 'profile' ) === 'email' && ! stristr( $link, 'mailto:' ) ) ? 'mailto:' . $link : $link;

            $open_comment = ( $c < $total ) ? '<!--': '';
            $close_comment = ( $c !== 1 ) ? '-->': '';

            $r .= $close_comment . '<li class="social-profiles__item"><a class="social-profiles__link icon-' . get_sub_field( 'profile' ) . '" href="' . esc_attr( $link ) . '" target="_blank"><span class="visuallyhidden">' . get_sub_field( 'profile' ) . '</span></a></li>' . $open_comment . "\n";

            $c++;

        endwhile;

        $r .= '</ul>' . "\n";

    endif;

    if( $echo ) :
        echo $r;
    else :
        return $r;
    endif;
}
endif;
