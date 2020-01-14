<?php
$args = array(
	'numberposts' => 5,
	'offset' => 0,
	'category' => 0,
	'orderby' => 'post_date',
	'order' => 'DESC',
	'include' => '',
	'exclude' => '',
	'meta_key' => '',
	'meta_value' =>'',
	'post_type' => 'post',
	'post_status' => 'publish',
	'suppress_filters' => true
);
$blog_id = get_option('page_for_posts');
$recent_posts = wp_get_recent_posts( $args, ARRAY_A );

?>
<div class="sidebar">
<div class="side-title">
<h3>Latest Blog</h3>
</div>
<?php  if(!empty($recent_posts)){
		echo "<ul class='sidebar-links'>";
	 foreach($recent_posts as $recent_post){
		 
		 if(get_the_ID()==$recent_post["ID"])
		 {
			 $class = "active";
		 }
		 else
		 {
			 $class= " ";
		 }
		 echo "<li class='".$class."'>";
			echo '<a  href="' . get_permalink($recent_post["ID"]) . '">' . $recent_post["post_title"].'</a>';
		 echo "</li>";
	 }
	 echo "</ul>";
} ?>
</div>
<div class="sidebar">
<div class="side-title">
<h3>Archives</h3>
</div>
<?php
if ( is_archive() && !is_author()) {
add_filter( 'get_archives_link', 'wpse_62509_current_month_selector' );
}
$my_archives = wp_get_archives(array(
 'type'=>'yearly', 
 'post_type'=>'post',
 'format' => 'html',
 'echo' => 0,
));

echo "<ul class='sidebar-links'>";
//echo "<li>";
echo $my_archives;
//echo "</li>";
echo "</ul>";
if ( is_archive() && !is_author()) {
remove_filter( 'get_archives_link', 'wpse_62509_current_month_selector' );
}
?>
</div>