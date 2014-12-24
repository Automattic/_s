( function() {
	var userAgent = navigator.userAgent.toLowerCase(),
	    is_webkit = userAgent.indexOf( 'webkit' ) > -1,
	    is_opera  = userAgent.indexOf( 'opera' )  > -1,
	    is_ie     = userAgent.indexOf( 'msie' )   > -1 || userAgent.indexOf( 'trident' ) > -1;

	if ( ( is_webkit || is_opera || is_ie ) && document.getElementById && window.addEventListener ) {
		window.addEventListener( 'hashchange', function() {
			var element = document.getElementById( location.hash.substring( 1 ) );

			function cleanup() {
				element.removeAttribute( 'tabindex' );
				element.removeEventListener( 'blur', cleanup, false );
			}

			if ( element ) {
				if ( ! ( /^(?:a|select|input|button|textarea)$/i.test( element.tagName ) || element.hasAttribute( 'tabindex' ) ) ) {
					element.tabIndex = -1;
					element.addEventListener( 'blur', cleanup, false );
				}

				element.focus();
			}
		}, false );
	}
})();
