<?php

/**
 * nascsp functions and definitions
 *
 * @link https://developer.wordpress.org/themes/basics/theme-functions/
 *
 * @package nascsp
 */
if (!function_exists('nascsp_setup')) :

    /**
     * Sets up theme defaults and registers support for various WordPress features.
     *
     * Note that this function is hooked into the after_setup_theme hook, which
     * runs before the init hook. The init hook is too late for some features, such
     * as indicating support for post thumbnails.
     */
    function nascsp_setup() {
        /*
         * Make theme available for translation.
         * Translations can be filed in the /languages/ directory.
         * If you're building a theme based on nascsp, use a find and replace
         * to change 'nascsp' to the name of your theme in all the template files.
         */
        load_theme_textdomain('nascsp', get_template_directory() . '/languages');

        // Add default posts and comments RSS feed links to head.
        add_theme_support('automatic-feed-links');

        /*
         * Let WordPress manage the document title.
         * By adding theme support, we declare that this theme does not use a
         * hard-coded <title> tag in the document head, and expect WordPress to
         * provide it for us.
         */
        add_theme_support('title-tag');

        /*
         * Enable support for Post Thumbnails on posts and pages.
         *
         * @link https://developer.wordpress.org/themes/functionality/featured-images-post-thumbnails/
         */
        add_theme_support('post-thumbnails');

        // This theme uses wp_nav_menu() in one location.
        register_nav_menus(array(
            'menu-1' => esc_html__('Primary', 'nascsp'),
        ));

        /*
         * Switch default core markup for search form, comment form, and comments
         * to output valid HTML5.
         */
        add_theme_support('html5', array(
            'search-form',
            'comment-form',
            'comment-list',
            'gallery',
            'caption',
        ));

        // Set up the WordPress core custom background feature.
        add_theme_support('custom-background', apply_filters('nascsp_custom_background_args', array(
            'default-color' => 'ffffff',
            'default-image' => '',
        )));

        // Add theme support for selective refresh for widgets.
        add_theme_support('customize-selective-refresh-widgets');

        /**
         * Add support for core custom logo.
         *
         * @link https://codex.wordpress.org/Theme_Logo
         */
        add_theme_support('custom-logo', array(
            'height' => 250,
            'width' => 250,
            'flex-width' => true,
            'flex-height' => true,
        ));
    }

endif;
add_action('after_setup_theme', 'nascsp_setup');

/**
 * Function file
 */
require get_template_directory() . '/inc/type-video.php';

/**
 * Set the content width in pixels, based on the theme's design and stylesheet.
 *
 * Priority 0 to make it available to lower priority callbacks.
 *
 * @global int $content_width
 */
function nascsp_content_width() {
    $GLOBALS['content_width'] = apply_filters('nascsp_content_width', 640);
}

add_action('after_setup_theme', 'nascsp_content_width', 0);

/**
 * Register widget area.
 *
 * @link https://developer.wordpress.org/themes/functionality/sidebars/#registering-a-sidebar
 */
function nascsp_widgets_init() {
    register_sidebar(array(
        'name' => esc_html__('Sidebar', 'nascsp'),
        'id' => 'sidebar-1',
        'description' => esc_html__('Add widgets here.', 'nascsp'),
        'before_widget' => '<section id="%1$s" class="widget %2$s">',
        'after_widget' => '</section>',
        'before_title' => '<h2 class="widget-title">',
        'after_title' => '</h2>',
    ));
}

add_action('widgets_init', 'nascsp_widgets_init');

/**
 * Enqueue scripts and styles.
 */
