<?php
/**
 * The template for the site branding
 *
 * Contains the logo, site title and the description.
 *
 * @link https://developer.wordpress.org/themes/basics/template-files/#template-partials
 *
 * @package _svbk
 */

?>
<div class="site-branding">

	<?php the_custom_logo(); ?>

	<?php if ( is_front_page() ) : ?>
		<h1 class="site-title"><a href="<?php echo esc_url( home_url( '/' ) ); ?>" rel="home"><?php bloginfo( 'name' ); ?></a></h1>
	<?php else : ?>
		<p class="site-title"><a href="<?php echo esc_url( home_url( '/' ) ); ?>" rel="home"><?php bloginfo( 'name' ); ?></a></p>
	<?php endif; ?>

	<?php
	$description = get_bloginfo( 'description', 'display' );
	if ( $description || is_customize_preview() ) :
	?>
		<p class="site-description"><?php echo esc_html( $description ); ?></p>
	<?php endif; ?>

</div><!-- .site-branding -->
