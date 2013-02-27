/**
 * navigation.js
 *
 * Handles toggling the navigation menu for small screens.
 */
( function() {
	var button    = document.getElementById( 'site-navigation' ).getElementsByTagName( 'h1' )[0],
	    menu      = document.getElementById( 'site-navigation' ).getElementsByTagName( 'ul' )[0];
	    container = document.getElementById( 'site-navigation' );

	if ( undefined == button || undefined == menu )
		return false;

	button.onclick = function() {
		if ( -1 == menu.className.indexOf( 'nav-menu' ) )
			menu.className = 'nav-menu';

		if ( -1 != button.className.indexOf( 'toggled-on' ) ) {
			button.className = button.className.replace( ' toggled-on', '' );
			menu.className = menu.className.replace( ' toggled-on', '' );
			container.className = container.className.replace( ' main-small-navigation', ' main-navigation' );
		} else {
			button.className += ' toggled-on';
			menu.className += ' toggled-on';
			container.className = container.className.replace( ' main-navigation', ' main-small-navigation' );
		}
	};

	// Hide menu toggle button if menu is empty.
	if ( ! menu.childNodes.length )
		button.style.display = 'none';
} )();