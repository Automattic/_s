<?php
/**
 * 文章类型、分类方法、存档设置、站点设置等自定义字段
 *
 * @package wpzhiku
 */

if ( ! class_exists('Carbon_Fields\Container')) {
    return;
}

use Carbon_Fields\Carbon_Fields;
use Carbon_Fields\Container;
use Carbon_Fields\Field;


add_action('after_setup_theme', static function ()
{
    if (class_exists(Carbon_Fields::class)) {
        Carbon_Fields::boot();
    }
});

add_action('carbon_fields_register_fields', static function ()
{

    $types = ['case', 'codex'];
    $types = apply_filters('wprs_type_archive_support', $types);

    /**
     * 分类法存档设置
     */
    foreach ($types as $type) {
        Container::make('theme_options', 'wpzhiku_archive_settings', __('Archive Settings', '_s'))
                 ->set_page_parent('edit.php?post_type=' . $type)
                 ->add_fields([
                     Field::make('image', $type . '_banner_image', __('Cover image', '_s')),
                     Field::make('text', $type . '_banner_text', __('Cover text', '_s')),
                     Field::make('text', $type . '_title', __('Archive Title', '_s')),
                     Field::make('textarea', $type . '_description', __('Archive Description', '_s')),
                 ]);
    }


    /**
     * 文章类型和分类法数据
     */
    Container::make('term_meta', 'wpzhiku_category_settings', __('Catagory Settings', '_s'))
             ->where('term_taxonomy', '=', 'category')
             ->or_where('term_taxonomy', '=', 'post_tag')
             ->or_where('term_taxonomy', '=', 'handbook')
             ->add_fields([
                 Field::make('image', 'banner_image', __('Cover image', '_s')),
                 Field::make('text', 'banner_text', __('Banner Text', '_s')),
                 Field::make('text', 'per_page', __('Posts Per Page', '_s')),
             ]);


    /**
     * 案例参数
     */
    Container::make('post_meta', 'wpzhiku_case_meta', __('Case Data', '_s'))
             ->where('post_type', '=', 'product')
             ->set_context('side')
             ->set_priority('low')
             ->add_fields([
                 Field::make('text', 'link', __('Demo url', '_s')),
             ]);


    /**
     * 主题设置
     */
    Container::make('theme_options', 'wpzhiku_theme_options', __('Theme Options', '_s'))
             ->set_page_parent('themes.php')
             ->add_tab(__('General Options', '_s'), [
                 Field::make('checkbox', 'is_cleanup', __('Clean up useless menus for normal user', '_s')),
                 Field::make('checkbox', 'deny_modify', __('Deny modify files in backend', '_s')),
             ])
             ->add_tab(__('Footer Options', '_s'), [
                 Field::make('text', 'beian', __('Beian number', '_s')),
                 Field::make('text', 'copyright', __('Copyright text', '_s')),
             ])
             ->add_tab(__('Code Option', '_s'), [
                 Field::make('textarea', 'code_before_head', __('Code before </head>', '_s')),
                 Field::make('textarea', 'code_before_body', __('Code before </body>', '_s')),
             ]);

});


