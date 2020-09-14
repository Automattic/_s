<?php
/**
 * WooCommerce Compatibility File
 *
 * @link    https://woocommerce.com/
 *
 * @package _s
 */


/**
 * Modify WooCommerce Wrap
 */
remove_action('woocommerce_before_main_content', 'woocommerce_output_content_wrapper', 10);
remove_action('woocommerce_after_main_content', 'woocommerce_output_content_wrapper_end', 10);
remove_action('woocommerce_after_shop_loop_item_title', 'woocommerce_template_loop_rating', 5);
remove_action('woocommerce_after_shop_loop_item_title', 'woocommerce_template_loop_price', 10);

/**
 * Remove default product link in loop
 */
remove_action('woocommerce_before_shop_loop_item', 'woocommerce_template_loop_product_link_open', 10);
remove_action('woocommerce_after_shop_loop_item', 'woocommerce_template_loop_product_link_close', 5);


/**
 * Within Product Loop - remove title hook and create a new one with the category displayed above it.
 */
remove_action('woocommerce_shop_loop_item_title', 'woocommerce_template_loop_product_title', 10);

/**
 * Remove Default Sidebar
 */
remove_action('woocommerce_sidebar', 'woocommerce_get_sidebar', 10);


add_action('woocommerce_before_main_content', '_s_woocommerce_wrapper_before');
add_action('woocommerce_after_main_content', '_s_woocommerce_wrapper_after');


/**
 * Remove product headings in product tab
 */
add_filter('woocommerce_product_description_heading', '__return_false');
add_filter('woocommerce_product_additional_information_heading', '__return_false');

/**
 * WooCommerce theme support setup
 */
add_action('after_setup_theme', '_s_woocommerce_setup');


add_action('widgets_init', '_s_woocommerce_widgets_init');


/**
 * Enqueue the script used in WooCommerce
 */
add_action('wp_enqueue_scripts', '_s_woocommerce_scripts');

/**
 * Remove Select2 CSS
 */
add_action('wp_print_styles', '_s_deregister_select2', 5);


/**
 * Disable the default WooCommerce stylesheet.
 *
 * Removing the default WooCommerce stylesheet and enqueing your own will
 * protect you during WooCommerce core updates.
 *
 * @link https://docs.woocommerce.com/document/disable-the-default-stylesheet/
 */
add_filter('woocommerce_enqueue_styles', '__return_empty_array');


/**
 * Add WooCommerce active body class
 */
add_filter('body_class', '_s_woocommerce_active_body_class');


/**
 * Add wrapper div to single product page
 */
add_action('woocommerce_before_single_product_summary', '_s_product_content_wrapper_start', 5);

add_action('woocommerce_single_product_summary', '_s_product_content_wrapper_end', 60);


/**
 * Add wrap class to product sort and account at top of products archive page
 */
add_action('woocommerce_before_shop_loop', '_s_sorting_wrapper', 9);
add_action('woocommerce_before_shop_loop', '_s_sorting_wrapper_close', 31);

/**
 * Ajax add product to cart scripts
 */
add_action('wp_enqueue_scripts', '_s_pdp_ajax_atc_enqueue');


/**
 * Ajax add product to cart backend
 */
add_action('wp_ajax_wprs_wc_ajax_atc', '_s_pdp_ajax_atc');
add_action('wp_ajax_nopriv_wprs_wc_ajax_atc', '_s_pdp_ajax_atc');
add_filter('woocommerce_add_to_cart_fragments', '_s_woocommerce_cart_link_fragment');

/**
 * Mini cart drawer
 */
add_action('_s_before_site', '_s_header_cart_drawer', 5);


if ( ! function_exists('_s_woocommerce_setup')) {
    /**
     * WooCommerce setup function.
     *
     * @link https://docs.woocommerce.com/document/third-party-custom-theme-compatibility/
     * @link https://github.com/woocommerce/woocommerce/wiki/Enabling-product-gallery-features-(zoom,-swipe,-lightbox)-in-3.0.0
     *
     * @return void
     */
    function _s_woocommerce_setup()
    {
        add_theme_support('woocommerce');
        add_theme_support('wc-product-gallery-zoom');
        add_theme_support('wc-product-gallery-lightbox');
        add_theme_support('wc-product-gallery-slider');
    }
}


/**
 * Register widget area.
 *
 * @link https://developer.wordpress.org/themes/functionality/sidebars/#registering-a-sidebar
 */
