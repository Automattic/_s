jQuery( document ).ready( function( $ ) {
	var $browserWidth = $( window ).width();

	$.fn.smallMenu = function() {
		$( '#masthead .site-navigation' ).removeClass( 'main-navigation' ).addClass( 'main-small-navigation' );
		$( '#masthead .site-navigation h1' ).removeClass( 'assistive-text' ).addClass( 'menu-toggle' );

		$( '.menu-toggle' ).click( function () {
			$( '#masthead .menu' ).toggle( 'fast' );
		});
	}

	$(window).resize(function() {
		var $browserWidth = $( window ).width();

		if ( $browserWidth < 600 ) {
			$.fn.smallMenu();
		} else {
			$( '#masthead .site-navigation' ).removeClass( 'main-small-navigation' ).addClass( 'main-navigation' );
			$( '#masthead .site-navigation h1' ).removeClass( 'menu-toggle' ).addClass( 'assistive-text' );
		}
	});

	if ( $browserWidth < 600 ) {
		$.fn.smallMenu();
	}

} );