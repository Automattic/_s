/**
 * File customizer.js.
 *
 * Theme Customizer enhancements for a better user experience.
 *
 * Contains handlers to make Theme Customizer preview reload changes asynchronously.
 */

(function($) {

    // Site title and description.
    wp.customize('blogname', function(value) {
        value.bind(function(to) {
            $('.site-title a').text(to);
        });
    });

    wp.customize('blogdescription', function(value) {
        value.bind(function(to) {
            $('.site-description').text(to);
        });
    });

    // Header text color.
    wp.customize('header_textcolor', function(value) {
        value.bind(function(to) {
            if ('blank' === to) {
                $('.site-title, .site-description').css({
                    'clip'    : 'rect(1px, 1px, 1px, 1px)',
                    'position': 'absolute',
                });
            } else {
                $('.site-title, .site-description').css({
                    'clip'    : 'auto',
                    'position': 'relative',
                });
                $('.site-title a, .site-description').css({
                    'color': to,
                });
            }
        });
    });

    wp.customize('rs_container_width', function(value) {
        value.bind(function(to) {
            $('.container').css({
                'max-width': to + 'px',
            });
        });
    });

    wp.customize('rs_container_focus_width', function(value) {
        value.bind(function(to) {
            $('.container--focus, .single-post.sidebar-none .site__main, .category.sidebar-none .site__main').css({
                'max-width': to + 'px',
            });
        });
    });

    wp.customize('rswc_single_product_content_width', function(value) {
        value.bind(function(to) {
            $('.rswc-product-body').css({
                'max-width': to + 'px',
            });
        });
    });

    wp.customize('rswc_single_product_gallery_columns', function(value) {
        value.bind(function(to) {
            $('.woocommerce-product-gallery').
                removeClass('woocommerce-product-gallery--columns-3').
                removeClass('woocommerce-product-gallery--columns-4').
                removeClass('woocommerce-product-gallery--columns-5').
                removeClass('woocommerce-product-gallery--columns-6').
                addClass('woocommerce-product-gallery--columns-' + to);
        });
    });

})(jQuery);