if ( ! function_exists('_s_woocommerce_widgets_init')) {
    function _s_woocommerce_widgets_init()
    {
        register_sidebar([
            'name'          => esc_html__('WooCommerce Widget Area', '_s'),
            'id'            => 'sidebar-woo',
            'description'   => esc_html__('Add widgets here.', '_s'),
            'before_widget' => '<section id="%1$s" class="widget %2$s">',
            'after_widget'  => '</section>',
            'before_title'  => '<h2 class="widget-title"><span>',
            'after_title'   => '</span></h2>',
        ]);

    }
}


if ( ! function_exists('_s_woocommerce_scripts')) {
    /**
     * WooCommerce specific scripts & stylesheets.
     *
     * @return void
     */
    function _s_woocommerce_scripts()
    {
        wp_enqueue_style('_s-woocommerce-main', _s_asset('styles/woocommerce.css'));

        if (is_product() || is_shop() || is_product_category() || is_product_tag()) {
            wp_enqueue_style('_s-woocommerce-checkout', _s_asset('styles/products.css'));
        }

        if (is_singular('product')) {
            wp_enqueue_style('_s-woocommerce-review', _s_asset('styles/review.css'));
        }

        if (is_cart()) {
            wp_enqueue_style('_s-woocommerce-cart', _s_asset('styles/cart.css'));
        }

        if (is_checkout()) {
            wp_enqueue_style('_s-woocommerce-checkout', _s_asset('styles/checkout.css'));
        }

        if (is_account_page() || is_order_received_page()) {
            wp_enqueue_style('_s-woocommerce-account', _s_asset('styles/account.css'));
        }

        $font_path   = WC()->plugin_url() . '/assets/fonts/';
        $inline_font = '@font-face {
			font-family: "star";
			src: url("' . $font_path . 'star.eot");
			src: url("' . $font_path . 'star.eot?#iefix") format("embedded-opentype"),
				url("' . $font_path . 'star.woff") format("woff"),
				url("' . $font_path . 'star.ttf") format("truetype"),
				url("' . $font_path . 'star.svg#star") format("svg");
			font-weight: normal;
			font-style: normal;
		}';

        wp_add_inline_style('_s-woocommerce-main', $inline_font);
    }
}

if ( ! function_exists('_s_deregister_select2')) {
    function _s_deregister_select2()
    {
        wp_deregister_style('select2');
    }
}

if ( ! function_exists('_s_woocommerce_active_body_class')) {
    /**
     * Add 'woocommerce-active' class to the body tag.
     *
     * @param array $classes CSS classes applied to the body tag.
     *
     * @return array $classes modified to include 'woocommerce-active' class.
     */
    function _s_woocommerce_active_body_class($classes)
    {
        $classes[] = 'woocommerce-active';

        return $classes;
    }
}


if ( ! function_exists('_s_woocommerce_cart_link_fragment')) {
    /**
     * Cart Fragments.
     *
     * Ensure cart contents update when products are added to the cart via AJAX.
     *
     * @param array $fragments Fragments to refresh via AJAX.
     *
     * @return array Fragments to refresh via AJAX.
     */
    function _s_woocommerce_cart_link_fragment($fragments)
    {
        ob_start();
        _s_woocommerce_cart_link();
        $fragments[ 'a.cart-contents' ] = ob_get_clean();

        return $fragments;
    }
}

if ( ! function_exists('_s_woocommerce_cart_link')) {
    /**
     * Cart Link.
     *
     * Displayed a link to the cart including the number of items present and the cart total.
     *
     * @return void
     */
    function _s_woocommerce_cart_link()
    {
        ?>
        <a class="cart-contents" href="<?php echo esc_url(wc_get_cart_url()); ?>" title="<?php esc_attr_e('View your shopping cart', '_s'); ?>">
            <?php
            $item_count_text = sprintf(
            /* translators: number of items in the mini cart. */
                _n('%d', '%d', WC()->cart->get_cart_contents_count(), '_s'),
                WC()->cart->get_cart_contents_count()
            );
            ?>
            <span class="amount"><?php echo wp_kses_data(WC()->cart->get_cart_subtotal()); ?></span>
            <span class="count"><?php echo esc_html($item_count_text); ?></span>
        </a>
        <?php
    }
}

if ( ! function_exists('_s_woocommerce_header_cart')) {
    /**
     * Display Header Cart.
     *
     * @return void
     */
    function _s_woocommerce_header_cart()
    {
        if (is_cart()) {
            $class = 'current-menu-item';
        } else {
            $class = '';
        }
        ?>
        <ul id="site-header-cart" class="site-header-cart">
            <li class="<?php echo esc_attr($class); ?>">
                <?php _s_woocommerce_cart_link(); ?>
            </li>
            <li>
                <?php
                $instance = [
                    'title' => '',
                ];

                the_widget('WC_Widget_Cart', $instance);
                ?>
            </li>
        </ul>
        <?php
    }
}

