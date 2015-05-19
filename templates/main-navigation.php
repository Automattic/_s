		<button class="nav-toggle" aria-controls="nav-primary" data-nav-toggle="#nav-primary" href="#">
			<?php _e( 'Menu', '_s2' ); ?> <span class="burger-icon" aria-hidden="true"></span>
		</button>

		<nav id="site-navigation" class="nav" role="navigation" itemscope="itemscope" itemtype="http://schema.org/SiteNavigationElement">
			<?php wp_nav_menu( 
				array( 
					'theme_location'	=> 'primary',
					'container'			=> false,
					'menu_id'			=> 'nav-primary',
					'menu_class'        => 'nav-menu',
					'fallback_cb'		=> '',
					"walker"			=> new Drop_Menu_Walker(),
				)
			); ?>
        </nav>