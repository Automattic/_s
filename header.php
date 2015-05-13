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
<!--[if IE 7]> <html <?php language_attributes(); ?> class="no-js ie7 lte9 lte8 lte7"> <![endif]-->
<!--[if IE 8]> <html <?php language_attributes(); ?> class="no-js ie8 lte9 lte8"> <![endif]-->
<!--[if IE 9]> <html <?php language_attributes(); ?> class="no-js ie9 lte9"> <![endif]-->
<!--[if gt IE 9]> <html <?php language_attributes(); ?> class="no-js"> <![endif]-->
<!--[if !IE]><!--><html><!--<![endif]-->
<head>
<meta charset="<?php bloginfo( 'charset' ); ?>">
<meta name="viewport" content="width=device-width, initial-scale=1">
<link rel="profile" href="http://gmpg.org/xfn/11">
<link rel="pingback" href="<?php bloginfo( 'pingback_url' ); ?>">
<title><?php wp_title( '/', true, 'right' ); ?></title>

<script>(function(d,c,b){if(d.classList){d.classList.remove(c);d.classList.add(b)} else d.className=d.className.replace(new RegExp('(^| )'+c+'( |$)','gi'),' '+b+' ')})(document.documentElement,'no-js','js')</script>

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
			<?php if ( is_single() ) : ?>
			<div class="site-title-single">
				<a class="site-logo-link" href="<?php echo esc_url( home_url( '/' ) ); ?>" rel="home" title="<?php _e( 'Go to latest issue', 'yumag' ); ?>">
					<img class="site-logo mini-site-logo" src="<?php echo $src; ?>logo-black-small.png" srcset="<?php echo $src; ?>logo-black-small@2x.png 2x, <?php echo $src; ?>logo-black-small.png 1x" alt="<?php bloginfo( 'name' ); ?>" width="42" height="29">
				</a>
				<?php
				/* translators: used between list items, there is a space on each side of the slash */
				$cats = get_the_category();
				if ( ! empty ( $cats ) && yumag_categorized_blog() ) {
					$cat = $cats[0];
					?>
					<span class="slash">/</span>
					<a class="site-title-term category-link category-<?php echo $cat->slug; ?>" href="<?php echo get_category_link( $cat->cat_ID ); ?>" title="<?php _e( 'More posts in this category', 'yumag' ); ?>"><?php echo esc_html( $cat->cat_name ); ?></a>
					<?php
				}
				?>
			</div>
			<?php else : ?>
			<h1 class="site-title">
				<a class="site-logo-link" href="<?php echo esc_url( home_url( '/' ) ); ?>" rel="home" title="<?php _e( 'Go to latest issue', 'yumag' ); ?>">
					<img class="site-logo" src="<?php echo $src; ?>logo.png" srcset="<?php echo $src; ?>logo@2x.png 2x, <?php echo $src; ?>logo.png 1x" alt="<?php bloginfo( 'name' ); ?>" width="124" height="85">
				</a>
			</h1>
			<?php endif; ?>
		</div><!-- .site-branding -->

	</header><!-- #masthead -->

	<div id="content" class="site-content">
