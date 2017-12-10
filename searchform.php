<?php
/**
 * The template for displaying search forms in _s
 *
 * @package _s
 */
?>
  <form method="get" id="searchform" action="<?php echo esc_url( home_url( '/' ) ); ?>" role="search">
    <input type="text" class="field" name="s" value="<?php echo esc_attr( get_search_query() ); ?>" id="searchform-input" placeholder="<?php esc_attr_e( 'Search', '_s' ); ?>" />
    <button type="submit" class="submit" name="submit" id="searchsubmit" value="<?php esc_attr_e( 'Search', '_s' ); ?>"><i class="fa fa-search fa-flip-horizontal" aria-hidden="true"></i></button>
  </form>
