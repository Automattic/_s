<?php
/*
 * Template Name: Membership Payment
 */

get_header();
$slider = get_field('slider');
$contact_map = get_field('location','option');
$address = get_field('address','option');
$phone = get_field('phone','option');
$slug = get_queried_object()->post_name;
$top_post = $post;
?>

			<?php
			while ( have_posts() ) : the_post();
				$title = get_the_title();
				$content = get_the_content();
				$content = apply_filters('the_content', $content);
				$slider = get_field('slider');
				if ($post->post_parent && $post->ancestors) {
					$top_post = get_post(end($post->ancestors));
					$slug = $top_post->post_name;
					if($slug == 'wap'){
						$block_class = "green";
					}else{
						$block_class = "";
					}
				}
				//get_template_part( 'template-parts/content', 'page' );

				// If comments are open or we have at least one comment, load up the comment template.
				/* if ( comments_open() || get_comments_number() ) :
					comments_template();
				endif; */
				?>
                <?php if(!empty($slider)){ ?>
                    <section class="banner-section">
                        <ul class="banner-slider">
                            <?php foreach($slider as $slide){
                                $image = $slide['slide'];
								if(!empty($image['sizes'])){
									$banner_image = $image['sizes']['banner-image'];
								} else {
									$banner_image = $image['url'];
								}

                                $title = $slide['title'];
                                $description = $slide['description'];
                                $link = $slide['link'];

                            ?>
                            <li style="background-image:url('<?php echo $banner_image;?>');">
                                <img src="<?php echo $banner_image; ?>" alt="banner-image" />
                                <div class="banner-content">
									<?php if(!empty($title)){ ?>
										<div class="banner-title"><?php echo $title; ?></div>
									<?php } ?>
									<?php if(!empty($description)){ ?>
										<p><?php echo $description; ?></p>
									<?php } ?>
									<?php if(!empty($link)){ ?>
										<a class="button banner-btn btn-blue btn" href="<?php echo $link; ?>">register</a>
									<?php } ?>
								</div>
                            </li>
                            <?php } ?>
                        </ul>
                    </section>
                    <?php } ?>
                <section class="content-section">
                    <div class="container">
                        <div class="row">
                            <div class="col-sm-8 page-content">
                                <div class="page-heading">
                                    <div class="page-title"><?php echo $title; ?></div>
                                    <ul class="social-share">
                                        <li class="facebook"><a target="_blank" href="http://www.facebook.com/sharer.php?s=100&p[title]=<?php the_title(); ?>&p[url]=<?php the_permalink() ?>">facebook</a></li>
										<li class="twitter"><a target="_blank" href="https://twitter.com/share?url=<?php the_permalink() ?>&text=<?php the_title(); ?>">twitter</a></li>
										<li class="linkedin"><a href="http://www.linkedin.com/shareArticle?mini=true&url=<?php the_permalink() ?>&title=<?php the_title(); ?>&summary=&source=<?php bloginfo('name'); ?>" target="_new">linkedin</a></li>
                                    </ul>
                                </div>
                                <?php
								if(!is_user_logged_in()){
									$login_link = get_permalink(get_page_by_path('login'));
									echo "Please <a href='".$login_link."'>login</a> to pay for your membership.";
								} else if(is_user_logged_in() && membership_status_check() == '-1'){

									echo "Sorry! you can't access this page.";

								} else if(is_user_logged_in() && membership_status_check() >= 1){

									echo "Your Membership is already active.";

								} else {
									/* $current_user = wp_get_current_user();
									$current_email = $current_user->user_email;
									civicrm_initialize();
									$contact = civicrm_api3('contact', 'get', array(
												  'email' => $current_email,
												));

									$cid = $contact['id'];
									echo "CSBG : ".$result = civicrm_api3('Contact', 'getvalue', array(
									  'sequential' => 1,
									  'return' => "custom_26",
									  'id' => $cid,
									  //'custom_26' => 2,
									));
									echo "<br>";
									echo "WAP : ".$result = civicrm_api3('Contact', 'getvalue', array(
									  'sequential' => 1,
									  'return' => "custom_27",
									  'id' => $cid,
									  //'custom_26' => 2,
									)); */

									// There is no custom field 26 or 27 so im not sure what this could possibly do
									echo "<div style='display:none'>";
									//$membertype = 23;
									$membertype = $_REQUEST['membertype'];


									$current_user = wp_get_current_user();
									$current_email = $current_user->user_email;
									civicrm_initialize();
									$contact = civicrm_api3('contact', 'get', array(
												  'email' => $current_email,
												));

									$cid = $contact['id'];
									if ($membertype == 23) {
										echo "CSBG : ".$result = civicrm_api3('Contact', 'getvalue', array(
										  'sequential' => 1,
										  'return' => "custom_26",
										  'id' => $cid,
										  //'custom_26' => 2,
										));

									} else if($membertype == 24){
										echo "WAP : ".$result = civicrm_api3('Contact', 'getvalue', array(
											  'sequential' => 1,
											  'return' => "custom_27",
											  'id' => $cid,
											  //'custom_26' => 2,
											));
									}
									echo $result;
									echo "</div>";
									echo $content;

								}
								?>
                                <!-- Today`s Changes -->
                               <?php
                                $sub_page_list_block = get_field('sub_page_list_block');
                                if( $sub_page_list_block ) :
                                ?>
                                <div class="csbg-blocks <?php echo $block_class; ?> row">
                                <?php foreach( $sub_page_list_block as $row ):
                                $image = $row['sub_page_block_image'];
                                $icon = $row['sub_page_block_icon'];
                                $sub_page_block_title = $row['sub_page_block_title'];
                                $sub_page_block_learn_more = $row['sub_page_block_learn_more'];
                                ?>
                                <div class="col-sm-6">
                                    <?php if( $image || $icon || $sub_page_block_title || $sub_page_block_learn_more ): ?>
                                    <div class="csbg-block-single" style="background-image: url('<?php echo $image['url'] ?>');">
                                        <?php if( !empty($image['url']) ): ?>
                                        <img src="<?php echo $image['url'] ?>" alt="csbg-block" />
                                        <?php endif ?>  <!-- Image url if end -->
                                        <?php if( !empty($icon['url']) || !empty($sub_page_block_title) || !empty($sub_page_block_learn_more) ): ?>
                                        <div class="csbd-block-content">
											<a href="<?php echo $sub_page_block_learn_more; ?>" class="action-block">
												<?php if( !empty($icon['url']) ): ?>
												<div class="csbg-icons"><img src="<?php echo $icon['url']?>" alt="csbg-icon" /></div>
												<?php endif; ?>     <!-- $icon['url'] if end  -->
												<?php if( !empty($sub_page_block_title) ): ?>
												<h3><?php echo $sub_page_block_title ?></h3>
												<?php endif; ?>     <!-- csbg_block_title if end -->
												<?php if( !empty($sub_page_block_learn_more) ): ?>
												<span class="link-bottom">Learn More:</span>
												<?php endif ?>  <!-- csbg_block_learn_more if end  -->
											</a>
                                        </div>
                                        <?php endif; ?> <!-- image icon title and lern more if end -->
                                    </div>
                                    <?php endif; ?> <!-- image icon title and lern more if end -->
                                </div>
                                <?php endforeach ?>
                            </div>
                            <?php endif; ?>         <!-- sub_page_list_block if end  -->
                                <!-- Today`s Change end here -->
                            </div>
							<?php  $classes = get_body_class('buddypress '); ?>
							<?php if($classes[1]  != 'groups' || empty($classes)) { ?>
							<div class="col-md-4">
								<?php get_sidebar('right'); ?>
							</div>
							<?php } ?>
                        </div>
                    </div>
                </section>

            <?php
			endwhile; // End of the loop.
			?>

<?php
get_sidebar();
get_footer();
