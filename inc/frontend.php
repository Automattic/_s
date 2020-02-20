<?php
/**
 * @package _s
 */

add_action('wp_enqueue_scripts', '_s_scripts');

/**
 * Enqueue scripts and styles.
 */
function _s_scripts()
{
    wp_enqueue_style('_s-main', _s_asset('styles/main.css'));

    wp_enqueue_script('_s-navigation', _s_asset('scripts/main.js'), [], '20151215', true);

    if (is_singular() && comments_open() && get_option('thread_comments')) {
        wp_enqueue_script('comment-reply');
    }
}
