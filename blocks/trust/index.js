/* global wp */
/* global lodash */

/**
 * BLOCK: card
 *
 * Block for customers logos 
 * @author: Brando Meniconi <b.meniconi@silverbackstudio.it>
 */

/**
 * External dependencies
 */
import classnames from 'classnames';

/**
 * WordPress dependencies
 */
const { __ } = wp.i18n; // Import __() from wp.i18n
const { 
	RichText, 
	getColorClassName,
	InnerBlocks,
} = wp.blockEditor;

/**
 * Internal dependencies
 */
import edit from './edit';


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
export const name = 'svbk/trust';

export const settings = {
	title: __( 'Autorevolezza', '_svbk' ),
	icon: 'buddicons-buddypress-logo', 
	category: 'common',
	keywords: [
		__( 'trust', '_svbk' ),
		__( 'autorevolezza', '_svbk' ),
		__( 'logo', '_svbk' ),
	],
	
	styles: [],	
	
	attributes: {
		ribbon: {
			type: 'string',
			source: 'html',
			selector: '.wp-block-svbk-trust__ribbon',
		},		
		titleLevel: {
			type: 'number',
			default: 2,
		},
		backgroundColor: {
			type: 'string',
		},
		textColor: {
			type: 'string',
		},
		ribbonColor: {
			type: 'string',
		}
	},	

	edit,

	save: function( { attributes } ) {
		
		const { 
			ribbon, 
			titleLevel,
			backgroundColor,
			textColor,
			ribbonColor,
		} = attributes;		
		
		const titleTag = titleLevel ? ('h' + titleLevel) : 'h2';		
		
		const backgroundClass = getColorClassName( 'background-color', backgroundColor );
		const textClass = getColorClassName( 'color', textColor );
		const ribbonClass = getColorClassName( 'ribbon-color', ribbonColor );

		const classNames = classnames( {
			'has-background': backgroundColor,			
			[ backgroundClass ]: backgroundClass,		
			'has-ribbon': ribbon	
		} );		

		const ribbonClasses = classnames( {
			'wp-block-svbk-trust__ribbon': true,
			'has-text-color': textColor,
			'has-ribbon-color': textColor,
			[ textClass ]: textClass,
			[ ribbonClass ]: ribbonClass
		} );		
		
		return (
			<div className={ classNames } >			
				{ ribbon && ( 
				<RichText.Content tagName={ titleTag } className={ ribbonClasses } value={ ribbon } /> 
				) }
				<div className={ 'wp-block-svbk-trust__content' } >
					<InnerBlocks.Content />
				</div> 
			</div>
		);
	},
};