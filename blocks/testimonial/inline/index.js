/* global wp */
/* global lodash */

/**
 * BLOCK: card
 *
 * Shows a  card
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
} = wp.blockEditor;

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
export const name = 'svbk/testimonial-inline';

export const settings = {
	title: __( 'Testimonial (Inline)', '_svbk' ),
	icon: 'carrot', 
	category: 'widgets',
	keywords: [
		__( 'testimonial' ),
		__( 'feedback' ),
	],
	
	attributes: {
		pictureUrl: {
			type: 'string',
			source: 'attribute',
			attribute: 'src',
			selector: '.wp-block-svbk-testimonial-inline__picture img',
		},	
		pictureId: {
			type: 'number',
		},
		author: {
			type: 'string',
			source: 'text',
			selector: '.wp-block-svbk-testimonial-inline__author',
		},		
		role: {
			type: 'string',
			source: 'text',
			selector: '.wp-block-svbk-testimonial-inline__role',
		},		
		content: {
			type: 'string',
			source: 'html',
			selector: '.wp-block-svbk-testimonial-inline__content',
		},
		rating: {
			type: 'string',
			source: 'text',
			selector: '.wp-block-svbk-testimonial-inline__rating .rating__value',
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
	},	

	edit,

	save: function( { attributes } ) {
		
		const { 
			pictureUrl,
			pictureId,
			author, 
			content,
			rating,
			role,
			backgroundColor,
			customBackgroundColor,
			textColor,
			customTextColor,			
		} = attributes;		
		
		
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
		};			
		
		return (
			<div className={ classNames } style={ style }>
				{ pictureUrl && (
				<figure className={ 'wp-block-svbk-testimonial-inline__picture'} >
					<img src={ pictureUrl } alt={ 'Profile Image' } className={ pictureId ? `wp-image-${ pictureId }` : null } />
				</figure> 
				) }			
				{ author && ( 
				<div className={ 'wp-block-svbk-testimonial-inline__author' } >{ author }</div>
				) }
				{ role && ( 
				<div className={ 'wp-block-svbk-testimonial-inline__role' } >{ role }</div>
				) }
				{ rating && ( 
				<div className={ classnames( 'wp-block-svbk-testimonial-inline__rating', 'rating', { [ `rating--${rating}` ] : rating }  ) } >
					<span className={ 'rating__label' }>Rating:</span>
					<span className={ 'rating__value' }>{rating}</span>
				</div>
				) }
				{ content && ( 
				<RichText.Content tagName={ 'p' } className={ 'wp-block-svbk-testimonial-inline__content' } value={ content } /> 
				) }
			</div>
		);
	},
};