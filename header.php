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
<div id="page" class="hfeed site">
	<a class="skip-link screen-reader-text" href="#content"><?php _e( 'Skip to content', 'yumag' ); ?></a>

	<header id="masthead" class="site-header" role="banner">

		<nav id="site-navigation" class="main-navigation js-menu-area" role="navigation" data-menu-side="left">
			<button class="menu-toggle js-menu-toggle" aria-controls="menu" aria-expanded="false"><?php _e( 'Menu', 'yumag' ); ?></button>
			<div class="main-navigation-wrapper js-menu-contents">
				<?php wp_nav_menu( array(
					'container' => false,
					'theme_location' => 'primary',
					'depth' => 1
				) ); ?>
			</div>
		</nav><!-- #site-navigation -->

		<div id="site-search" class="main-search js-menu-area" role="search" data-menu-side="right">
			<button class="search-toggle js-menu-toggle" aria-controls="search" aria-expanded="false"><?php _e( 'Search', 'yumag' ); ?></button>
			<div class="main-search-wrapper js-menu-contents">
				<?php get_search_form(); ?>
			</div>
		</div><!-- #site-search -->

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