function nascsp_scripts() {

    wp_enqueue_style('nascsp-bootstrap-min-css', get_template_directory_uri() . '/css/bootstrap.min.css');
    wp_enqueue_style('nascsp-jquery-bxslider-css', get_template_directory_uri() . '/css/jquery.bxslider.css');
    wp_enqueue_style('nascsp-jquery-owl-carousel-css', get_template_directory_uri() . '/css/owl.carousel.min.css');
    //wp_enqueue_style( 'nascsp-jquery-fancybox-css', get_template_directory_uri() . '/css/jquery.fancybox.min.css');
    wp_enqueue_style('nascsp-jquery-fancypack-css', get_template_directory_uri() . '/css/jquery.fancybox.css');
    wp_enqueue_style('nascsp-style', get_stylesheet_uri());
    wp_enqueue_style('nascsp-responsive', get_template_directory_uri() . '/css/responsive.css');
    wp_enqueue_style('owl-carousel', get_template_directory_uri() . '/css/owl.carousel.min.css');

    wp_enqueue_script('jquery');
    wp_enqueue_script('nascsp-touch-js', get_template_directory_uri() . '/js/bootstrap.min.js', array(), '20151215', true);
    wp_enqueue_script('nascsp-bootstrap-min-js', get_template_directory_uri() . '/js/modernizr.js', array(), '20151215', true);
    wp_enqueue_script('nascsp-jquery-bxslider-js', get_template_directory_uri() . '/js/jquery.bxslider.js', array(), '20151215', true);
    wp_enqueue_script('nascsp-jquery-owl-carousel-js', get_template_directory_uri() . '/js/owl.carousel.min.js', array(), '20151215', true);
    wp_enqueue_script('nascsp-jquery-fancypack-js', get_template_directory_uri() . '/js/jquery.fancybox.pack.js', array(), '20151215', true);
    wp_enqueue_script('mask-js', get_template_directory_uri() . '/js/mask.js', array(), '20151215', true);

    wp_enqueue_script('owl-carousel-js', get_template_directory_uri() . '/js/owl.carousel.min.js', array(), '20151215', true);
    //wp_enqueue_script( 'fancybox-js', get_template_directory_uri() . '/js/jquery.fancybox.min.js', array(), '20151215', true );
    wp_enqueue_script('nascsp-custom-js', get_template_directory_uri() . '/js/custom.js', array(), '20151215', true);
    //wp_enqueue_script( 'nascsp-map-js', get_template_directory_uri() . '/js/map-multiple.js', array(), '20151215', true );
    //if(is_page_template('to-eventoverview.php')){
    wp_enqueue_script('google_map', 'https://maps.google.com/maps/api/js?key=AIzaSyC1N181P8XUHtW38ub-l98zKMpAErT_drI', array(), '20151215', true);

    if (is_page('2018-annual-training-coneference')) {
        wp_enqueue_script('nascsp-location-js', get_template_directory_uri() . '/js/location-map.js', array(), '20151215', true);
    }

    if (is_singular() && comments_open() && get_option('thread_comments')) {
        wp_enqueue_script('comment-reply');
    }

    wp_localize_script('nascsp-custom-js', 'nascsp_admin_URL', nascsp_admin_URL());
}

add_action('wp_enqueue_scripts', 'nascsp_scripts');

function nascsp_admin_URL() {
    $MyTemplatepath = get_template_directory_uri();
    $MyHomepath = esc_url(home_url('/'));
    $admin_URL = admin_url('admin-ajax.php'); // Your File Path
    return array(
        'admin_URL' => $admin_URL,
        'MyTemplatepath' => $MyTemplatepath,
        'MyHomepath' => $MyHomepath,
    );
}

add_action('wp_ajax_member_check', 'member_check');
add_action('wp_ajax_nopriv_member_check', 'member_check');

function member_check() {
    $email = $_REQUEST['email'];
    if (($email = filter_var($email, FILTER_VALIDATE_EMAIL)) !== false) {
        $prefix = substr($email, 0, strrpos($email, '@'));
        $explode = explode("@", $email);



        $newstring = $explode[1];

        //echo $newstring;
        $exists = email_exists($email);
        $member_domains = get_field('member_domains', 'option');
        if (!empty($member_domains)) {
            $domains = array();
            foreach ($member_domains as $member_domain) {
                $domains[] = $member_domain['domain'];
            }
        }

        if ($exists) {
            $user_meta = get_userdata($exists);
            $user_roles = $user_meta->roles;
            if (in_array("member", $user_roles)) {
                echo "yes";
            } else if (in_array("administrator", $user_roles)) {
                echo "yes";
            } else if (in_array($newstring, $domains)) {
                echo "yes";
            } else {
                echo "no " . $newstring;
            }
        } else if (in_array($newstring, $domains)) {
            echo "yes";
        } else {

            echo "no " . $newstring;
        }
    } else {
        echo "invalid email";
    }
    die();
}

/* function nascsp_scripts_css() {

  wp_enqueue_style( 'nascsp-style', get_stylesheet_uri());
  wp_enqueue_style( 'nascsp-responsive', get_template_directory_uri() . '/css/responsive.css');
  }
  add_action( 'get_footer', 'nascsp_scripts_css'); */
/**
 * Implement the Custom Header feature.
 */
require get_template_directory() . '/inc/custom-header.php';

/**
 * Custom template tags for this theme.
 */
require get_template_directory() . '/inc/template-tags.php';

/**
 * Functions which enhance the theme by hooking into WordPress.
 */
require get_template_directory() . '/inc/template-functions.php';

/**
 * Customizer additions.
 */
require get_template_directory() . '/inc/customizer.php';

/**
 * Load Jetpack compatibility file.
 */
if (defined('JETPACK__VERSION')) {
    require get_template_directory() . '/inc/jetpack.php';
}


