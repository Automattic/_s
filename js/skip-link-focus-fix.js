/**
 * Based on JavaScript by Nicholas C. Zakas
 * http://www.nczonline.net/blog/2013/01/15/fixing-skip-to-content-links/
 */

( function( $ ) {

$( window ).bind( 'hashchange', function() {

    var element = document.getElementById( location.hash.substring( 1 ) );

    if ( element ) {

        if ( ! /^(?:a|select|input|button)$/i.test( element.tagName ) ) {
            element.tabIndex = -1;
        }
        
        element.focus();
    }

});

})( jQuery );