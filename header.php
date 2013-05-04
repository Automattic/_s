<?php
/**
 * The Header for our theme.
 *
 * Displays all of the <head> section and everything up till <div id="main">
 *
 * @Maquina
 */
?><!DOCTYPE html><!-- Tanks for reading my code you are awesome this template his on https://github.com/vmnlopes/Maquina.git -->
<html <?php language_attributes(); ?>>
<head>
	<meta charset="<?php bloginfo( 'charset' ); ?>" />
	<meta name="viewport" content="width=device-width" />
	<meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1">
	<title><?php wp_title( '|', true, 'right' ); ?></title>
	<link rel="profile" href="http://gmpg.org/xfn/11" />
	<link rel="pingback" href="<?php bloginfo( 'pingback_url' ); ?>" />
<!--[if lt IE 9]>
<script src="<?php echo get_template_directory_uri(); ?>/js/html5.js" type="text/javascript"></script>
<!--[endif]-->
	<?php wp_head(); ?>
</head>
	<body <?php body_class(); ?>>
	<div id="page" class="hfeed site">
		<?php do_action( 'before' ); ?>
		</nav><!-- #site-navigation -->
			<header id="masthead" class="site-header" role="banner">
				<div class="site-branding">
					<h1 class="site-title"><a href="<?php echo esc_url( home_url( '/' ) ); ?>" title="<?php echo esc_attr( get_bloginfo( 'name', 'display' ) ); ?>" rel="home"><?php bloginfo( 'name' ); ?></a></h1>
					<h2 class="site-description"><?php bloginfo( 'description' ); ?></h2>
				</div><!-- site-branding -->
			</header><!-- #masthead -->
	<?php get_sidebar('header'); ?>
			<nav id="site-navigation navigation-primary" class="navigation-main navigation-primary" role="navigation">
				<h1 class="menu-toggle"><?php _e( 'Menu', 'maquina' ); ?></h1>
					<div class="screen-reader-text skip-link">
						<a href="#content" title="<?php esc_attr_e( 'Skip to content', '_s' ); ?>">
							<?php _e( 'Skip to content', '_s' ); ?>
						</a>
					</div>
	<?php wp_nav_menu( array( 'theme_location' => 'primary' ) ); ?>
			</nav><!-- #site-navigation -->

<div id="main" class="site-main">
