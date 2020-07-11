<?php
/**
 * These functions can be replaced via plugins. If plugins do not redefine these
 * functions, then these will be used instead.
 *
 * @package _s
 */

add_filter('nav_menu_css_class', '_s_menu_css_class', 10, 4);
add_filter('walker_nav_menu_start_el', '_s_render_mega_menu_content', 10, 4);
add_filter('nav_menu_submenu_css_class', '_s_submenu_css_class');
add_filter('widget_nav_menu_args', '_s_widget_menu_args');

if ( ! function_exists('_s_submenu_css_class')) {
    /**
     * 导航菜单子菜单添加 CSS 类
     *
     * @param $classes
     *
     * @return mixed
     */
    function _s_submenu_css_class($classes)
    {
        $classes[] = 'has-submenu';

        return $classes;
    }
}


if ( ! function_exists('_s_widget_menu_args')) {
    /**
     * 导航菜单添加 CSS 类
     *
     * @param $nav_menu_args
     *
     * @return mixed
     */
    function _s_widget_menu_args($nav_menu_args)
    {
        $nav_menu_args[ 'menu_class' ] = 'sm sm-vertical sm-menu nav-menu';

        return $nav_menu_args;
    }
}


if ( ! function_exists('_s_menu_css_class')) {
    /**
     * Add mega menu class to nav menu
     *
     * @param $classes
     * @param $item
     * @param $args
     * @param $depth
     *
     * @return mixed
     */
    function _s_menu_css_class($classes, $item, $args, $depth)
    {
        $menu_type    = get_post_meta($item->ID, '_menu_type', true);
        $menu_content = get_post_meta($item->ID, '_menu_content', true);

        if ($menu_type && $menu_content) {
            $classes[] = 'sm-mega-menu';
        }

        return $classes;
    }
}


if ( ! function_exists('_s_render_mega_menu_content')) {
    /**
     * 渲染自定义到导航菜单内容
     *
     * @param $item_output
     * @param $item
     * @param $depth
     * @param $args
     *
     * @return string
     */
    function _s_render_mega_menu_content($item_output, $item, $depth, $args)
    {
        $menu_type    = get_post_meta($item->ID, '_menu_type', true);
        $menu_content = get_post_meta($item->ID, '_menu_content', true);

        $html = '';
        if ($menu_content) {
            $html .= '<ul class="mega-menu">';
            $html .= '<li>';
            switch ($menu_type) {
                case 'shortcode':
                    $html .= do_shortcode($menu_content);

                    break;
                default:
                    echo "";
            }

            $html .= '</ul>';
            $html .= '</li>';
        }

        return $item_output . $html;

    }
}
