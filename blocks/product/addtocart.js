/**
 * WordPress dependencies
 */
const { __ } = wp.i18n;
const { Fragment } = wp.element;
const { 
	PanelBody,
	RangeControl,
	ToggleControl,
	TextControl
} = wp.components;
const {
	InspectorControls,
} = wp.editor;

/**
 * Internal dependencies
 */
export const name = 'svbk/addtocart';

export const settings = {
	title: __( 'Product Add To Cart', '_svbk' ),

	description: __( 'Display the product add to cart button', '_svbk' ),

	icon: 'products',

	category: 'widgets',
	
	keywords: [ __( 'add to cart', '_svbk' ), __( 'cart', '_svbk' ) ],

	supports: {
		html: false,
	},

	attributes: {
		product_id: {
			type: 'number'
		},
		quantity: {
			type: 'number',
			default: 1
		},		
		sku: {
			type: 'string',
		},
		show_price: {
			type: 'boolean',
			default: false
		}
	},

	edit( {
			attributes,
			setAttributes,
			className,
		} ) {
		
		const { product_id, quantity, sku, show_price  } = attributes;
		
		return (
			<Fragment>
				<InspectorControls>
					<PanelBody title={ __( 'Rating', '_svbk' ) }>
						<TextControl
							label={ __( 'Product ID', '_svbk' ) }
							value={ product_id }
							onChange={ ( value ) => {
								setAttributes( { product_id: Number( value ) } ) }
							}
						/>
						<TextControl
							label={ __( 'SKU', '_svbk' ) }
							value={ sku }
							onChange={ ( value ) => {
								setAttributes( { sku: Number( value ) } ) }
							}
						/>
						<RangeControl
							label={ __( 'Quantity', '_svbk' ) }
							value={ quantity }
							onChange={ ( value ) => {
								setAttributes( { quantity: Number( value ) } ) }
							}
							min={ 1 }
							max={ 10 }
						/>	
						<ToggleControl
							label={ __( 'Show price', '_svbk' ) }
							checked={ show_price }
							onChange={ ( value ) => {
								setAttributes( { show_price: Boolean( value ) } ) }
							}
						/>							
					</PanelBody>
				</InspectorControls>			
				{ show_price ? ( <div className={ 'price' }>9999 €</div>  ) : null }
				<button className={ className } >{ __( 'Add To Cart', '_svbk' ) + ' (' + quantity + ' ' + __('Products', '_svbk') + ')' }</button>
			</Fragment>
		);
		
	},

	save({ attributes }){
		return null;
	},
	
};