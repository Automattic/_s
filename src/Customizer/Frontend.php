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
     * This will get custom WordPress settings to the live theme's WP head.
     */
    public static function get_customizer_css()
    {
        $css = [];

        $css[] = self::get_customizer_colors_css();
        $css[] = self::get_logo_top_margin_css();

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
    public static function get_logo_top_margin_css()
    {
        // Pixel to rem conversion.
        $rem_pt_ratio = 18;
        $rem          = absint(get_theme_mod('logo_top_margin', 0)) / $rem_pt_ratio;

        return sprintf(
            '.header__logo img { margin-top: %frem; }',
            $rem
        );
    }
}
