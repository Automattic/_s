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

    <div class="py-24 text-center" style="background: url(https://res.cloudinary.com/timber/image/upload/v1495730898/pricing/blog-header.png) center 0px no-repeat, linear-gradient(rgb(19, 15, 33), rgb(34, 33, 63));">
        <div class="container">
            <h1 class="rs-post__title text-white">
                <?php the_title(); ?>
            </h1>
            <div class="rs-post__meta justify-center">
                <div class="rs-post__author">
                    By <?php the_author(); ?>
                </div>
                <div class="rs-post__date">
                    <?php the_time('M,d'); ?>
                </div>
            </div>
        </div>
    </div>

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

                    <?php the_post_navigation(); ?>

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
