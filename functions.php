<?php
/**
 * _s functions and definitions
 *
 * @link https://developer.wordpress.org/themes/basics/theme-functions/
 *
 * @package _s
 */

if ( ! function_exists( '_s_setup' ) ) :
/**
 * Sets up theme defaults and registers support for various WordPress features.
 *
 * Note that this function is hooked into the after_setup_theme hook, which
 * runs before the init hook. The init hook is too late for some features, such
 * as indicating support for post thumbnails.
 */
function _s_setup() {
	/*
	 * Make theme available for translation.
	 * Translations can be filed in the /languages/ directory.
	 * If you're building a theme based on _s, use a find and replace
	 * to change '_s' to the name of your theme in all the template files.
	 */
	load_theme_textdomain( '_s', get_template_directory() . '/languages' );

	// Add default posts and comments RSS feed links to head.
	add_theme_support( 'automatic-feed-links' );

	/*
	 * Let WordPress manage the document title.
	 * By adding theme support, we declare that this theme does not use a
	 * hard-coded <title> tag in the document head, and expect WordPress to
	 * provide it for us.
	 */
	add_theme_support( 'title-tag' );

	/*
	 * Enable support for Post Thumbnails on posts and pages.
	 *
	 * @link https://developer.wordpress.org/themes/functionality/featured-images-post-thumbnails/
	 */
	add_theme_support( 'post-thumbnails' );

	// This theme uses wp_nav_menu() in one location.
	register_nav_menus( array(
		'menu-1' => esc_html__( 'Primary', '_s' ),
	) );

	/*
	 * Switch default core markup for search form, comment form, and comments
	 * to output valid HTML5.
	 */
	add_theme_support( 'html5', array(
		'search-form',
		'comment-form',
		'comment-list',
		'gallery',
		'caption',
	) );

	// Set up the WordPress core custom background feature.
	add_theme_support( 'custom-background', apply_filters( '_s_custom_background_args', array(
		'default-color' => 'ffffff',
		'default-image' => '',
	) ) );

	add_theme_support( 'custom-logo', array(
		'height'      => 240,
		'width'       => 240,
		'flex-height' => true,
	) );


	// Add theme support for selective refresh for widgets.
	add_theme_support( 'customize-selective-refresh-widgets' );

}
endif;
add_action( 'after_setup_theme', '_s_setup' );




function colors_theme_customizer( $wp_customize ) {
	// Цвет ссылки
	$wp_customize->add_setting( 'custom_link_color', array('default' => '#000000' ));
	$wp_customize->add_control(
	    new WP_Customize_Color_Control(
	        $wp_customize,
	        'link_color',
	        array(
	            'label'      => __( 'Цвет ссылок', 'custom' ),
	            'section'    => 'colors',
	            'settings'   => 'custom_link_color'
	        )
	    )
	);

	// Цвет текста в статье
	$wp_customize->add_setting( 'custom_article_color', array('default' => '#000000' ));
	$wp_customize->add_control(
	    new WP_Customize_Color_Control(
	        $wp_customize,
	        'article_color',
	        array(
	            'label'      => __( 'Цвет текста статьи', 'custom' ),
	            'section'    => 'colors',
	            'settings'   => 'custom_article_color'
	        )
	    )
	);
}
add_action( 'customize_register', 'colors_theme_customizer' );





/**
 * Set the content width in pixels, based on the theme's design and stylesheet.
 *
 * Priority 0 to make it available to lower priority callbacks.
 *
 * @global int $content_width
 */
function _s_content_width() {
	$GLOBALS['content_width'] = apply_filters( '_s_content_width', 640 );
}
add_action( 'after_setup_theme', '_s_content_width', 0 );

/**
 * Register widget area.
 *
 * @link https://developer.wordpress.org/themes/functionality/sidebars/#registering-a-sidebar
 */
function _s_widgets_init() {
	register_sidebar( array(
		'name'          => esc_html__( 'Sidebar', '_s' ),
		'id'            => 'sidebar-1',
		'description'   => esc_html__( 'Add widgets here.', '_s' ),
		'before_widget' => '<section id="%1$s" class="widget %2$s">',
		'after_widget'  => '</section>',
		'before_title'  => '<h2 class="widget-title">',
		'after_title'   => '</h2>',
	) );
}
add_action( 'widgets_init', '_s_widgets_init' );

/**
 * Enqueue scripts and styles.
 */
