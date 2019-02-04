import classnames from 'classnames';

/**
 * WordPress dependencies
 */
const { __ } = wp.i18n;
const { Fragment } = wp.element;
const { 
	PanelBody,
	TextControl
} = wp.components;
const {
	InspectorControls
} = wp.editor;

/**
 * Internal dependencies
 */
export const name = 'svbk/stock';

export const settings = {
	title: __( 'Product Stock', '_svbk' ),

	description: __( 'Display the remaining stock product', '_svbk' ),

	icon: 'sort',

	category: 'widgets',
	
	keywords: [ __( 'stock', 'product' ) ],

	supports: {
		html: false,
	},

	attributes: {
		product_id: {
			type: 'number',
		},
	},

	edit( {
			attributes,
			setAttributes,
			className,
		} ) {
		
		const { product_id } = attributes;
		
		return (
			<Fragment>
				<InspectorControls>
					<PanelBody title={ __( 'Product Availability', '_svbk' ) }>
						<TextControl
							label={ __( 'Product ID', '_svbk' ) }
							value={ product_id }
							onChange={ ( value ) => {
								setAttributes( { product_id: Number( value ) } ) }
							}
						/>
					</PanelBody>
				</InspectorControls>			
				<div className={ className } >{ 'XX stock items' }</div>
			</Fragment>
		);
		
	},

	save({ attributes }){
		return null;
	},
	
};