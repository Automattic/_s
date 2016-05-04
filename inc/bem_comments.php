<?php
/**
 * Custom _bem comments
 *
 * @package _bem
 */

/**
 * custom comments
 */
function _bem_comments( $comment, $args, $depth ) {
	$GLOBALS[ 'comment' ] = $comment;
	switch ( $comment->comment_type ) :
		case 'pingback' :
		case 'trackback' :
			if ( 'div' == $args[ 'style' ] )
			{
				$tag = 'div';
				$add_below = 'comment';
			} else
			{
				$tag = 'li';
				$add_below = 'div-comment';
			}
			?>
			<li <?php comment_class( '_comments__list-item' ); ?> id="comment-<?php comment_ID(); ?>">
				<p><?php esc_html_e( 'Pingback:', 'pietergoosen' ); ?> <?php comment_author_link(); ?> <?php edit_comment_link( __( '(Edit)', 'pietergoosen' ), '<span class="edit-link">', '</span>' ); ?></p>
			<?php
			break;
		default :
			global $post;
			?>
			<li <?php comment_class( '_comments__list-item' ); ?> id="li-comment-<?php comment_ID(); ?>">
				<article id="div-comment-<?php comment_ID(); ?>" class="comment-body _comments__article">
					<footer class="comment-meta __comments__footer">
						<div class="comment-author vcard _comments__author">
							<?php if ( 0 != $args[ 'avatar_size' ] ) echo get_avatar( $comment, $args[ 'avatar_size' ], null, null, array( 'class' => '_comments__avatar' ) ); ?>
							<?php printf( __( '%s <span class="says _comments__author-says">says:</span>' ), sprintf( '<b class="fn _comments__author-name">%s</b>', get_comment_author_link() ) ); ?>
						</div><!-- .comment-author -->

						<div class="comment-metadata _comments__metadata">
							<a class="_comments__metadata-link" href="<?php echo esc_url( get_comment_link( $comment->comment_ID ) ); ?>">
								<time class="_comments__metadata-time" datetime="<?php comment_time( 'c' ); ?>">
									<?php printf( _x( '%1$s at %2$s', '1: date, 2: time' ), get_comment_date(), get_comment_time() ); ?>
								</time>
							</a>
							<?php edit_comment_link( __( 'Edit', 'pietergoosen' ), '<span class="edit-link _comments__edit-item">', '</span>' ); ?>
						</div><!-- .comment-metadata -->
						<?php if ( '0' == $comment->comment_approved ) : ?>
							<p class="comment-awaiting-moderation _comments__awaiting-moderation"><?php esc_html_e( 'Your comment is awaiting moderation.', 'pietergoosen' ); ?></p>
						<?php endif; ?>
					</footer><!-- .comment-meta -->
					<div class="comment-content _comments__content">
						<?php comment_text(); ?>
					</div><!-- .comment-content -->

					<div class="reply _comments__reply-item">
						<?php comment_reply_link( array_merge( $args, array( 'add_below' => 'div-comment', 'depth' => $depth, 'max_depth' => $args[ 'max_depth' ] ) ) ); ?>
					</div><!-- .reply -->
				</article><!-- .comment-body -->
			<?php
			break;
	endswitch;
}

add_filter( 'edit_comment_link', '_bem_edit_comment_link' );

/**
 * custom comment edit link
 */
function _bem_edit_comment_link($output) {
	return str_replace( 'comment-edit-link', 'comment-edit-link _comments__edit-link', $output);
}

add_filter( 'comment_reply_link', '_bem_comment_reply_link' );

/**
* custom comment reply link
*/
function _bem_comment_reply_link($output) {
	return str_replace( 'comment-reply-link', 'comment-reply-link _comments__reply-link', $output);
}