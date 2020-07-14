<?php
/**
 * Class which handles the output of the WP customizer on the frontend.
 * Meaning that this stuff loads always, no matter if the global $wp_cutomize
 * variable is present or not.
 *
 * @package consultpresslite-pt
 */

namespace SpaceName\Customizer;

/**
 * Customizer frontend related code
 */
class Frontend
{

    /**
     * Add actions to load the right staff at the right places (header, footer).
     */
    public function __construct()
    {
        add_action('wp_head', [$this, 'output_customizer_css'], 999);
        add_filter('body_class', [$this, 'output_body_class'], 999);
    }

    /**
     * This will output the custom WordPress settings to the live theme's WP head.
     *
     * Used by hook: 'wp_head'
     *
     * @see add_action( 'wp_head' , array( $this, 'head_output' ) );
     */
    public static function output_customizer_css()
    {
        $css_string = self::get_customizer_css();

        if ($css_string) {
            echo '<style  type="text/css">';
            echo $css_string;
            echo '</style>';
        }
    }


    /**
     * Output addition body classes
     *
     * @param $classes
     *
     * @return mixed
     */
    public function output_body_class($classes)
    {

        $global_layout = get_theme_mod('rs_global_layout', 'sidebar-none');

        $classes[] = $global_layout;

        return $classes;
    }


    /**
     * This will get custom WordPress settings to the live theme's WP head.
     */
    public static function get_customizer_css()
    {
        $css = [];

        $css[] = self::get_customizer_colors_css();
        $css[] = self::get_container_css();

        return implode(PHP_EOL, $css);
    }


    /**
     * Branding CSS, generated dynamically and cached stringifyed in db
     *
     * @return string CSS
     */
    public static function get_customizer_colors_css()
    {
        $out = '';

        $cached_css = get_theme_mod('cached_css', '');

        $out .= '/* WP Customizer start */' . PHP_EOL;
        $out .= strip_tags(apply_filters('_s_cached_css', $cached_css));
        $out .= PHP_EOL . '/* WP Customizer end */';

        return $out;
    }


    /**
     * Set top margin of the logo
     *
     * @return string CSS
     */
    public static function get_container_css()
    {
        // Pixel to rem conversion.
        $container_width       = absint(get_theme_mod('rs_container_width', 1216));
        $container_focus_width = absint(get_theme_mod('rs_container_focus_width', 1216));

        $css = '';
        $css .= sprintf(
            '@media (min-width: 1280px) { .container { max-width: %dpx; } }',
            $container_width
        );

        $css .= sprintf(
            '@media (min-width: 1280px) { .container--focus, .single-post.sidebar-none .site__main { max-width: %dpx; margin-left: auto; margin-right: auto } }',
            $container_focus_width
        );

        return $css;
    }
}
