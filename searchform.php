<form role="search" method="get" id="searchform" class="_search-form" action="<?php echo esc_url( home_url( '/' ) ); ?>">
  <label class="screen-reader-text _search-form__label" for="s"><?php _x( 'Search for:', 'label' ); ?></label>
  <input class="_search-form__query" type="text" value="<?php echo get_search_query(); ?>" name="s" id="s" />
  <input class="_search-form__submit" type="submit" id="searchsubmit" value="<?php echo esc_attr_x( 'Search', 'submit button' ); ?>" />
</form>
