<?php
/**
 * The Sidebar containing the main body,widget areas and the loop.
 *
 * @package Maquina
 * @file
 * @see /inc/theme-widgets.php
 */
?>
		<?php do_action( 'before_sidebar' ); ?>
		<?php if ( ! dynamic_sidebar( 'left-sidebar' ) ) : ?>
		<?php endif; // end left-sidebar ?>

	<div id="primary" class="content-area">
		
			<?php do_action( 'before_sidebar' ); ?>
			<?php if ( ! dynamic_sidebar( 'content-sidebar' ) ) : ?>
			<?php endif; // end content-sidebar ?>
		
		<div id="content" class="site-content" role="main">

		<?php if ( have_posts() ) : ?>

		<?php /* Start the Loop */ ?>
			
		<?php if ( has_post_thumbnail() ) {
				
			 /* check if the post has a Post Thumbnail assigned to it. */
			 
			the_post_thumbnail(); 
		} 
		?>
		<?php while ( have_posts() ) : the_post(); ?>

		<?php
				/* Include the Post-Format-specific template for the content.
				 * If you want to overload this in a child theme then include a file
				 * called content-___.php (where ___ is the Post Format name) and that will be used instead.
				 */
		get_template_part( 'content', get_post_format() );
		?>

		<?php endwhile; ?>

			<?php _s_content_nav( 'nav-below' ); ?>

		<?php else : ?>

			<?php get_template_part( 'no-results', 'index' ); ?>

		<?php endif; ?>

		</div><!-- #content -->
	</div><!-- #primary -->
	
		<?php do_action( 'before_sidebar' ); ?>
		<?php if ( ! dynamic_sidebar( 'right-sidebar' ) ) : ?>
		<?php endif; // end right-sidebar ?>

		<?php do_action( 'before_sidebar' ); ?>
		<?php if ( ! dynamic_sidebar( 'sidebar-one' ) ) : ?>
		<?php endif; // end sidebar-one ?>
		
		<?php do_action( 'before_sidebar' ); ?>
		<?php if ( ! dynamic_sidebar( 'sidebar-two' ) ) : ?>
		<?php endif; // end sidebar-two ?>