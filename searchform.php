<form role="search" method="get" class="search-form" action="<?php esc_url( home_url( '/' ) ) ?>">
	<label>
		<span class="screen-reader-text"><?php _x( 'Search for:', 'label' ) ?></span>
		<input type="search" class="search-field" placeholder="<?php esc_attr_x( 'Search &hellip;', 'placeholder' ) ?>" value="<?php get_search_query() ?>" name="s" />
	</label>
	<button type="submit" class="search-submit" ><span class="button-label"><?php esc_html_e( 'Search', 'submit button' ) ?></span></button>
</form>