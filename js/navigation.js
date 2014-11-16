( function() {
	function Menu( containerId, options ) {
		var container,
			menu,
			button;

		function init() {
			container = document.getElementById( containerId );

			if ( ! container ) {
				return;
			}

			menu = container.getElementsByTagName( 'ul' )[0];
			button = container.getElementsByTagName( 'button' )[0];

			// Hide menu toggle button if menu is empty and return early.
			if ( 'undefined' === typeof menu ) {
				if ( 'undefined' !== typeof button ) {
					button.style.display = 'none';
				}
				return;
			}

			if ( -1 === menu.className.indexOf( 'nav-menu' ) ) {
				menu.className += ' nav-menu';
			}

			// Call the methods specified in options.	
			if ( true === options.mobileToggle ) {
				mobileToggle();
			}

			if ( true === options.a11yDropdowns ) {
				a11yDropdowns();
			}
		}

		/**
		 * mobileToggle
		 * Handles toggling the navigation menu for small screens.
		 */
		function mobileToggle() {
			// Return early if the button does not exist.
			if ( 'undefined' === typeof button ) {
				return;
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
		}

		/**
		 * a11yDropdowns
		 * Makes dropdown menus keyboard accessible. Also adds aria-haspoup on links with submenus.
		 */
		function a11yDropdowns() {
			var links = menu.getElementsByTagName( 'a' ),
				subMenus = menu.getElementsByTagName( 'ul' );

			// Return early if there are no submenus.
			if ( 0 === subMenus.length ) {
				return;
			}

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
				console.log( 'toggle focus' );
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
		}

		init();
	}

	// Create menu objects and call the appropriate methods.
	new Menu( 'site-navigation', {
		mobileToggle: true,
		a11yDropdowns: true
	} );
} )();
