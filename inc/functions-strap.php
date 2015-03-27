<?php

/**
 * Bootstrap menu class injection
 */
function bootstrap_menu_objects($sorted_menu_items, $args)
{
    if($args->theme_location == 'primary')
    {//
        $current = array('current-menu-ancestor', 'current-menu-item');
        $registry = array();
        foreach($sorted_menu_items as $i => $item) {
            $is_current = array_intersect( (array) $item->classes, $current );
            if ( !empty($is_current) ) $item->classes[] = 'active';
            $registry[$item->ID] = $i;
            if($item->menu_item_parent) {
                $parent_index = $registry[$item->menu_item_parent];
                if( !in_array('dropdown', $sorted_menu_items[$parent_index]->classes) ) {
                    $sorted_menu_items[$parent_index]->classes[] = 'dropdown';
                }
            }
        }
        //print_r($sorted_menu_items);print_r($args);exit;
    }
    return $sorted_menu_items;
}
add_filter( 'wp_nav_menu_objects', 'bootstrap_menu_objects', 10, 2 );


/**
 * Custom Bootstrap Walker
 */
class Bootstrap_Nav_Menu extends Walker_Nav_Menu {
    /**
     * @see Walker::start_lvl()
     * @since 3.0.0
     *
     * @param string $output Passed by reference. Used to append additional content.
     * @param int $depth Depth of page. Used for padding.
     */
    function start_lvl( &$output, $depth = 0, $args = array() ) {
        $indent = str_repeat("\t", $depth);
        $output .= "\n$indent<ul class=\"dropdown-menu\">\n";
    }

    /**
     * @see Walker::start_el()
     * @since 3.0.0
     *
     * @param string $output Passed by reference. Used to append additional content.
     * @param object $item Menu item data object.
     * @param int $depth Depth of menu item. Used for padding.
     * @param int $current_page Menu item ID.
     * @param object $args
     */
    function start_el( &$output, $item, $depth = 0, $args = array(), $id = 0 ) {
        $indent = ( $depth ) ? str_repeat( "\t", $depth ) : '';
        if(is_array($args)) $args = json_decode(json_encode($args)); // convert to object
        $class_names = $value = '';

        $classes = empty( $item->classes ) ? array() : (array) $item->classes;
        $classes[] = 'menu-item-' . $item->ID;

        $dropdown = in_array('dropdown', $classes);
        $class_names = join( ' ', apply_filters( 'nav_menu_css_class', array_filter( $classes ), $item, $args ) );
        if($depth > 0) $class_names = str_replace('dropdown', 'dropdown-submenu', $class_names);

        $class_names = $class_names ? ' class="' . esc_attr( $class_names ) . '"' : '';
        $id = apply_filters( 'nav_menu_item_id', 'menu-item-'. $item->ID, $item, $args );
        $id = $id ? ' id="' . esc_attr( $id ) . '"' : '';

        $output .= $indent . '<li' . $id . $value . $class_names .'>';

        $attributes  = ! empty( $item->attr_title ) ? ' title="'  . esc_attr( $item->attr_title ) .'"' : '';
        $attributes .= ! empty( $item->target )     ? ' target="' . esc_attr( $item->target     ) .'"' : '';
        $attributes .= ! empty( $item->xfn )        ? ' rel="'    . esc_attr( $item->xfn        ) .'"' : '';
        $attributes .= ! empty( $item->url )        ? ' href="'   . esc_attr( $item->url        ) .'"' : '';
        $attributes .= $dropdown                    ? ' class="dropdown-toggle" data-toggle="dropdown" data-target="#"' : '';

        $item_output = $args->before;
        $item_output .= '<a'. $attributes .'>';
        $item_output .= $args->link_before . apply_filters( 'the_title', $item->title, $item->ID ) . $args->link_after;
        if($dropdown && $depth == 0) $item_output .= ' <b class="caret"></b>';
        $item_output .= '</a>';
        $item_output .= $args->after;

        $output .= apply_filters( 'walker_nav_menu_start_el', $item_output, $item, $depth, $args );
    }
}

/**
 * Bootstrap styled Caption shortcode.
 * Hat tip: http://justintadlock.com/archives/2011/07/01/captions-in-wordpress
 */
add_filter( 'img_caption_shortcode', 'bootstrap_img_caption_shortcode', 10, 3 );

