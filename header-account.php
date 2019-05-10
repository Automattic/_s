<?php
/**
 * The header for our theme
 *
 * This is the template that displays all of the <head> section and everything up until <div id="content">
 *
 * @link https://developer.wordpress.org/themes/basics/template-files/#template-partials
 *
 * @package _svbk
 */

use \Svbk\WP\Helpers;

?>
<!doctype html>
<html <?php language_attributes(); ?><?php echo Helpers\Html\Element::attributes( apply_filters( '_svbk_html_attributes', [ 'class' => [] ] ) ); ?> >
<head>
	<meta charset="<?php bloginfo( 'charset' ); ?>">
	<meta name="viewport" content="width=device-width, initial-scale=1">
	<link rel="profile" href="https://gmpg.org/xfn/11">

	<?php wp_head(); ?>
</head>

<body <?php body_class(); ?>>
<?php wp_body_open(); ?>

	<div id="page" class="site">
		<a class="skip-link screen-reader-text" href="#content"><?php esc_html_e( 'Skip to content', '_svbk' ); ?></a>
		<header id="masthead" class="site-header" role="banner">
		
			<?php if ( get_theme_mod( 'header_top_bar' ) ) : ?>
			<div class="top-header">
				<div class="wrap">
				<?php echo do_shortcode( get_theme_mod( 'header_top_bar_content', __( 'Customize this text in Theme Customizer', '_svbk' ) ) ); ?>
				</div>
			</div>			
			<?php endif ?>		
		
			<div class="custom-header-media">
				<?php the_custom_header_markup(); ?>
			</div>

			<div class="wrap">
				
				<div class="site-branding">
				
					<?php the_custom_logo(); ?>
				
					<?php if ( is_front_page() && is_home() ) : ?>
						<h1 class="site-title"><a href="<?php echo esc_url( home_url( '/' ) ); ?>" rel="home"><?php bloginfo( 'name' ); ?></a></h1>
					<?php else : ?>
						<p class="site-title"><a href="<?php echo esc_url( home_url( '/' ) ); ?>" rel="home"><?php bloginfo( 'name' ); ?></a></p>
					<?php endif; ?>
				
					<?php
					$_svbk_description = get_bloginfo( 'description', 'display' );
					if ( $_svbk_description || is_customize_preview() ) :
						?>
						<p class="site-description"><?php echo $_svbk_description; /* WPCS: xss ok. */ ?></p>
					<?php endif; ?>
					
				</div><!-- .site-branding -->
				
				<button class="search-toggle">
					<span class="screen-reader-text"><?php esc_html_e( 'Toggle Search', '_svbk' ); ?></span>
				</button>
				<?php echo get_search_form(); ?>
	
				<button class="main-navigation-toggle" aria-controls="main-navigation" aria-expanded="false">
					<span class="screen-reader-text"><?php esc_html_e( 'Primary Menu', '_svbk' ); ?></span>
				</button>
			
				<div id="main-navigation">
					<?php if ( has_nav_menu( 'account-primary' ) ) : ?>
					<nav id="site-navigation" role="navigation">
						<?php
							wp_nav_menu(
								array(
									'theme_location' => 'account-primary',
									'menu_id'        => 'primary-menu',
								)
							);
						?>
					</nav><!-- #site-navigation -->
					<?php elseif ( has_nav_menu( 'menu-1' ) ) : ?>
					<nav id="site-navigation" role="navigation">
						<?php
							wp_nav_menu(
								array(
									'theme_location' => 'menu-1',
									'menu_id'        => 'primary-menu',
								)
							);
						?>
					</nav><!-- #site-navigation -->
					<?php endif; ?>
					
					<?php
					if ( function_exists( '_svbk_myaccount_sidebar_profile' ) ) {
						_svbk_myaccount_sidebar_profile();
					}
					?>
					
					<?php if ( has_nav_menu( 'language' ) ) : ?>
					<nav id="language-navigation" role="navigation">
						<?php
							wp_nav_menu(
								array(
									'theme_location' => 'language',
									'menu_id'        => 'language-menu',
								)
							);
						?>
					</nav><!-- #language-navigation -->
					<?php endif; ?>						
					
				</div>
			
			</div>
		</header><!-- #masthead -->

		<div id="content" class="site-content">
			
			<?php if ( is_user_logged_in() && has_nav_menu( 'account-secondary' ) ) : ?>			
			<button class="secondary-navigation__toggle"><?php esc_html_e( 'Toggle Account Menu', '_svbk' ); ?></button>
			<nav class="secondary-navigation">
					<?php
					wp_nav_menu(
						array(
							'theme_location' => 'account-secondary',
							'container'      => false,
							'menu_id'        => 'account-secondary-menu',
							'depth'          => 1,
						)
					);
					?>
			</nav>	
		<?php else : ?>
			<?php woocommerce_account_navigation(); ?>
		<?php endif; ?>