if ( ! function_exists('_s_product_content_wrapper_start')) {
    /**
     * Single Product Page - Add a section wrapper start.
     */
    function _s_product_content_wrapper_start()
    {
        echo '<div class="rswc-product-hero"><div class="container relative clearfix">';
    }
}

if ( ! function_exists('_s_product_content_wrapper_end')) {
    /**
     * Single Product Page - Add a section wrapper end.
     */
    function _s_product_content_wrapper_end()
    {
        echo '</div></div><!--/rswc-product-hero end-->';
    }
}


if ( ! function_exists('_s_header_cart_drawer')) {
    /**
     * Display Header Cart Drawer
     *
     * @return void
     * @since  1.0.0
     */
    function _s_header_cart_drawer()
    {
        if (function_exists('is_woocommerce')) {
            if (is_cart()) {
                $class = 'current-menu-item';
            } else {
                $class = '';
            }
            ?>
            <div class="shoptimizer-mini-cart-wrap">

                <div id="ajax-loading">
                    <div class="shoptimizer-loader">
                        <div class="spinner">
                            <div class="bounce1"></div>
                            <div class="bounce2"></div>
                            <div class="bounce3"></div>
                        </div>
                    </div>
                </div>

                <div class="close-drawer"></div>

                <?php the_widget('WC_Widget_Cart', 'title='); ?>
            </div>
            <?php

            $drawer_js = '';
            $drawer_js .= "
				( function ( $ ) {

					// Open the drawer if a product is added to the cart
					$( '.product_type_simple.add_to_cart_button' ).on( 'click', function( e ) {
						e.preventDefault();
						$( 'body' ).toggleClass( 'drawer-open' );
					} );

					// Toggle cart drawer.
					$( '.site-header-cart .cart-click' ).on( 'click', function( e ) {
						e.stopPropagation();
						e.preventDefault();
						$( 'body' ).toggleClass( 'drawer-open' );
					} );

					// Close the drawer when clicking outside it
					$( document ).mouseup( function( e ) {
						var container = $( '.shoptimizer-mini-cart-wrap' );

						if ( ! container.is( e.target ) && 0 === container.has( e.target ).length ) {
							$( 'body' ).removeClass( 'drawer-open' );
						}
					} );

					// Close drawer - click the x icon
					$( '.close-drawer' ).on( 'click', function() {
						$( 'body' ).removeClass( 'drawer-open' );
					} );

				}( jQuery ) );
				";

            wp_add_inline_script('_s-main', $drawer_js);
        }
    }
}

if ( ! function_exists('_s_pdp_ajax_atc')) {
    /**
     * PDP/Single product ajax add to cart.
     */
    function _s_pdp_ajax_atc()
    {
        $sku        = '';
        $product_id = '';

        if (isset($_POST[ 'variation_id' ])) {
            $sku = $_POST[ 'variation_id' ];
        }
        if (isset($_POST[ 'add-to-cart' ])) {
            $product_id = $_POST[ 'add-to-cart' ];
        }

        if ( ! isset($sku)) {
            $sku = $product_id;
        }

        ob_start();
        wc_print_notices();
        $notices = ob_get_clean();

        ob_start();
        woocommerce_mini_cart();
        $_s_mini_cart = ob_get_clean();

        $data = [
            'notices'   => $notices,
            'fragments' => apply_filters(
                'woocommerce_add_to_cart_fragments',
                [
                    'div.widget_shopping_cart_content' => '<div class="widget_shopping_cart_content">' . $_s_mini_cart . '</div>',
                ]
            ),
            'cart_hash' => apply_filters('woocommerce_add_to_cart_hash', WC()->cart->get_cart_for_session() ? md5(json_encode(WC()->cart->get_cart_for_session())) : '', WC()->cart->get_cart_for_session()),
        ];

        wp_send_json($data);
    }
}

if ( ! function_exists('_s_pdp_ajax_atc_enqueue')) {
    /**
     * Enqueue assets for PDP/Single product ajax add to cart.
     */
    function _s_pdp_ajax_atc_enqueue()
    {
        if (is_product()) {
            wp_enqueue_script(
                '_s-wc-scripts',
                get_template_directory_uri() . '/frontend/dist/scripts/product.js',
                ['jquery']
            );
            wp_localize_script(
                '_s-wc-scripts',
                '_s_ajax_obj',
                [
                    'ajaxurl' => admin_url('admin-ajax.php'),
                    'nonce'   => wp_create_nonce('ajax-nonce'),
                ]
            );
        }
    }
}

