<?php
/**
 * Register a Training Center post type.
 */
add_action( 'init', 'nascsp_training_custom_post_exchange' );
function nascsp_training_custom_post_exchange() {
	$labels = array(
		'name'               => _x( 'Training Center', 'post type general name', 'nascsp' ),
		'singular_name'      => _x( 'Training Center', 'post type singular name', 'nascsp' ),
		'menu_name'          => _x( 'Training Center', 'admin menu', 'nascsp' ),
		'name_admin_bar'     => _x( 'Training Center', 'add new on admin bar', 'nascsp' ),
		'add_new'            => _x( 'Add New', 'Training Center', 'nascsp' ),
		'add_new_item'       => __( 'Add New Training Center', 'nascsp' ),
		'new_item'           => __( 'New Training Center', 'nascsp' ),
		'edit_item'          => __( 'Edit Training Center', 'nascsp' ),
		'view_item'          => __( 'View Training Center', 'nascsp' ),
		'all_items'          => __( 'All Training Center', 'nascsp' ),
		'search_items'       => __( 'Search Training Center', 'nascsp' ),
		'not_found'          => __( 'No Team found.', 'nascsp' ),
		'not_found_in_trash' => __( 'No Team found in Trash.', 'nascsp' )
	);

	$args = array(
		'labels'             => $labels,
		'public'             => true,
                'show_ui'            => true,
		'exclude_from_search' => false,
		'rewrite'            => array( 'slug' => 'training','with_front' => true ),
		'hierarchical'       => false,
        'publicly_queryable' => true,
		'menu_position'      => 20,
		'supports'           => array( 'title', 'editor', 'thumbnail' )
	);
	register_post_type( 'training', $args );
}
add_action( 'init', 'create_training_category_taxonomy' );
 
function create_training_category_taxonomy() {
 
// Add new taxonomy, make it hierarchical like categories
//first do the translations part for GUI
 
  $labels = array(
    'name' => _x( 'Training Category', 'taxonomy general name' ),
    'singular_name' => _x( 'Training Category', 'taxonomy singular name' ),
    'search_items' =>  __( 'Search Training Category' ),
    'all_items' => __( 'All Training Category' ),
    'parent_item' => __( 'Parent Training Category' ),
    'parent_item_colon' => __( 'Parent Training Category:' ),
    'edit_item' => __( 'Edit Training Category' ), 
    'update_item' => __( 'Update Training Category' ),
    'add_new_item' => __( 'Add New Training Category' ),
    'new_item_name' => __( 'New Training Category Name' ),
    'menu_name' => __( 'Training Category' ),
  );    
 
// Now register the taxonomy
 
  register_taxonomy('training-category',array('training'), array(
    'hierarchical' => true,
    'labels' => $labels,
    'show_ui' => true,
    'show_admin_column' => true,
    'query_var' => true,
  ));
}


function multi_custom_map($data, $zoom='15', $mapid='map',$map_index){
		$array =	array(
			'data' => $data,
			'zoom' => $zoom,
			'mapId' => $mapid,
			'map_index' => $map_index
		);
				
	wp_enqueue_script( 'jquery-map', 'https://maps.googleapis.com/maps/api/js?key=AIzaSyBr_Mt1WVgHO6y3HmzSCdHtY47MICrxpp4', array());
	
	wp_enqueue_script( 'acypl-map-multiple', get_template_directory_uri() . '/js/map-multiple.js', array('jquery'), '1.0.0', true );
	wp_localize_script( 'acypl-map-multiple', 'gcode', $array);
}


