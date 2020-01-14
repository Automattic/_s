<?php
/**
 * The template for displaying the footer
 *
 * Contains the closing of the #content div and all content after.
 *
 * @link https://developer.wordpress.org/themes/basics/template-files/#template-partials
 *
 * @package nascsp
 */
$find_provider = get_field('sidebar_find_a_provider','options');
$sidebar_membership = get_field('sidebar_membership','options');
$news_letter_link = get_field('news_letter_page_link','options');
$sign_up_title = get_field('sign_up_title','options');
// $sign_up_form_text = get_field('footer_sign_up_form_text','options');
// $find_provider_href = (!empty($find_provider)) ? $find_provider : "javascript:void(0)";
?>
		</div>
		<footer class="site-footer">
			<div class="container-footer">
				<div class="footer-top">
					<div class="footer-links">
						<?php
							/* wp_nav_menu( array(
								'theme_location' => 'menu-1',
								'menu_id'        => 'primary-menu',
							) ); */
							wp_nav_menu( array('menu' => "Footer menu"));
						?>
					</div> 
					<?php if(!empty($find_provider) || !empty($sidebar_membership)) { ?>
					<div class="footer-btn">
                        <?if(!empty($find_provider)) { ?>
                        <a href="<?php echo $find_provider; ?>" target="_blank" class="btn button member-login btn-red">Find A Provider </a>
						<?php } ?>
						<?php $log_in_out_href = ( is_user_logged_in() ) ? wp_logout_url( get_permalink( get_page_by_path('login') ) ) : get_permalink( get_page_by_path('login') ); ?>
						<?php $log_in_out = ( is_user_logged_in() ) ? 'Member Logout' : 'Member Login'; ?>
						<a href="<?php echo $log_in_out_href; ?>" class="btn button member-login btn-blue"><?php echo $log_in_out; ?></a>
						<?php /*<a href="#" class="btn button btn-orange">Find a Provider</a> */ ?>
						<?php // echo do_shortcode('[gravityform id=5 title=false description=false ajax=true]'); ?>
						<?php if(!empty($news_letter_link)) { ?>
						<div class="footer-signuplink"><a href="<?php echo $news_letter_link; ?>" class="btn button signup-btn btn-red"><?php echo $sign_up_title?></a></div>
						<?php } ?>
					</div>
					<?php  ?>
				</div>
			</div>
		</footer>
	</div>
	<?php wp_footer(); ?>
</body>
</html>
