/* global wp */
/* global lodash */

/**
 * BLOCK: card
 *
 * Shows a card
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
const { __ } = wp.i18n;
const { 
	RichText, 
	getColorClassName, 
} = wp.editor;

/**
 * Internal dependencies
 */

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
export const name = 'svbk/profile';

export const settings = {
	title: __( 'Profile', '_svbk' ),
	icon: 'id', 
	category: 'common',
	keywords: [
		__( 'profile' ),
		__( 'team' ),
		__( 'member' ),
	],
	
	styles: [
	    // Mark style as default.
	    {
	        name: 'default',
	        label: __( 'Default' ),
	        isDefault: true
	    },
	    {
	        name: 'featured',
	        label: __( 'Featured' ),
	    },	    
	],	
	
	attributes: {
		pictureUrl: {
			type: 'string',
			source: 'attribute',
			attribute: 'src',
			selector: '.wp-block-svbk-profile__picture img',
		},	
		pictureAlt: {
			type: 'string',
			source: 'attribute',
			attribute: 'alt',
			selector: '.wp-block-svbk-profile__picture img',
		},		
		pictureId: {
			type: 'number',
		},
		name: {
			type: 'string',
			source: 'text',
			selector: '.wp-block-svbk-profile__name',
		},
		role: {
			type: 'string',
			source: 'text',
			selector: '.wp-block-svbk-profile__role',
		},		
		content: {
			type: 'string',
			source: 'text',
			selector: '.wp-block-svbk-profile__content',
		},
		buttonUrl: {
			type: 'string',
			source: 'attribute',
			attribute: 'href',
			selector: '.wp-block-svbk-profile__link',
		},		
		buttonText: {
			type: 'string',
			source: 'text',
			selector: '.wp-block-svbk-profile__link',
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
			pictureUrl,
			pictureAlt,
			pictureId,
			name, 
			role,
			content,
			buttonUrl, 
			buttonText,			
			backgroundColor,
			customBackgroundColor,
			textColor,
			customTextColor,
			align,
		} = attributes;		
		
		const titleTag = 'h3';		
		
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
				{ pictureUrl && (
				<figure className={ 'wp-block-svbk-profile__picture'} >
					<img src={ pictureUrl } alt={ pictureAlt } className={ pictureId ? `wp-image-${ pictureId }` : null } />
				</figure> 
				) }				
				{ name && ( 
				<RichText.Content tagName={ titleTag } className={ 'wp-block-svbk-profile__name' } value={ name } /> 
				) }
				{ role && ( 
				<p className={ 'wp-block-svbk-profile__role' } >{ role }</p> 
				) }
				{ content && ( 
				<p className={ 'wp-block-svbk-profile__content' } >{ content }</p> 
				) }
				{ buttonText && buttonUrl && ( 
				<div className={ 'wp-block-button wp-block-svbk-profile__button' } >
					<a className={ 'wp-block-button__link wp-block-svbk-profile__link' } href={ buttonUrl }>{ buttonText } </a>
				</div>
				) }
			</div>
		);
	},
};