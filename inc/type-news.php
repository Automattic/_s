<?php 
/*
 *Register Custom Post Type for Institute
 */

 function create_news_post() {
	$labels = array(		
		'name'                  => _x( 'News', 'Post Type General Name', 'nascsp' ),
		'singular_name'         => _x( 'News', 'Post Type Singular Name', 'nascsp' ),
		'menu_name'             => __( 'News', 'nascsp' ),
		'name_admin_bar'        => __( 'Post Type', 'nascsp' ),
		'parent_item_colon'     => __( 'Parent Item:', 'nascsp' ),
		'all_items'             => __( 'All News', 'nascsp' ),
		'add_new_item'          => __( 'Add New News', 'nascsp' ),
		'add_new'               => __( 'Add New', 'nascsp' ),
		'new_item'              => __( 'New News', 'nascsp' ),
		'edit_item'             => __( 'Edit News', 'nascsp' ),
		'update_item'           => __( 'Update News', 'nascsp' ),
		'view_item'             => __( 'View News', 'nascsp' ),
		'search_items'          => __( 'Search News', 'nascsp' ),
		'not_found'             => __( 'Not found', 'nascsp' ),
		'not_found_in_trash'    => __( 'Not found in Trash', 'nascsp' ),
		'items_list'            => __( 'Items list', 'nascsp' ),
		'items_list_navigation' => __( 'Items list navigation', 'nascsp' ),
		'filter_items_list'     => __( 'Filter items list', 'nascsp' ),
	);

	$args = array(				
		'label'                 => __( 'News', 'nascsp' ),
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
		'rewrite'            => array( 'slug' => 'news' ),
	);

	register_post_type( 'news', $args );
}
add_action('init','create_news_post'); 
/*
 * Register Custom Taxonomy For Category Category
 */


function news_category_taxonomy() {

  $labels = array(    
	'name'                       => _x( 'Category', 'Taxonomy General Name', 'nascsp' ),
	'singular_name'              => _x( 'Category', 'Taxonomy Singular Name', 'nascsp' ),
	'menu_name'                  => __( 'Category', 'nascsp' ),
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
	'rewrite'            		 => array( 'slug' => 'Category' ),
  );
   register_taxonomy('news-type',array('news'),$args);
}
add_action( 'init', 'news_category_taxonomy', 0 ); 
	
?>