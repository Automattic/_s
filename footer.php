<?php
/**
 * The template for displaying the footer.
 *
 * Contains the closing of the id=main div and all content after
 *
 * @package Maquina
 * @file 
 */
?>

</div><!-- #main -->
	<footer id="colophon" class="site-footer" role="contentinfo">
		<?php get_sidebar('footer');?>
	</footer><!-- #colophon -->
	<div class="site-info aligncenter">
			<?php do_action( 'Maquina_credits' ); ?>
			<?php printf( __( 'Maquina Theme by %2$s.', 'Maquina' ), 'Maquina',
			 '<a href="http://vnlweb.com/" rel="designer">vnlweb</a>' ); ?>
	</div><!-- .site-info -->
</div><!-- #page -->

<?php wp_footer(); ?>
</body>
</html>
