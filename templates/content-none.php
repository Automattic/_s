<?php
/**
 * Template part for displaying a message that posts cannot be found
 *
 * @link    https://developer.wordpress.org/themes/basics/template-hierarchy/
 *
 * @package _s
 */

?>

<section class="no-results not-found">
    <div class="container--focus rs-empty">

        <div class="rs-empty__icon">
            <div class="rs-empty__icon">
                <img src="<?= _s_asset('images/empty.svg'); ?>" alt="Nothing found" />
            </div>
        </div>

        <header class="rs-empty__title">
            <?php esc_html_e('Nothing Found', '_s'); ?>
        </header>

        <?php
        if (is_home() && current_user_can('publish_posts')) :

            printf(
                '<p class="rs-empty__subtitle">' . wp_kses(
                /* translators: 1: link to WP admin new post page. */
                    __('Ready to publish your first post? <a href="%1$s">Get started here</a>.', '_s'),
                    [
                        'a' => [
                            'href' => [],
                        ],
                    ]
                ) . '</p>',
                esc_url(admin_url('post-new.php'))
            );
            ?>

        <?php elseif (is_search()) : ?>

            <p class="rs-empty__subtitle">
                <?php esc_html_e('Sorry, but nothing matched your search terms. Please try again with some different keywords.', '_s'); ?>
            </p>

            <div class="rs-empty__action input-group input-inline">
                <?php get_search_form(); ?>
            </div>

        <?php else : ?>

            <p class="rs-empty__subtitle">
                <?php esc_html_e('It seems we can&rsquo;t find what you&rsquo;re looking for. Perhaps searching can help.', '_s'); ?>
            </p>

            <div class="rs-empty__action input-group input-inline">
                <?php get_search_form(); ?>
            </div>

        <?php endif; ?>
    </div>
</section>
