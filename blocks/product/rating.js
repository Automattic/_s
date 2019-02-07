import classnames from 'classnames';

/**
 * WordPress dependencies
 */
const { __ } = wp.i18n;
const { Fragment } = wp.element;

const { 
	PanelBody,
	TextControl,
	Dashicon
} = wp.components;

const {
	InspectorControls,
} = wp.editor;

/**
 * Internal dependencies
 */
export const name = 'svbk/product-rating';

export const settings = {
	title: __( 'Product Rating', '_svbk' ),

	description: __( 'Display the rating of a product', '_svbk' ),

	icon: 'star-half',

	category: 'widgets',
	
	keywords: [ __( 'rating', '_svbk' ), __( 'product', '_svbk' )],

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
		
		const { product_id  } = attributes;
		
		return (
			<Fragment>
				<InspectorControls>
					<PanelBody title={ __( 'Settings', '_svbk' ) }>
						<TextControl
							label={ __( 'Product ID', '_svbk' ) }
							value={ product_id }
							onChange={ ( value ) => {
								setAttributes( { product_id: Number( value ) } ) }
							}
						/>
					</PanelBody>
				</InspectorControls>						
				<Dashicon icon="star-half" />
				<div className={ className } >{ 'Product Rating' }</div>
			</Fragment>
		);
		
	},

	save({ attributes }){
		return null;
	},
	
};