jQuery( document ).ready( function( $ ) {
	var $browserWidth = $( window ).width();
	var $masthead = $( '#masthead' );

	$.fn.smallMenu = function() {
		$( $masthead ).find( '.site-navigation' ).removeClass( 'main-navigation' ).addClass( 'main-small-navigation' );
		$( $masthead ).find( '.site-navigation h1' ).removeClass( 'assistive-text' ).addClass( 'menu-toggle' );

		$( '.menu-toggle' ).click( function () {
			$( $masthead ).find( '.menu' ).toggle();
			$( this ).toggleClass( 'toggled-on' );
		});
	}

	$(window).resize(function() {
		var $browserWidth = $( window ).width();

		if ( $browserWidth < 600 ) {
			$.fn.smallMenu();
		} else {
			$( $masthead ).find( '.site-navigation' ).removeClass( 'main-small-navigation' ).addClass( 'main-navigation' );
			$( $masthead ).find( '.site-navigation h1' ).removeClass( 'menu-toggle' ).addClass( 'assistive-text' );
			$( $masthead ).find( '.menu' ).removeAttr( 'style' );
		}
	});

	if ( $browserWidth < 600 ) {
		$.fn.smallMenu();
	}

} );