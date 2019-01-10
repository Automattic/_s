<?php
/**
 * The header for our theme
 *
 * This is the template that displays all of the <head> section and everything up until <div id="content">
 *
 * @link https://developer.wordpress.org/themes/basics/template-files/#template-partials
 *
 * @package _s
 */

?>
<!doctype html>
<html <?php language_attributes(); ?>>
<head>
	<meta charset="<?php bloginfo( 'charset' ); ?>">
	<meta name="viewport" content="width=device-width, initial-scale=1">
	<link rel="profile" href="https://gmpg.org/xfn/11">

	<?php wp_head(); ?>
</head>

<body <?php body_class(); ?>>
	
<?php do_action( "_s_site_head" );?>
	
<div id="page" class="site">

	<?php do_action( "_s_main_head" );?>
	
	<a class="skip-link screen-reader-text" href="#content"><?php esc_html_e( 'Skip to content', '_s' ); ?></a>

	<header id="masthead" class="site-header">
		
		<?php do_action( "_s_masthead_head" );?>
		
		<div class="site-branding">
			<?php
			the_custom_logo();
			if ( is_front_page() && is_home() ) :
				?>
				<h1 class="site-title"><a href="<?php echo esc_url( home_url( '/' ) ); ?>" rel="home"><?php echo apply_filter( "_s_head_bloginfo", get_bloginfo( 'name' ) ); ?></a></h1>
				<?php
			else :
				?>
				<p class="site-title"><a href="<?php echo esc_url( home_url( '/' ) ); ?>" rel="home"><?php echo apply_filter( "_s_head_bloginfo", get_bloginfo( 'name' ) ); ?></a></p>
				<?php
			endif;
			$_s_description =  echo apply_filter( "_s_head_description", get_bloginfo( 'description', 'display' ) );
			if ( $_s_description || is_customize_preview() ) :
				?>
				<p class="site-description"><?php echo $_s_description; /* WPCS: xss ok. */ ?></p>
			<?php endif; ?>
		</div><!-- .site-branding -->

		<?php do_action( "_s_masthead_middle" );?>
		
		<nav id="site-navigation" class="main-navigation">
			<button class="menu-toggle" aria-controls="primary-menu" aria-expanded="false"><?php echo apply_filter( "_s_primary_menu_text", esc_html( 'Primary Menu', '_s' ) ); ?></button>
			<?php
			wp_nav_menu( array(
				'theme_location' => 'menu-1',
				'menu_id'        => 'primary-menu',
			) );
			?>
		</nav><!-- #site-navigation -->
		
		<?php do_action( "_s_masthead_foot" );?>
		
	</header><!-- #masthead -->

	<div id="content" class="site-content">

		<?php do_action( "_s_content_head" );?>
