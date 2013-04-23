/**
 * navigation.js
 *
 * Handles toggling the navigation menu for small screens.
 */
( function() {
	var container = document.getElementById( 'site-navigation' ),
	    button    = container.getElementsByTagName( 'h1' )[0],
	    menu      = container.getElementsByTagName( 'ul' )[0];

	if ( undefined == button || undefined == menu )
		return false;

	button.onclick = function() {
		if ( -1 != button.className.indexOf( 'toggled-off' ) ) {
			button.className = button.className.replace( ' toggled-off', '' );
			menu.className = menu.className.replace( ' toggled-off', '' );
		} else {
			button.className += ' toggled-off';
			menu.className += ' toggled-off';
		}
	};

	// Display menu toggle button and hide menu if not empty.
	if ( menu.childNodes.length ) {
		button.className = button.className += ' show-toggle toggled-off';
		menu.className += ' toggled-off';
        }
} )();
