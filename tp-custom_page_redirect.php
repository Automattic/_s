<?php 
/*
 * Template Name: Custom Page Redirect
 *
 */
 // get_header();
 $page_id = get_the_ID();
 $page_redirect_url = get_field('third_party_website_url',$page_id);
 if(!empty($page_redirect_url)){
	 wp_redirect($page_redirect_url);exit;
 }
?>

<?php 
get_footer();