remove_action('wp_head', 'index_rel_link');
remove_action('wp_head', 'wlwmanifest_link');
remove_action('wp_head', 'feed_links_extra', 3);
remove_action('wp_head', 'adjacent_posts_rel_link', 10, 0);
remove_action('wp_head', 'wp_shortlink_wp_head', 10, 0);
remove_action('wp_head', 'adjacent_posts_rel_link_wp_head', 10, 0);
remove_action('wp_head', 'wp_generator');

function nascsp_remove_version() {
    return '';
}

add_filter('the_generator', 'nascsp_remove_version');

/**
 * Disable support for comments and trackbacks in post types
 */
function uncommon_disable_comments_post_types_support() {
    $post_types = get_post_types();
    foreach ($post_types as $post_type) {
        if (post_type_supports($post_type, 'comments')) {
            //remove_post_type_support($post_type, 'comments');
            remove_post_type_support($post_type, 'trackbacks');
        }
    }
}

add_action('admin_init', 'uncommon_disable_comments_post_types_support');

/**
 * Close comments on the front-end
 */
// function uncommon_disable_comments_status() {
// return false;
// }
// add_filter('comments_open', 'uncommon_disable_comments_status', 20, 2);
// add_filter('pings_open', 'uncommon_disable_comments_status', 20, 2);

/**
 * Hide existing comments
 */
// function uncommon_disable_comments_hide_existing_comments($comments) {
// $comments = array();
// return $comments;
// }
// add_filter('comments_array', 'uncommon_disable_comments_hide_existing_comments', 10, 2);

/**
 * Remove comments page in menu
 */
// function uncommon_disable_comments_admin_menu() {
// remove_menu_page('edit-comments.php');
// }
// add_action('admin_menu', 'uncommon_disable_comments_admin_menu');

/**
 * Redirect any user trying to access comments page
 */
// function uncommon_disable_comments_admin_menu_redirect() {
// global $pagenow;
// if ($pagenow === 'edit-comments.php') {
// wp_redirect(admin_url()); exit;
// }
// }
// add_action('admin_init', 'uncommon_disable_comments_admin_menu_redirect');

/**
 * Remove comments metabox from dashboard
 */
// function uncommon_disable_comments_dashboard() {
// remove_meta_box('dashboard_recent_comments', 'dashboard', 'normal');
// }
// add_action('admin_init', 'uncommon_disable_comments_dashboard');

/**
 * Remove comments links from admin bar
 */
// function uncommon_disable_comments_admin_bar() {
// if (is_admin_bar_showing()) {
// remove_action('admin_bar_menu', 'wp_admin_bar_comments_menu', 60);
// }
// }
// add_action('init', 'uncommon_disable_comments_admin_bar');

/* function for hide admin bar from front end. */
// if (!is_admin()) {
//add_filter('show_admin_bar', '__return_false');
// }

function remove_cssjs_ver($src) {
    if (strpos($src, '?ver='))
        $src = remove_query_arg('ver', $src);
    return $src;
}

if (!is_admin()) {
    add_filter('style_loader_src', 'remove_cssjs_ver', 10, 2);
    add_filter('script_loader_src', 'remove_cssjs_ver', 10, 2);
}

/*
  General Page Settings
 */
if (function_exists('acf_add_options_page')) {

    acf_add_options_page(array(
        'page_title' => 'General Settings',
        'menu_title' => 'General Settings',
        'menu_slug' => 'theme-general-settings',
        'capability' => 'edit_posts',
        'redirect' => false
    ));
}

add_action('get_header', 'force_civi_scripts_to_load');

function force_civi_scripts_to_load() {
    if (is_page_template('tp-event.php')) {
        add_action('wp_enqueue_scripts', array(civi_wp(), 'front_end_page_load'), 100);
    }
}

/**
 * Include Training  File
 */
require get_template_directory() . '/inc/type-training.php';
require get_template_directory() . '/inc/type-success-story.php';


/**
 * incluse State post type
 */
require get_template_directory() . '/inc/type-state.php';

/**
 * incluse News post type
 */
require get_template_directory() . '/inc/type-news.php';


/* * ********* */
/* Google Map
  /************ */

function my_acf_google_map_api($api) {
    $api['key'] = 'AIzaSyC1N181P8XUHtW38ub-l98zKMpAErT_drI';
    return $api;
}

add_filter('acf/fields/google_map/api', 'my_acf_google_map_api');

/** Filter added to remove draft advertisements from General Settings Advertisement Fields in admin * */
add_filter('acf/fields/post_object/query', 'relationship_options_filter', 10, 3);
add_filter('acf/fields/relationship/query', 'relationship_options_filter', 99, 3);
add_filter('acf/fields/page_link/query', 'relationship_options_filter', 99, 3);

function relationship_options_filter($options, $field, $the_post) {
    $options['post_status'] = array('publish');
    return $options;
}

