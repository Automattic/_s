<?php
/**
 * The main template file
 *
 * This is the most generic template file in a WordPress theme
 * and one of the two required files for a theme (the other being style.css).
 * It is used to display a page when nothing more specific matches a query.
 * E.g., it puts together the home page when no home.php file exists.
 *
 * @link    https://developer.wordpress.org/themes/basics/template-hierarchy/
 *
 * @package _s
 */

get_header();
?>
    <div id="content" class="site__content">

        <div id="primary" class="content__primary">
            <main id="main" class="site__main">

                <?php woocommerce_content(); ?>

            </main><!-- #main -->
        </div><!-- #primary -->

    </div><!-- #content -->

<?php get_footer();
