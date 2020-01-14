<?php 
/*
 *Register Custom Post Type for Institute
 */

 function create_state_post() {
	$labels = array(		
		'name'                  => _x( 'State', 'Post Type General Name', 'nascsp' ),
		'singular_name'         => _x( 'State', 'Post Type Singular Name', 'nascsp' ),
		'menu_name'             => __( 'State', 'nascsp' ),
		'name_admin_bar'        => __( 'Post Type', 'nascsp' ),
		'parent_item_colon'     => __( 'Parent Item:', 'nascsp' ),
		'all_items'             => __( 'All States', 'nascsp' ),
		'add_new_item'          => __( 'Add New State', 'nascsp' ),
		'add_new'               => __( 'Add New', 'nascsp' ),
		'new_item'              => __( 'New State', 'nascsp' ),
		'edit_item'             => __( 'Edit State', 'nascsp' ),
		'update_item'           => __( 'Update State', 'nascsp' ),
		'view_item'             => __( 'View State', 'nascsp' ),
		'search_items'          => __( 'Search State', 'nascsp' ),
		'not_found'             => __( 'Not found', 'nascsp' ),
		'not_found_in_trash'    => __( 'Not found in Trash', 'nascsp' ),
		'items_list'            => __( 'Items list', 'nascsp' ),
		'items_list_navigation' => __( 'Items list navigation', 'nascsp' ),
		'filter_items_list'     => __( 'Filter items list', 'nascsp' ),
	);

	$args = array(				
		'label'                 => __( 'State', 'nascsp' ),
		'description'           => __( 'Post Type Description', 'nascsp' ),
		'labels'                => $labels,
		'supports'              => array( 'title','editor','thumbnail' ),
		'hierarchical'          => false,
		'public'                => true,
		'show_ui'               => true,
		'show_in_menu'          => true,		
		'show_in_admin_bar'     => true,
		'show_in_nav_menus'     => true,
		'can_export'            => true,
		'has_archive'           => false,		
		'exclude_from_search'   => false,
		'publicly_queryable'    => true,		
		'capability_type'       => 'post',		
		'rewrite'            => array( 'slug' => 'state-contacts' ),
	);

	register_post_type( 'state', $args );
}
add_action('init','create_state_post'); 
/*
 * Register Custom Taxonomy For Region Category
 */


function region_category_taxonomy() {

  $labels = array(    
	'name'                       => _x( 'Region', 'Taxonomy General Name', 'nascsp' ),
	'singular_name'              => _x( 'Region', 'Taxonomy Singular Name', 'nascsp' ),
	'menu_name'                  => __( 'Region', 'nascsp' ),
	'all_items'                  => __( 'All Items', 'nascsp' ),
	'parent_item'                => __( 'Parent Item', 'nascsp' ),
	'parent_item_colon'          => __( 'Parent Item:', 'nascsp' ),
	'new_item_name'              => __( 'New Item Name', 'nascsp' ),
	'add_new_item'               => __( 'Add New Item', 'nascsp' ),
	'edit_item'                  => __( 'Edit Item', 'nascsp' ),
	'update_item'                => __( 'Update Item', 'nascsp' ),
	'view_item'                  => __( 'View Item', 'nascsp' ),
	'separate_items_with_commas' => __( 'Separate items with commas', 'nascsp' ),
	'add_or_remove_items'        => __( 'Add or remove items', 'nascsp' ),
	'choose_from_most_used'      => __( 'Choose from the most used', 'nascsp' ),
	'popular_items'              => __( 'Popular Items', 'nascsp' ),
	'search_items'               => __( 'Search Items', 'nascsp' ),
	'not_found'                  => __( 'Not Found', 'nascsp' ),
	'items_list'                 => __( 'Items list', 'nascsp' ),
	'items_list_navigation'      => __( 'Items list navigation', 'nascsp' ),
  ); 	

	$args = array(    
	'labels'                     => $labels,
	'hierarchical'               => true,
	'public'                     => true,
	'show_ui'                    => true,
	'show_admin_column'          => true,
	'show_in_nav_menus'          => true,
	'show_tagcloud'              => true,
	'rewrite'            		 => array( 'slug' => 'region' ),
  );
   register_taxonomy('region_category',array('state'),$args);
}
add_action( 'init', 'region_category_taxonomy', 0 ); 
	
?>