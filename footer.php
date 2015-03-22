<?php
/**
 * The template for displaying the footer.
 *
 * Contains the closing of the #content div and all content after
 *
 * @package YuMag
 */
?>
		<div id="tertiary" class="footer site-footer">
			<div class="site-footer-content">
				<div class="footer-site-logo">
					<a class="site-logo-link" href="<?php echo esc_url( home_url( '/' ) ); ?>" rel="home" title="<?php _e( 'Go to latest issue', 'yumag' ); ?>">
						<img src="<?php echo get_stylesheet_directory_uri(); ?>/assets/logo.svg" onerror="this.src='<?php echo get_stylesheet_directory_uri(); ?>/assets/logo.png'" alt="<?php bloginfo( 'name' ); ?>" width="100" height="69">
					</a>
				</div>
				<p class="site-description"><?php bloginfo( 'description' ); ?></p>
				<p class="site-credits"><small class="site-editor">Online Editor: <a href="#">Alfie Packham</a></small><br>
				<small class="colophon">© 2015<?php if ( 2015 < (int) date( 'Y' ) ) echo '&ndash;' . date( 'Y' ); ?> University of York</small></p>
			</div>
		</div><!-- .site-footer -->

	</div><!-- #content -->

</div><!-- #page -->

<?php wp_footer(); ?>

</body>
</html>
