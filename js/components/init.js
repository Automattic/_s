( function() {

	// put some tasty javascript here
	
	/**
	 * Initialize Astro Menu Drop for Mobile Navigation
	 * https://github.com/cferdinandi/astro
	 */
	astro.init();

	/**
	 * Initialize Drop for WordPress Menu
	 * https://github.com/cferdinandi/drop
	 */
	drop.init({
	    toggleClass: 'menu-item-has-children', // Class used for the dropdown <li> element
	    contentClass: 'sub-menu', // Class used for the dropdown content <div>
	    toggleActiveClass: 'active', // Class added to active dropdown toggles
	    contentActiveClass: 'active', // Class added to active dropdown content
	});

})();