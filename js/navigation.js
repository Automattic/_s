/**
 * navigation.js
 *
 * Handles toggling the navigation menu for small screens.
 */
( function initMenuAreas() {
	var containers,
		container,
		button,
		menu,
		i,
		l;

	/**
	 * Handle clicks of the menu toggle buttons.
	 * @param {Event} e Event object.
	 */
	function menuToggleClick( container, button, menu, side ) {
		var bodyClass = 'menu-' + side + '-toggled';
		var notBodyClass = ( 'left' === side )
			? 'menu-right-toggled'
			: 'menu-left-toggled';

		if ( -1 !== document.body.className.indexOf( bodyClass ) ) {
			document.body.className = document.body.className.replace( ' ' + bodyClass, '' );
			button.setAttribute( 'aria-expanded', 'false' );
			menu.setAttribute( 'aria-expanded', 'false' );
		} else {
			document.body.className += ' ' + bodyClass;
			document.body.className = document.body.className.replace( ' ' + notBodyClass, '' );

			// TODO change attribute to false for the other button and menu
			button.setAttribute( 'aria-expanded', 'true' );
			menu.setAttribute( 'aria-expanded', 'true' );
		}
	}

	// Loop through the menu areas, initializing the logic for each one.
	containers = document.querySelectorAll( '.js-menu-area' );
	for ( i = 0, l = containers.length; i < l; i++ ) {

		// Set up the main elements.
		container = containers[i];
		button = container.querySelector( '.js-menu-toggle' );
		if ( null == button ) {
			return;
		}

		// Hide menu toggle button if menu is empty and return early.
		menu = container.querySelector( '.js-menu-contents' );
		if ( null == menu ) {
			button.style.display = 'none';
			return;
		}

		menu.setAttribute( 'aria-expanded', 'false' );

		/*
		 * Using an anonymous function here creates a closure, which preserves
		 * the current values of `container`, `button`, and `menu`.
		 */
		button.addEventListener( 'click', ( function( c, b, m ) {
			return function() {
				menuToggleClick( c, b, m, ( c.getAttribute( 'data-menu-side' ) || 'left' ) );
			};
		} )( container, button, menu ) );

	}

} )();
