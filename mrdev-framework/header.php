<?php
	if(function_exists('mrdev_header')) {
		mrdev_header();
	} else {
		if ( is_active_sidebar( 'header' ) ) {
			echo '<header id="mr-header" class="mr-header mrdev_s-header"><div class="mr-header-container mr-padding mr-0perline">';
			dynamic_sidebar('header');
			echo '</div></header>';
		}
	}
?>