import classnames from 'classnames';

/**
 * WordPress dependencies
 */
const { __ } = wp.i18n;
const { Fragment } = wp.element;

/**
 * Internal dependencies
 */
export const name = 'svbk/price';

export const settings = {
	title: __( 'Product Price', '_svbk' ),

	description: __( 'Display the price of a product', '_svbk' ),

	icon: 'tag',

	category: 'widgets',
	
	keywords: [ __( 'price', '_svbk' ) ],

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
				<div className={ className } >{ '9999 €' }</div>
			</Fragment>
		);
		
	},

	save({ attributes }){
		return null;
	},
	
};