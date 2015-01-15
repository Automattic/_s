		<button class="nav-toggle" data-nav-toggle="#nav-primary" href="#">Menu &#9660;</button>

		<nav id="menu" class="nav" role="navigation" itemscope="itemscope" itemtype="http://schema.org/SiteNavigationElement">
			<?php wp_nav_menu( 
				array( 
					'theme_location'	=> 'primary',
					'container'			=> false,
					'menu_id'			=> 'nav-primary',
					"walker"			=> new Drop_Menu_Walker(),
				)
			); ?>
        </nav>