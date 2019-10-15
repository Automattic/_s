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
	InnerBlocks,
	RichText,
} = wp.blockEditor;


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
 
/**
 * Internal dependencies
 */
export const name = 'svbk/collapse';

export const settings = {
	title: __( 'Collapse', '_svbk' ),
	icon: 'feedback', 
	category: 'common',
	keywords: [
		__( 'collapse' ),
		__( 'accordion' ),
	],
	
	styles: [
	    // Mark style as default.
	    {
	        name: 'default',
	        label: __( 'Default' ),
	        isDefault: true
	    },
	    {
	        name: 'faq',
	        label: __( 'FAQ', '_svbk' ),
	    },	  
	    {
	        name: 'button',
	        label: __( 'Button', '_svbk' ),
	    },	  	    
	],		
	
	attributes: {
		defaultOpen: {
			type: 'boolean',
			default: false,
		},
		title: {
			type: 'string',
			source: 'html',
            selector: '.wp-block-svbk-collapse__title',
		},		
		buttonOpen: {
			type: 'string',
			source: 'text',
            selector: '.wp-block-svbk-collapse__label--open',
		},
		buttonClose: {
			type: 'string',
			source: 'text',
            selector: '.wp-block-svbk-collapse__label--close',
		},
	},	

	edit,

	save: function( { attributes, className } ) {

		const { 
			title,
			defaultOpen,
			buttonOpen,
			buttonClose,
		} = attributes;

		const classNames = classnames( className, {
			'wp-block-svbk-collapse--open' : defaultOpen
		});
		
		const buttonClassNames = classnames( 
			[
				'wp-block-svbk-collapse__button',
				'wp-block-svbk-collapse__trigger'
			], 
			{
				'wp-block-svbk-collapse__button--has-open': buttonOpen, 
				'wp-block-svbk-collapse__button--has-close': buttonClose, 
			}
		);		
		
		const style = {
			display: defaultOpen ? undefined : 'none',
		};			

		return (
			<div className={ classNames } >
				{ title && (
				<RichText.Content 
					tagName={ 'h3' }   
					value={ title } 
					className={ 'wp-block-svbk-collapse__title wp-block-svbk-collapse__trigger' } 
				/> 
				) }
				<div className={ 'wp-block-svbk-collapse__content' } style={ style } >
					<InnerBlocks.Content />
				</div>
				{ (buttonOpen || buttonClose) && (
				<button className={ buttonClassNames }>
					{ buttonOpen && ( 
						<span className={ 'wp-block-svbk-collapse__label wp-block-svbk-collapse__label--open' }>{ buttonOpen }</span>
					) }
					{ buttonClose && (
						<span className={ 'wp-block-svbk-collapse__label wp-block-svbk-collapse__label--close' }>{ buttonClose }</span>
					) }
				</button>				
				) }
			</div>
		);
	},
};