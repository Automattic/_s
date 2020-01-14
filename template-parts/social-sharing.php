 <?php $page_ID = get_the_ID();
		$page_title = ucfirst(get_the_title()); ?>
 <ul class="social-share">
	<li class="facebook"><a target="_blank" href="http://www.facebook.com/sharer.php?s=100&p[title]=<?php echo $page_title; ?>&p[url]=<?php the_permalink() ?>">facebook</a></li>
	<li class="twitter"><a target="_blank" href="https://twitter.com/share?url=<?php the_permalink() ?>&text=<?php echo $page_title; ?>">twitter</a></li>
	<li class="linkedin"><a href="http://www.linkedin.com/shareArticle?mini=true&url=<?php the_permalink() ?>&title=<?php echo $page_title; ?>&summary=&source=<?php bloginfo('name'); ?>" target="_new">linkedin</a></li>
</ul>