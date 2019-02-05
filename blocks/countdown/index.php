<?php

function _svbk_register_countdown_block() {
	register_block_type(
		'svbk/countdown',
		array(
			'editor_script' => '_svbk-blocks',
		)
	);
}

add_action( 'init', '_svbk_register_countdown_block', 20 );
