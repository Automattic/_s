/**
 * WordPress dependencies
 */
const { RawHTML } = wp.element;
const { __ } = wp.i18n;
const { 
	getColorClassName
} = wp.editor;

/**
 * Internal dependencies
 */
import edit from './edit';

export const name = 'svbk/icon';

export const settings = {
	title: __( 'Icon (SVG)' ),

	description: __( 'Insert an SVG Icon' ),

	icon: 'star-filled',

	category: 'common',

	keywords: [ 
	    __( 'svg' ),
	    __( 'icon' )
	],

	supports: {
		html: false,
	},

	attributes: {
		icon: {
			type: 'string',
			source: 'html',
            selector: '.wp-block-svbk-icon',
		},
		textColor: {
			type: 'string',
		},		
	},

	edit,

	save( { attributes } ) {
	    
	    const { textColor } = attributes;
	    const textClass = getColorClassName( 'color', textColor );
	
		return ( 
			<div className={ textClass } >
				<RawHTML>{ attributes.icon }</RawHTML>
			</div> 
		);
	},
};