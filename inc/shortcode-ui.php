<?php

namespace Svbk\WP\Shortcakes;

add_action( 'init', __NAMESPACE__.'\\shortcode_ui_detection' );

function shortcode_ui_detection() {
	if ( ! function_exists( 'shortcode_ui_register_for_shortcode' ) ) {
		add_action( 'admin_notices', __NAMESPACE__.'\\shortcode_ui_notices' );
	}
}

function shortcode_ui_notices() {
	if ( current_user_can( 'activate_plugins' ) ) {
		?>
		<div class="error message">
			<p><?php esc_html_e( 'Shortcode UI plugin must be active for Shortcode UI Example plugin to function.', '_svbk' ); ?></p>
		</div>
		<?php
	}
}

//Example
// $shortcode_ui_dc = DoorwayCard::register(['page']);
