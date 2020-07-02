<?php
/**
 * The template for displaying search results pages
 *
 * @link    https://developer.wordpress.org/themes/basics/template-hierarchy/#search-result
 *
 * @package _s
 */

get_header();
?>
    <div id="content" class="site__content">
        <section id="primary" class="content__primary">
            <main id="main" class="site__main">

                <?php if (have_posts()) : ?>

                    <header class="page-header">
                        <h1 class="page-title">
                            <?php
                            /* translators: %s: search query. */
                            printf(esc_html__('Search Results for: %s', '_s'), '<span>' . get_search_query() . '</span>');
                            ?>
                        </h1>
                    </header><!-- .page-header -->

                    <?php
                    /* Start the Loop */
                    while (have_posts()) :
                        the_post();

                        /**
                         * Run the loop for the search to output the results.
                         * If you want to overload this in a child theme then include a file
                         * called content-search.php and that will be used instead.
                         */
                        get_template_part('templates/content', get_post_type());

                    endwhile;

                    the_posts_navigation();

                else :

                    get_template_part('templates/content', 'none');

                endif;
                ?>

            </main><!-- #main -->
        </section><!-- #primary -->

    </div><!-- #content -->

<?php get_footer();

