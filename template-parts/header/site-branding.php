<div class="site-branding">

	<?php the_custom_logo(); ?>

	<?php if ( is_front_page() ) : ?>
		<h1 class="site-title"><a href="<?php echo esc_url( home_url( '/' ) ); ?>" rel="home"><?php bloginfo( 'name' ); ?></a></h1>
	<?php else : ?>
		<p class="site-title"><a href="<?php echo esc_url( home_url( '/' ) ); ?>" rel="home"><?php bloginfo( 'name' ); ?></a></p>
	<?php endif; ?>

	<?php $description = get_bloginfo( 'description', 'display' );
	if ( $description || is_customize_preview() ) : ?>
		<p class="site-description"><?php echo $description; ?></p>
	<?php endif; ?>

</div><!-- .site-branding -->
