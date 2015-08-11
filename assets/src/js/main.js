;(function ($, window, document, undefined) {
    'use strict';

    $(document).ready( function() {

        var EV = {
            init : function() {
                this.utils.init();
            },
            vals : {
                $window : $(window) // http://jsperf.com/jquery-window-cache
            },
            utils : {

                init : function() {

                    this.mqState.appendEl();
                    this.mqState.checkStateView();
                    this.setDelay();
                    this.scrollIt();

                },
                mqState : {

                    appendEl : function() {

                        $('body').append('<div class="mq-state"/>');

                    },
                    checkStateView : function() {

                        EV.vals.view  = parseInt( $('.mq-state').css('z-index') );

                        // fallback to desktop if browser doesn't support media queries
                        if ( ! Modernizr.mq( 'only all' ) ) EV.vals.view = 30;

                    },

                },

                setDelay : function() {

                    var scrolled = false,
                        resized  = false;

                    // delay checking of scroll
                    EV.vals.$window.on( 'scroll touchmove', function() { scrolled = true; });
                    // delay checking of window resize
                    EV.vals.$window.on( 'resize', function() { resized = true; });

                    setInterval( function() {

                        if ( scrolled ) {

                            scrolled = false;

                        }

                        if ( resized ) {

                            resized = false;

                            EV.utils.mqState.checkStateView();
                        }

                    }, 50);
                },

                scrollIt : function() {

                    // Animate the scroll to top
                    $('.js-to-top').on( 'click', function( e ) {

                        e.preventDefault();

                        $('html, body').animate( { scrollTop: 0 }, 300 );

                    });

                    // Animate scroll to id
                    $('.js-scroll-to').on( 'click', function( e ) {

                        e.preventDefault();

                        var href        = $(this).attr('href'),
                            scrollPoint = $(href).offset();

                        $('html, body').animate( { scrollTop: scrollPoint.top }, 300 );
                    });
                }
            },
        };

        EV.init();

    });

})(jQuery, window, document);