$result = add_role(
        'member', 'Civi Member', array(
    'read' => true, // true allows this capability
    'edit_posts' => true,
    'delete_posts' => false, // Use false to explicitly deny
        )
);

add_image_size('banner-image', 2000, 665, array('center', 'center'));
add_image_size('sidebar-bottom-image', 370, 190, array('center', 'center'));
add_image_size('success-story-post-image', 280, 200, array('center', 'center'));
add_image_size('member-image', 226, 227, array('center', 'center'));
add_image_size('video-thumb', 368, 276, array('center', 'center'));
add_image_size('news-image', 375, 255, array('center', 'center'));

/* Add featured image dimensions */

add_filter('admin_post_thumbnail_html', 'add_featured_image_instruction');

function add_featured_image_instruction($content) {
    global $post;
    $post_type = get_post_type();
    if ($post_type == 'success-story') {
        $content .= '<p>Recommended Image Size: 280 X 200 </p>';
    } else if ($post_type == 'news') {
        $content .= '<p>Recommended Image Size: 375 X 255 </p>';
    }
    return $content;
}

function hierarchical_submenu($post) {
    $top_post = $post;
    $ul_val = false;
    $post_data = get_post($post->post_parent);
    $slug = $post_data->post_name;
    if ($slug == 'csbg') {
        $side_var_class = "sidebarlink-blue";
    } elseif ($slug == 'wap') {
        $side_var_class = "sidebarlink-green";
    } else {
        $side_var_class = "";
    }
    // If the post has ancestors, get its ultimate parent and make that the top post
    if ($post->post_parent && $post->ancestors) {
        $top_post = get_post(end($post->ancestors));
        $slug = $top_post->post_name;
        if ($slug == 'csbg') {
            $side_var_class = "sidebarlink-blue";
        } elseif ($slug == 'wap') {
            $side_var_class = "sidebarlink-green";
        } else {
            $side_var_class = "";
        }
    }
    // Always start traversing from the top of the tree

    return hierarchical_submenu_get_children($top_post, $post, $ul_val, $side_var_class);
}

function hierarchical_submenu_get_children($post, $current_page, $ul_val, $side_var_class) {

    $menu = '';
    // Get all immediate children of this page
    // $children = get_pages('child_of=' . $post->ID . '&hierarchical=1&sort_column=menu_order&sort_order=ASC');
    $children = get_pages('child_of=' . $post->ID . '&parent=' . $post->ID . '&hierarchical=1&sort_column=menu_order&sort_order=ASC');
    /* echo "<div style='display:none'>";
      print_r($children);
      echo "</div>"; */
    if ($children) {
        if ($ul_val == true) {
            $ul_class = 'sub-menu ';
        } else if ($ul_val == false) {
            $ul_class = 'sidebar-links ' . $side_var_class;
        }
        $menu = "<ul class='" . $ul_class . "'>";

        if ($ul_val == false) {
            if ($current_page->ID == $post->ID) {
                $active_class = "active";
                $parent_id = wp_get_post_parent_id($page_ID);
            } else {
                $active_class = "";
            }
            $menu .= '<li class="' . $active_class . '"><a href="' . get_permalink($post->ID) . '" class="' . $active_class . '">' . $post->post_title . '</a>';
        }

        foreach ($children as $child) {
            // If the child is the viewed page or one of its ancestors, highlight it
            if (in_array($child->ID, get_post_ancestors($current_page)) || ($child->ID == $current_page->ID)) {
                if (($page_ID == $current_page->ID)) {
                    $active_class = "active";
                } else {
                    $active_class = "";
                    if ($page_ID == $parent_id) {
                        $active_class = "active";
                    } else {
                        $active_class = "";
                    }
                }
                $menu .= '<li class="' . $active_class . '"><a href="' . get_permalink($child) . '" class="' . $active_class . '">' . $child->post_title . '</a>';
                $ul_val = true;
                $active_class = true;
            } else {
                $menu .= '<li><a href="' . get_permalink($child) . '">' . $child->post_title . '</a>';
            }
            // If the page has children and is the viewed page or one of its ancestors, get its children
            if (get_children($child->ID) && (in_array($child->ID, get_post_ancestors($current_page)) || ($child->ID == $current_page->ID))) {
                $menu .= hierarchical_submenu_get_children($child, $current_page, $ul_val, $side_var_class);
            }
            $menu .= "</li>";
        }
        $menu .= "</ul>";
    }

    return $menu;
}

/** Limit Text * */
function nascsp_limit_Text($string, $limit, $allowedTags = "") {
    if (!empty($string)) {
        $string = strip_tags($string, $allowedTags);
        if (strlen($string) > $limit) {
            $stringCut = substr($string, 0, $limit);
            $string = substr($stringCut, 0, strrpos($stringCut, ' '));
        }
        return $string;
    } else {
        return false;
    }
}

