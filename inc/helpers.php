<?php
/**
 * Functions which enhance the theme by hooking into WordPress
 *
 * @package _s
 */


if ( ! function_exists('_s_assets')) {
    /**
     * 获取前端资源
     *
     * @param $filename string 文件名
     *
     * @return string 文件路径
     */
    function _s_asset($filename)
    {

        $dist_path = get_theme_file_path('/frontend/dist/');
        $dist_uri  = get_theme_file_uri('/frontend/dist/');

        $directory = dirname($filename) . '/';
        $file      = basename($filename);
        static $manifest;

        if (empty($manifest)) {
            $manifest_path = $dist_path . 'assets.json';

            if (file_exists($manifest_path)) {
                $manifest = json_decode(file_get_contents($manifest_path), true);
            } else {
                $manifest = [];
            }
        }

        if (array_key_exists($file, $manifest) && SCRIPT_DEBUG) {
            return $dist_uri . $directory . $manifest[ $file ];
        } else {
            return $dist_uri . $directory . $file;
        }
    }
}

