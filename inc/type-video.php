<?php 

function video_post_type() {
	$labels = array(
		'name'                  => _x( 'Video', 'Post Type General Name', 'nascsp' ),
		'singular_name'         => _x( 'Video', 'Post Type Singular Name', 'nascsp' ),
		'menu_name'             => __( 'Video', 'nascsp' ),
		'name_admin_bar'        => __( 'Video', 'nascsp' ),
		'parent_item_colon'     => __( 'Video Item:', 'nascsp' ),
		'all_items'             => __( 'All Videos', 'nascsp' ),
		'add_new_item'          => __( 'Add New Video', 'nascsp' ),
		'add_new'               => __( 'Add New Video', 'nascsp' ),
		'new_item'              => __( 'New Video', 'nascsp' ),
		'edit_item'             => __( 'Edit Video', 'nascsp' ),
		'update_item'           => __( 'Update Video', 'nascsp' ),
		'view_item'             => __( 'View Video', 'nascsp' ),
		'search_items'          => __( 'Search Video', 'nascsp' ),
		'not_found'             => __( 'Not found', 'nascsp' ),
		'not_found_in_trash'    => __( 'Not found in Trash', 'nascsp' ),
		'items_list'            => __( 'Items list', 'nascsp' ),
		'items_list_navigation' => __( 'Items list navigation', 'nascsp' ),
		'filter_items_list'     => __( 'Filter items list', 'nascsp' ),
	);
	$args = array(
		'label'                 => __( 'Video', 'nascsp' ),
		'description'           => __( 'Post Type Description', 'nascsp' ),
		'labels'                => $labels,
		'supports'              => array( 'title','editor','excerpt','comments','thumbnail'),
		'hierarchical'          => false,
		'public'                => true,
		'show_ui'               => true,
		'show_in_menu'          => true,
		'menu_position'         => 5,
		'show_in_admin_bar'     => true,
		'show_in_nav_menus'     => true,
		'can_export'            => true,
		'has_archive'           => false,		
		'exclude_from_search'   => false,
		'publicly_queryable'    => true,
		'capability_type'       => 'post',
		'rewrite' 				=> array('slug' => 'videos'),
		'taxonomies' 			=> array( 'post_tag' )
	);
	register_post_type( 'videoes', $args );
}
add_action( 'init', 'video_post_type', 0 );
function video_category() {

	$labels = array(
		'name'                       => _x( 'Category', 'Taxonomy General Name', 'nascsp' ),
		'singular_name'              => _x( 'Category', 'Portfolio Singular Name', 'nascsp' ),
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
		'rewrite' => array('slug' => 'categories'),

	);
	register_taxonomy('video_category', array( 'videoes' ), $args );
}
add_action( 'init', 'video_category', 0 );



add_filter( 'manage_videoes_posts_columns', 'set_custom_edit_book_columns' );
function set_custom_edit_book_columns($columns) {
    unset( $columns['author'] );
    $columns['views'] = __( 'Views', 'your_text_domain' );
    $columns['ipaddress'] = __( 'IP Address', 'your_text_domain' );

    return $columns;
}

// Add the data to the custom columns for the book post type:
global $post;
$post_id = $post->ID;

add_action( 'manage_videoes_posts_custom_column' , 'custom_book_column', 10, 2 );
function custom_book_column( $column, $post_id ) {
    switch ( $column ) {

        case 'views' :
            echo $post_view = get_post_meta( $post_id , 'views' ,true );
            // if ( is_string( $post_view ) )
                // echo $post_view;
            // else
                // _e( 'Unable to get author(s)', 'your_text_domain' );
            break;

        case 'ipaddress' :
            echo get_post_meta( $post_id , 'ip_address' , true ); 
            break;

    }
}
// Register the column as sortable
function register_sortable_columns( $columns ) {
	
    $columns['views'] = 'Views';
    return $columns;
}
add_filter( 'manage_edit-videoes_post_sortable_columns', 'register_sortable_columns');

