jQuery(document).ready(function($) {

    window.onscroll = function() {navSticky();};

    var header = document.getElementById('masthead');
    var body = document.getElementsByTagName('body')[0];
    var sticky = header.offsetTop + 100;

    function navSticky() {
        if (window.pageYOffset > sticky) {
            header.classList.add('is-sticky');
            body.classList.add('is-sticky');
        } else {
            header.classList.remove('is-sticky');
            body.classList.remove('is-sticky');
        }
    }

    var $loading = $('#ajax-loading').hide();

    $(document).ajaxStart(function() {
        $loading.show();
    }).ajaxStop(function() {
        $loading.hide();
    });

    // Close mobile menu - click the x icon.
    $( '.close-drawer' ).on( 'click', function() {
        $( 'body' ).removeClass( 'mobile-toggled' ).removeClass('drawer-open');
    } );

    //$( 'body' ).on( 'adding_to_cart', function( event, fragments, cart_hash ) {
    //    $( 'body' ).toggleClass( 'drawer-open' );
    //});

    //@see https://www.smartmenus.org/docs/
    $('.sm, .product-categories').smartmenus({
        showFunction: function($ul, complete) {
            $ul.slideDown(100, complete);
        },
        hideFunction: function($ul, complete) {
            $ul.slideUp(100, complete);
        },
        showTimeout : 0,
        hideTimeout : 0,
    });
});


var $j = jQuery.noConflict();

$j( window ).on( 'load', function() {
    'use strict';

    // Woo quantity buttons
    shoptimizerWooQuantityButtons();
} );

$j( document ).ajaxComplete( function() {
    'use strict';

    // Woo quantity buttons
    shoptimizerWooQuantityButtons();
} );

/**
 * WooCommerce quantity buttons
 * @param {number} $quantitySelector Quantity.
 */
function shoptimizerWooQuantityButtons( $quantitySelector ) {

    var $quantityBoxes;
    if ( ! $quantitySelector ) {
        $quantitySelector = '.qty';
    }

    $quantityBoxes = $j( 'div.quantity:not(.buttons_added), td.quantity:not(.buttons_added)' ).find( $quantitySelector );
    if ( $quantityBoxes && 'date' !== $quantityBoxes.prop( 'type' ) && 'hidden' !== $quantityBoxes.prop( 'type' ) ) {

        // Add plus and minus icons
        $quantityBoxes.parent().addClass( 'buttons_added' );
        $quantityBoxes.after( '<div class="quantity-nav"><a href="javascript:void(0)" class="quantity-button quantity-up plus">&nbsp;</a><a href="javascript:void(0)" class="quantity-button quantity-down minus">&nbsp;</a></div>' );

        // Target quantity inputs on product pages
        $j( 'input' + $quantitySelector + ':not(.product-quantity input' + $quantitySelector + ')' ).each( function() {
            var $min = parseFloat( $j( this ).attr( 'min' ) );

            if ( $min && 0 < $min && parseFloat( $j( this ).val() ) < $min ) {
                $j( this ).val( $min );
            }
        } );

        $j( '.plus, .minus' ).unbind( 'click' );
        $j( '.plus, .minus' ).on( 'click', function() {

                // Get values
                var $quantityBox     = $j( this ).closest( '.quantity' ).find( $quantitySelector ),
                    $currentQuantity = parseFloat( $quantityBox.val() ),
                    $maxQuantity     = parseFloat( $quantityBox.attr( 'max' ) ),
                    $minQuantity     = parseFloat( $quantityBox.attr( 'min' ) ),
                    $step            = $quantityBox.attr( 'step' );

                // Fallback default values
                if ( ! $currentQuantity || '' === $currentQuantity  || 'NaN' === $currentQuantity ) {
                    $currentQuantity = 0;
                }
                if ( '' === $maxQuantity || 'NaN' === $maxQuantity ) {
                    $maxQuantity = '';
                }

                if ( '' === $minQuantity || 'NaN' === $minQuantity ) {
                    $minQuantity = 0;
                }
                if ( 'any' === $step || '' === $step  || undefined === $step || 'NaN' === parseFloat( $step )  ) {
                    $step = 1;
                }

                // Change the value
                if ( $j( this ).is( '.plus' ) ) {
                    if ( $maxQuantity && ( $maxQuantity === $currentQuantity || $currentQuantity > $maxQuantity ) ) {
                        $quantityBox.val( $maxQuantity );
                    } else {
                        $quantityBox.val( $currentQuantity + parseFloat( $step ) );
                    }

                } else {
                    if ( $minQuantity && ( $minQuantity === $currentQuantity || $currentQuantity < $minQuantity ) ) {
                        $quantityBox.val( $minQuantity );
                    } else if ( 0 < $currentQuantity ) {
                        $quantityBox.val( $currentQuantity - parseFloat( $step ) );
                    }
                }

                // Trigger change event.
                $quantityBox.trigger( 'change' );
            }
        );
    }
}


