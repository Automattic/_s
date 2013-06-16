/**
 * navigation.js
 *
 * Handles toggling the navigation menu for small screens.
 */
( function() {
	var container = document.getElementById( 'site-navigation' ),
	    button    = container.getElementsByTagName( 'h1' )[0],
	    menu      = container.getElementsByTagName( 'ul' )[0];

	if ( undefined == button || undefined == menu || ! menu.childNodes.length ) {
		if ( button )
			button.style.display = 'none';

		return;
	}

	button.onclick = function() {
		if ( -1 == menu.className.indexOf( 'nav-menu' ) )
			menu.className = 'nav-menu';

		if ( -1 != container.className.indexOf( 'toggled-on' ) ) {
			container.className = container.className.replace( ' toggled-on', '' );
		} else {
			container.className += ' toggled-on';
		}
	};
} )();