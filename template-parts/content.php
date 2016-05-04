<?php
/**
 * Template part for displaying posts.
 *
 * @link https://codex.wordpress.org/Template_Hierarchy
 *
 * @package _bem
 */

?>

<article id="post-<?php the_ID(); ?>" <?php post_class( '_content__article _content__article--post' ); ?>>
	<header class="entry-header _content__header _content__header--post">
		<?php
			if ( is_single() ) {
				the_title( '<h1 class="entry-title _content__title _content__title--post">', '</h1>' );
			} else {
				the_title( '<h2 class="entry-title _content__title _content__title--post"><a class="_content__title-link _content__title-link--post" href="' . esc_url( get_permalink() ) . '" rel="bookmark">', '</a></h2>' );
			}
			
			if ( has_post_thumbnail() ) {
				?>
				<div class="_post-thumbnail">
					<?php the_post_thumbnail( 'full', array( 'class' => '_post-thumbnail__image' ) ); ?>
				</div>
				<?php
			}

		if ( 'post' === get_post_type() ) : ?>
		<div class="entry-meta _content__meta _content__meta--post">
			<?php _bem_posted_on( 'post' ); ?>
		</div><!-- .entry-meta -->
		<?php
		endif; ?>
	</header><!-- .entry-header -->

	<div class="entry-content _content__article-content _content__article-content--post">
		<?php
			the_content( sprintf(
				/* translators: %s: Name of current post. */
				wp_kses( __( 'Continue reading %s <span class="meta-nav">&rarr;</span>', '_bem' ), array( 'span' => array( 'class' => array() ) ) ),
				the_title( '<span class="screen-reader-text">"', '"</span>', false )
			) );

			wp_link_pages( array(
				'before' => '<div class="page-links">' . esc_html__( 'Pages:', '_bem' ),
				'after'	=> '</div>',
			) );
		?>
	</div><!-- .entry-content -->

	<footer class="entry-footer _content__footer _content__footer--post">
		<?php _bem_entry_footer( 'post' ); ?>
	</footer><!-- .entry-footer -->
</article><!-- #post-## -->