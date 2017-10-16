<?php
/**
 * The template for displaying the footer
 *
 * Contains the closing of the #content div and all content after.
 *
 * @link https://developer.wordpress.org/themes/basics/template-files/#template-partials
 *
 * @package _s
 */

?>

	</div><!-- #content -->

	<footer id="colophon" class="site-footer">
		<div class="site-info">
			<a href="<?php echo esc_url( __( 'https://wordpress.org/', '_s' ) ); ?>"><?php
				/* translators: %s: CMS name, i.e. WordPress. */
				printf( esc_html__( 'Proudly powered by %s', '_s' ), 'WordPress' );
			?></a>
			<span class="sep"> | </span>
			<?php
				/* translators: 1: Theme name, 2: Theme author. */
				printf( esc_html__( 'Theme: %1$s by %2$s.', '_s' ), '_s', '<a href="https://automattic.com/">Automattic</a>' );
			?>
			<div>
				<!-- LifeTies logo -->
				<div class="social-btns">
					<a href="#" class="soc-icon tw"></a>
					<a href="#" class="soc-icon fb"></a>
					<a href="#" class="soc-icon ln"></a>
					<a href="#" class="soc-icon in"></a>
				</div>
				<h6>&#9400; LifeTies. All Rights Reserved.</h6>
			</div>
			<div>
				<div>
					<h4>Contact LifeTies</h4>
					<h2>Call: (609) 771-1600</h2>
					<h2>Fax: (609) 530-1648</h2>
				</div>
				<div>
					<h4>Youth Referrals (PerformCare)</h4>
					<h2>Call: (877) 652-7624</h2>
					<h6>www.performcarenj.org</h6>
				</div>
			</div>
			<div>
				<h1>Stay Updated</h1>
				<h2>Subscribe to our newsletter</h2>
				<input type="text" name="" value="" placeholder="Enter your email address"><input type="submit" name="" value="Submit">
			</div>
		</div><!-- .site-info -->
	</footer><!-- #colophon -->
</div><!-- #page -->

<?php wp_footer(); ?>

</body>
</html>
