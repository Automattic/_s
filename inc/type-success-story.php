<?php
/**
 * Register a Training Center post type.
 */
add_action( 'init', 'nascsp_custom_post_exchange' );
function nascsp_custom_post_exchange() {
	$labels = array(
		'name'               => _x( 'Success Story', 'post type general name', 'nascsp' ),
		'singular_name'      => _x( 'Success Story', 'post type singular name', 'nascsp' ),
		'menu_name'          => _x( 'Success Story', 'admin menu', 'nascsp' ),
		'name_admin_bar'     => _x( 'Success Story', 'add new on admin bar', 'nascsp' ),
		'add_new'            => _x( 'Add New', 'Success Story', 'nascsp' ),
		'add_new_item'       => __( 'Add New Success Story', 'nascsp' ),
		'new_item'           => __( 'New Success Story', 'nascsp' ),
		'edit_item'          => __( 'Edit Success Story', 'nascsp' ),
		'view_item'          => __( 'View Success Story', 'nascsp' ),
		'all_items'          => __( 'All Success Story', 'nascsp' ),
		'search_items'       => __( 'Search Success Story', 'nascsp' ),
		'not_found'          => __( 'No Team found.', 'nascsp' ),
		'not_found_in_trash' => __( 'No Team found in Trash.', 'nascsp' )
	);

	$args = array(
		'labels'             => $labels,
		'public'             => true,
        'show_ui'            => true,
		'exclude_from_search' => false,
		'rewrite'            => array( 'slug' => 'success-story','with_front' => true ),
		'hierarchical'       => false,
        'publicly_queryable' => true,
		'menu_position'      => 20,
		'supports'           => array( 'title', 'editor', 'thumbnail' )
	);
	register_post_type( 'success-story', $args );
}
 