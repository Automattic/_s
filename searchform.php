<form role="search" method="get" class="search-form" action="<?php echo esc_url( home_url( '/' ) ); ?>">
	<label>
		<span class="screen-reader-text"><?php echo _x( 'Search for:', 'hippie' ) ?></span>
		<input type="search" class="search-field" placeholder="<?php echo esc_attr_x( 'Search', 'hippie' ) ?>" value="<?php echo get_search_query() ?>" name="s" title="<?php echo esc_attr_x( 'Search...', 'hippie' ) ?>" />
	</label>
	<button aria-label="search">
		<svg class="icon icon-search">
			<use xlink:href="#icon-search"></use>
		</svg>
	</button>
</form>