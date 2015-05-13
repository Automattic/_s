/* global: l10n */
/**
 * Deferred (but cached) webfont loading for large/less-important font files, as
 * used by Smashing Magazine {@link https://gist.github.com/hdragomir}.
 * @author Horia Dragomir
 */

// 'Cuts the mustard' test to exclude IE8 (we load webfonts for that separately)
if ( 'querySelector' in document && 'addEventListener' in window ) {

	( function webfontLoader() {
		'use strict';

		// once cached, the css file is stored on the client forever unless
		// the URL below is changed. Any change will invalidate the cache
		var css_href = l10n.templateDirectory + '/fonts.css';

		// a simple event handler wrapper
		function on( el, ev, callback ) {
			if ( el.addEventListener ) {
				el.addEventListener( ev, callback, false );
			} else if ( el.attachEvent ) {
				el.attachEvent( 'on' + ev, callback );
			}
		}

		// if we have the fonts in localStorage or if we've cached them using the
		// native browser cache
		if ( ( window.localStorage && localStorage.font_css_cache ) ||
			-1 < document.cookie.indexOf( 'font_css_cache' ) ) {
			// just use the cached version
			injectFontsStylesheet();
		} else {
			// otherwise, don't block the loading of the page; wait until it's done.
			on( window, 'load', injectFontsStylesheet );
		}

		// quick way to determine whether a css file has been cached locally
		function fileIsCached( href ) {
			return window.localStorage &&
				localStorage.font_css_cache &&
				( localStorage.font_css_cache_file === href );
		}

		// time to get the actual css file
		function injectFontsStylesheet() {
			var isIE = /*@cc_on!@*/false;
			// if this is an older browser
			if ( isIE || ! window.localStorage || ! window.XMLHttpRequest ) {
				var stylesheet = document.createElement( 'link' );
				stylesheet.href = css_href;
				stylesheet.rel = 'stylesheet';
				stylesheet.type = 'text/css';
				document.getElementsByTagName( 'head' )[0].appendChild( stylesheet );
				// just use the native browser cache
				// this requires a good expires header on the server
				document.cookie = 'font_css_cache';

			// if this isn't an old browser
			} else {
				// use the cached version if we already have it
				if ( fileIsCached( css_href ) ) {
					injectRawStyle( localStorage.font_css_cache );
				// otherwise, load it with ajax
				} else {
					var xhr = new XMLHttpRequest();
					xhr.open( 'GET', css_href, true );
					on(xhr, 'load', function () {
				  		if (xhr.readyState === 4) {
				    		// once we have the content, quickly inject the css
				    		// rules
				    		injectRawStyle(xhr.responseText);
				    		// and cache the text content for further use
				    		// notice that this overwrites anything that might have
				    		// already been previously cached
				    		localStorage.font_css_cache = xhr.responseText;
				    		localStorage.font_css_cache_file = css_href;
				  		}
					});
					xhr.send();
				}
			}
		}

		// this is the simple utitily that injects the cached or loaded css text
		function injectRawStyle( text ) {
			var style = document.createElement( 'style' );
			style.innerHTML = text;
			document.getElementsByTagName( 'head' )[0].appendChild( style );
		}

	} )();

}
