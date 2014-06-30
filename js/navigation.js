/**
 * navigation.js
 *
 * Handles toggling the navigation menu for small screens and enabling tab support for dropdown menus.
 */
( function() {
	var container, button, menu, links;

	container = document.getElementById( 'site-navigation' );
	if ( ! container )
		return;

	button = container.getElementsByTagName( 'button' )[0];
	if ( 'undefined' === typeof button )
		return;

	menu = container.getElementsByTagName( 'ul' )[0];

	// Hide menu toggle button if menu is empty and return early.
	if ( 'undefined' === typeof menu ) {
		button.style.display = 'none';
		return;
	}

	if ( -1 === menu.className.indexOf( 'nav-menu' ) )
		menu.className += ' nav-menu';

	button.onclick = function() {
		if ( -1 !== container.className.indexOf( 'toggled' ) )
			container.className = container.className.replace( ' toggled', '' );
		else
			container.className += ' toggled';
	};

	/**
	 * Make dropdown menus keyboard accessible.
	 */

	// Get all the link elements within the menu.
	links = menu.getElementsByTagName( 'a' );

	// Each time a menu link is focused or blurred call the function toggleFocus.
	for ( var i = 0, len = links.length; i < len; i++ ) {
		links[i].onfocus = toggleFocus;
		links[i].onblur = toggleFocus;
	}

	function toggleFocus() {
		var current = this,
		    ancestors = [];

		// Create an array of <li> ancestors of the current link. Stop upon
		// reaching .nav-menu at the top of the current menu system.
		while ( -1 === current.className.indexOf( 'nav-menu' ) ) {
			if ( 'li' === current.tagName.toLowerCase() ) {
				ancestors.unshift( current );
			}
			current = current.parentElement;
		}

		// For each element in ancestors[] toggle the class .focus.
		for ( i = 0, len = ancestors.length; i < len; i++ ) {
			if ( -1 !== ancestors[i].className.indexOf( 'focus' ) )
				ancestors[i].className = ancestors[i].className.replace( ' focus', '' );
			else
				ancestors[i].className += ' focus';
		}
	}
} )();