/* Remove P */
add_filter('the_content', 'the_content_filter', 20);

function the_content_filter($content) {
    $content = preg_replace('#<p.*?>(.*?)</p>#i', '<p>\1</p>', $content);
    $content = preg_replace('#<span.*?>(.*?)</span>#i', '<span>\1</span>', $content);
    $content = preg_replace('#<ol.*?>(.*?)</ol>#i', '<ol>\1</ol>', $content);
    $content = preg_replace('#<ul.*?>(.*?)</ul>#i', '<ul>\1</ul>', $content);
    $content = preg_replace('#<li.*?>(.*?)</li>#i', '<li>\1</li>', $content);
    return $content;
}

function nascsp_types($mime_types) {
    $mime_types['zip'] = 'application/zip'; //Adding ZIP extension
    return $mime_types;
}

add_filter('upload_mimes', 'nascsp_types', 1, 1);

add_action('load-users.php', function() {

    if (isset($_GET['action']) && isset($_GET['bp_gid']) && isset($_GET['users'])) {
        $group_id = $_GET['bp_gid'];
        $users = $_GET['users'];
        foreach ($users as $user_id) {
            groups_join_group($group_id, $user_id);
        }
    }
    //Add some Javascript to handle the form submission
    add_action('admin_footer', function() {
        ?>
        <script>
            jQuery("select[name='action']").append(jQuery('<option value="groupadd">Add to BP Group</option>'));
            jQuery("#doaction").click(function (e) {
                if (jQuery("select[name='action'] :selected").val() == "groupadd") {
                    e.preventDefault();
                    gid = prompt("Please enter a BuddyPres Group ID", "1");
                    jQuery(".wrap form").append('<input type="hidden" name="bp_gid" value="' + gid + '" />').submit();
                }
            });
        </script>
        <?php

    });
});

// Custom Pagination
function nascsp_pagination($query = NULL, $numpages = NULL) {
    global $wp_query;
    if (!empty($query)) {
        $wp_query = $query;
    }
    $big = 99999999;
    if ($numpages) {
        // $total_posts = $qry->found_posts;
        $pages = $numpages;
    } else {
        // $total_posts = $wp_query->found_posts;
        $pages = $wp_query->max_num_pages;
    }
    $page_format = paginate_links(array(
        'base' => str_replace($big, '%#%', esc_url(get_pagenum_link($big))),
        'format' => '?paged=%#%',
        'current' => max(1, get_query_var('paged')),
        'total' => $pages,
        'prev_text' => 'Previous',
        'next_text' => 'Next',
        'type' => 'array'
            )
    );

    if (is_array($page_format)) {
        $paged = ( get_query_var('paged') == 0 ) ? 1 : get_query_var('paged');
        echo '<ul class="pagination">';
        if ($paged == 1) {
            echo '<li class="disabled page-item"><a>Previous</a><li>';
        }
        foreach ($page_format as $page) {

            echo "<li class='page-item'>$page</li>";
        }
        if ($paged == $pages) {
            echo '<li class="disabled page-item"><a>Next</a><li>';
        }
        echo '</ul>';
    }
}

/* Query For State Contact Page Filter */

