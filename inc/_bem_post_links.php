<?php
add_filter('next_post_link', '_bem_next_post_link');
add_filter('previous_post_link', '_bem_previous_post_link');

function _bem_next_post_link($format){
	return str_replace('href=', 'class="_post-navigation__link _post-navigation__link--next" href=', $format);
}

function _bem_previous_post_link($format){
	return str_replace('href=', 'class="_post-navigation__link _post-navigation__link--previous" href=', $format);
}
