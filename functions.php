<?php
/**
 * _s functions and definitions
 *
 * @link    https://developer.wordpress.org/themes/basics/theme-functions/
 *
 * @package _s
 */

require_once(get_theme_file_path('vendor/autoload.php'));


/**
 * Theme support setup
 */
require_once(get_theme_file_path('includes/setup.php'));


/**
 * Theme helper functions
 */
require_once(get_theme_file_path('includes/helpers.php'));


/**
 * Theme Shortcode
 */
require_once(get_theme_file_path('includes/shortcodes.php'));


/**
 * Custom fields
 */
require_once(get_theme_file_path('includes/fields.php'));


/**
 * Theme Assets
 */
require_once(get_theme_file_path('includes/frontend.php'));


/**
 * pluggable functions
 */
require_once(get_theme_file_path('includes/pluggable.php'));


/**
 * Custom template tags for this theme.
 */
require_once(get_theme_file_path('includes/template-tags.php'));


/**
 * Customizer additions.
 */
require_once(get_theme_file_path('includes/customizer.php'));

/**
 * Load WooCommerce compatibility file.
 */
if (class_exists('WooCommerce')) {
    require_once(get_theme_file_path('includes/woocommerce.php'));
}

