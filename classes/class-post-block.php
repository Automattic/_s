<?php

namespace Svbk\WP\Theme\_svbk;

use Svbk\WP\Helpers\Utils;
use WP_Query;

class Post_Block {

	/**
	 * The post type
	 */
	public $post_type = 'post';

	/**
	 * The block name
	 */
	public $block_name = 'svbk/post-embed';

	/**
	 * The block registration args
	 */
	public $block_args = [];

	/**
	 * The default block attributes
	 */	
	public static $defaultAttributes = array(
		'align' => array(
			'type' => 'string'
		),
		'id' => array(
			'type' => 'number',
		),		
		'display' => array(
			'type' => 'string',
			'default' => 'excerpt',
		)
	);

	/**
	 * Create an instance and register the block
	 * 
	 * @param array $properties The class paramenters
	 * 
	 * @return void
	 */	
	public function __construct( $post_type, $properties = array() ){

		$this->post_type = $post_type;

		if ( empty( $properties['block_name'] ) ){
			$this->block_name = 'svbk/' . $post_type . '-embed';
		}

		Utils\ObjectUtils::configure( $this, $properties );

		add_action( 'init', array( $this, 'register_block' ), 20 );
	}

	/**
	 * Register the block
	 * 
	 * @return void
	 */		
	public function register_block() {

		register_block_type(
			$this->block_name,
			array_replace_recursive(
				array(
					'attributes' => self::$defaultAttributes,
					'render_callback' => array( $this, 'render' ),
					'editor_script' => '_svbk-blocks',
				),
				$this->block_args
			)
		);

	}

	/**
	 * Render whole posts list
	 * 
	 * @param array $blockAttributes The block attributes
	 * 
	 * @return string
	 */		
	function render( $attributes, $content ) {
		
		global $post;

		if ( empty( $attributes['id'] ) ){
			return '';
		}

		$classes = array( 'wp-block-' . str_replace( '/', '-', $this->block_name ) );
	
		if ( isset( $attributes['className'] )) {
			$classes[] = trim($attributes['className']);
		}
	
		$output = '<div class="'. join($classes, ' ') .'">';
	
		ob_start();
	
		$post = get_post($attributes['id']);
		setup_postdata($post);
		$this->renderPost( $attributes, $content );
		wp_reset_postdata();
	
		$output .= ob_get_contents();
		ob_end_clean();    
	
		$output .= '</div>';
	
		return $output;
	}
	
	/**
	 * Get WP_Query args from a set of attributes
	 * 
	 * @param array $attributes The attributes to be converted
	 * 
	 * @return array
	 */
	public function getQueryArgs( $attributes ) {
	
		$query_args = new \WP_Query( array( 
			'p' => $attributes['id'], 
			'post_type' => $this->post_type, 
			'post_status' => 'publish' 
		) );

		return $query_args;
	}

	/**
	 * Render an single post
	 * 
	 * @param array $attributes The input attributes
	 * 
	 * @return void
	 */	
	public function renderPost($attributes){
		switch ( $attributes['display'] ) {
			case 'excerpt':
				get_template_part( 'template-parts/preview', $this->post_type );
				break;
			case 'full_post':
			default:
				get_template_part( 'template-parts/content', $this->post_type );
				break;					
		}
	}

}