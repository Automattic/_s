<?php
	if(function_exists('mrdev_archivetop')) {
		mrdev_archivetop();
	} else {
        echo '<div class="mr-archive mrdev_s-archive mrdev-archive mr-'.get_post_type().' mr-theme mr-none mr-boxsize">
        <div class="mr-layout mr-none mr-flex mr-wrap mr-relative mr-noscroll">
		<div class="mr-1perline mr-nobullets">';
    }
?>