<?php
/**
 * The header for our theme.
 *
 * This is the template that displays all of the <head> section and everything up until <div id="content">
 *
 * @link https://developer.wordpress.org/themes/basics/template-files/#template-partials
 *
 * @package _bem
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
<div id="page" class="site">
	<a class="skip-link screen-reader-text" href="#main"><?php esc_html_e( 'Skip to content', '_bem' ); ?></a>

	<header id="masthead" class="_header" role="banner">
		<div class="_header__branding">
			<?php
			if ( is_front_page() && is_home() ) : ?>
				<h1 class="_header__title"><a class="_header__title-link" href="<?php echo esc_url( home_url( '/' ) ); ?>" rel="home"><?php bloginfo( 'name' ); ?></a></h1>
			<?php else : ?>
				<p class="_header__title"><a class="_header__title-link" href="<?php echo esc_url( home_url( '/' ) ); ?>" rel="home"><?php bloginfo( 'name' ); ?></a></p>
			<?php
			endif;

			$description = get_bloginfo( 'description', 'display' );
			if ( $description || is_customize_preview() ) : ?>
				<p class="_header__description"><?php echo $description; /* WPCS: xss ok. */ ?></p>
			<?php
			endif; ?>
		</div><!-- ._header__branding -->

		<nav id="_header__navigation" class="_header__navigation" role="navigation">
			<input type="checkbox" class="_header__navigation-checkbox" name="navigation-checkbox" id="navigation-toggler" value="true" aria-controls="primary-menu" aria-expanded="false">
			<label class="_header__navigation-toggler" for="navigation-toggler"><?php esc_html_e( 'Primary Menu', '_bem' ); ?></label>
			<?php wp_nav_menu( array( 'theme_location' => 'primary', 'menu_id' => 'primary-menu', 'depth' => 2, 'menu_class' => '_header__menu-list', 'container_class' => '_header__menu', 'walker' => new Bem_Walker_Nav_Menu() ) ); ?>
		</nav><!-- #_header__navigation -->
	</header><!-- #masthead -->

	<div id="content" class="site-content _content">
