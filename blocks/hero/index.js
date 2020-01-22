/* global wp */
/* global lodash */

/**
 * BLOCK: hero
 *
 * Shows a  hero
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
export const name = 'svbk/hero';

export const settings = {
	title: __( 'Hero', '_svbk' ),
	icon: 'welcome-view-site', 
	category: 'common',
	keywords: [
		__( 'hero' ),
		__( 'above' ),
		__( 'intro' ),
	],

	styles: [
	    // Mark style as default.
	    {
	        name: 'default',
	        label: __( 'Default' ),
	        isDefault: true
	    },
	    {
	        name: 'content-background',
	        label: __( 'Content with Background' ),
		},
	    {
	        name: 'content-card',
	        label: __( 'Content within a Card' ),
	    },
	],	

	attributes: {
		pictureUrl: {
			type: 'string',
			source: 'attribute',
			attribute: 'src',
			selector: '.wp-block-svbk-hero__picture img',
		},	
		pictureId: {
			type: 'number',
		},
		pictureSize: {
			type: 'string',
		},
		pictureStackedUrl: {
			type: 'string',
			source: 'attribute',
			attribute: 'srcset',
			selector: '.wp-block-svbk-hero__picture source',
		},	
		pictureStackedId: {
			type: 'number',
		},
		pictureStackedSize: {
			type: 'string',
		},		
		pictureAlt: {
			type: 'string',
			source: 'attribute',
			attribute: 'alt',
			selector: '.wp-block-svbk-hero__picture img',
		},
		pretitle: {
			type: 'string',
			source: 'html',
			selector: '.wp-block-svbk-hero__pretitle',
		},
		title: {
			type: 'string',
			source: 'html',
			selector: '.wp-block-svbk-hero__title',
		},
		titleLevel: {
			type: 'number',
			default: 1,
		},			
		subtitle: {
			type: 'string',
			source: 'html',
			selector: '.wp-block-svbk-hero__subtitle',
		},
		text: {
			type: 'string',
			source: 'html',
			selector: '.wp-block-svbk-hero__text',
		},		
		primaryButtonUrl: {
			type: 'string',
			source: 'attribute',
			attribute: 'href',
			selector: '.wp-block-svbk-hero__button--primary a',
		},		
		primaryButtonText: {
			type: 'string',
			source: 'text',
			selector: '.wp-block-svbk-hero__button--primary a',
		},
		secondaryButtonUrl: {
			type: 'string',
			source: 'attribute',
			attribute: 'href',
			selector: '.wp-block-svbk-hero__button--secondary a',
		},		
		secondaryButtonText: {
			type: 'string',
			source: 'text',
			selector: '.wp-block-svbk-hero__button--secondary a',
		},		
		footer: {
			type: 'string',
			source: 'html',
			selector: '.wp-block-svbk-hero__footer',
		},		
		align: {
			type: 'string',
		},
		bottomPadded: {
			type: 'boolean',
			default: false,
		},
	},	

	edit,

	save: function( { attributes } ) {
		
		const { 
			pictureUrl,
			pictureId, 
			pictureStackedUrl,
			pictureStackedId,
			pictureAlt,
			pretitle,
			title, 
			titleLevel,
			subtitle,
			text,
			align,
			primaryButtonUrl, 
			primaryButtonText,			
			secondaryButtonUrl, 
			secondaryButtonText,
			footer,
			bottomPadded
		} = attributes;		
		
		const classNames = classnames( {
			[`has-align-${align}`]: align,
			[ 'has-bottom-padding' ]: bottomPadded,
		} );		
		
		const style = {};
		
		const titleTag = titleLevel ? ('h' + titleLevel) : 'h1';
		
		return (
			<div className={ classNames } style={ style } >
				{ pictureUrl && (
					<picture className={ 'wp-block-svbk-hero__picture'} >
						{ pictureStackedUrl && (
							<source media="(max-width: 465px)" srcSet={ pictureStackedUrl } />
						) }
						<img 
							src={ pictureUrl } 
							alt={ pictureAlt } 
							className={ pictureId ? `wp-image-${ pictureId }` : null } 
						/>
					</picture> 
				) }
				<div className={ 'wp-block-svbk-hero__content' } >
					{ pretitle && ( 
					<RichText.Content tagName={ 'div' } className={ 'wp-block-svbk-hero__pretitle' } value={ pretitle } />
					) }
					{ title && ( 
					<RichText.Content tagName={ titleTag } className={ 'wp-block-svbk-hero__title' } value={ title } />
					) }
					{ subtitle && ( 
					<RichText.Content tagName={ 'div' } className={ 'wp-block-svbk-hero__subtitle' } value={ subtitle } />
					) }
					{ text && ( 
					<RichText.Content tagName={ 'div' } className={ 'wp-block-svbk-hero__text' } value={ text } />
					) }
					{ primaryButtonText && primaryButtonUrl && (
					<div className={ 'wp-block-svbk-hero__button wp-block-svbk-hero__button--primary wp-block-button '} >
						<a className={ 'wp-block-svbk-hero__link'} href={ primaryButtonUrl }>{ primaryButtonText }</a>
					</div>
					) }
					{ secondaryButtonText && secondaryButtonUrl && (
					<div className={ 'wp-block-svbk-hero__button wp-block-svbk-hero__button--secondary wp-block-button '} >
						<a className={ 'wp-block-svbk-hero__link'} href={ secondaryButtonUrl }>{ secondaryButtonText }</a>
					</div>
					) }
					{ footer && ( 
					<RichText.Content tagName={ 'div' } className={ 'wp-block-svbk-hero__footer' } value={ footer } />
					) }					
				</div>
			</div>
		);
	},
};