function bootstrap_img_caption_shortcode( $output, $attr, $content )  {

    /* We're not worried abut captions in feeds, so just return the output here. */
    if ( is_feed() )  return '';

    extract(shortcode_atts(array(
                'id'	=> '',
                'align'	=> 'alignnone',
                'width'	=> '',
                'caption' => ''
            ), $attr));

    if ( 1 > (int) $width || empty($caption) )
        return $content;

    if ( $id ) $id = 'id="' . esc_attr($id) . '" ';

    return '<div ' . $id . 'class="thumbnail ' . esc_attr($align) . '">'
        . do_shortcode( $content ) . '<div class="caption">' . $caption . '</div></div>';
}

/**
 * Bootstrap styled Comment form.
 */
add_filter( 'comment_form_defaults', 'bootstrap_comment_form_defaults', 10, 1 );

function bootstrap_comment_form_defaults( $defaults )
{
    /*    */

    $commenter = wp_get_current_commenter();
    $req = get_option( 'require_name_email' );
    $aria_req = ( $req ? " aria-required='true'" : '' );
    $defaults['fields'] =  array(
        'author' => '<div class="form-group comment-form-author">' .
                '<label for="author" class="col-sm-3 control-label">' . __( 'Name', '_s' ) . ( $req ? ' <span class="required">*</span>' : '' ) . '</label> ' .
                '<div class="col-sm-9">' .
                    '<input id="author" name="author" type="text" value="' . esc_attr( $commenter['comment_author'] ) . '"  class="form-control"' . $aria_req . ' />' .
                '</div>' .
            '</div>',
        'email'  => '<div class="form-group comment-form-email">' .
                '<label for="email" class="col-sm-3 control-label">' . __( 'Email', '_s' ) . ( $req ? ' <span class="required">*</span>' : '' ) . '</label> ' .
                '<div class="col-sm-9">' .
                    '<input id="email" name="email" type="text" value="' . esc_attr(  $commenter['comment_author_email'] ) . '"  class="form-control"' . $aria_req . ' />' .
                '</div>' .
            '</div>',
        'url'    => '<div class="form-group comment-form-url">' .
            '<label for="url" class="col-sm-3 control-label"">' . __( 'Website', '_s' ) . '</label>' .
                '<div class="col-sm-9">' .
                    '<input id="url" name="url" type="text" value="' . esc_attr( $commenter['comment_author_url'] ) . '"  class="form-control" />' .
                '</div>' .
            '</div>',
    );
    $defaults['comment_field'] = '<div class="form-group comment-form-comment">' .
        '<label for="comment" class="col-sm-3 control-label">' . _x( 'Comment', 'noun', '_s' ) . '</label>' .
            '<div class="col-sm-9">' .
                '<textarea id="comment" name="comment" aria-required="true" class="form-control" rows="8"></textarea>' .
                '<span class="help-block form-allowed-tags">' . sprintf( __( 'You may use these <abbr title="HyperText Markup Language">HTML</abbr> tags and attributes: %s' ), ' <code>' . allowed_tags() . '</code>' ) . '</span>' .
           '</div>' .
        '</div>';

    $defaults['comment_notes_after'] = '<div class="form-group comment-form-submit">';

    return $defaults;
}
add_action( 'comment_form', 'bootstrap_comment_form', 10, 1 );

function bootstrap_comment_form( $post_id )
{
    // closing tag for 'comment_notes_after'
    echo '</div><!-- .form-group .comment-form-submit -->';
}


function bootstrap_searchform_class( $bt = array() )
{
    $caller = basename($bt[1]['file'], '.php');
    switch($caller) {
        case 'header':
            return 'navbar-form navbar-right';
        default:
            return 'form-inline';
    }
}

add_filter( 'embed_oembed_html', 'bootstrap_oembed_html', 10, 4 );

function bootstrap_oembed_html( $html, $url, $attr, $post_ID )
{
    return '<div class="embed-responsive embed-responsive-16by9">' . $html . '</div>';
}

/** Theme Builder
 --------------------------------------------------------*/
/**
 * Register the form setting for the build.
 *
 * This function is attached to the admin_init action hook.
 *
 * This call to register_setting() registers a validation callback, _strap_build_validate(),
 * which is used when the option is saved, to ensure that our option values are properly
 * formatted, and safe.
 */
