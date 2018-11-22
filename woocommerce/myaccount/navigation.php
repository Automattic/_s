<?php
/**
 * My Account navigation
 *
 * This template can be overridden by copying it to yourtheme/woocommerce/myaccount/navigation.php.
 *
 * HOWEVER, on occasion WooCommerce will need to update template files and you
 * (the theme developer) will need to copy the new files to your theme to
 * maintain compatibility. We try to do this as little as possible, but it does
 * happen. When this occurs the version of the template file will be bumped and
 * the readme will list any important changes.
 *
 * @see     https://docs.woocommerce.com/document/template-structure/
 * @author  WooThemes
 * @package WooCommerce/Templates
 * @version 2.6.0
 */

if ( ! defined( 'ABSPATH' ) ) {
	exit;
}
?>
	<?php do_action( 'woocommerce_before_account_navigation' ); ?>
	
	<button class="secondary-navigation__toggle"><?php esc_html_e( 'Toggle Account Menu', '_svbk' ); ?></button>
	<nav class="woocommerce-MyAccount-navigation secondary-navigation">
		
		<?php
		if ( has_nav_menu( 'woocommerce-myaccount' ) ) :
			wp_nav_menu(
				array(
					'theme_location' => 'woocommerce-myaccount',
					'container'      => false,
					'menu_id'        => 'woocommerce-myaccount-menu',
					'depth' 		 => 1
				)
			);
		else :
			?>
			<ul>
				<?php foreach ( wc_get_account_menu_items() as $endpoint => $label ) : ?>
					<li class="<?php echo wc_get_account_menu_item_classes( $endpoint ); ?>">
						<a href="<?php echo esc_url( wc_get_account_endpoint_url( $endpoint ) ); ?>"><?php echo esc_html( $label ); ?></a>
					</li>
				<?php endforeach; ?>
			</ul>	
		<?php endif; ?>
	</nav>
	<?php do_action( 'woocommerce_after_account_navigation' ); ?>
