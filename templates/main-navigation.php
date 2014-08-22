		<a href="" class="navicon" data-nav-toggle=".navi">Menu ☰</a>

        <nav id="menu" class="nav" role="navigation" itemscope="itemscope" itemtype="http://schema.org/SiteNavigationElement">
            <?php wp_nav_menu( 
				array( 
					'theme_location'	=> 'primary',
					'container'			=> false,
					'menu_class'		=> 'navi nav-collapse',
				)
			); ?>
        </nav>