<?php
/**
 * 文章类型、分类方法、存档设置、站点设置等自定义字段
 *
 * @package wpzhiku
 */

if ( ! class_exists('Carbon_Fields\Container')) {
    return;
}

use Carbon_Fields\Container;
use Carbon_Fields\Field;

add_action('carbon_fields_register_fields', static function ()
{

    $types = ['case', 'codex'];
    $types = apply_filters('wprs_type_archive_support', $types);

    /**
     * 分类法存档设置
     */
    foreach ($types as $type) {
        Container::make('theme_options', 'wpzhiku_archive_settings', __('Archive Settings', 'wprs'))
                 ->set_page_parent('edit.php?post_type=' . $type)
                 ->add_fields([
                     Field::make('image', $type . '_banner_image', __('Cover image', 'wprs')),
                     Field::make('text', $type . '_banner_text', __('Cover text', 'wprs')),
                     Field::make('text', $type . '_title', __('Archive Title', 'wprs')),
                     Field::make('textarea', $type . '_description', __('Archive Description', 'wprs')),
                 ]);
    }


    /**
     * 文章类型和分类法数据
     */
    Container::make('term_meta', 'wpzhiku_category_settings', __('Catagory Settings', 'wprs'))
             ->where('term_taxonomy', '=', 'category')
             ->or_where('term_taxonomy', '=', 'post_tag')
             ->or_where('term_taxonomy', '=', 'handbook')
             ->add_fields([
                 Field::make('image', 'banner_image', __('Cover image', 'wprs')),
                 Field::make('text', 'banner_text', __('Banner Text', 'wprs')),
                 Field::make('text', 'per_page', __('Posts Per Page', 'wprs')),
             ]);


    /**
     * 案例参数
     */
    Container::make('post_meta', 'wpzhiku_case_meta',  __('Case Data', 'wprs'))
             ->where('post_type', '=', 'product')
             ->set_context('side')
             ->set_priority('low')
             ->add_fields([
                 Field::make('text', 'link', __('Demo url', 'wprs')),
             ]);


    /**
     * 主题设置
     */
    Container::make('theme_options', 'wpzhiku_theme_options',__('Theme Options', 'wprs'))
             ->set_page_parent('themes.php')
             ->add_tab(__('General Options', 'wprs'), [
                 Field::make('checkbox', 'is_cleanup', __('Clean up useless menus for normal user', 'wprs')),
                 Field::make('checkbox', 'deny_modify', __('Deny modify files in backend', 'wprs')),
             ])
             ->add_tab(__('Footer Options', 'wprs'), [
                 Field::make('text', 'beian', __('Beian number', 'wprs')),
                 Field::make('text', 'copyright', __('Copyright text', 'wprs')),
             ])
             ->add_tab(__('Code Option', 'wprs'), [
                 Field::make('textarea', 'code_before_head', __('Code before </head>', 'wprs')),
                 Field::make('textarea', 'code_before_body', __('Code before </body>', 'wprs')),
             ]);

});


