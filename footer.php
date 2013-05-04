<?php
/**
 * The template for displaying the footer.
 *
 * Contains the closing of the id=main div and all content after
 *
 * @Maquina
 */
?>

</div><!-- #main -->
<?php get_sidebar('footer');?>
	<footer id="colophon" class="site-footer" role="contentinfo">
		<div class="site-info">
			<?php do_action( 'Maquina_credits' ); ?>
			<?php printf( __( 'Maquina Theme by %2$s.', 'Maquina' ), 'Maquina',
			 '<a href="http://vnlweb.com/my-projects/maquina/" rel="designer">vnlweb</a>' ); ?>
		</div><!-- .site-info -->
	</footer><!-- #colophon -->
</div><!-- #page -->

<?php wp_footer(); ?>
</body>
</html>
