
<div class="load-more-posts">
    <script id="true_loadmore">
	var ajaxurl = '<?php echo site_url() ?>/wp-admin/admin-ajax.php';
	var true_posts = '<?php echo serialize($wp_query->query_vars); ?>';
	var current_page = <?php echo (get_query_var('paged')) ? get_query_var('paged') : 1; ?>;
	</script>
</div>
