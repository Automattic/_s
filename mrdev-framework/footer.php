<?php
    if(function_exists('mrdev_footer')) {
        mrdev_footer();
    } else {
        if ( is_active_sidebar( 'footer' ) ) {
            echo '<footer id="mr-footer" class="mr-footer"><div class="mr-footer-container mr-0perline">';
            dynamic_sidebar('footer');
            echo '</div></footer>';
        }
	}
?>