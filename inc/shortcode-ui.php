<?php
/**
 * The Shortcode UI integrations file
 *
 * Register here the Shortcode classes
 *
 * @package _svbk
 */

namespace Svbk\WP;

use Svbk\WP\Shortcakes;
use Svbk\WP\Email;
use Svbk\WP\Forms;

use Svbk\WP\Helpers;

add_action( 'init', __NAMESPACE__ . '\\shortcode_ui_detection' );

/**
 * Detect if the Shortcode UI plugin is not active and prints an alert.
 *
 * @return void
 */
function shortcode_ui_detection() {
	if ( ! function_exists( 'shortcode_ui_register_for_shortcode' ) ) {
		add_action( 'admin_notices', __NAMESPACE__ . '\\shortcode_ui_notices' );
	}
}

/**
 * Prints the alert (only if the user can enable plugins).
 *
 * @return void
 */
function shortcode_ui_notices() {
	if ( current_user_can( 'activate_plugins' ) ) {
		?>
		<div class="error message">
			<p><?php esc_html_e( 'Shortcode UI plugin must be active for Shortcode UI Example plugin to function.', '_svbk' ); ?></p>
		</div>
		<?php
	}
}

/**
 * Register Shortcodes here.
 *
 * ```php
 *  Shortcakes\Images\Responsive::register( [
 *      'attach_to' => [ 'page', 'post' ]
 *  ] );
 * ```
 *
 * @return void
 */
function register_shortcodes() {

	Helpers\Compliance\Privacy::register_shortcodes();
	
	Forms\Manager::create(
		'download',
		Forms\Download::class,
		[
			'recaptchaKey' => 'ABC',
			'recaptchaSecret' => 'CDE',
			'recipient' => new Email\Contact( [	'email' => env('RECIPIENT_EMAIL') ]	),  
		]
	);	
	
	Shortcakes\Forms\Download::register([
		'shortcode_id' => 'svbk-download'
	])->setForm( 'download' );

}

add_action( 'after_setup_theme', __NAMESPACE__ . '\\register_shortcodes', 11 );
