/*! swipe plugin for Cycle2;  version: 20121120 */
(function($) {
"use strict";

// this script adds support for touch events.  the logic is lifted from jQuery Mobile.
// if you have jQuery Mobile installed, you do NOT need this script

var supportTouch = 'ontouchend' in document;

$.event.special.swipe = $.event.special.swipe || {
    scrollSupressionThreshold: 10,   // More than this horizontal displacement, and we will suppress scrolling.
    durationThreshold: 1000,         // More time than this, and it isn't a swipe.
    horizontalDistanceThreshold: 30, // Swipe horizontal displacement must be more than this.
    verticalDistanceThreshold: 75,   // Swipe vertical displacement must be less than this.

    setup: function() {
        var $this = $( this );

        $this.bind( 'touchstart', function( event ) {
            var data = event.originalEvent.touches ? event.originalEvent.touches[ 0 ] : event;
            var stop, start = {
                time: ( new Date() ).getTime(),
                coords: [ data.pageX, data.pageY ],
                origin: $( event.target )
            };

            function moveHandler( event ) {
                if ( !start )
                    return;

                var data = event.originalEvent.touches ? event.originalEvent.touches[ 0 ] : event;

                stop = {
                    time: ( new Date() ).getTime(),
                    coords: [ data.pageX, data.pageY ]
                };

                // prevent scrolling
                if ( Math.abs( start.coords[ 0 ] - stop.coords[ 0 ] ) > $.event.special.swipe.scrollSupressionThreshold ) {
                    event.preventDefault();
                }
            }

            $this.bind( 'touchmove', moveHandler )
                .one( 'touchend', function( event ) {
                    $this.unbind( 'touchmove', moveHandler );

                    if ( start && stop ) {
                        if ( stop.time - start.time < $.event.special.swipe.durationThreshold &&
                                Math.abs( start.coords[ 0 ] - stop.coords[ 0 ] ) > $.event.special.swipe.horizontalDistanceThreshold &&
                                Math.abs( start.coords[ 1 ] - stop.coords[ 1 ] ) < $.event.special.swipe.verticalDistanceThreshold ) {

                            start.origin.trigger( "swipe" )
                                .trigger( start.coords[0] > stop.coords[ 0 ] ? "swipeleft" : "swiperight" );
                        }
                    }
                    start = stop = undefined;
                });
        });
    }
};

$.event.special.swipeleft = $.event.special.swipeleft || {
    setup: function() {
        $( this ).bind( 'swipe', $.noop );
    }
};
$.event.special.swiperight = $.event.special.swiperight || $.event.special.swipeleft;

})(jQuery);
