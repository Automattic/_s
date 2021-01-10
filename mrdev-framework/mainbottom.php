<?php
	if(function_exists('mrdev_mainbottom')) {
		mrdev_mainbottom();
	} else {
        echo '</article>';
        if ( is_active_sidebar( 'sidebar-b' ) ) {
            echo '<aside class="mr-aside mr-asideright mr-marginleft mr-marginright mr-item">';
            dynamic_sidebar( 'sidebar-b' );
            echo '</aside>';
        }
        echo '</div></main>';
    }
?>