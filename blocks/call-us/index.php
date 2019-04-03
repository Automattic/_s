<?php

function _svbk_register_callus_block() {
	register_block_type(
		'svbk/call-us',
		array(
			'editor_script' => '_svbk-blocks',
		)
	);
}

add_action( 'init', '_svbk_register_callus_block', 20 );
