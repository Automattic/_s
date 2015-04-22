<?php
/**
 * The template for displaying the footer.
 *
 * Contains the closing of the #content div and all content after
 *
 * @package YuMag
 */

// URL-path to images.
$src = get_template_directory_uri() . '/assets/';
?>
		<div id="tertiary" class="footer site-footer">
			<div class="footer-row site-footer-row">
				<div class="site-footer-content">
					<div class="footer-site-logo">
						<a class="site-logo-link" href="<?php echo esc_url( home_url( '/' ) ); ?>" rel="home" title="<?php _e( 'Go to latest issue', 'yumag' ); ?>">
							<img src="<?php echo $src; ?>logo.png" srcset="<?php echo $src; ?>logo@2x.png 2x, <?php echo $src; ?>logo.png 1x" alt="<?php bloginfo( 'name' ); ?>" width="124" height="85">
						</a>
					</div>
					<p class="site-description"><?php bloginfo( 'description' ); ?></p>
					<p class="site-credits">
					<small class="site-editor">Online Editor: <a href="<?php echo esc_url( home_url( '/author/alfiepackham/' ) ); ?>">Alfie Packham</a></small><br>
					<small class="site-editor">Web design by <a href="http://www.cjbarnes.co.uk/">Chris Barnes</a></small><br>
					<small class="colophon">© 2015<?php if ( 2015 < (int) date( 'Y' ) ) echo '&ndash;' . date( 'Y' ); ?> University of York</small></p>
					<div class="footer-uoy-logo">
						<a class="site-logo-link" href="//www.york.ac.uk">
							<img src="<?php echo $src; ?>uoy.png" srcset="<?php echo $src; ?>uoy@2x.png 2x, <?php echo $src; ?>uoy.png 1x" alt="University of York" width="250" height="38">
						</a>
					</div>
				</div>
			</div><!-- .site-footer-row -->
		</div><!-- .site-footer -->

	</div><!-- #content -->

</div><!-- #page -->

<?php wp_footer(); ?>

</body>
</html>
