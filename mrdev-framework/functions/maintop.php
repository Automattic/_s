<?php
	if(function_exists('mrdev_maintop')) {
		mrdev_maintop();
	} else {
        echo '<main id="mr-main" class="mr-main mrdev_s-main"><div class="mr-main-container mr-container mr-0perline">';
        if ( is_active_sidebar( 'sidebar-a' ) ) {
            echo '<aside class="mr-aside mr-asideleft mrdev_s-aside mrdev_s-asideleft mr-marginleft mr-marginright mr-paddingleft mr-paddingright mr-item">';
            dynamic_sidebar( 'sidebar-a' );
            echo '</aside>';
        }
        echo '<section class="mr-section mr-article-content mr-item">';
    }
?>