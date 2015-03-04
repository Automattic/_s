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
			document.body.classList.remove( bodyClass );
			button.setAttribute( 'aria-expanded', 'false' );
			menu.setAttribute( 'aria-expanded', 'false' );
		} else {
			document.body.classList.add( bodyClass );
			document.body.classList.remove( notBodyClass );

			// TODO change attribute to false for the other button and menu too.
			button.setAttribute( 'aria-expanded', 'true' );
			menu.setAttribute( 'aria-expanded', 'true' );
		}
	}


	function flagScrollBelowMasthead() {
		if ( ( ( 28 * 8 ) / 2 ) < window.pageYOffset ) {
			document.body.classList.add( 'mini-masthead' );
		} else {
			document.body.classList.remove( 'mini-masthead' );
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

	window.requestAnimationFrame = window.requestAnimationFrame
    || window.mozRequestAnimationFrame
    || window.webkitRequestAnimationFrame
    || window.msRequestAnimationFrame;

    window.addEventListener( 'scroll' , function () {
    	return requestAnimationFrame(flagScrollBelowMasthead);
    } );

} )();
