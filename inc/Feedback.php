<?php

namespace Svbk\WP\Theme\_svbk;

use Svbk\WP\Helpers\Utils;
use WP_Query;

class Feedback {

	public $post_type      = 'feedback';
	public $taxonomy       = 'feedback_category';
	public $loadmore_class = 'feedback__loadmore';
	public $loadmore_label = '';
	public $labels         = array();

	public function __construct( $post_type = 'feedback', $properties = array() ) {

		$this->post_type = $post_type;

		if ( ! empty( $this->post_type ) ) {
			$this->taxonomy       = $this->post_type . '_category';
			$this->loadmore_class = $this->post_type . '__loadmore';
		}

		$this->loadmore_label = __( 'Show more', '_svbk' );

		$this->labels['name']          =
		$this->labels['singular_name'] =
			empty( $properties['name'] ) ? __( 'Feedback', '_svbk' ) : $properties['name'];

		Utils\ObjectUtils::configure( $this, $properties );

		add_action( 'init', array( $this, 'init' ), 10 );
		
		if ( ! did_action( 'after_setup_theme' ) ) {
			add_action( 'after_setup_theme', array( $this, 'register_shortcodes' ), 20 );
		} else {
			$this->register_shortcodes();
		}
		
		if ( ! is_admin() ) {
			add_filter( 'query_vars', array( static::class, 'public_query_vars' ) );
			add_filter( 'request', array( $this, 'query_vars' ) );
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

	public function getQueryArgs( $attributes ) {

		$query_args = shortcode_atts( array(
			'post_type'      => $this->post_type,
			'post_status'    => 'publish',
			'orderby'        => 'menu_order date',
			'order'          => 'desc',
			'posts_per_page' => null,
			'paged'          => 1,
			'offset'         => null,
			'tax_query'      => [],
		), $attributes);

		if ( $this->taxonomy && ! empty( $attributes['categories'] ) ) {
			$query_args['tax_query'][] = array(
				'taxonomy' => $this->taxonomy,
				'field'    => 'term_id',
				'terms'    => array( $attributes['categories'] ),
			);
		};

		// Setting offset to 0 breaks pagination
		if ( intval( $query_args['offset'] ) === 0 ) {
			unset( $query_args['offset'] );
		}

		return $query_args;
	}

	public function render( $content, $attributes ) {

		$query_args     = $this->getQueryArgs( $attributes );
		$feedback_query = new WP_Query( $query_args );

		$classes = ! empty( $attributes['containerClass'] ) ? $attributes['containerClass'] : ( $this->post_type . '__container' );

		$output = '<div class="' . esc_attr( $classes . ' loadmore' ) . '">';

		ob_start();

		while ( $feedback_query->have_posts() ) :
			$feedback_query->the_post();
			get_template_part( 'template-parts/content', get_post_type( $feedback_query->post ) );
		endwhile;

		wp_reset_postdata();

		$output .= ob_get_contents();
		ob_end_clean();

		if ( $attributes['load_more'] && ( $query_args['paged'] < $feedback_query->max_num_pages ) ) {

			$loadmore_args = array(
				'paged'          => $query_args['paged'] + 1,
				'posts_per_page' => $query_args['posts_per_page'],
				'offset'         => isset( $query_args['offset'] ) ? $query_args['offset'] : null,
				'order'          => $query_args['order'],
				'orderby'        => $query_args['orderby'],
			);

			$term = get_term( $attributes['categories'], $this->taxonomy );

			if ( ! is_wp_error( $term ) ) {
				$loadmore_args[ $this->taxonomy ] = $term->slug;
			}

			$output .= '<a href="' . add_query_arg( $loadmore_args, get_post_type_archive_link( $this->post_type ) ) . '" class="loadmore__button' . ( $this->loadmore_class ? ( ' ' . esc_attr( $this->loadmore_class ) ) : '' ) . '">' . $this->loadmore_label . '</a>';
		}

		$output .= '</div>';

		return $output;
	}

	public static function public_query_vars( $public_query_vars ) {

		  $public_query_vars[] = 'posts_per_page';
		  $public_query_vars[] = 'offset';
		  $public_query_vars[] = 'orderby';
		  $public_query_vars[] = 'order';

		return $public_query_vars;
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
