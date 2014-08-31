( function() {
	var userAgent = navigator.userAgent.toLowerCase(),
	    is_webkit = userAgent.indexOf( 'webkit' ) > -1,
	    is_opera  = userAgent.indexOf( 'opera' )  > -1,
	    is_ie     = userAgent.indexOf( 'msie' )   > -1 || userAgent.indexOf( 'trident' ) > -1;

	if ( ( is_webkit || is_opera || is_ie ) && document.getElementById && window.addEventListener ) {
		window.addEventListener( 'hashchange', function() {
			var element = document.getElementById( location.hash.substring( 1 ) );

			if ( element ) {
				if ( ! /^(?:a|select|input|button|textarea)$/i.test( element.tagName ) )
					element.tabIndex = -1;

				element.focus();
			}
		}, false );
	}
})();
