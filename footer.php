<?php
/**
 * The template for displaying the footer.
 *
 * Contains the closing of the #content div and all content after.
 *
 * @link https://developer.wordpress.org/themes/basics/template-files/#template-partials
 *
 * @package skorpius
 */

?>

	</div><!-- #content -->

	<footer id="colophon" class="site-footer" role="contentinfo">
		<div class="site-info">
			<p class="source-org copyright"><i class="fa fa-copyright fa-lg" aria-hidden="true"></i> <?php echo date('Y'); ?> <a href="<?php echo bloginfo('url');?>" class="footerlink"><?php bloginfo('title'); ?></a> &#124; Skorpius by <a href="<?php echo esc_url('http://threefivetwo.me');?>" class="footerlink" target="_blank" title="<?php _e('ThreeFivetwo','skorpius');?>"><?php _e('ThreeFiveTwo','skorpius');?></a> &#124; Powered by <a href="http://wordpress.org" target="_blank" title="<?php _e('Powered by WordPress','skorpius');?>" class="footerlink"><?php _e('WordPress','skorpius');?></a></p>
		</div><!-- .site-info -->
	</footer><!-- #colophon -->
</div><!-- #page -->

<?php wp_footer(); ?>

</body>
</html>
