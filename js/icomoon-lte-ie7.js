/* Load this script using conditional IE comments if you need to support IE 7 and IE 6. */

window.onload = function() {
	function addIcon(el, entity) {
		var html = el.innerHTML;
		el.innerHTML = '<span style="font-family: \'icomoon\'">' + entity + '</span>' + html;
	}
	var icons = {
			'icon-twitter' : '&#x74;',
			'icon-facebook' : '&#x66;',
			'icon-linkedin' : '&#x69;',
			'icon-rss' : '&#x72;',
			'icon-envelope-alt' : '&#x6d;',
			'icon-instagram' : '&#x6e;',
			'icon-youtube' : '&#x79;',
			'icon-vimeo' : '&#x76;',
			'icon-tumblr' : '&#x21;',
			'icon-pinterest' : '&#x70;',
			'icon-googleplus' : '&#x22;',
			'icon-flickr' : '&#x23;',
			'icon-close' : '&#x2715;',
			'icon-search' : '&#x260c;',
			'icon-arrow-left' : '&#x2190;',
			'icon-arrow-right' : '&#x2192;',
			'icon-arrow-down' : '&#x2193;',
			'icon-arrow-up' : '&#x2191;',
			'icon-warning' : '&#x25b2;',
			'icon-menu' : '&#x2630;',
			'icon-location' : '&#x25bc;',
			'icon-calendar' : '&#x25a9;',
			'icon-pencil' : '&#x270e;',
			'icon-podcast' : '&#x2669;',
			'icon-newspaper-alt' : '&#x274f;',
			'icon-tools' : '&#x2692;',
			'icon-star' : '&#x2605;',
			'icon-user' : '&#x260d;',
			'icon-plus-sign' : '&#x271a;'
		},
		els = document.getElementsByTagName('*'),
		i, attr, html, c, el;
	for (i = 0; ; i += 1) {
		el = els[i];
		if(!el) {
			break;
		}
		attr = el.getAttribute('data-icon');
		if (attr) {
			addIcon(el, attr);
		}
		c = el.className;
		c = c.match(/icon-[^\s'"]+/);
		if (c && icons[c[0]]) {
			addIcon(el, icons[c[0]]);
		}
	}
};
