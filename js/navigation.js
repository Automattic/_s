/**
 * navigation.js
 *
 * Handles toggling the navigation menu for small screens and enabling tab
 * support for dropdown menus.
 */
( function() {
	var container, button, menu, links, subMenus;

	container = document.getElementById( 'site-navigation' );
	if ( ! container ) {
		return;
	}

	button = container.getElementsByTagName( 'button' )[0];
	if ( 'undefined' === typeof button ) {
		return;
	}

	menu = container.getElementsByTagName( 'ul' )[0];

	// Hide menu toggle button if menu is empty and return early.
	if ( 'undefined' === typeof menu ) {
		button.style.display = 'none';
		return;
	}

	menu.setAttribute( 'aria-expanded', 'false' );

	if ( -1 === menu.className.indexOf( 'nav-menu' ) ) {
		menu.className += ' nav-menu';
	}

	button.onclick = function() {
		if ( -1 !== container.className.indexOf( 'toggled' ) ) {
			container.className = container.className.replace( ' toggled', '' );
			button.setAttribute( 'aria-expanded', 'false' );
			menu.setAttribute( 'aria-expanded', 'false' );
		} else {
			container.className += ' toggled';
			button.setAttribute( 'aria-expanded', 'true' );
			menu.setAttribute( 'aria-expanded', 'true' );
		}
	};

	/**
	 * Make dropdown menus keyboard accessible.
	 */

	// Get all the link elements within the menu.
	links = menu.getElementsByTagName( 'a' );
	subMenus = menu.getElementsByTagName( 'ul' );

	// Set menu items with submenus to aria-haspopup="true"
	for ( var i = 0, len = subMenus.length; i < len; i++ ) {
		subMenus[i].parentNode.setAttribute( 'aria-haspopup', 'true' );
	}

	// Each time a menu link is focused or blurred call the function toggleFocus.
	for ( i = 0, len = links.length; i < len; i++ ) {
		links[i].onfocus = toggleFocus;
		links[i].onblur = toggleFocus;
	}

	function toggleFocus() {
		var current = this;

		// Move up through the ancestors of the current link until we hit .nav-menu
		// On li elements toggle the class .focus
		while ( -1 === current.className.indexOf( 'nav-menu' ) ) {
			if ( 'li' === current.tagName.toLowerCase() ) {
				if ( -1 !== current.className.indexOf( 'focus' ) ) {
					current.className = current.className.replace( ' focus', '' );
				} else {
					current.className += ' focus';
				}
			}

			current = current.parentElement;
		}
	}
} )();
