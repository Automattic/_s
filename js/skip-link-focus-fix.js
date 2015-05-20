( function() {
	var is_webkit = navigator.userAgent.toLowerCase().indexOf( 'webkit' ) > -1,
      is_opera  = navigator.userAgent.toLowerCase().indexOf( 'opera' )  > -1,
      is_ie     = navigator.userAgent.toLowerCase().indexOf( 'msie' )   > -1;

  if ( ( is_webkit || is_opera || is_ie ) && document.getElementById && window.addEventListener ) {
    window.addEventListener( 'hashchange', function() {
			var id = location.hash.substring( 1 ),
				element,
        outline = null,
        computedStyle;

			if ( ! ( /^[A-z0-9_-]+$/.test( id ) ) ) {
				return;
			}

      element = document.getElementById( id );

      function cleanup() {
        if (outline !== null) {
          element.style.outline = outline;
        }
        element.removeAttribute('tabindex');
        element.removeEventListener( 'blur', cleanup, false );
      }

      if ( element ) {
        if ( ! ( /^(?:a|select|input|button|textarea)$/i.test( element.tagName ) || element.hasAttribute( 'tabindex' ) ) ) {
          computedStyle = window.getComputedStyle(element, null);
          if (computedStyle.outlineStyle === 'none' && parseFloat(computedStyle.outlineWidth) === 0) {
            outline = element.style.outline;
            element.style.outline = '0px none transparent';
          }
          computedStyle = null;

          element.tabIndex = -1;
          element.addEventListener( 'blur', cleanup, false );
        }

        element.focus();
      }
    }, false );
  }
})();
