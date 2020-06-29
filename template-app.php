<?php
/**
 * The template for displaying all single posts
 * Template Name: App 模板
 * Template Post Type: page
 * @link    https://developer.wordpress.org/themes/basics/template-hierarchy/#single-post
 *
 * @package _s
 */

get_header(); ?>

    <div id="content" class="site__content">

        <div id="primary" class="content__primary">
            <main id="main" class="site__main">

                <?php while (have_posts()) : the_post(); ?>

                    <?php the_content(); ?>

                <?php endwhile; ?>

            </main>
        </div>

    </div><!-- #content -->

<?php get_footer();
