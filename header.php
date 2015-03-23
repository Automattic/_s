<?php
/**
 * The header for our theme.
 *
 * Displays all of the <head> section and everything up till <div id="content">
 *
 * @package YuMag
 */

// URL-path to images.
$src = get_template_directory_uri() . '/assets/';

?><!DOCTYPE html>
<html <?php language_attributes(); ?>>
<head>
<meta charset="<?php bloginfo( 'charset' ); ?>">
<meta name="viewport" content="width=device-width, initial-scale=1">
<link rel="profile" href="http://gmpg.org/xfn/11">
<link rel="pingback" href="<?php bloginfo( 'pingback_url' ); ?>">
<title><?php wp_title( '/', true, 'right' ); ?></title>

<?php wp_head(); ?>
</head>

<body <?php body_class(); ?>>

<a class="skip-link screen-reader-text" href="#content"><?php _e( 'Skip to content', 'yumag' ); ?></a>

<nav id="site-navigation" class="main-navigation js-menu-area" role="navigation" data-menu-side="left">
	<button class="menu-toggle js-menu-toggle" aria-controls="menu" aria-expanded="false">
		<span class="menu-toggle-outer"><span class="menu-toggle-inner"><?php _e( 'Menu', 'yumag' ); ?></span></span>
	</button>
	<div class="main-navigation-wrapper js-menu-contents">
		<div class="main-navigation-site-logo">
			<a class="site-logo-link" href="<?php echo esc_url( home_url( '/' ) ); ?>" rel="home" title="<?php _e( 'Go to latest issue', 'yumag' ); ?>">
				<img class="site-logo" src="<?php echo $src; ?>logo-white.svg" onerror="this.src='<?php echo $src; ?>logo-white.png'" alt="<?php bloginfo( 'name' ); ?>" width="100" height="69">
			</a>
		</div>
		<div class="widget-area menu-widget-area">
			<?php dynamic_sidebar( 'menu-widgets' ); ?>
		</div>
	</div>
</nav><!-- #site-navigation -->

<div id="site-search" class="main-search js-menu-area" role="search" data-menu-side="right">
	<button class="search-toggle js-menu-toggle" aria-controls="search" aria-expanded="false">
		<span class="menu-toggle-outer"><span class="search-toggle-inner"><?php _e( 'Search', 'yumag' ); ?></span></span>
	</button>
	<div class="main-search-wrapper js-menu-contents">
		<div class="widget-area search-widget-area" role="complementary">
			<?php dynamic_sidebar( 'search-widgets' ); ?>
		</div>
	</div>
</div><!-- #site-search -->

<!-- Wrapper for whole page except off-canvas menus and skiplinks. -->
<div id="page" class="hfeed site">

	<header id="masthead" class="site-header<?php if ( is_single() ) : ?> site-header-single<?php endif; ?>" role="banner">

		<div class="site-branding">
			<?php if ( ! is_single() ) : ?>
			<h1 class="site-title">
				<a class="site-logo-link" href="<?php echo esc_url( home_url( '/' ) ); ?>" rel="home" title="<?php _e( 'Go to latest issue', 'yumag' ); ?>">
					<img class="site-logo" src="<?php echo $src; ?>logo.svg" onerror="this.src='<?php echo $src; ?>logo.png'" alt="<?php bloginfo( 'name' ); ?>" width="100" height="71">
				</a>
			</h1>
			<?php else : ?>
			<div class="site-title-single">
				<a class="site-logo-link" href="<?php echo esc_url( home_url( '/' ) ); ?>" rel="home" title="<?php _e( 'Go to latest issue', 'yumag' ); ?>">
					<img class="site-logo mini-site-logo" src="<?php echo $src; ?>logo-grey-small.png" srcset="<?php echo $src; ?>logo-grey-small@2x.png 2x, <?php echo $src; ?>logo-grey-small.png 1x" alt="<?php bloginfo( 'name' ); ?>" width="42" height="29">
				</a>
				<?php
				/* translators: used between list items, there is a space on each side of the slash */
				$cats = get_the_category();
				if ( ! empty ( $cats ) && yumag_categorized_blog() ) {
					$cat = $cats[0];
					?>
					<span class="slash">/</span>
					<a class="category-link category-<?php echo $cat->slug; ?>" href="<?php echo get_category_link( $cat->cat_ID ); ?>" title="<?php _e( 'More posts in this category', 'yumag' ); ?>">
						<img src="<?php echo $src . $cat->slug; ?>-grey-21.png" srcset="<?php echo $src . $cat->slug; ?>-grey-42.png 2x, <?php echo $src . $cat->slug; ?>-grey-21.png 1x" height="21" alt="<?php echo esc_attr( $cat->cat_name ); ?>">
					</a>
					<?php
				}
				?>
			</div>
			<?php endif; ?>
		</div><!-- .site-branding -->

	</header><!-- #masthead -->

	<div id="content" class="site-content">
