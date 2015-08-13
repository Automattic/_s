<?php
/**
 * The header for our theme.
 *
 * This is the template that displays all of the <head> section and everything up until <div id="content">
 *
 * @link https://developer.wordpress.org/themes/basics/template-files/#template-partials
 *
 * @package _s
 */

?><!DOCTYPE html>
<!--[if lt IE 7]>      <html class="no-js lt-ie9 lt-ie8 lt-ie7" <?php language_attributes(); ?>> <![endif]-->
<!--[if IE 7]>         <html class="no-js lt-ie9 lt-ie8" <?php language_attributes(); ?>> <![endif]-->
<!--[if IE 8]>         <html class="no-js lt-ie9" <?php language_attributes(); ?>> <![endif]-->
<!--[if gt IE 8]><!--> <html class="no-js" <?php language_attributes(); ?>> <!--<![endif]-->
<head>
<meta charset="<?php bloginfo( 'charset' ); ?>">
<meta name="viewport" content="width=device-width, initial-scale=1">
<link rel="profile" href="http://gmpg.org/xfn/11">
<link rel="pingback" href="<?php bloginfo( 'pingback_url' ); ?>">

<?php wp_head(); ?>
</head>

<body <?php body_class(); ?>>
<div id="outer-wrap">
<div id="inner-wrap">
<header class="header">
	<div id="top" class="l-constrained">
		<!-- <div class="l-logo">
			<a class="logo" href="<?php echo esc_url( home_url( '/' ) ); ?>">
				<img class="logo__image" src="<?php echo get_template_directory_uri(); ?>/assets/dist/img/logo@2x.png" width="197" height="48" alt="<?php echo esc_attr( bloginfo( 'name' ) ); ?>">
			</a>
		</div> -->
		<a id="nav-open-btn" class="menu-toggle js-menu-toggle" href="#offcanvas"><span class="menu-toggle__line"></span><span class="visuallyhidden">Menu</span></a>
		<div class="offcanvas-wrap l-header-content">
			<div id="offcanvas" class="offcanvas">
				<a id="nav-close-btn" class="menu-toggle menu-toggle--close" href="#top"><span class="menu-toggle__line"></span><span class="visuallyhidden">Close</span></a>
				<nav class="l-header-main" role="navigation">
					<ul class="main">
						<li class="main__item"><a class="main__link" href="#">Link Item</a></li>
						<li class="main__item"><a class="main__link" href="#">Link Item</a></li>
						<li class="main__item"><a class="main__link" href="#">Link Item</a></li>
						<li class="main__item"><a class="main__link" href="#">Link Item</a></li>
						<li class="main__item"><a class="main__link" href="#">Link Item</a></li>
						<li class="main__item"><a class="main__link" href="#">Link Item</a></li>
					</ul>
				</nav>

				<?php // wp_nav_menu( array(
					  //  'theme_location' => 'primary',
					  //  'container'      => '',
					  //  'menu_class'     => 'main',
					  //  'walker'         => new EV_Sub_Level_Walker
					//)
				//); ?>

			</div>
		</div>
	</div>
</header>
<div class="wrap">
	<h1 class="site-title"><a href="<?php echo esc_url( home_url( '/' ) ); ?>" rel="home"><?php bloginfo( 'name' ); ?></a></h1>
	<p class="site-description"><?php bloginfo( 'description' ); ?></p>
</div>
