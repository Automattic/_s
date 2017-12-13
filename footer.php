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

	<footer id="colophon" class="site-footer dark-blue-background">
		<div class="content-width footer-grid">
			<div class="contact">
				<h3 class="gray-blue aligncenter font-wgt-normal">Contact LifeTies</h3>
				<h2 class="white aligncenter font-boldest">Call: (609) 771-1600</h2>
				<h2 class="white aligncenter font-boldest">Fax: (609) 530-1648</h2>
			</div>
			<div class="logo">
				<!-- LifeTies logo -->
				<div class="aligncenter">
					<div class="lt-logo-white inline-block-display"></div>
				</div>

				<div class="social-btns aligncenter">
					<a href="http://twitter.com/lifeties" class="soc-icon tw"></a>
					<a href="http://www.facebook.com/Lifeties" class="soc-icon fb"></a>
					<a href="https://www.linkedin.com/company/6526433/" class="soc-icon ln"></a>
					<a href="http://www.instagram.com" class="soc-icon in"></a>
				</div>
			</div>

			<div class="aligncenter newsletter">
				<h1 class="white font-boldest" style="margin-bottom: 0;">STAY UPDATED</h1>
				<h3 class="white font-bolder" style="line-height: 1.5em;">Subscribe to our newsletter</h3>
				<section>
					<?php
				echo do_shortcode('[ctct form="175"]');
				?>
				</section>
			</div>

			<div class="corp">
				<h5 class="white aligncenter arial">&#9400; LifeTies. All Rights Reserved.</h5>
			</div>
		</div><!-- .site-info -->
	</footer><!-- #colophon -->
</div><!-- #page -->

<?php wp_footer(); ?>

</body>
</html>