function _s_scripts() {
	wp_enqueue_style( '_s-style', get_stylesheet_uri() );

	wp_enqueue_script( '_s-navigation', get_template_directory_uri() . '/js/navigation.js', array(), '20151215', true );

	wp_enqueue_script( '_s-skip-link-focus-fix', get_template_directory_uri() . '/js/skip-link-focus-fix.js', array(), '20151215', true );

	if ( is_singular() && comments_open() && get_option( 'thread_comments' ) ) {
		wp_enqueue_script( 'comment-reply' );
	}
}
add_action( 'wp_enqueue_scripts', '_s_scripts' );

/**
 * Блок с дополнительными полями
 */
function advanced_fields_box() {
    add_meta_box(
        'advanced_fields', // Идентификатор(id)
        'Дополнительный поля', // Заголовок области с мета-полями(title)
        'show_advanced_fields', // Вызов(callback)
        'post', // Где будет отображаться наше поле, в нашем случае в Записях
        'normal',
        'high');
}
add_action('add_meta_boxes', 'advanced_fields_box');

// Рейтинг - select
$meta_fields = array(
    array(
        'label' => 'Рейтинг страницы',
        'id'    => 'page_rating',
        'type'  => 'select',
        'options' => array (
            'one' => array ('label' => 'Ужасно','value' => 'Ужасно'),
            'two' => array ('label' => 'Плохо','value' => 'Плохо'),
            'three' => array ('label' => 'Нормально','value' => 'Нормально'),
            'four' => array ('label' => 'Хорошо','value' => 'Хорошо'),
            'five' => array ('label' => 'Отлично','value' => 'Отлично')
        )
    )
);

// Отображение дополнительных полей
function show_advanced_fields() {
	global $post;
	global $meta_fields;
	echo '<input type="hidden" name="custom_meta_box_nonce" value="'.wp_create_nonce(basename(__FILE__)).'" />';

    echo '<table class="form-table">';
    foreach ($meta_fields as $field) {
        $meta = get_post_meta($post->ID, $field['id'], true);
        echo '<tr>
                <th><label for="'.$field['id'].'">'.$field['label'].'</label></th>
                <td>';
                switch($field['type']) {
					case 'select':
					    echo '<select name="'.$field['id'].'" id="'.$field['id'].'">';
					    foreach ($field['options'] as $option) {
					        echo '<option', $meta == $option['value'] ? ' selected="selected"' : '', ' value="'.$option['value'].'">'.$option['label'].'</option>';
					    }
					    echo '</select><br /><span class="description">'.$field['desc'].'</span>';
					break;
						                }
        echo '</td></tr>';
    }
    echo '</table>';
}

// Cохранение дополнительных полей
function save_advanced_fields($post_id) {
    global $meta_fields;  // Массив с нашими полями

    // проверяем наш проверочный код
    if (!wp_verify_nonce($_POST['custom_meta_box_nonce'], basename(__FILE__)))
        return $post_id;
    // Проверяем авто-сохранение
    if (defined('DOING_AUTOSAVE') && DOING_AUTOSAVE)
        return $post_id;
    // Проверяем права доступа
    if ('page' == $_POST['post_type']) {
        if (!current_user_can('edit_page', $post_id))
            return $post_id;
        } elseif (!current_user_can('edit_post', $post_id)) {
            return $post_id;
    }

    // Если все отлично, прогоняем массив через foreach
    foreach ($meta_fields as $field) {
        $old = get_post_meta($post_id, $field['id'], true); // Получаем старые данные (если они есть), для сверки
        $new = $_POST[$field['id']];
        if ($new && $new != $old) {  // Если данные новые
            update_post_meta($post_id, $field['id'], $new); // Обновляем данные
        } elseif ('' == $new && $old) {
            delete_post_meta($post_id, $field['id'], $old); // Если данных нету, удаляем мету.
        }
    } // end foreach
}
add_action('save_post', 'save_advanced_fields');


/**
 * Implement the Custom Header feature.
 */
require get_template_directory() . '/inc/custom-header.php';

/**
 * Custom template tags for this theme.
 */
require get_template_directory() . '/inc/template-tags.php';

/**
 * Custom functions that act independently of the theme templates.
 */
require get_template_directory() . '/inc/extras.php';

/**
 * Customizer additions.
 */
require get_template_directory() . '/inc/customizer.php';

/**
 * Load Jetpack compatibility file.
 */
require get_template_directory() . '/inc/jetpack.php';

/**
 * Load more posts AJAX
 */
require get_template_directory() . '/inc/load-more-posts.php';
