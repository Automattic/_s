<?php

/**
 * These functions can be replaced via plugins. If plugins do not redefine these
 * functions, then these will be used instead.
 *
 * @package _s
 */

add_shortcode('_s_elemetor_block', '_s_render_elementor_block');

if ( ! function_exists('_s_render_elementor_block')) {
    /**
     * 在任何地方渲染 elementor 模版
     *
     * @param $atts
     *
     * @return string
     */
    function _s_render_elementor_block($atts)
    {

        // Enable support for WPML & Polylang
        $language_support = apply_filters('ae_multilingual_support', false);

        if ( ! class_exists('Elementor\Plugin')) {
            return '';
        }
        if ( ! isset($atts[ 'id' ]) || empty($atts[ 'id' ])) {
            return '';
        }

        $post_id = $atts[ 'id' ];

        if ($language_support) {
            $post_id = apply_filters('wpml_object_id', $post_id, 'ae_global_templates');
        }

        return \Elementor\Plugin::instance()->frontend->get_builder_content_for_display($post_id);
    }
}
