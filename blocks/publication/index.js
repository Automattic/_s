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
 const { Fragment } = wp.element;
const { __ } = wp.i18n;
const { 
	RichText,
} = wp.blockEditor;

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
export const name = 'svbk/publication';

export const settings = {
	title: __( 'Publication', '_svbk' ),
	icon: 'book-alt', 
	category: 'widgets',
	keywords: [
		__( 'book', '_svbk' ),
		__( 'publication', '_svbk' ),
	],
	
	
	attributes: {
		pictureUrl: {
			type: 'string',
			source: 'attribute',
			attribute: 'src',
			selector: '.wp-block-svbk-publication__picture img',
		},	
		pictureId: {
			type: 'number',
		},
		pictureAlt: {
			type: 'string',
			source: 'attribute',
			attribute: 'alt',
			selector: '.wp-block-svbk-publication__picture img',
		},
		pictureSize: {
			type: 'string',
		},				
		author: {
			type: 'string',
			source: 'text',
			selector: '.wp-block-svbk-publication__author',
		},
		title: {
			type: 'string',
			source: 'html',
			selector: '.wp-block-svbk-publication__title',
		},
		meta: {
			type: 'string',
			source: 'html',
			selector: '.wp-block-svbk-publication__meta',
		},
		url: {
			type: 'string',
			source: 'attribute',
			attribute: 'href',
			selector: '.wp-block-svbk-publication__link',
		},
	},	

	edit,

	save: function( { attributes } ) {
		
		const { 
			pictureUrl,
			pictureAlt,
			pictureId,
			title,
			author,
			meta,
			url, 
		} = attributes;		
		
		const blockContent = (
			<Fragment>
				{ pictureUrl && (
				<figure className={ 'wp-block-svbk-publication__picture'} >
					<img src={ pictureUrl } alt={ pictureAlt } className={ pictureId ? `wp-image-${ pictureId }` : null } />
				</figure> 
				) }	
				<div className={ 'wp-block-svbk-publication__content' }>
					{ author && ( 
					<p className={ 'wp-block-svbk-publication__author' }>{ author }</p> 
					) }				
					<RichText.Content tagName={ 'div' } className={ 'wp-block-svbk-publication__title' } value={ title } /> 
					{ meta && ( 
					<RichText.Content tagName={ 'p' } className={ 'wp-block-svbk-publication__meta' } value={ meta } /> 
					) }			
				</div>
			</Fragment>
		) ;
		
		return (
			<aside>
				{ url ? ( 
					<a href={ url } rel="external noopener noreferrer" target="_blank" className="wp-block-svbk-publication__link" >
					{ blockContent }
					</a>
				) : blockContent
				}
			</aside>
		);
	},
};