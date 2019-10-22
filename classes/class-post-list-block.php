<?php

namespace Svbk\WP\Theme\_svbk;

require __DIR__ . '/class-post-list.php';

class Post_List_Block extends Post_List {

	/**
	 * The block name
	 */
	public $block_name = '';

	/**
	 * The block registration args
	 */
	public $block_args = [];

	/**
	 * The default block attributes
	 */	
	public static $defaultAttributes = array(
		'align' => array(
			'type' => 'string',
		),
		'categories' => array(
			'type' => 'string',
		),
		'className' => array(
			'type' => 'string',
		),
		'postsToShow' => array(
			'type'    => 'number',
			'default' => 5,
		),
		'displayPostContentRadio' => array(
			'type'    => 'string',
			'default' => 'excerpt',
		),
		'excerptLength' => array(
			'type'    => 'number',
			'default' => 55,
		),
		'postLayout' => array(
			'type'    => 'string',
			'default' => 'list',
		),
		'columns' => array(
			'type'    => 'number',
			'default' => 3,
		),
		'align' => array(
			'type' => 'string',
		),
		'order' => array(
			'type'    => 'string',
			'default' => 'desc',
		),
		'orderBy' => array(
			'type'    => 'string',
			'default' => 'date',
		),
		'offset' => array(
			'type'    => 'number',
			'default' => 0,
		),
		'loadMore' => array(
			'type'    => 'boolean',
			'default' => false,
		),
	);

	/**
	 * Create an instance and register the block
	 * 
	 * @param array $properties The class paramenters
	 * 
	 * @return void
	 */	
	public function __construct( $post_type, $properties = array() ){

		if ( empty( $properties['block_name'] ) ){
			$this->block_name = 'svbk/' . $post_type;
		}

		parent::__construct( $post_type, $properties );

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
	function render( $blockAttributes ) {
	
		// Format defaults from block attributes
		$defaults = array_map(function($attr) { return isset($attr->default) ? $attr->default : ''; }, self::$defaultAttributes);

		$attributes = shortcode_atts($defaults, $blockAttributes);

		$attributes['posts_per_page'] = $attributes['postsToShow'];
		$attributes['orderby'] = $attributes['orderBy'];
		$attributes['load_more'] = $attributes['loadMore'];

		$classes = array( 'wp-block-' . str_replace( '/', '-', $this->block_name ) );

		if ( isset( $blockAttributes['align'] ) ) {
			$classes[] = 'align' . $blockAttributes['align'];
		}
	
		if ( isset( $blockAttributes['postLayout'] ) && 'grid' === $blockAttributes['postLayout'] ) {
			$classes[] = 'is-grid';
		}
	
		if ( isset( $blockAttributes['columns'] ) && 'grid' === $blockAttributes['postLayout'] ) {
			$classes[] = 'columns-' . $blockAttributes['columns'];
		}
	
		if ( isset( $blockAttributes['className'] ) ) {
			$classes[] = $blockAttributes['className'];
		}
	
		$attributes['container_class'] = join( $classes, ' ' );

		return parent::render($attributes);
	}

	/**
	 * Render an single post
	 * 
	 * @param array $attributes The input attributes
	 * 
	 * @return void
	 */	
	public function renderPost($attributes){
		switch ( $attributes['displayPostContentRadio'] ) {
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