<?php
	if(function_exists('mrdev_header')) {
		mrdev_header();
	} else {
		if ( is_active_sidebar( 'header' ) ) {
			echo '<header id="mr-header" class="mr-header">';
			dynamic_sidebar('header');
			echo '</header>';
		}
	}
?>