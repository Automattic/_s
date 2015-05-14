/* Classlist polyfill for IE9- */
/*! @source http://purl.eligrey.com/github/classList.js/blob/master/classList.js */
if("document" in self){if(!("classList" in document.createElement("_"))){(function(j){"use strict";if(!("Element" in j)){return}var a="classList",f="prototype",m=j.Element[f],b=Object,k=String[f].trim||function(){return this.replace(/^\s+|\s+$/g,"")},c=Array[f].indexOf||function(q){var p=0,o=this.length;for(;p<o;p++){if(p in this&&this[p]===q){return p}}return -1},n=function(o,p){this.name=o;this.code=DOMException[o];this.message=p},g=function(p,o){if(o===""){throw new n("SYNTAX_ERR","An invalid or illegal string was specified")}if(/\s/.test(o)){throw new n("INVALID_CHARACTER_ERR","String contains an invalid character")}return c.call(p,o)},d=function(s){var r=k.call(s.getAttribute("class")||""),q=r?r.split(/\s+/):[],p=0,o=q.length;for(;p<o;p++){this.push(q[p])}this._updateClassName=function(){s.setAttribute("class",this.toString())}},e=d[f]=[],i=function(){return new d(this)};n[f]=Error[f];e.item=function(o){return this[o]||null};e.contains=function(o){o+="";return g(this,o)!==-1};e.add=function(){var s=arguments,r=0,p=s.length,q,o=false;do{q=s[r]+"";if(g(this,q)===-1){this.push(q);o=true}}while(++r<p);if(o){this._updateClassName()}};e.remove=function(){var t=arguments,s=0,p=t.length,r,o=false,q;do{r=t[s]+"";q=g(this,r);while(q!==-1){this.splice(q,1);o=true;q=g(this,r)}}while(++s<p);if(o){this._updateClassName()}};e.toggle=function(p,q){p+="";var o=this.contains(p),r=o?q!==true&&"remove":q!==false&&"add";if(r){this[r](p)}if(q===true||q===false){return q}else{return !o}};e.toString=function(){return this.join(" ")};if(b.defineProperty){var l={get:i,enumerable:true,configurable:true};try{b.defineProperty(m,a,l)}catch(h){if(h.number===-2146823252){l.enumerable=false;b.defineProperty(m,a,l)}}}else{if(b[f].__defineGetter__){m.__defineGetter__(a,i)}}}(self))}else{(function(){var b=document.createElement("_");b.classList.add("c1","c2");if(!b.classList.contains("c2")){var c=function(e){var d=DOMTokenList.prototype[e];DOMTokenList.prototype[e]=function(h){var g,f=arguments.length;for(g=0;g<f;g++){h=arguments[g];d.call(this,h)}}};c("add");c("remove")}b.classList.toggle("c3",false);if(b.classList.contains("c3")){var a=DOMTokenList.prototype.toggle;DOMTokenList.prototype.toggle=function(d,e){if(1 in arguments&&!this.contains(d)===!e){return e}else{return a.call(this,d)}}}b=null}())}};

/* Turn off flexbox-related layout changes. I know feature detection is better
 * but this works for now, and it's only for IE8-9 anyway. */
window.ie_lte9 = true;

// IE8-only changes
( function forIE8() {
	if ( document.documentElement.classList.contains( 'ie8' ) ) {

		/* Add 'odd' and 'even' classes to articles in listings, so we can
	     * replace nth-child selectors in IE8. */
	 	function classifyOddEven() {
			var i, l, i2, l2, postList, posts;
			var postLists = document.querySelectorAll( '.index-posts, .issue-section-posts' );

			for ( i = 0, l = postLists.length; i < l; i++  ) {
				postList = postLists[ i ];
				posts = postList.querySelectorAll( '.entry' );

				for ( i2 = 0, l2 = posts.length; i2 < l2; i2++ ) {
					if ( 0 === ( i2 % 2 ) ) { // reversed because we start at 0
						posts[ i2 ].classList.add( 'nth-child-odd' );
					} else {
						posts[ i2 ].classList.add( 'nth-child-even' );
					}
				}

			}

		};

		/* Init everything */
		document.attachEvent( 'onreadystatechange', function () {
			if ( 'loading' != document.readyState ) {
				classifyOddEven();
			}
		} );

	}
} )();

