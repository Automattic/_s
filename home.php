<?php
/**
 * The template for displaying all pages
 *
 * This is the template that displays all pages by default.
 * Please note that this is the WordPress construct of pages
 * and that other 'pages' on your WordPress site may use a
 * different template.
 *
 * @link https://codex.wordpress.org/Template_Hierarchy
 *
 * @package _svbk
 */

get_header(); ?>

	<div id="primary" class="content-area">
		<main id="main" class="site-main" role="main">

				<?php if ( have_posts() ) : ?>

					<header>
						<h1 class="page-title screen-reader-text"><?php single_post_title(); ?></h1>
					</header>

					<?php
					if( $categories  = wp_list_categories(array('title_li'=>'', 'show_option_all'=>__('All categories', '_svbk'), 'echo'=>0 )) ): ?>
					<ul id="category-filter" class="ajax-filter filter-list">
						<?php echo $categories; ?>
					</ul>
					<?php endif; ?>

					<div class="posts-list post-thumbs ajax-content">
					<?php

					/* Start the Loop */
					while ( have_posts() ) : the_post();

						/*
						 * Include the Post-Format-specific template for the content.
						 * If you want to override this in a child theme, then include a file
						 * called content-___.php (where ___ is the Post Format name) and that will be used instead.
						 */
						get_template_part( 'template-parts/thumb', get_post_type() );

					endwhile;
					?>
					</div>
					<?php
					the_posts_navigation();

				else :

					get_template_part( 'template-parts/content', 'none' );

				endif; ?>

		</main><!-- #main -->
	</div><!-- #primary -->

<?php
get_sidebar();
get_footer();