function _strap_build_init()
{
    register_setting(
        '_strap_build',         // Options group, see settings_fields() call in _strap_build_render_page()
        '_strap_build_options', // Database option, see _strap_build_get_options()
        '_strap_build_validate' // The sanitization callback, see _strap_build_validate()
    );
    $options = _strap_build_get_options();

    // Register our settings field group
    add_settings_section(
        'default', // Unique identifier for the settings section
        __('Name your new _strapped theme', '_s'), // Section title
        '__return_false', // Section callback (we don't want anything)
        '_strap_build' // Menu slug, used to uniquely identify the page; see _strap_build_add_page()
    );
    add_settings_field( '_strap_build_name', __( 'Theme name', '_s' ), '_strap_build_field_name', '_strap_build', 'default');
    add_settings_field( '_strap_build_slug', __( 'Theme slug', '_s' ), '_strap_build_field_slug', '_strap_build', 'default' );
}
add_action( 'admin_init', '_strap_build_init' );

function _strap_build_field_name() {
    $options = _strap_build_get_options();
    $selected = array_key_exists('name', $options) ? $options['name'] : '';
    ?><input  class="all-options" type="text" name="_strap_build_options[name]" id="_strap_build_options_name" value="<?php echo esc_attr( $selected ); ?>" />
    <span class="description"><?php _e( 'Something like "My Awesome Theme" ', '_s' ); ?></span>
<?php
}

function _strap_build_field_slug() {
    $options = _strap_build_get_options();
    $selected = array_key_exists('slug', $options) ? $options['slug'] : '';
    ?><input class="all-options" type="text" name="_strap_build_options[slug]" id="_strap_build_options_slug" value="<?php echo esc_attr( $selected ); ?>" />
    <span class="description"><?php _e( 'Something like "my-awesome-theme" or "mat" ', '_s' ); ?></span>
<?php
}

/**
 * Returns the options array
 */
function _strap_build_get_options() {
    $saved = (array) get_option( '_strap_build_options' );
    $defaults = _strap_build_default_options();
    $defaults = apply_filters( '_strap_build_default_options', $defaults );

    $options = wp_parse_args( $saved, $defaults );
    $options = array_intersect_key( $options, $defaults );

    return $options;
}
function _strap_build_default_options() {
    $defaults = array(
        'name'  => '',
        'slug'   => '',
    );

    return $defaults;
}


/**
 * Sanitize and validate form input. Accepts an array, return a sanitized array.
 *
 * @see _strap_build_init()
 *
 * @param array $input Unknown values.
 * @return array Sanitized theme options ready to be stored in the database.
 */
function _strap_build_validate( $input ) {
    $output = array();
    $error = 0;
    $default_keys = array_keys( _strap_build_default_options() );
    foreach($default_keys as $key) {
        $output[$key] = ( isset( $input[$key] ) && get_post( $input[$key] ) !== FALSE ) ? trim($input[$key]) : '';
    }

    // name
    if( empty($output['name']) ) {
        add_settings_error( '_strap_build_name', '_strap_build_name_req', __('Name is required', '_s'), 'error' );
        $error++;
    }

    // slug
    if( empty($output['slug']) ) {
        $sane_slug = _strap_build_sanitize($output['name']);
        $err_msg = sprintf(__('You must specify a valid Theme slug - try: %s', '_s'), $sane_slug);
        add_settings_error( '_strap_build_slug', '_strap_build_slug_req', $err_msg, 'error' );
        $error = true;
    }
    else {
        $sane_slug = _strap_build_sanitize($output['slug']);
        if($sane_slug != $output['slug']) {
            $err_msg = sprintf(__('%s is not a valid Theme slug - try: %s instead', '_s'), $output['slug'], $sane_slug);
            add_settings_error( '_strap_build_slug', '_strap_build_slug_regexp', $err_msg, 'error' );
            $output['slug'] = '';
            $error++;
        }
    }

    if($error > 0) {
        return apply_filters( '_strap_build_validate', $output, $input );
    }
    else {
        $nodes = _strap_build_theme($output['name'], $output['slug']);//        echo '<pre>'; print_r( array_keys($nodes) ); exit;
        $redirect_url = admin_url( '/themes.php?activated=true' );
        switch_theme( $output['slug'] );
        wp_safe_redirect($redirect_url);
        exit;
    }
}

/**
 * Add our build theme page to the admin menu.
 * This function is attached to the admin_menu action hook.
 */
function _strap_build_add_page()
{
    $theme_page = add_theme_page(
        __( 'Build theme', '_s' ), // Name of page
        __( 'Build theme', '_s' ), // Label in menu
        'manage_options',          // Capability required
        '_strap_build',           // Menu slug, used to uniquely identify the page
        '_strap_build_render_page' // Function that renders the options page
    );
}
add_action( 'admin_menu', '_strap_build_add_page' );

