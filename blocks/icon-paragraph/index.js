/* global wp */
/* global lodash */

/**
 * BLOCK: card
 *
 * Shows a  card
 * @author: Brando Meniconi <b.meniconi@silverbackstudio.it>
 */

/**
 * WordPress dependencies
 */
const { __ } = wp.i18n; // Import __() from wp.i18n
const { 
	RichText,
	getFontSizeClass,
} = wp.blockEditor;

const {
	RawHTML
} = wp.element;

/**
 * Internal dependencies
 */
import edit from './edit';

/**
 * External dependencies
 */
import classnames from 'classnames';

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
export const name = 'svbk/icon-paragraph';

export const settings = {
	title: __( 'Icon Paragraph', '_svbk' ),
	icon: 'analytics', 
	category: 'common',
	keywords: [
		__( 'contact' ),
		__( 'paragraph' ),
	],

	
	attributes: {
		icon: {
			type: 'string',
			source: 'html',
            selector: '.wp-block-svbk-icon-paragraph__icon',
		},
		content: {
			type: 'string',
			source: 'html',
			selector: '.wp-block-svbk-icon-paragraph__content',
		},
		align: {
			type: 'string',
		},
		fontSize: {
			type: 'string',
		},
		customFontSize: {
			type: 'number',
		},
	},	

	edit,

	save: function( { attributes } ) {
		
		const { 
			icon,
			content,
			align,
			fontSize,
			customFontSize,
		} = attributes;	
		
		const fontSizeClass = getFontSizeClass( fontSize );
	
		const style = {
			textAlign: align,
			fontSize: fontSizeClass ? undefined : customFontSize,
		};		
		
		return (
			<div className={ classnames( 'wp-block-svbk-icon-paragraph', { [ fontSizeClass ]: fontSizeClass } )} style={ style } >
				{ icon && (
				<div className={ 'wp-block-svbk-icon-paragraph__icon' } ><RawHTML>{ icon }</RawHTML></div>
				) }				
				{ content && ( 
				<RichText.Content tagName={ 'p' } className={ 'wp-block-svbk-icon-paragraph__content' } value={ content } /> 
				) }
			</div>
		);
	},
};