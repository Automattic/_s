<?php
/**
 * Customizer
 *
 * @package _s
 */

namespace SpaceName\Customizer;

use ProteusThemes\CustomizerUtils\CacheManager;
use ProteusThemes\CustomizerUtils\Helpers;
use ProteusThemes\CustomizerUtils\Setting;

/**
 * Contains methods for customizing the theme customization screen.
 *
 * @link http://codex.wordpress.org/Theme_Customization_API
 */
class Base
{
    /**
     * The singleton manager instance
     *
     * @see wp-includes/class-wp-customize-manager.php
     * @var \WP_Customize_Manager
     */
    protected $wp_customize;

    /**
     * Instance of the DynamicCSS cache manager
     *
     * @var \ProteusThemes\CustomizerUtils\CacheManager
     */
    private $dynamic_css_cache_manager;

    /**
     * Holds the array for the DynamiCSS.
     *
     * @var array
     */
    private $dynamic_css = [];

    /**
     * Constructor method for this class.
     *
     * @param \WP_Customize_Manager $wp_customize The WP customizer manager instance.
     */
    public function __construct(\WP_Customize_Manager $wp_customize)
    {
        // Set the private propery to instance of wp_customize.
        $this->wp_customize = $wp_customize;

        // Set the private propery to instance of DynamicCSS CacheManager.
        $this->dynamic_css_cache_manager = new CacheManager($this->wp_customize);

        // Init the dynamic_css property.
        $this->dynamic_css = $this->dynamic_css_init();

        // Register the settings/panels/sections/controls.
        $this->register_settings();
        $this->register_sections();
        $this->register_partials();
        $this->register_controls();

        /**
         * Action and filters
         */

        // Render the CSS and cache it to the theme_mod when the setting is saved.
        add_action('wp_head', [Helpers::class, 'add_dynamic_css_style_tag'], 50, 0);
        add_action('customize_save_after', function ()
        {
            $this->dynamic_css_cache_manager->cache_rendered_css(false);
        }, 10, 0);
    }


    /**
     * Initialization of the dynamic CSS settings with config arrays
     *
     * @return array
     */
    private function dynamic_css_init()
    {
        $darken3  = new Setting\DynamicCSS\ModDarken(3);
        $darken6  = new Setting\DynamicCSS\ModDarken(6);
        $darken12 = new Setting\DynamicCSS\ModDarken(12);

        $primary_selector = [
            '.woocommerce .add_to_cart_button',
            '.woocommerce .button.alt',
            '.woocommerce .button.checkout',
        ];

        $primary_selector_hover = [
            '.woocommerce .add_to_cart_button:hover',
            '.woocommerce .button.alt:hover',
            '.woocommerce .button.checkout:hover',
        ];

        return [
            'rswc_primary_color' => [
                'default'   => '#0bcda5',
                'css_props' => [
                    [
                        'name'      => 'background-color',
                        'selectors' => [
                            'noop' => $primary_selector,
                        ],
                    ],
                    [
                        'name'      => 'border-color',
                        'selectors' => [
                            'noop' => $primary_selector,
                        ],
                        'modifier'  => $darken3,
                    ],
                    [
                        'name'      => 'background-color',
                        'selectors' => [
                            'noop' => $primary_selector_hover,
                        ],
                        'modifier'  => $darken3,
                    ],
                    [
                        'name'      => 'border-color',
                        'selectors' => [
                            'noop' => $primary_selector_hover,
                        ],
                        'modifier'  => $darken6,
                    ],
                ],
            ],
        ];
    }

    /**
     * Register customizer settings
     *
     * @return void
     */
    public function register_settings()
    {
        // WooCommerce Catalog Settings
        $this->wp_customize->add_setting('rswc_products_catalog_show_sidebar', ['default' => 0]);

        // WooCommerce Single Page Settings
        $this->wp_customize->add_setting('rswc_single_product_gallery_columns', ['default' => 4]);
        $this->wp_customize->add_setting('rswc_single_product_related_count', ['default' => 4]);
        $this->wp_customize->add_setting('rswc_single_product_related_columns', ['default' => 4]);
        $this->wp_customize->add_setting('rswc_single_product_show_sidebar', ['default' => 0]);

        // All the DynamicCSS settings.
        foreach ($this->dynamic_css as $setting_id => $args) {
            $this->wp_customize->add_setting(
                new Setting\DynamicCSS($this->wp_customize, $setting_id, $args)
            );
        }
    }


    /**
     * Sections
     *
     * @return void
     */
    public function register_sections()
    {
        $this->wp_customize->add_section('rswc_color_schema', [
            'title'       => esc_html__('Colors', '_s'),
            'description' => esc_html__('WooCommerce Color Schema', '_s'),
            'panel'       => 'woocommerce',
            'priority'    => 30,
        ]);

        $this->wp_customize->add_section('rswc_single_product', [
            'title'       => esc_html__('Single Product', '_s'),
            'description' => esc_html__('Single Product Page Settings', '_s'),
            'panel'       => 'woocommerce',
            'priority'    => 40,
        ]);
    }


    /**
     * Partials for selective refresh
     *
     * @return void
     */
    public function register_partials()
    {
        $this->wp_customize->selective_refresh->add_partial('dynamic_css', [
            'selector'        => 'head > #wp-utils-dynamic-css-style-tag',
            'settings'        => array_keys($this->dynamic_css),
            'render_callback' => function ()
            {
                return $this->dynamic_css_cache_manager->render_css();
            },
        ]);
    }


    /**
     * Controls
     *
     * @return void
     */
    public function register_controls()
    {
        $this->wp_customize->add_control(
            'rswc_primary_color',
            [
                'type'     => 'color',
                'priority' => 5,
                'label'    => esc_html__('Primary color', '_s'),
                'section'  => 'rswc_color_schema',
            ]
        );


        /**
         * WooCommerce Catalog page
         */
        $this->wp_customize->add_control(
            'rswc_products_catalog_show_sidebar',
            [
                'type'     => 'checkbox',
                'priority' => 5,
                'label'    => esc_html__('Show Sidebar', '_s'),
                'section'  => 'woocommerce_product_catalog',
            ]
        );


        /**
         * WooCommerce Single Product Page
         */
        $this->wp_customize->add_control(
            'rswc_single_product_gallery_columns',
            [
                'type'     => 'number',
                'priority' => 5,
                'label'    => esc_html__('Columns of Gallery thumbnail', '_s'),
                'section'  => 'rswc_single_product',
            ]
        );

        $this->wp_customize->add_control(
            'rswc_single_product_related_count',
            [
                'type'     => 'number',
                'priority' => 5,
                'label'    => esc_html__('Number of Related Products', '_s'),
                'section'  => 'rswc_single_product',
            ]
        );

        $this->wp_customize->add_control(
            'rswc_single_product_related_columns',
            [
                'type'     => 'number',
                'priority' => 5,
                'label'    => esc_html__('Number of Related Products', '_s'),
                'section'  => 'rswc_single_product',
            ]
        );

        $this->wp_customize->add_control(
            'rswc_single_product_show_sidebar',
            [
                'type'     => 'checkbox',
                'priority' => 5,
                'label'    => esc_html__('Number of Related Products', '_s'),
                'section'  => 'rswc_single_product',
            ]
        );
    }
}
