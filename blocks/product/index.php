<?php

function _svbk_render_product_price( $attributes, $content ) {

	global $product;

	if ( ! empty( $attributes['product_id'] ) ) {
		$product = wc_get_product( intval( $attributes['product_id'] ) );
	}

	if ( ! $product ) {
		return '';
	}

	return $product->get_price_html();

}

function _svbk_render_product_add_to_cart( $attributes, $content ) {

	global $product;

	$product_id = '';

	if ( ! empty( $attributes['product_id'] ) ) {
		$product_id = intval( $attributes['product_id'] );
		unset( $attributes['product_id'] );
	} elseif ( $product ) {
		$product_id = $product->get_id();
	}

	$attributes = array_replace(
		array(
			'id'         => $product_id,
			'class'      => '',
			'quantity'   => '1',
			'sku'        => '',
			'style'      => '',
			'show_price' => 'false',
		),
		$attributes
	);

	if ( ! empty( $attributes['className'] ) ) {
		$attributes['class'] = $attributes['className'];
	}

	return WC_Shortcodes::product_add_to_cart( $attributes );
}

function _svbk_render_product_rating( $attributes, $content ) {

	global $product;

	if ( ! empty( $attributes['product_id'] ) ) {
		$product = wc_get_product( intval( $attributes['product_id'] ) );
	}

	if ( ! $product ) {
		return '';
	}

	ob_start();
	woocommerce_template_loop_rating();
	$output = ob_get_contents();

	ob_end_clean();

	return $output;
}

function _svbk_render_product_stock( $attributes, $content ) {

	global $product;

	if ( ! empty( $attributes['product_id'] ) ) {
		$product = wc_get_product( intval( $attributes['product_id'] ) );
	}

	if ( ! $product ) {
		return '';
	}

	return wc_get_stock_html( $product );
}

function _svbk_register_product_blocks() {

	register_block_type(
		'svbk/price',
		array(
			'editor_script'   => '_svbk-blocks',
			'render_callback' => '_svbk_render_product_price',
		)
	);

	register_block_type(
		'svbk/addtocart',
		array(
			'editor_script'   => '_svbk-blocks',
			'render_callback' => '_svbk_render_product_add_to_cart',
		)
	);

	register_block_type(
		'svbk/stock',
		array(
			'editor_script'   => '_svbk-blocks',
			'render_callback' => '_svbk_render_product_stock',
		)
	);

	register_block_type(
		'svbk/product-rating',
		array(
			'editor_script'   => '_svbk-blocks',
			'render_callback' => '_svbk_render_product_rating',
		)
	);

}

add_action( 'init', '_svbk_register_product_blocks', 20 );
