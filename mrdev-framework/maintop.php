<?php
	if(function_exists('mrdev_maintop')) {
		mrdev_maintop();
	} else {
        echo '<main id="mr-main" class="mr-main"><div class="mr-main-container container mr-0perline">';
        if ( is_active_sidebar( 'sidebar-a' ) ) {
            echo '<aside class="mr-aside mr-asideleft mr-item">';
            dynamic_sidebar( 'sidebar-a' );
            echo '</aside>';
        }
        echo '<article class="mr-section mr-article mr-item">';
    }
?>