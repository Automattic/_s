/**
 * layout.js
 *
 * DOM fixes to plug gaps in CSS specs (or browser support).
 */
( function initHomepage() {
	'use strict';

	if ( window.ie_lte9 ) {
		return;
	}

	var i,
		i2,
		l,
		l2,
		divs = document.querySelectorAll( '.js-convert-to-flexbox' );

	// Loop through the divs to be flexboxed.
	i = 0;
	l = divs.length;
	while ( i < l ) {
		var div = divs[i],
			posts = div.querySelectorAll( '.entry' ),
			numberOfColumns = div.getAttribute( 'data-flexbox-columns' ),
			oddColumn = document.createElement( 'div' ),
			evenColumn = oddColumn.cloneNode( true );

		if ( 1 < posts.length ) {

			if ( ( 'string' === typeof numberOfColumns ) && ( 3 === parseInt( numberOfColumns, 10 ) ) ) {

				// Assemble left column.
				for ( i2 = 1, l2 = ( Math.floor( posts.length / 2 ) + 1 ); i2 < l2; i2++ ) {
					oddColumn.appendChild( posts[ i2 ] );
				}

				if ( oddColumn.childNodes.length % 2 ) {
					oddColumn.className = 'issue-section-odd-contents';
				} else {
					oddColumn.className = 'issue-section-even-contents';
				}

				// Assemble right column.
				for ( i2 = l2, l2 = posts.length; i2 < l2; i2++ ) {
					evenColumn.appendChild( posts[ i2 ] );
				}

				if ( evenColumn.childNodes.length % 2 ) {
					evenColumn.className = 'issue-section-odd-contents';
				} else {
					evenColumn.className = 'issue-section-even-contents';
				}

			} else {

				var flexLength = (posts.length < 4) ? posts.length : 4;
				oddColumn.className = '';

				if (posts.length > 4) {
					var leftovers = document.createElement( 'div' );
					leftovers.className = 'issue-section-leftovers';
					div.parentNode.appendChild(leftovers);
				}

				// Assemble the only (non-first) column.
				for ( i2 = 1, l2 = posts.length; i2 < l2; i2++ ) {

					if ( i2 < flexLength ) {
						oddColumn.appendChild( posts[ i2 ] );
					} else {
						leftovers.appendChild( posts[ i2 ] );
					}

				}

			}

			// Add flexbox wrapper elements and classes to the layout.
			div.classList.remove( 'issue-section-noflex' );
			div.classList.add( 'issue-section-flex' );
			div.appendChild( oddColumn );
			if ( evenColumn.children.length ) {
				div.appendChild( evenColumn );
			}

		}

		i++;
	}

} )();
