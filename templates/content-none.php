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

    <div class="empty">

        <div class="empty-icon">
            <i class="icon icon-3x icon-people"></i>
        </div>

        <p class="empty-title">
            <?php esc_html_e('Nothing Found', '_s'); ?>
        </p>

        <?php
        if (is_home() && current_user_can('publish_posts')) :

            printf(
                '<p>' . wp_kses(
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

            <p class="empty-subtitle">
                <?php esc_html_e('Sorry, but nothing matched your search terms. Please try again with some different keywords.', '_s'); ?>
            </p>

            <div class="empty-action input-group input-inline">
                <?php get_search_form(); ?>
            </div>

        <?php else : ?>

            <p><?php esc_html_e('It seems we can&rsquo;t find what you&rsquo;re looking for. Perhaps searching can help.', '_s'); ?></p>
            <?php
            get_search_form(); ?>

        <?php endif; ?>
    </div>
</section>
