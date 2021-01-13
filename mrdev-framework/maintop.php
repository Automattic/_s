<?php
	if(function_exists('mrdev_maintop')) {
		mrdev_maintop();
	} else {
        echo '<main id="mr-main" class="mr-main"><div class="mr-main-container mr-container mr-0perline">';
        if ( is_active_sidebar( 'sidebar-a' ) ) {
            echo '<aside class="mr-aside mr-asideleft mr-marginleft mr-marginright mr-item">';
            dynamic_sidebar( 'sidebar-a' );
            echo '</aside>';
        }
        if(!function_exists('mrdev_post_class')) {
            function mrdev_post_class( $classes ){
                $classes[] = 'mr-item';
                return $classes;
            }
            add_filter('post_class','mrdev_post_class');
        }
        echo '<section class="mr-section mr-article-content mr-item">';
    }
?>