function result_query($param) {
    global $wpdb;
    $result = $wpdb->get_results("SELECT (SELECT display_name FROM civicrm_contact WHERE id = ca.contact_id) as Name,
		(SELECT organization_name FROM civicrm_contact WHERE id = ca.contact_id) as Organization,
		(SELECT job_title FROM civicrm_contact WHERE id = ca.contact_id) as Position,
		(SELECT REPLACE(hhs_5, 'HHS Region ', '') FROM civicrm_value_additional_de_3 WHERE entity_id = ca.contact_id) as Region,
		(SELECT hhs_5 FROM civicrm_value_additional_de_3 WHERE entity_id = ca.contact_id) as hhs_5,
		(SELECT phone FROM civicrm_phone WHERE contact_id = ca.contact_id AND is_primary = 1) as Phone,
		(SELECT url FROM civicrm_website WHERE contact_id = ca.contact_id ) as Website,
		(SELECT program_3 FROM civicrm_value_additional_de_3 WHERE entity_id = ca.contact_id) as Program,
		(SELECT email FROM civicrm_email WHERE contact_id = cc.id AND location_type_id = 2 LIMIT 1 ) as Email,
        (SELECT region_7 FROM civicrm_value_additional_de_3 WHERE entity_id = ca.contact_id) as nasccap,
		ca.street_address as street_address,
		ca.street_number as street_number,
		ca.supplemental_address_1 as supplemental_address_1,
		ca.supplemental_address_2 as supplemental_address_2,
		ca.city as city,
		ca.postal_code as postal_code,
		ca.postal_code_suffix as postal_code_suffix,
		csp.abbreviation as state

		FROM civicrm_state_province as csp
		INNER JOIN civicrm_address as ca ON ca.state_province_id = csp.id
                  AND ca.is_primary = 1
		INNER JOIN civicrm_group_contact as cgc ON cgc.contact_id = ca.contact_id
		LEFT JOIN civicrm_value_additional_de_3 as cvcf ON  cvcf.entity_id = ca.contact_id
        LEFT JOIN civicrm_contact as cc ON cc.id = ca.contact_id
		INNER JOIN civicrm_group as cg ON cg.id = cgc.group_id
		WHERE cg.id = 2 and cgc.status = 'Added' and $param GROUP BY ca.contact_id ORDER BY cvcf.priority_17 ASC ");
    //	print_r($result);
    return $result;
}

add_action('wp_ajax_nascsp_views', 'nascsp_views');
add_action('wp_ajax_nopriv_nascsp_views', 'nascsp_views');

function nascsp_views() {
    global $post;
    $postID = $_REQUEST['postid'];
    $countKey = 'views';
    $count = get_post_meta($postID, $countKey, true);
    if ($count == '') {
        $count = 0;
        delete_post_meta($postID, $countKey);
        add_post_meta($postID, $countKey, '0');
    } else {
        $count++;
        update_post_meta($postID, $countKey, $count);
    }

    $video = get_post($postID);
    $thumb_url = get_field('thumb_url', $video->ID);
    $videoDetails = video_html($thumb_url);
    $iframe = $videoDetails['iframe'];
    //echo "<div class='detailsModal'>";
    echo $iframe;
    //echo "</div>";

    die();
}

/* ------------------ check youtube/vimeo link ----------------------------- */

function parse_youtube($link) {

    $regexstr = '~
		# Match non-linked youtube URL in the wild. (Rev:20130823)
        https?://          # Required scheme. Either http or https.
        (?:[0-9A-Z-]+\.)?  # Optional subdomain.
        (?:                # Group host alternatives.
          youtu\.be/       # Either youtu.be,
        | youtube          # or youtube.com or
          (?:-nocookie)?   # youtube-nocookie.com
          \.com            # followed by
          \S*?             # Allow anything up to VIDEO_ID,
          [^\w\s-]         # but char before ID is non-ID char.
        )                  # End host alternatives.
        ([\w-]{11})        # $1: VIDEO_ID is exactly 11 chars.
        (?=[^\w-]|$)       # Assert next char is non-ID or EOS.
        (?!                # Assert URL is not pre-linked.
          [?=&+%\w.-]*     # Allow URL (query) remainder.
          (?:              # Group pre-linked alternatives.
            [\'"][^<>]*>   # Either inside a start tag,
          | </a>           # or inside <a> element text contents.
          )                # End recognized pre-linked alts.
        )                  # End negative lookahead assertion.
        [?=&+%\w.-]*       # Consume any URL (query) remainder.
        ~ix';

    preg_match($regexstr, $link, $matches);

    return $matches[1];
}

/* --------Show Vimeo Embede URL For Vimeo--------------------- */

function parse_vimeo($link) {

    $regexstr = '~
		# Match Vimeo link and embed code
		(?:<iframe [^>]*src=")?     # If iframe match up to first quote of src
		(?:                         # Group vimeo url
			https?:\/\/             # Either http or https
			(?:[\w]+\.)*            # Optional subdomains
			vimeo\.com              # Match vimeo.com
			(?:[\/\w]*\/videos?)?   # Optional video sub directory this handles groups links also
			\/                      # Slash before Id
			([0-9]+)                # $1: VIDEO_ID is numeric
			[^\s]*                  # Not a space
		)                           # End group
		"?                          # Match end quote if part of src
		(?:[^>]*></iframe>)?        # Match the end of the iframe
		(?:<p>.*</p>)?              # Match any title information stuff
		~ix';

    preg_match($regexstr, $link, $matches);

    return $matches[1];
}

function videoType($url) {
    if (strpos($url, 'youtube') > 0) {
        return 'youtube';
    } elseif (strpos($url, 'vimeo') > 0) {
        return 'vimeo';
    }
}

/* Get Poster image of youtube/vimeo video */

function video_html($videoLink, $acfkey = '') {
    $video_type = videoType($videoLink);
    $video = array();
    // $video_link = get_field('video_link');
    $video_link = $videoLink;

    if ($video_type == 'youtube') {
        /* parse_str(parse_url($video_link, PHP_URL_QUERY) , $my_array_of_vars);
          $youtube_id = $my_array_of_vars['v']; */
        $youtube_id = parse_youtube($video_link);
        if (!empty($youtube_id)) {
            $video['image_link'] = "http://i1.ytimg.com/vi/" . $youtube_id . "/hqdefault.jpg";
            $video['iframe'] = '<iframe class="video-full" src="http://www.youtube.com/embed/' . $youtube_id . '" frameborder="0" allowfullscreen></iframe>';
        }
    } elseif ($video_type == 'vimeo') {

        /* $vimeo_id = substr(parse_url($video_link, PHP_URL_PATH) , 1); */
        $vimeo_id = parse_vimeo($video_link);
        $image = unserialize(file_get_contents("http://vimeo.com/api/v2/video/$vimeo_id.php"));
        $video['image_link'] = $image[0]['thumbnail_large'];
        // echo $image_link = "http://vimeo.com/api/v2/video/".$vimeo_id.".php";

        if (!empty($vimeo_id)) {
            $video['iframe'] = '<iframe class="video-full" src="http://player.vimeo.com/video/' . $vimeo_id . '" frameborder="0" allowfullscreen></iframe>';
        }
    }
    return $video;
}

/* civicrm funcitons */

/**
 * Checks CiviCRM membership Status
 */
function membership_status_check() {
    $current_user = wp_get_current_user();
    $current_email = $current_user->user_email;
    civicrm_initialize();
    $contact = civicrm_api3('contact', 'get', array(
        'email' => $current_email,
    ));

    $cid = $contact['id'];
    //$current_employer = $contact['values'][$cid]['current_employer'];
    $result = civicrm_api3('Relationship', 'get', array(
        'contact_id' => $cid,
    ));
    $flag = true;
    if (!empty($result['values'])) {
        foreach ($result['values'] as $val) {
            if ($val['relation'] == "Child of") {
                $flag = false;
            }
        }
    }
    if ($flag == true) {

        $membership_status = civicrm_api3('Membership', 'getcount', array(
            //'contact_id' => $contact_id,
            'contact_id' => $cid,
            'active_only' => 2,
                /* 'membership_type_id' => 2,
                  'member_test' => 1 */
                //'membership_type_id' => "General",
        ));
    } else {
        $membership_status = '-1';
    }

    return $membership_status;
}

add_action('wp_ajax_get_due_amount', 'get_due_amount');
add_action('wp_ajax_nopriv_get_due_amount', 'get_due_amount');

/**
 * Get Amount due
 * @return [type] [description]
 */
function get_due_amount() {
    // NOTE I do not see custom_27 and custom_26 in their system... So Im not sure what this could possibly do
    $membertype = $_REQUEST['membertype'];
    $current_user = wp_get_current_user();
    $current_email = $current_user->user_email;
    civicrm_initialize();
    $contact = civicrm_api3('contact', 'get', array(
        'email' => $current_email,
    ));

    $cid = $contact['id'];
    if ($membertype == '23') {
        $result = civicrm_api3('Contact', 'getvalue', array(
            'sequential' => 1,
            'return' => "custom_26",
            'id' => $cid,
                //'custom_26' => 2,
        ));
    } else if ($membertype == '24') {
        $result = civicrm_api3('Contact', 'getvalue', array(
            'sequential' => 1,
            'return' => "custom_27",
            'id' => $cid,
                //'custom_26' => 2,
        ));
    }

    echo $result;
    die();
}

function wpse_62509_current_month_selector($link_html) {
    $year = get_query_var('year');
    if (preg_match('/' . $year . '/i', $link_html))
        $link_html = preg_replace('/<li>/i', '<li class="active">', $link_html);
    return $link_html;
}

/* Add TinyMCE for Forum Page */

function bbp_enable_visual_editor($args = array()) {
    $args['tinymce'] = true;
    return $args;
}

add_filter('bbp_after_get_the_content_parse_args', 'bbp_enable_visual_editor');

/* Add Sidebar Widget */

function wpb_widgets_init() {

    register_sidebar(array(
        'name' => __('New/Event Sidebar', 'wpb'),
        'id' => 'news-event-1',
        'description' => __('The New/Event Sidebar sidebar appears on the right on New/Event Page', 'wpb'),
        'before_widget' => '<aside id="%1$s" class="widget %2$s">',
        'after_widget' => '</aside>',
        'before_title' => '<h3 class="widget-title">',
        'after_title' => '</h3>',
    ));
}

add_action('widgets_init', 'wpb_widgets_init');

/* Remove Bread Crumbs from the bbpress */

function bm_bbp_no_breadcrumb($param) {

    return true;
}

add_filter('bbp_no_breadcrumb', 'bm_bbp_no_breadcrumb');


function update_user(){
	  global $wpdb;
	$user_array=array('nascsp.org',
'familia.pr.gov',
'dc.gov',
'adeca.alabama.gov',
'alaska.gov',
'doc.as',
'dhs.arkansas.gov',
'ct.gov',
'state.de.us',
'azdes.gov',
'deo.myflorida.com',
'gefa.ga.gov',
'energy.guam.gov',
'dhw.idaho.gov',
'ihcda.in.gov',
'kshousingcorp.org',
'kyhousing.org',
'ky.gov',
'lhc.la.gov',
'lwc.la.gov',
'mainehousing.org',
'maryland.gov',
'state.ma.us',
'michigan.gov',
'state.mn.us',
'mdhs.ms.gov',
'ded.mo.gov',
'dss.mo.gov',
'nebraska.gov',
'dhhs.nv.gov',
'nh.gov',
'dca.nj.gov',
'state.nm.us',
'housingnm.org',
'dos.state.ny.us',
'nyshcr.org',
'dhhs.nc.gov',
'ncdenr.gov',
'nd.gov',
'hawaii.gov',
'development.ohio.gov',
'okcommerce.gov',
'oregon.gov',
'state.or.us',
'state.pa.us',
'aae.pr.gov',
'dhs.ri.gov',
'admin.sc.gov',
'state.sd.us',
'dhw.idaho.gov',
'illinois.gov',
'maine.gov',
'maryland.gov',
'state.ma.us',
'vermont.gov',
'tn.gov',
'thda.org',
'tdhca.state.tx.us',
'utah.gov',
'eo.vi.gov',
'dss.virginia.gov',
'dhcd.virginia.gov',
'commerce.wa.gov',
'wv.gov',
'wisconsin.gov',
'wyo.gov',
'mass.gov',
'acf.hhs.gov',
'osi.nh.gov',
'eo.vi.gov',
'nv.gov',
);
$users=get_users();
	foreach($users as $user){
		$user_id=$user->ID;
		$user_email=$user->user_email;
		if(!empty($user_email)){
			$user_domain=explode('@',$user_email);
			$user_domain=$user_domain[1];
		}

		if(@in_array($user_domain,$user_array)){

		}else{
			$user_role=$user->roles;

		if(@in_array('member',$user_role)){
						//$email="'".$user_email."'";
			print_r($user_email);
			echo '<pre>';
				/*$wp_user_object = new WP_User($user->ID);
			$wp_user_object->remove_role( 'member' );
			$wp_user_object->set_role('subscriber');
			*/
			}
		}
	}
}

/**
 * Theoretically this gets all users with the member domains and saves them to a csv BUT i dont think it gets called anywhere.
 */
function get_user_list(){
	global $wpdb;
	  $domains=get_field('member_domains','option');
	civicrm_initialize();
	$result = civicrm_api3('contact', 'get', array( 'sequential' => 1, 'options' => array(
      'limit' => 0, 'contact_type' => 'Individual','group_id' => '2',


    ),

	));
	$contact = civicrm_api('Contact','Get',array('group_id' => '2', 'contact_type' => 'Individual', 'version' =>3,'options' => array(
      'limit' => 0)
)
);
$file_name=get_site_url().'/CiviCRM_Contact_Search_1.csv';

$file = fopen($file_name,"r");
 $rows   = array_map('str_getcsv', file($file_name));
    $header = array_shift($rows);
    $csv    = array();
    foreach($rows as $row) {
        $csv[] = array_combine($header, $row);
    }

//print_r(count($contact['values']));exit;
	foreach($domains as $domain){
		$domain_array[]=$domain["domain"];

	}
	$count==0;

		$header = array('email');

		foreach($csv as $contact){

			$user_domain=explode('@',$contact["Email"]);
						$user_domain=$user_domain[1];

					if(@!in_array($user_domain,$domain_array)){
					//	echo $contact["email"];
						if(!in_array($contact["Email"],$email_array)){
							$email_array[]=$contact["Email"];
							$xls_data_to_print[] = array(
											'email'=> $contact["Email"],
											);

					$count++;
						}
		}
		}


	if($xls_data_to_print)
					ob_end_clean();
					$filename = 'civi_members'.date("d_m_Y_H_s_i").'.csv';
					$output = fopen('php://output', 'w');
					header("Content-type: text/plain; charset=UTF-8");
					header("Content-Type: application/csv;charset=UTF-8");
					header("Content-Disposition: attachment; filename=$filename");
					fputcsv($output, $header);

					foreach($xls_data_to_print as $xls_ky => $xls_val)
					{
						// Write a code here to generate CSV file with required details.
						// Use $xls_val->title OR $xls_val['title'] depending array type.
						fputcsv($output, $xls_val);
					}
					header("Pragma: no-cache");
					header("Expires: 0");
					//print $output;

					fclose($output);
					exit();


}
