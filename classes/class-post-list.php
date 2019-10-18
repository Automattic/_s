<?php

namespace Svbk\WP\Theme\_svbk;

use Svbk\WP\Helpers\Utils;
use WP_Query;

abstract class Post_List {

	/**
	 * The post type
	 */	
	public $post_type;

	/**
	 * The post type
	 */		
	public $taxonomy;

	/**
	 * The loadmore button class
	 */		
	public $loadmore_class;

	/**
	 * The loadmore button label
	 */		
	public $loadmore_label;	

	/**
	 * Create an instance and register the block
	 */	
	public function __construct( $post_type, $properties = array() ){

		$this->post_type = $post_type;

		if ( ! empty( $this->post_type ) ) {
			$this->taxonomy       = $this->post_type . '_category';
			$this->loadmore_class = $this->post_type . '__loadmore';
		}

		$this->loadmore_label = __( 'Show more', '_svbk' );

		Utils\ObjectUtils::configure( $this, $properties );
		
		if ( ! is_admin() ) {
			add_filter( 'query_vars', array( static::class, 'public_query_vars' ) );
			//add_filter( 'request', array( $this, 'query_vars' ) );
		}

	}
	
	/**
	 * Get WP_Query args from a set of attributes
	 * 
	 * @param array $attributes The attributes to be converted
	 * 
	 * @return array
	 */
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

		// Setting offset to 0 breaks pagination
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

	/**
	 * Render whole posts list
	 * 
	 * @param array $attributes The block attributes
	 * 
	 * @return string
	 */	
	function render( $attributes ) {

		$query_args = $this->getQueryArgs( $attributes );
		$post_query = new \WP_Query( $query_args );

		$classes = ! empty( $attributes['container_class'] ) ? $attributes['container_class'] : ( $this->post_type . '__container' );

		$output = '<div class="' . esc_attr( $classes . ' loadmore' ) . '">';

		ob_start();

			while ( $post_query->have_posts() ) : $post_query->the_post();
				$this->renderPost($attributes, $post_query);
			endwhile;

			wp_reset_postdata();

			$output .= ob_get_contents();

		ob_end_clean();

		if ( !empty($attributes['load_more']) && ( $query_args['paged'] < $post_query->max_num_pages ) ) {
			$output .= $this->renderLoadMore($query_args, $attributes);
		}

		$output .= '</div>';

		return $output;
	}

	/**
	 * Render an single post
	 * 
	 * @param array $attributes The input attributes
	 * 
	 * @return void
	 */		
	public function renderPost( $attributes ){
		get_template_part( 'template-parts/content', $this->post_type );
	}

	/**
	 * Render and return the load more 
	 * 
	 * @param array $query_args The query args
	 * 
	 * @return string
	 */		
	public function renderLoadMore($query_args, $attributes){

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

		return '<a href="' . add_query_arg( $loadmore_args, get_post_type_archive_link( $this->post_type ) ) . '" class="loadmore__button' . ( $this->loadmore_class ? ( ' ' . esc_attr( $this->loadmore_class ) ) : '' ) . '">' . 
			$this->loadmore_label .
		'</a>';
	}

	/**
	 * Setup input query vars
	 * 
	 * @param array $public_query_vars The query args
	 * 
	 * @return array
	 */	
	public static function public_query_vars( $public_query_vars ) {

		$public_query_vars[] = 'posts_per_page';
		$public_query_vars[] = 'offset';
		$public_query_vars[] = 'orderby';
		$public_query_vars[] = 'order';

		return $public_query_vars;
	}

}