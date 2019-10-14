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
	RichText, 
	getColorClassName, 
	getFontSizeClass,
	InnerBlocks,
} = wp.editor;

const {
	RawHTML
} = wp.element;


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
export const name = 'svbk/card';

export const settings = {
	title: __( 'Card', '_svbk' ),
	icon: 'id', 
	category: 'common',
	keywords: [
		__( 'card' ),
		__( 'block' ),
		__( 'content' ),
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
			selector: '.wp-block-svbk-card__picture img',
		},	
		pictureAlt: {
			type: 'string',
			source: 'attribute',
			attribute: 'alt',
			selector: '.wp-block-svbk-card__picture img',
		},		
		pictureId: {
			type: 'number',
		},	
		imageType: {
			type: 'string',
		},	
		icon: {
			type: 'string',
			source: 'html',
            selector: '.wp-block-svbk-card__icon',
		},
		title: {
			type: 'string',
			source: 'text',
			selector: '.wp-block-svbk-card__title',
		},		
		titleLevel: {
			type: 'number',
			default: 3,
		},		
		subtitle: {
			type: 'string',
			source: 'text',
			selector: '.wp-block-svbk-card__subtitle',
		},
		buttonUrl: {
			type: 'string',
			source: 'attribute',
			attribute: 'href',
			selector: '.wp-block-svbk-card__link',
		},
		ribbonText: {
			type: 'string',
			source: 'text',
			selector: '.wp-block-svbk-card__ribbon',
		},
		ribbonColor: {
			type: 'string',
		},			
		customRibbonColor: {
			type: 'string',
		},		
		buttonText: {
			type: 'string',
			source: 'text',
			selector: '.wp-block-svbk-card__link',
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
		fontSize: {
			type: 'string',
		},
		customFontSize: {
			type: 'number',
		},
		align: {
			type: 'string',
		},
		contentAlign: {
			type: 'string',
		},		
	},	

	edit,

	save: function( { attributes } ) {
		
		const { 
			imageType,
			pictureUrl,
			pictureAlt,
			pictureId, 
			icon,
			title, 
			titleLevel,
			subtitle, 
			backgroundColor,
			customBackgroundColor,
			textColor,
			customTextColor,
			fontSize,
			customFontSize,
			align,
			contentAlign,
			buttonUrl, 
			buttonText,	
			ribbonColor,
			customRibbonColor,
			ribbonText
		} = attributes;		
		
		const titleTag = titleLevel ? ('h' + titleLevel) : 'h3';		
		
		const backgroundClass = getColorClassName( 'background-color', backgroundColor );
		const textClass = getColorClassName( 'color', textColor );
		const ribbonClass = getColorClassName( 'ribbon', ribbonColor );
		const fontSizeClass = getFontSizeClass( fontSize );
		
		const classNames = classnames( {
			'has-text-color': textColor || customTextColor,
			'has-background': backgroundColor || customBackgroundColor,			
			'has-image': imageType === 'image',
			'has-icon': imageType === 'icon',
			[ fontSizeClass ]: fontSizeClass,
			[ textClass ]: textClass,
			[ backgroundClass ]: backgroundClass,			
		} );
		
		const style = {
			backgroundColor: backgroundClass ? undefined : customBackgroundColor,
			color: textClass ? undefined : customTextColor,
			fontSize: fontSizeClass ? undefined : customFontSize,
			textAlign: align,
		};	
		
		const ribbonStyle = {
			backgroundColor: ribbonClass ? undefined : customRibbonColor,
		};			

		const contentStyle = {
			textAlign: contentAlign
		};
		
		return (
			<div className={ classNames } style={ style } >
				{ ribbonText && (
					<div 
						className={ classnames( 'wp-block-svbk-card__ribbon', { [ ribbonClass ]: ribbonClass } ) } 
						style={ ribbonStyle } 
					>{ ribbonText }</div>
				) } 
				{ ( 'picture' == imageType ) && pictureUrl && 
					(
					<figure className={ 'wp-block-svbk-card__picture' } >
						<img src={ pictureUrl } alt={ pictureAlt } className={ pictureId ? `wp-image-${ pictureId }` : null } />
					</figure> 
					) 
				}
				{ ( 'icon' == imageType ) && icon && ( 
					<div className={ 'wp-block-svbk-card__icon' } >
						<RawHTML>{ icon }</RawHTML>
					</div> 
				) }
				{ title && ( 
				<RichText.Content tagName={ titleTag } className={ 'wp-block-svbk-card__title' } value={ title } />
				) }
				{ subtitle && ( 
				<p className={ 'wp-block-svbk-card__subtitle' } >{ subtitle }</p>
				) }
				<div className={ 'wp-block-svbk-card__content' } style={ contentStyle } >
					<InnerBlocks.Content />
				</div> 
				{ buttonText && buttonUrl && (
				<div className={ 'wp-block-button wp-block-svbk-card__button'} >
					<a className={ 'wp-block-button__link wp-block-svbk-card__link'} href={ buttonUrl }>{ buttonText }</a>
				</div>
				) }
			</div>
		);
	},
};