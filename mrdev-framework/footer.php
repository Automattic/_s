<?php
    if(function_exists('mrdev_footer')) {
        mrdev_footer();
    } else {
        if ( is_active_sidebar( 'footer' ) ) {
            echo '<footer id="mr-footer" class="mr-footer">';
            dynamic_sidebar('footer');
            echo '</footer>';
        }
	}
?>