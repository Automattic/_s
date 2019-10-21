<?php

namespace Svbk\WP\Theme\_svbk;

use Svbk\WP\Helpers\Utils;
use WP_Query;

class Feedback extends Post_List {

	public $taxonomy       = 'feedback_category';
	public $loadmore_class = 'feedback__loadmore';
	public $loadmore_label = '';
	public $labels         = array();

	public function __construct( $post_type = 'feedback', $properties = array() ) {

		$this->labels['name']          =
		$this->labels['singular_name'] =
			empty( $properties['name'] ) ? __( 'Feedback', '_svbk' ) : $properties['name'];

		parent::__construct( $post_type, $properties);

		add_action( 'init', array( $this, 'init' ), 10 );
		
		if ( ! did_action( 'after_setup_theme' ) ) {
			add_action( 'after_setup_theme', array( $this, 'register_shortcodes' ), 20 );
		} else {
			$this->register_shortcodes();
		}
		
		if ( ! is_admin() ) {
			add_filter( 'query_vars', array( static::class, 'public_query_vars' ) );
		}

		// Main render hook
		add_filter( "feedback_render_{$this->post_type}", array( $this, 'render' ), 10, 2 );
	}

	public static function register( $post_type = 'feedback', $properties = array() ) {
		return new static( $post_type, $properties );
	}
	
	public function init() {
		$this->register_post_types();
	}

	public function register_shortcodes(){
		add_shortcode( "feedback-{$this->post_type}-count", array( $this, 'count_shortcode' ) );
	}
	
	public function register_post_types() {

		if ( ! $this->post_type ) {
			return;
		}

		$post_type_args = array(
			'label'                 => $this->labels['name'],
			'description'           => '',
			'public'                => true,
			'publicly_queryable'    => true,
			'show_ui'               => true,
			'show_in_rest'          => true,
			'rest_controller_class' => 'WP_REST_Posts_Controller',
			'has_archive'           => true,
			'show_in_menu'          => true,
			'exclude_from_search'   => true,
			'capability_type'       => 'post',
			'map_meta_cap'          => true,
			'hierarchical'          => false,
			'rewrite'               => true,
			'query_var'             => true,
			'menu_icon'             => 'dashicons-admin-comments',
			'supports'              => array( 'title', 'editor', 'thumbnail', 'excerpt', 'author', 'page-attributes', 'post-formats', 'custom-fields' ),
			'taxonomies'            => array(),
		);

		register_post_type( $this->post_type, apply_filters( 'svbk_feedback_post_type', $post_type_args, $this ) );

		register_meta(
			'post',
			'rating',
			array(
				'object_subtype' => $this->post_type,
				'show_in_rest'   => true,
				'single'         => true,
				'type'           => 'integer',
			)
		);

		if ( $this->taxonomy ) {

			$category_labels = array(
				'name'          => sprintf( __( '%s Categories', '_svbk' ), $this->labels['singular_name'] ),
				'singular_name' => sprintf( __( '%s Category', '_svbk' ), $this->labels['singular_name'] ),
			);

			$category_args = array(
				'label'              => $category_labels['name'],
				'labels'             => $category_labels,
				'public'             => true,
				'hierarchical'       => true,
				'show_ui'            => true,
				'show_in_menu'       => true,
				'show_in_nav_menus'  => true,
				'query_var'          => true,
				'rewrite'            => array(
					'slug'       => $this->taxonomy,
					'with_front' => true,
				),
				'show_admin_column'  => true,
				'show_in_rest'       => true,
				'show_in_quick_edit' => true,
			);

			register_taxonomy( $this->taxonomy, array( $this->post_type ), apply_filters( 'svbk_feedback_category', $category_args, $this ) );

		}

	}

	public function query_vars( $query_vars ) {

		if ( ! empty( $query_vars['post_type'] ) && ( $this->post_type === $query_vars['post_type'] ) ) {
			! empty( $query_vars['posts_per_page'] ) && $query_vars['posts_per_page'] = intval( $query_vars['posts_per_page'] );
			! empty( $query_vars['offset'] ) && $query_vars['offset']                 = intval( $query_vars['offset'] );
		} else {
			unset( $query_vars['offset'] );
			unset( $query_vars['posts_per_page'] );
			unset( $query_vars['orderby'] );
			unset( $query_vars['order'] );
		}

		return $query_vars;
	}

	public function count_shortcode($atts){
		
	     $params = shortcode_atts( array(
		      'categories' => [],
	     ), $atts );		
		
		$query_args     = $this->getQueryArgs( $params );
		$query_args['fields'] = 'ids';
		$feedback_query = new WP_Query( $query_args );		
		
		return $feedback_query->found_posts;
	}

}
