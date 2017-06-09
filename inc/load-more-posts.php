<?php
/**
 * _s Load more posts AJAX
 *
 * @package _s
 */


// Добавление скрипта для AJAX загрузки записей
function true_loadmore_scripts() {
	wp_enqueue_script('jquery');
	wp_enqueue_script( 'true_loadmore', get_stylesheet_directory_uri() . '/js/loadmore.js', array('jquery') );
}
add_action( 'wp_enqueue_scripts', 'true_loadmore_scripts' );

// Обработчик
function true_load_posts(){
	$args = unserialize(stripslashes($_POST['query']));
	$args['paged'] = $_POST['page'] + 1; // следующая страница
	$args['post_status'] = 'publish';
	$q = new WP_Query($args);
	if( $q->have_posts() ):
		while($q->have_posts()): $q->the_post();

            get_template_part( 'template-parts/content', get_post_format() );

		endwhile;
	endif;
	wp_reset_postdata();
	die();
}


add_action('wp_ajax_loadmore', 'true_load_posts');
add_action('wp_ajax_nopriv_loadmore', 'true_load_posts');
