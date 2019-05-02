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
export const name = 'svbk/bullet';

export const settings = {
	title: __( 'Bullet', '_svbk' ),
	icon: 'pressthis', 
	category: 'common',
	keywords: [
		__( 'bullet' ),
		__( 'card' ),
	],
	
	styles: [
	    // Mark style as default.
	    {
	        name: 'default',
	        label: __( 'Default' ),
	        isDefault: true
	    },
	    {
	        name: 'offset',
	        label: __( 'Offset', '_svbk' ),
	    },	    
	],	
	
	attributes: {
		icon: {
			type: 'string',
			source: 'html',
            selector: '.wp-block-svbk-bullet__icon',
		},
		title: {
			type: 'string',
			source: 'html',
			selector: '.wp-block-svbk-bullet__title',
		},		
		titleLevel: {
			type: 'number',
			default: 2,
		},
		content: {
			type: 'string',
			source: 'html',
			selector: '.wp-block-svbk-bullet__content',
		},
		backgroundColor: {
			type: 'string',
		},
		customBackgroundColor: {
			type: 'string',
		},
		textColor: {
			type: 'string',
		},
		customTextColor: {
			type: 'string',
		},
		align: {
			type: 'string',
		},
	},	

	edit,

	save: function( { attributes } ) {
		
		const { 
			icon,
			title, 
			titleLevel,
			content,
			backgroundColor,
			customBackgroundColor,
			textColor,
			customTextColor,
			align,
		} = attributes;		
		
		const titleTag = titleLevel ? ('h' + titleLevel) : 'h2';		
		
		const backgroundClass = getColorClassName( 'background-color', backgroundColor );
		const textClass = getColorClassName( 'color', textColor );

		const classNames = classnames( {
			'has-text-color': textColor || customTextColor,
			'has-background': backgroundColor || customBackgroundColor,			
			[ textClass ]: textClass,
			[ backgroundClass ]: backgroundClass,			
		} );		
		
		const style = {
			backgroundColor: backgroundClass ? undefined : customBackgroundColor,
			color: textClass ? undefined : customTextColor,
			textAlign: align,
		};		
		
		return (
			<div className={ classNames } style={ style } >
				{ icon && (
				<div className={ 'wp-block-svbk-bullet__icon' } ><RawHTML>{ icon }</RawHTML></div>
				) }				
				{ title && ( 
				<RichText.Content tagName={ titleTag } className={ 'wp-block-svbk-bullet__title' } value={ title } /> 
				) }
				{ content && ( 
				<RichText.Content tagName={ 'p' } className={ 'wp-block-svbk-bullet__content' } value={ content } /> 
				) }
			</div>
		);
	},
};