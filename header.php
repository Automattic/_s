<?php
/**
 * The header for our theme.
 *
 * Displays all of the <head> section and everything up till <div id="content">
 *
 * @package YuMag
 */
?><!DOCTYPE html>
<html <?php language_attributes(); ?>>
<head>
<meta charset="<?php bloginfo( 'charset' ); ?>">
<meta name="viewport" content="width=device-width, initial-scale=1">
<link rel="profile" href="http://gmpg.org/xfn/11">
<link rel="pingback" href="<?php bloginfo( 'pingback_url' ); ?>">

<?php wp_head(); ?>
</head>

<body <?php body_class(); ?>>

<a class="skip-link screen-reader-text" href="#content"><?php _e( 'Skip to content', 'yumag' ); ?></a>

<nav id="site-navigation" class="main-navigation js-menu-area" role="navigation" data-menu-side="left">
	<button class="menu-toggle js-menu-toggle" aria-controls="menu" aria-expanded="false">
		<span class="menu-toggle-inner"><?php _e( 'Menu', 'yumag' ); ?></span>
	</button>
	<div class="main-navigation-wrapper js-menu-contents">
		<div class="widget-area menu-widget-area">
			<?php dynamic_sidebar( 'menu-widgets' ); ?>
		</div>
	</div>
</nav><!-- #site-navigation -->

<div id="site-search" class="main-search js-menu-area" role="search" data-menu-side="right">
	<button class="search-toggle js-menu-toggle" aria-controls="search" aria-expanded="false">
		<span class="search-toggle-inner"><?php _e( 'Search', 'yumag' ); ?></span>
	</button>
	<div class="main-search-wrapper js-menu-contents">
		<div class="widget-area search-widget-area" role="complementary">
			<?php dynamic_sidebar( 'search-widgets' ); ?>
		</div>
	</div>
</div><!-- #site-search -->

<!-- Wrapper for whole page except off-canvas menus and skiplinks. -->
<div id="page" class="hfeed site">

	<header id="masthead" class="site-header" role="banner">

		<div class="site-branding">
			<h1 class="site-title">
				<?php if ( ! is_front_page() ) : ?>
				<a class="site-logo-link" href="<?php echo esc_url( home_url( '/' ) ); ?>" rel="home" title="<?php _e( 'Go to latest issue', 'yumag' ); ?>">
				<?php endif; ?>
				<img class="site-logo" src="<?php echo get_stylesheet_directory_uri(); ?>/assets/logo.svg" onerror="this.src='<?php echo get_stylesheet_directory_uri(); ?>/assets/logo.png'" alt="<?php bloginfo( 'name' ); ?>" width="125" height="89">
				<?php if ( ! is_front_page() ) : ?>
				</a>
				<?php endif; ?>
			</h1>
			<h2 class="site-description"><?php bloginfo( 'description' ); ?></h2>
		</div><!-- .site-branding -->

	</header><!-- #masthead -->

	<div id="content" class="site-content">
