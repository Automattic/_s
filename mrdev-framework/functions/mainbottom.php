<?php
	if(function_exists('mrdev_mainbottom')) {
		mrdev_mainbottom();
	} else {
        echo '</section>';
        if ( is_active_sidebar( 'sidebar-b' ) ) {
            echo '<aside class="mr-aside mr-asideright mrdev_s-aside mrdev_s-asideright mr-marginleft mr-marginright mr-paddingleft mr-paddingright mr-item">';
            dynamic_sidebar( 'sidebar-b' );
            echo '</aside>';
        }
        echo '</div></main>';
    }
?>