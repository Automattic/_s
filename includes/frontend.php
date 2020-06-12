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

    wp_enqueue_script('_s-main', _s_asset('scripts/main.js'), ['jquery'], '20151215', true);

    if (is_singular() && comments_open() && get_option('thread_comments')) {
        wp_enqueue_script('comment-reply');
    }
}


add_action('admin_enqueue_scripts', function ()
{
    wp_enqueue_style('_s-admin', _s_asset('styles/admin.css'));
});


add_action('wp_footer', function ()
{
    if (SCRIPT_DEBUG) {
        echo '<script id="__bs_script__">//<![CDATA[
    document.write("<script async src=\'http://HOST:3000/browser-sync/browser-sync-client.js?v=2.26.7\'><\/script>".replace("HOST", location.hostname));
//]]></script>
';
    }
});

