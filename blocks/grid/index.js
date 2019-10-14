/* global wp */
/* global lodash */

/**
 * BLOCK: card
 *
 * Shows a  card
 * @author: Brando Meniconi <b.meniconi@silverbackstudio.it>
 */

import edit from './edit';

/**
 * External dependencies
 */
import classnames from 'classnames';

/**
 * WordPress dependencies
 */
const { __ } = wp.i18n; // Import __() from wp.i18n
const { 
	getColorClassName, 
	InnerBlocks,
} = wp.editor;

const {
	RawHTML
} = wp.element;

const {
	createBlock
} = wp.blocks;

/**
 * Internal dependencies
 */
import deprecated from './deprecated';


/**
 * Register: Gutenberg Block.
 *
 * Registers a new block provided a unique name and an object defining its
 * behavior. Once registered, the block is made editor as an option to any
 * editor interface where blocks are implemented.
 *
 * @param  {string}   name     Block name.
 * @param  {Object}   settings Block settings.
 * @return {?WPBlock}          The block, if it has been successfully
 *                             registered; otherwise `undefined`.
 */

export const name = 'svbk/grid';

export const settings = {
	title: __( 'Grid Layout', '_svbk' ),
	icon: 'grid-view', 
	category: 'layout',
	keywords: [
		__( 'grid' ),
		__( 'flex' ),
		__( 'table' ),
	],

	attributes: {
		columns: {
			type: 'number',
			default: 3
		},
		columnsMobile: {
			type: 'number',
			default: 1
		},
		equalHeight: {
			type: 'boolean',
			default: true,
		},
		backgroundColor: {
			type: 'string',
		},
		customBackgroundColor: {
			type: 'string',
		},
		align: {
			type: 'string',
		},		
	},	

	deprecated,

	edit,

	transforms: {
	    from: [
	        {
	            type: 'block',
	            blocks: [ 'core/group' ],
	            transform: function( attributes, innerBlocks ) {
	                return createBlock( 'svbk/grid', attributes, innerBlocks );
	            },
	        },
	    ],
	},

	save( { attributes } ) {
		
		const { 
			columns,
			columnsMobile,
			equalHeight,
			backgroundColor,
			customBackgroundColor,
			align,
		} = attributes;		
		
		const backgroundClass = getColorClassName( 'background-color', backgroundColor );
		
		const classNames = classnames( `has-${ columns }-columns has-${ columnsMobile }-columns-mobile`, {
			'has-background': backgroundColor || customBackgroundColor,
			[ backgroundClass ]: backgroundClass,
			[ 'has-equal-cell-height' ]: equalHeight,
			[ `has-align-${align}` ]: align,
		} );
		
		const style = {
			backgroundColor: backgroundClass ? undefined : customBackgroundColor,
		};	
		
		return (
			<div className={ classNames } style={ style } >
				<InnerBlocks.Content />
			</div>
		);
	},
};