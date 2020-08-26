<?php
/**
 * The template for displaying 404 pages (not found)
 *
 * @link    https://codex.wordpress.org/Creating_an_Error_404_Page
 *
 * @package _s
 */

get_header();
?>

    <div id="content" class="site__content">
        <div id="primary" class="content__primary">
            <main id="main" class="site__main">

                <section class="error-404 not-found">
                    <div class="container--focus rs-empty">

                        <div class="rs-empty__icon">
                            <img src="<?= _s_asset('images/404.svg'); ?>" alt="404 Error" />
                        </div>

                        <header class="rs-empty__title">
                            <?php esc_html_e('Oops! That page can&rsquo;t be found.', '_s'); ?>
                        </header><!-- .page-header -->

                        <p class="rs-empty__subtitle">
                            <?php esc_html_e('It looks like nothing was found at this location. Maybe try one of the links below or a search?', '_s'); ?>
                        </p>

                        <div class="rs-empty__action input-group input-inline">
                            <?php get_search_form(); ?>
                        </div>

                    </div>
                </section>

            </main><!-- #main -->
        </div><!-- #primary -->
    </div><!-- #content -->

<?php
get_footer();
