/*
Copyright 2014 Adobe Systems Incorporated. Licensed under the Apache 2.0 License.
http://www.apache.org/licenses/LICENSE-2.0.html
*/

!function(){"use strict";function a(a){var b=parseFloat(a.fontSize),c="normal"===a.lineHeight?q*b:parseFloat(a.lineHeight);return{leading:c-b,lineHeight:c,fontSize:b}}function b(a){var b=a.createElement("div");return b.style.position="fixed",b.style.padding=p,b.style.opacity="0",b.style.fontSize=o,b.style.lineHeight="1",a.body.appendChild(b),b}function c(a){var b=a.ownerDocument.createElement("span");return b.textContent=m,a&&a.appendChild(b),b}function d(a){a.ownerDocument.body.removeChild(a)}function e(a,b,c,d){function e(a,b){var c=4*b,d=a.data[c],e=a.data[c+1],f=a.data[c+2];return 0===d||0===e||0===f?!0:!1}var f=-1,g=document.createElement("canvas");g.width=c,g.height=d,a.appendChild(g);var h=g.getContext("2d");h.font=o+" "+b,h.fillStyle="#ffffff",h.fillRect(0,0,h.canvas.width,h.canvas.height),h.fillStyle="#000000",h.textBaseline="top",h.fillText("E",0,0);for(var i=h.getImageData(Math.ceil(g.width/2),0,1,g.height),j=null,k=g.height-1;k>=0;k--)if(e(i,k)){j=k;break}for(var k=0;k<g.height;k++)if(e(i,k)){f=(j+1-k)/d;break}return f}function f(a,f){var g=r[f];if(g)return g;g={baselineRatio:void 0,capHeightRatio:void 0};var h=b(a);h.style.fontFamily=f;var i=c(h);i.style.fontSize=p;var j=c(h);g.baselineRatio=i.offsetTop/n;try{g.capHeightRatio=e(h,f,j.offsetWidth,n)}catch(k){throw new Error("[dropcap.js] Error computing font metrics: "+k.message)}finally{d(h)}return r[f]=g,g}function g(a){return a+"px"}function h(a){return a.classList.contains(s)?!0:void 0}function i(a){var b="gjpqQ";return-1===b.indexOf(a.textContent)?!1:!0}function j(a){a.dcapjs&&(a.style.cssFloat="",a.style.padding="",a.style.fontSize="",a.style.lineHeight="",a.style.marginTop="")}function k(b,c,d){if(d||(d=c),1==d&&1==c)return void j(b);var e=b.ownerDocument,k=b,l=k.parentNode,m=window.getComputedStyle(k),n=window.getComputedStyle(l),o=f(e,m.fontFamily),q=f(e,n.fontFamily),r=o.capHeightRatio,s=a(n),t=(q.baselineRatio-q.capHeightRatio)*s.fontSize,u=c*s.lineHeight-s.leading-t-(1-q.baselineRatio)*s.fontSize,v=u/r;k.dcapjs=!0,k.style.cssFloat="left",k.style.padding=p,k.style.fontSize=g(v),k.style.lineHeight=p;var w=s.leading/2+t;if(w-=(c-d)*s.lineHeight,k.style.marginTop=g(w),c>d){var x=parseFloat(n.marginTop);l.style.marginTop=g(x+-1*w)}var y=0;i(k)?y=v*(1-o.baselineRatio):h(k)&&(y=v-u),k.style.height=g(u+y);var z=k.dcapjsStrut;z||(z=e.createElement("span"),z.style.display="inline-block",k.appendChild(z),k.dcapjsStrut=z),z.style.height=g(u)}function l(a){function b(a){return a in c.style}var c=window.document.body?window.document.body:document.createElement("div");if(b(a))return a;for(var d=["-webkit-","-moz-","-ms-","-o"],e=0;e<d.length;e++){var f=d[e]+a;if(b(f))return f}return null}var m="X",n=100,o=n+"px",p="0px",q=1.15,r={},s="dcjs-descender";window.Dropcap={options:{runEvenIfInitialLetterExists:!0},layout:function(a,b,c){if(0==this.options.runEvenIfInitialLetterExists){var d=l("initial-letter");if(d)return}if(1>b||c&&1>c)throw new RangeError("Dropcap.layout expects the baseline position and height to be 1 or above");if(a instanceof HTMLElement)k(a,b,c);else{if(!(a instanceof NodeList))throw new TypeError("Dropcap.layout expects a single HTMLElement or a NodeList");var e=Array.prototype.forEach;e.call(a,function(a){k(a,b,c)})}}}}();

/**
 * Call the dropcaps script.
 */
( function() {
	'use strict';

	// Dropcaps script doesn't support IE9-, so disable it here.
	if ( window.ie_lte9 ) {
		return;
	}

	var i,
		l,
		p,
		paragraphs,
		dropcap,
		pattern = /^(?:(?:<[A-Za-z][^>]*>)*)((?:[\W_-]|&[\w-]+;)?[A-Za-z0-9])/;

	paragraphs = document.querySelectorAll( '.single-entry .entry-content > p' );

	// Find the first content paragraph that isn't a lead/lede.
	i = 0;
	l = paragraphs.length;
	while ( ( i < l ) && ( paragraphs[i].classList.contains( 'lead' ) ) ) {
		i++;
	}
	p = paragraphs[i];

	/**
	 * Don't dropcap when the article begins with a subheading. Fails on IE8
	 * (no `Node.previousElementSibling` support) but degrades gracefully - i.e.
	 * no dropcaps.
	 *
	 * Also prevent typeof errors by checking we have chosen a paragraph to
	 * dropcap in the first place.
	 */
	if ( ! p || ( p.previousElementSibling && /^H[1-6]$/.test( p.previousElementSibling.tagName ) ) ) {
		return;
	}

	/**
	 * Don't dropcap paragraphs that contain a script (due to flaws in the WP
	 * Twitter embed code).
	 */
	for ( i = 0, l = p.children.length; i < l; i++ ) {
		if ( 'SCRIPT' === p.children[ i ].tagName ) {
			return;
		}
	}

	// Wrap the first letter (and preceding punctuation) in a span.
	p.innerHTML = p.innerHTML.replace( pattern, '<span class="dropcap">$1</span>' );
	dropcap = p.querySelector( '.dropcap' );

	// Call the dropcaps script.
	window.Dropcap.layout( dropcap, 3 );

} )();
