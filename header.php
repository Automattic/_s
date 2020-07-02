<?php
/**
 * The header for our theme
 *
 * This is the template that displays all of the <head> section and everything up until <div id="content">
 *
 * @link    https://developer.wordpress.org/themes/basics/template-files/#template-partials
 *
 * @package _s
 */

?>
<!doctype html>
<html <?php language_attributes(); ?>>
<head>
    <meta charset="<?php bloginfo('charset'); ?>">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <link rel="profile" href="https://gmpg.org/xfn/11">

    <?php wp_head(); ?>
</head>

<body <?php body_class(); ?>>
<div id="page" class="site">
    <a class="skip-link screen-reader-text" href="#content">
        <?php esc_html_e('Skip to content', '_s'); ?>
    </a>

    <?php
    do_action('_s_before_site');
    do_action('_s_before_header');
    ?>

    <header id="masthead" class="site__header">
        <div class="container">
            <div class="site__branding">
                <?php the_custom_logo(); ?>

                <?php if ( ! has_custom_logo()) : ?>
                    <h1><a href="<?= home_url(); ?>"><?php bloginfo('name'); ?></a></h1>
                <?php endif; ?>
            </div>

            <nav id="site-navigation" class="site__nav main-navigation">
                <button class="menu-toggle" aria-controls="primary-menu" aria-expanded="false">
                    <?php esc_html_e('Menu', '_s'); ?>
                </button>
                <?php
                wp_nav_menu([
                    'theme_location' => 'menu-primary',
                    'menu_id'        => 'primary-menu',
                    'menu_class'     => 'sm sm-menu nav-menu',
                ]);
                ?>
            </nav>

            <ul class="site-header-cart menu">
                <li>
                    <div class="cart-click">
                        <a class="cart-contents" href="#" title="View your shopping cart">
                            <span class="amount"><span class="woocommerce-Price-amount amount">
                                    <span class="woocommerce-Price-currencySymbol">$</span>551.82</span>
                            </span>

                            <span class="count">18</span>
                        </a>
                    </div>
                </li>
            </ul>

        </div>
    </header>
