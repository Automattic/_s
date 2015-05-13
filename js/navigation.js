/**
 * navigation.js
 *
 * Handles toggling the navigation menu for small screens.
 */
( function initMenuAreas() {

	/* Don't use toggle-menus in IE8, as there's no transform support. */
	if ( ! ( 'querySelector' in document ) || ! ( 'addEventListener' in window ) ) {
		return;
	}

	var containers,
		container,
		button,
		menu,
		i,
		l;

	/**
	 * Handle clicks of the menu toggle buttons.
	 * @param {Element} container The wrapper for both button and content.
	 * @param {Element} button    The toggle button.
	 * @param {Element} menu      The toggled content.
	 * @param {String}  side      Which menu is being toggled ('left' | 'right')
	 */
	function menuToggleClick( container, button, menu, side ) {
		var bodyClass = 'menu-' + side + '-toggled';
		var notBodyClass = ( 'left' === side )
			? 'menu-right-toggled'
			: 'menu-left-toggled';

		if ( document.body.classList.contains( bodyClass ) ) {
			closeMenus();
		} else {
			var menus = document.querySelectorAll( '.js-menu-contents' );
			var buttons = document.querySelectorAll( '.js-menu-toggle' );

			document.body.classList.add( bodyClass );
			document.body.classList.remove( notBodyClass );

			// Set all aria-expanded settings to false as initial state.
			Array.prototype.forEach.call( menus, function ( menu ) {
				menu.setAttribute( 'aria-expanded', 'false' );
			} );
			Array.prototype.forEach.call( buttons, function ( button ) {
				button.setAttribute( 'aria-expanded', 'false' );
			} );

			// Now set the correct aria-expanded setting to true.
			button.setAttribute( 'aria-expanded', 'true' );
			menu.setAttribute( 'aria-expanded', 'true' );

			// Listen for clicks to the main page.
			document.getElementById( 'page' ).addEventListener( 'click', closeMenus );
		}
	}

	/**
	 * Handle clicks of the main page when it's slid over to reveal a menu.
	 */
	function closeMenus() {
		var menus = document.querySelectorAll( '.js-menu-contents' );
		var buttons = document.querySelectorAll( '.js-menu-toggle' );

		// Visible changes.
		document.body.classList.remove( 'menu-left-toggled' );
		document.body.classList.remove( 'menu-right-toggled' );

		// Invisible (accessibility) changes.
		Array.prototype.forEach.call( menus, function ( menu ) {
			menu.setAttribute( 'aria-expanded', 'false' );
		} );
		Array.prototype.forEach.call( buttons, function ( button ) {
			button.setAttribute( 'aria-expanded', 'false' );
		} );


		// Don't trigger this event again until a menu is re-opened.
		document.getElementById( 'page' ).removeEventListener( 'click', closeMenus );
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