/**
 * Renders the build theme page screen.
 *
 */
function _strap_build_render_page()
{
    ?>
<div class="wrap">
    <?php screen_icon(); ?>
    <h2><?php _e( 'Build theme', '_s' ); ?></h2>
    <?php settings_errors(); ?>

    <form method="post" action="options.php">
    <?php
        settings_fields( '_strap_build' );
        do_settings_sections( '_strap_build' );
        submit_button(__( '_strap it!', '_s' ));
    ?>
    </form>
</div>
<?php
}

/**
 * Builds your awesome _strap-powered theme
 *
 * @param string $name Theme name.
 * @param string $slug Theme slug.
 * @return: array
 */
function _strap_build_theme($name, $slug)
{
	$root = get_theme_root();
	$src = get_stylesheet_directory();
	$dst = $root . DIRECTORY_SEPARATOR . $slug;
	$nodes = _strap_build_scan($name, $slug, $src);
	if( is_dir($dst) || is_file($dst) ) {
		// handle error, don't overwrite
	}
	elseif( !mkdir($dst)) {
		// handle error, maybe set flag for dynamic zip instead of copying files
	}
	else {
		$ignored = _strap_gitignore($src . DIRECTORY_SEPARATOR . '.gitignore');
		foreach($nodes as $path => $content) {
			$from = realpath(get_stylesheet_directory() . DIRECTORY_SEPARATOR . $path);
			if( in_array($from, $ignored ) ) continue;

			$target = $dst . DIRECTORY_SEPARATOR . $path;
			if( empty($content) ) { // it's a dir
				mkdir($target); // don't check, after all you just created the parent dir
			} else {
				file_put_contents($target, $content); // don't check, after all you just created the parent dir
			}
		}

	}
	// this will make a few more arrangments towards my personal project structure - uncomment if you wish
	// _strap_build_production($slug);
	return $nodes;
}

/**
 * This is my personal project structure - use at will
 *
 * @param string $slug Theme slug.
 */
function _strap_build_production($slug)
{
	$root = get_theme_root();
	$src = get_stylesheet_directory();
	$dst = $root . DIRECTORY_SEPARATOR . $slug;

	// create ./assets structure and move bootsrap around
	$assets_path = $dst . DIRECTORY_SEPARATOR . 'assets';
	mkdir($assets_path);
	mkdir($assets_path . DIRECTORY_SEPARATOR . 'styles');
	mkdir($assets_path . DIRECTORY_SEPARATOR . 'fonts');
	mkdir($assets_path . DIRECTORY_SEPARATOR . 'media');

	rename( $dst . DIRECTORY_SEPARATOR . 'js', $assets_path . DIRECTORY_SEPARATOR . 'js' );

	$comp_path = $assets_path . DIRECTORY_SEPARATOR . 'components';
	mkdir($comp_path);
	$boot_src = $dst . DIRECTORY_SEPARATOR . 'bootstrap';
	$boot_dst = $comp_path . DIRECTORY_SEPARATOR . 'bootstrap';
	rename( $boot_src, $boot_dst );
	touch( $boot_dst . DIRECTORY_SEPARATOR . '_vars.less' );
	file_put_contents( $boot_dst . DIRECTORY_SEPARATOR . '_vars.less', '@icon-font-path:          "./assets/components/bootstrap/fonts/";' );

	$s_style = $dst . DIRECTORY_SEPARATOR . 'style.less';
	$content = file_get_contents($s_style);
	$content = str_replace('@import "bootstrap/less/variables.less"', '@import "bootstrap/less/variables.less";' . "\n" . '@import "bootstrap/_vars.less"', $content);
	$content = str_replace('bootstrap/', 'assets/components/bootstrap/', $content);
	file_put_contents($s_style, $content);

	$s_funcs = $dst . DIRECTORY_SEPARATOR . 'functions.php';
	$content = file_get_contents($s_funcs);
	$content = str_replace("'/bootstrap/js", "'/assets/components/bootstrap/js", $content);
	$content = str_replace("'/js/", "'/assets/js/", $content);
	file_put_contents($s_funcs, $content);

	// cleanup
	$expendables = array(
		$boot_dst . DIRECTORY_SEPARATOR . 'boostrap.less',
		$boot_dst . DIRECTORY_SEPARATOR . 'theme.less',
		$dst . DIRECTORY_SEPARATOR . 'layouts',
		$dst . DIRECTORY_SEPARATOR . 'sass',
		$dst . DIRECTORY_SEPARATOR . 'CONTRIBUTING.md',
		$dst . DIRECTORY_SEPARATOR . 'codesniffer.ruleset.xml',
		$assets_path . DIRECTORY_SEPARATOR . 'js' . DIRECTORY_SEPARATOR . 'navigation.js',
	);
	foreach($expendables as $expendable) {
		if( is_dir($expendable) ) _strap_rmdir_tree($expendable);
		elseif(is_file($expendable)) unlink($expendable);
	}
}

