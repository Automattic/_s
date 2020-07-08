// Shoptimizer ajax add to cart js.
;
(function($) {
    'use strict';
    $(document).ready(function() {
        $('body').on('submit', 'form.cart', function(e) {
            var $pdp_elem = $(this).parents('.type-product');

            if ($pdp_elem.hasClass('product-type-external') || $pdp_elem.hasClass('product-type-grouped')) {
                return;
            }

            e.preventDefault();

            var $pdp_form = $(this),
                $pdp_atc_elem = $pdp_form.find('.single_add_to_cart_button'),
                data = $pdp_form.serialize();

            data += '&action=wprs_wc_ajax_atc';

            if ($pdp_atc_elem.val()) {
                data += '&add-to-cart=' + $pdp_atc_elem.val();
            }

            $pdp_atc_elem.removeClass('added not-added');
            $pdp_atc_elem.addClass('loading');

            $(document.body).trigger('adding_to_cart', [$pdp_atc_elem, data]);

            $.ajax({
                url     : _s_ajax_obj.ajaxurl,
                data    : data,
                method  : 'POST',
                success : function(resp) {
                    if (!resp) {
                        return;
                    }

                    var cur_page = window.location.toString();
                    cur_page = cur_page.replace('add-to-cart', 'added-to-cart');

                    if (resp.error && resp.product_url) {
                        window.location = resp.product_url;
                        return;
                    }

                    $pdp_atc_elem.removeClass('loading');

                    var fragments = resp.fragments;
                    var cart_hash = resp.cart_hash;

                    if (fragments) {
                        $.each(fragments, function(key) {
                            $(key).addClass('updating');
                        });
                    }
                    if (fragments) {
                        $.each(fragments, function(key, value) {
                            $(key).replaceWith(value);
                        });
                    }

                    if (0 < resp.notices.indexOf('error')) {
                        $('body').append(resp.notices);
                        $pdp_atc_elem.addClass('not-added');
                    } else {
                        $pdp_atc_elem.addClass('added');
                    }
                },
                error   : function() {
                    console.log('pdp ajax atc error occured');
                },
                complete: function() {},
            });
        });

        $('body').on('adding_to_cart', function(event, fragments, cart_hash) {
            $('body').toggleClass('drawer-open');
        });

    });
}(jQuery));
