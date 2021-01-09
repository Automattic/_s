<?php
    if(function_exists('mrdev_offcanvas')) {
        mrdev_offcanvas();
    } else {
        if ( is_active_sidebar( 'offcanvas' ) ) {
            echo '<div id="mr-offcanvas" class="mr-offcanvas mr-transitionright"><div class="mr-offcanvas-toggle"></div><div class="mr-offcanvas-container mr-hide mr-1perline mr-slide">';
            dynamic_sidebar( 'offcanvas' );
            echo '</div></div>';
            if(!wp_script_is('mrdev_utils')) { 
                wp_register_script( 'mrdev_utils', plugin_dir_url( __DIR__ ).'mrdev-framework/assets/js/utils.js',array(),'0.9.40');
                wp_enqueue_script( 'mrdev_utils' );
            }
        }
	}
?>