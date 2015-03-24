/**
 * layout.js
 *
 * DOM fixes to plug gaps in CSS specs (or browser support).
 */
( function initHomepage() {
	'use strict';

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

				// Assemble right column.
				for ( i2 = l2, l2 = posts.length; i2 < l2; i2++ ) {
					evenColumn.appendChild( posts[ i2 ] );
				}

			} else {

				// Assemble the only (non-first) column.
				for ( i2 = 1, l2 = posts.length; i2 < l2; i2++ ) {
					oddColumn.appendChild( posts[ i2 ] );
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
