<?php
/**
 * The header for our theme
 *
 * This is the template that displays all of the <head> section and everything up until <div id="content">
 *
 * @link https://developer.wordpress.org/themes/basics/template-files/#template-partials
 *
 * @package nascsp
 */


$furl = get_field('facebook_url','option');
$turl = get_field('twitter_url','option');
$yurl = get_field('youtube_url','option');
$find_a_provider = get_field('sidebar_find_a_provider','option');
$find_a_provider = !empty($find_a_provider) ? $find_a_provider : "javascript:void(0)";

?>
<!doctype html>
<html <?php language_attributes(); ?>>
<head>
	<meta charset="<?php bloginfo( 'charset' ); ?>">
	<meta name="viewport" content="width=device-width, initial-scale=1">
	<link rel="profile" href="https://gmpg.org/xfn/11">
	<link rel="icon" type="image/png" href="<?php echo get_template_directory_uri(); ?>/images/favicon.png"/>
	<?php wp_head(); ?>
</head>
<script src='https://www.google.com/recaptcha/api.js'></script>
<body <?php body_class(); ?>>
<div id="page" class="site">
	<header class="site-header">
		<div class="container">
			<div class="row">
				<div class="col-sm-4 col-md-3 logo">
					<a href="<?php echo esc_url( home_url( '/' ) ); ?>"><img src="<?php echo get_template_directory_uri(); ?>/images/NASCSP-logo.png" alt="logo" /></a>
				</div>
				<div class="col-sm-9 pull-right text-right">
					<div class="header-right">
						<div class="header-links">
							<ul class="social-links">
								<?php if(!empty($turl)){ ?>
									<li><a href="<?php echo $turl; ?>" target="_blank"><img src="<?php echo get_template_directory_uri(); ?>/images/twitter.png" alt="social" /></a></li>
								<?php } ?>
								<?php if(!empty($furl)){ ?>
									<li><a href="<?php echo $furl; ?>" target="_blank"><img src="<?php echo get_template_directory_uri(); ?>/images/facebook.png" alt="social" /></a></li>
							 	<?php } ?>
								<?php if(!empty($yurl)){ ?>
									<li><a href="<?php echo $yurl; ?>" target="_blank"><img src="<?php echo get_template_directory_uri(); ?>/images/you-tube.png" alt="social" /></a></li>
								<?php } ?>
							</ul>
							<div class="header-buttons">
									<?php /* <a href="#" class="btn button find-provider btn-red">Find a Provider</a> */ ?>
								<a href="<?php echo $find_a_provider; ?>" class="btn button member-login btn-red">Find a Provider</a> 
							</div>	
							<div class="header-buttons">	
							<?php $log_in_out_href = ( is_user_logged_in() ) ? wp_logout_url( get_permalink( get_page_by_path('login') ) ) : get_permalink( get_page_by_path('login') ); ?>
							<?php $log_in_out = ( is_user_logged_in() ) ? 'Member Logout' : 'Member Login'; ?>
							<a href="<?php echo $log_in_out_href; ?>" class="btn button member-login btn-blue"><?php echo $log_in_out; ?></a>
							</div>
						</div>
						<div class="header-info search-icon hidden-sm hidden-xs"><a href="#"><img src="<?php echo get_template_directory_uri(); ?>/images/search-icon.png" alt="logo"></a>
                            <div class="search-form">
                                <form method="get" action="<?php bloginfo('home'); ?>/">                            
                                    <input type="text" value="<?php echo get_search_query();?>" name="s" id="search" placeholder="Search..."/>
                                    <input type="submit" value="Search" />
                                </form> 
                            </div>    
						</div>
						<div class="navigation">
							<?php
								wp_nav_menu( array(
									'theme_location' => 'menu-1',
									'menu_id'        => 'primary-menu',
								) );
							?>
						</div>
						<div class="header-links mobile">
							<ul class="social-links">
								<li><a href="<?php echo $turl; ?>" target="_blank"><img src="<?php echo get_template_directory_uri(); ?>/images/twitter.png" alt="social" /></a></li>
								<li><a href="<?php echo $furl; ?>" target="_blank"><img src="<?php echo get_template_directory_uri(); ?>/images/facebook.png" alt="social" /></a></li>
							 	<li><a href="<?php echo $yurl; ?>" target="_blank"><img src="<?php echo get_template_directory_uri(); ?>/images/you-tube.png" alt="social" /></a></li>
							</ul>
							<div class="header-buttons">
									<?php /* <a href="#" class="btn button find-provider btn-red">Find a Provider</a> */ ?>
								<a href="<?php echo get_permalink(get_page_by_path('event-registration')); ?>" class="btn button member-login btn-blue">Register</a> 
							</div>	
							<div class="search-form visible-sm visible-xs">
                                <form method="get" action="<?php bloginfo('home'); ?>/">                            
                                    <input type="text" value="<?php echo get_search_query();?>" name="s" id="search" placeholder="Search..."/>
                                    <input type="submit" value="Search" />
                                </form> 
                            </div>
						</div>
					</div>
				</div>
				<div class="mobile-icon visible-sm visible-xs"><a href="#"><img src="<?php echo get_template_directory_uri(); ?>/images/mobile-icon.png" alt="mobile-menu"></a></div>
			</div>
		</div>
	</header>
	<div class="site-content">