/* global wp */
/* global lodash */

/**
 * BLOCK: card
 *
 * Shows a  card
 * @author: Brando Meniconi <b.meniconi@silverbackstudio.it>
 */

//  Import CSS.
import './style.scss';
import './editor.scss';

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
} = wp.editor;

const {
	RawHTML
} = wp.element;

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
	},	

	edit,

	save: function( { attributes } ) {
		
		const { 
			icon,
			content,
			align,
		} = attributes;		
	
		const style = {
			textAlign: align,
		};		
		
		return (
			<div style={ style } >
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