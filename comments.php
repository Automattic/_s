<?php
/**
 * The template for displaying comments.
 *
 * This is the template that displays the area of the page that contains both the current comments
 * and the comment form.
 *
 * @link https://codex.wordpress.org/Template_Hierarchy
 *
 * @package _bem
 */

/*
 * If the current post is protected by a password and
 * the visitor has not yet entered the password we will
 * return early without loading the comments.
 */
if ( post_password_required() ) {
	return;
}
?>

<div id="comments" class="comments-area _comments">

	<?php
	// You can start editing here -- including this comment!
	if ( have_comments() ) : ?>
		<h2 class="comments-title _comments__title">
			<?php
				printf( // WPCS: XSS OK.
					esc_html( _nx( 'One thought on &ldquo;%2$s&rdquo;', '%1$s thoughts on &ldquo;%2$s&rdquo;', get_comments_number(), 'comments title', '_bem' ) ),
					number_format_i18n( get_comments_number() ),
					'<span class="_comments__post-title">' . get_the_title() . '</span>'
				);
			?>
		</h2>

		<?php if ( get_comment_pages_count() > 1 && get_option( 'page_comments' ) ) : // Are there comments to navigate through? ?>
		<nav id="comment-nav-above" class="navigation comment-navigation _comments__nav" role="navigation">
			<h2 class="screen-reader-text"><?php esc_html_e( 'Comment navigation', '_bem' ); ?></h2>
			<div class="nav-links _comments__nav-links">

				<div class="nav-previous _comments__nav-link _comments__nav-link--previous"><?php previous_comments_link( esc_html__( 'Older Comments', '_bem' ) ); ?></div>
				<div class="nav-next _comments__nav-link _comments__nav-link--next"><?php next_comments_link( esc_html__( 'Newer Comments', '_bem' ) ); ?></div>

			</div><!-- .nav-links -->
		</nav><!-- #comment-nav-above -->
		<?php endif; // Check for comment navigation. ?>

		<ol class="comment-list _comments__list">
			<?php
				wp_list_comments( array(
					'style'      => 'ol',
					'short_ping' => true,
					'callback'   => '_bem_comments'
				) );
			?>
		</ol><!-- .comment-list -->

		<?php if ( get_comment_pages_count() > 1 && get_option( 'page_comments' ) ) : // Are there comments to navigate through? ?>
		<nav id="comment-nav-above" class="navigation comment-navigation _comments__nav" role="navigation">
			<h2 class="screen-reader-text"><?php esc_html_e( 'Comment navigation', '_bem' ); ?></h2>
			<div class="nav-links _comments__nav-links">

				<div class="nav-previous _comments__nav-link _comments__nav-link--previous"><?php previous_comments_link( esc_html__( 'Older Comments', '_bem' ) ); ?></div>
				<div class="nav-next _comments__nav-link _comments__nav-link--next"><?php next_comments_link( esc_html__( 'Newer Comments', '_bem' ) ); ?></div>

			</div><!-- .nav-links -->
		</nav><!-- #comment-nav-above -->
		<?php endif; // Check for comment navigation.

	endif; // Check for have_comments().


	// If comments are closed and there are comments, let's leave a little note, shall we?
	if ( ! comments_open() && get_comments_number() && post_type_supports( get_post_type(), 'comments' ) ) : ?>

		<p class="no-comments _comments__no-comment"><?php esc_html_e( 'Comments are closed.', '_bem' ); ?></p>
	<?php
	endif;

	comment_form();
	?>

</div><!-- #comments -->
