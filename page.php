<?php
/**
 * The template for displaying all single posts
 *
 * @link    https://developer.wordpress.org/themes/basics/template-hierarchy/#single-post
 *
 * @package _s
 */

get_header();
?>

    <div id="content" class="site__content">

        <div id="primary" class="content__primary">
            <main id="main" class="site__main">

                <?php while (have_posts()) : the_post(); ?>

                    <div class="rs-post">
                        <div class="rs-post__header">
                            <h1 class="rs-post__title">
                                <?php the_title(); ?>
                            </h1>
                            <div class="rs-post__meta">
                                <div class="rs-post__author">
                                    By <?php the_author(); ?>
                                </div>
                                <div class="rs-post__date">
                                    <?php the_time('M,d'); ?>
                                </div>
                            </div>
                        </div>
                        <div class="typo rs-post__content">
                            <?php the_content(); ?>
                        </div>
                    </div>

                    <?php
                    if (comments_open() || get_comments_number()) :
                        comments_template();
                    endif;
                    ?>

                <?php endwhile; ?>

            </main>
        </div>

        <?php get_sidebar(); ?>

    </div><!-- #content -->

<?php get_footer();
