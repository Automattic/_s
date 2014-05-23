;(function ($, window, document, undefined) {
    'use strict';
    $(document).ready( function() {
        var Elevator = {
            init : function() {
                this.utils.init();
            },
            vals : {
                $window : $(window)
            },
            utils : {

                init : function() {

                    this.mqState.appendEl();
                    this.mqState.checkStateView();
                    this.setDelay();

                },
                mqState : {

                    appendEl : function() {

                        $('body').append('<div class="mq-state"/>');

                    },
                    checkStateView : function() {

                        Elevator.vals.state = $('.mq-state').css('content');
                        Elevator.vals.view  = $('.mq-state').css('z-index');

                    },

                },
                setDelay : function() {

                    var scrolled = false,
                        resized  = false;

                    // delay checking of scroll
                    Elevator.vals.$window.on( 'scroll touchmove', function() { scrolled = true; });
                    // delay checking of window resize
                    Elevator.vals.$window.on( 'resize', function() { resized = true; });

                    setInterval( function() {

                        if ( scrolled ) {

                            scrolled = false;

                        }

                        if ( resized ) {

                            resized = false;

                        }

                    }, 50);
                }
            },
        };
        Elevator.init();
    });
})(jQuery, window, document);
