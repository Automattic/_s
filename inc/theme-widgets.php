<?php
/**
 * Makes a custom set of Widgets
 *
 * Learn more: http://codex.wordpress.org/Widgets_API#Developing_Widgets
 *
 * @package Maquina
 * @file
 * Register widgetized areas 
 */
function maquina_widgets_init() {

	register_sidebar( array(	//@see sidebar-header.php
		'name' => __( 'Header Widget', 'maquina' ),
		'id' => 'header-sidebar',
		'description' => __( 'An optional widget area for your site header', 'maquina' ),
		'before_widget' => '<div id="%1$s" class="%2$s">',
		'after_widget' => "</div>",
	) );

		register_sidebar( array(	//@see sidebar.php
		'name' => __( 'Left Widget', 'maquina' ),
		'id' => 'left-sidebar',
		'description' => __( 'An optional widget area for your site left hand side', 'maquina' ),
		'before_widget' => '<div id="%1$s" class="%2$s">',
		'after_widget' => "</div>",
	) );
	
			register_sidebar( array(	//@see sidebar.php
		'name' => __( 'Content Widget', 'maquina' ),
		'id' => 'content-sidebar',
		'description' => __( 'An optional widget area for your site content', 'maquina' ),
		'before_widget' => '<div id="%1$s" class="%2$s">',
		'after_widget' => "</div>",
	) );
	
	register_sidebar( array(	//@see sidebar.php
		'name' => __( 'Right Widget', 'maquina' ),
		'id' => 'right-sidebar',
		'description' => __( 'An optional widget area for your site right hand side', 'maquina' ),
		'before_widget' => '<aside id="%1$s" class="%2$s">',
		'after_widget' => "</aside>",
	) );

	register_sidebar( array(	//@see sidebar-footer.php
		'name' => __( 'Footer Widget', 'maquina' ),
		'id' => 'footer-sidebar',
		'description' => __( 'An optional widget area for your site footer', 'maquina' ),
		'before_widget' => '<div id="%1$s" class="%2$s">',
		'after_widget' => "</div>",
	) );
	
	register_sidebar( array( //@see sidebar.php
		'name' => __( 'Widget One', 'maquina' ),
		'id' => 'sidebar-one',
		'description' => __( 'An optional widget area for your site', 'maquina' ),
		'before_widget' => '<div id="%1$s" class="%2$s">',
		'after_widget' => "</div>",
	) );
	
		register_sidebar( array( //@see sidebar.php
		'name' => __( 'Widget Two', 'maquina' ),
		'id' => 'sidebar-two',
		'description' => __( 'An optional widget area for your site', 'maquina' ),
		'before_widget' => '<div id="%1$s" class="%2$s">',
		'after_widget' => "</div>",
	) );

}
add_action( 'widgets_init', 'maquina_widgets_init' );