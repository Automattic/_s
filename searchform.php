<?php 
if ( 'page' === get_option( 'show_on_front' ) && ( is_home() || is_single() || is_archive() ) ) {
	$action = get_permalink( get_option( 'page_for_posts' ) );
} elseif ( is_post_type_archive() || ( is_singular() && get_post_type_archive_link( get_post_type() ) ) ) {
	$action = get_post_type_archive_link( get_post_type() );
} else {
	$action = get_home_url( '/' );
}
?>

<form role="search" method="get" class="search-form" action="<?php echo esc_url( $action ); ?>">
	<label>
		<span class="screen-reader-text"><?php _x( 'Search for:', 'label' ) ?></span>
		<input type="search" class="search-field" placeholder="<?php echo esc_attr_x( 'Search &hellip;', 'placeholder' ) ?>" value="<?php get_search_query() ?>" name="s" />
	</label>
	<button type="submit" class="search-submit" ><span class="button-label"><?php esc_html_e( 'Search', 'submit button' ) ?></span></button>
</form>