/**
 * Scans all files in theme
 *
 * @param string $name Theme name.
 * @param string $slug Theme slug.
 * @return: array $nodes all files in theme
 */
function _strap_build_scan($name, $slug, $dir = false)
{
    $base = get_stylesheet_directory();
    $dir = $dir ? $dir : $base;
    $nodes = array();
    foreach( scandir($dir) as $item) {
        if( substr($item, 0, 1) == '.') continue;
        $content = null;
        $path = $dir . DIRECTORY_SEPARATOR . $item;
        $node = substr($path, strlen($base) + 1);
        if( is_file($path)) $content = _strap_build_replace($name, $slug, $path);
        $nodes[$node] = _strap_build_replace($name, $slug, $path);
        if (is_dir($path)) $nodes = array_merge($nodes, _strap_build_scan($name, $slug, $path));
    }
    return $nodes;
}

/**
 * Performs replacements on theme files
 *
 * @param string $name Theme name.
 * @param string $slug Theme slug.
 * @return: array
 */
function _strap_build_replace($name, $slug, $path)
{
    if (is_dir($path)) return null;
    $search = array("'_s'", '_s_', ' _s');
    $replace = array("'$slug'", $slug . '_', " $name");

    $content = file_get_contents($path); // binary-safe
    $pathinfo = pathinfo($path);
    if($pathinfo['extension'] == 'php') {
        if($pathinfo['filename'] == 'functions-strap') {
            $end = strpos($content, '/** Theme Builder');
            $content = substr($content, 0, $end);
        }
        $content = str_replace($search, $replace, $content);
    }
    elseif($pathinfo['filename'] == 'style') {
        $start = strpos($content, '*/');
        $content = _strap_build_header($name) . substr($content, $start + 2);
    }
    return $content;
}

/**
 * Performs replacements on theme files
 *
 * @param string $name Theme name.
 * @param string $slug Theme slug.
 * @return: array
 */
function _strap_build_sanitize($name)
{
    $sane_slug = sanitize_title($name);
    $sane_slug = str_replace('-', '_', $sane_slug);
    return $sane_slug;
}
/**
 * Default theme header (for style.css)
 */
function _strap_build_header($name)
{
    return <<<END
/*
Theme Name: $name
Theme URI:
Author:
Author URI:
Description: TODO
Version: 0.1
License: GNU General Public License
License URI: license.txt
Tags: bootstrap, _s, _strap

Based on _strap [https://github.com/ptbello/_strap], a mashup of _s [https://github.com/Automattic/_s] and Bootstrap [https://github.com/twitter/bootstrap]
*/
END;
}

/**
 * Recursively delete directory
 */
function _strap_rmdir_tree($dir) {
	$files = array_diff(scandir($dir), array('.','..'));
	foreach ($files as $file) {
		(is_dir("$dir/$file") && !is_link($dir)) ? _strap_rmdir_tree("$dir/$file") : unlink("$dir/$file");
	}
	return rmdir($dir);
}

/**
 * Find .gitignored files
 */
function _strap_gitignore($file) { # $file = '/absolute/path/to/.gitignore'
	$dir = dirname($file);
	$matches = array();
	$lines = file($file);
	foreach ($lines as $line) {
		$line = trim($line);
		if ($line === '') continue;                 # empty line
		if (substr($line, 0, 1) == '#') continue;   # a comment
		if (substr($line, 0, 1) == '!') {           # negated glob
			$line = substr($line, 1);
			$files = array_diff(glob($dir . DIRECTORY_SEPARATOR .  '*'), glob($dir . DIRECTORY_SEPARATOR .  $line));
		} else {                                    # normal glob
			$files = glob($dir . DIRECTORY_SEPARATOR .  $line);
		}
		$matches = array_merge($matches, $files);
	}
	foreach($matches as $i => $match) $matches[$i] = realpath($match);
	return $matches;
}