if ( ! function_exists('_s_sorting_wrapper')) {
    /**
     * Sorting wrapper
     *
     * @return  void
     * @since   1.0.0
     */
    function _s_sorting_wrapper()
    {
        echo '<div class="rs-wc-sorting">';
    }
}


if ( ! function_exists('_s_sorting_wrapper_close')) {
    /**
     * Sorting wrapper close
     *
     * @return  void
     * @since   1.0.0
     */
    function _s_sorting_wrapper_close()
    {
        echo '</div>';
    }
}


add_action('woocommerce_after_single_product_summary', function ()
{
    echo '<div class="container rswc-product-body">';
}, 4);


add_action('woocommerce_product_after_tabs', function ()
{
    echo '</div>';
}, 15);


if (get_theme_mod('rswc_single_product_sidebar_layout', 'sidebar-none') !== 'sidebar-none') {

    add_action('woocommerce_after_single_product_summary', function ()
    {
        echo '<div class="flex">';

        if (is_active_sidebar('sidebar-woo')) { ?>
            <div class="content__secondary woocommerce_sidebar">
                <?php dynamic_sidebar('sidebar-woo'); ?>
            </div>
        <?php }
    }, 5);


    add_action('woocommerce_product_after_tabs', function ()
    {
        echo '</div>';
    });

}

if ( ! function_exists('_s_woocommerce_wrapper_before')) {
    /**
     * Before Content.
     *
     * Wraps all WooCommerce content in wrappers which match the theme markup.
     *
     * @return void
     */
    function _s_woocommerce_wrapper_before()
    {
        ?>
        <div id="content" class="site__shop">

        <div id="primary" class="content__primary">
        <main id="main" class="site__main">
        <?php
    }
}

if ( ! function_exists('_s_woocommerce_wrapper_after')) {
    /**
     * After Content.
     *
     * Closes the wrapping divs.
     *
     * @return void
     */
    function _s_woocommerce_wrapper_after()
    {
        ?>
        </main><!-- #main -->
        </div><!-- #primary -->

        <?php
        if (is_active_sidebar('sidebar-woo') && (is_shop() || is_product_category())) {
            if (get_theme_mod('rswc_products_catalog_sidebar_layout', 'sidebar-none') !== 'sidebar-none') {
                echo '<div class="content__secondary site-woo__sidebar">';
                dynamic_sidebar('sidebar-woo');
                echo '</div>';
            }
        }
        ?>

        </div><!-- #content -->
        <?php
    }
}


add_action('woocommerce_before_account_navigation', function ()
{
    echo '<div class="woocommerce-MyAccount-navigation">';

    echo '<div class="wc-profile-card">';
    echo get_avatar(get_current_user_id(), 120);
    echo '<div class="wc-profile-card__name">' . wp_get_current_user()->display_name . '</div>';
    echo '</div>';
});


add_action('woocommerce_after_account_navigation', function ()
{
    echo '</div>';
});


/**
 * Add Progress Bar to the Cart and Checkout pages.
 */
add_action('woocommerce_before_cart', '_s_cart_progress');
add_action('woocommerce_before_checkout_form', '_s_cart_progress', 5);
add_action('woocommerce_before_thankyou', '_s_cart_progress', 5);

if ( ! function_exists('_s_cart_progress')) {

    /**
     * More product info
     * Link to product
     *
     * @return void
     * @since  1.0.0
     */
    function _s_cart_progress()
    {

        $show_progress_bar = true;

        if (true === $show_progress_bar) {
            ?>

            <div class="rs-checkout-wrap">
                <ul class="rs-checkout-bar">
                    <li class="active first">
                        <a href="<?php echo get_permalink(wc_get_page_id('cart')); ?>">
                            <?php esc_html_e('Shopping Cart', '_s'); ?>
                        </a>
                    </li>
                    <li class="<?= is_checkout() && !is_order_received_page() ? 'next' : ''; ?><?= is_order_received_page() ? 'active' : ''; ?>">
                        <a href="<?php echo get_permalink(wc_get_page_id('checkout')); ?>">
                            <?php esc_html_e('Shipping and Checkout', '_s'); ?>
                        </a>
                    </li>
                    <li class="<?= is_order_received_page() ? 'active last' : ''; ?>">
                        <?php esc_html_e('Confirmation', '_s'); ?>
                    </li>
                </ul>
            </div>

            <?php
        }
    }
}
