/* global wp */
/* global lodash */

/**
 * BLOCK: testimonial
 *
 * Shows a  testimonial
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
	InnerBlocks,
} = wp.editor;


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
export const name = 'svbk/testimonial';

export const settings = {
	title: __( 'Testimonial', '_svbk' ),
	icon: 'thumbs-up', 
	category: 'widgets',
	keywords: [
		__( 'testimonial' ),
		__( 'feedback' ),
	],
	
	styles: [
	    // Mark style as default.
	    {
	        name: 'default',
	        label: __( 'Standard' ),
	        isDefault: true
	    },
	    {
	        name: 'vip',
	        label: __( 'VIP', '_svbk' ),
	    },	  
	    {
	        name: 'press',
	        label: __( 'Press', '_svbk' ),
	    },
	    {
	        name: 'inline',
	        label: __( 'Inline', '_svbk' ),
	    },	    
	],	
	
	attributes: {
		avatarUrl: {
			type: 'string',
			source: 'attribute',
			selector: '.wp-block-svbk-testimonial__avatar img',
			attribute: 'src',
		},	
		avatarId: {
			type: 'number',
		},
		authorName: {
			type: 'string',
			source: 'text',
			selector: '.wp-block-svbk-testimonial__author-name',
		},		
		authorRole: {
			type: 'string',
			source: 'text',
			selector: '.wp-block-svbk-testimonial__author-role',
		},
		companyLogoUrl: {
			type: 'string',
			source: 'attribute',
			selector: '.wp-block-svbk-testimonial__company-logo img',
			attribute: 'src',
		},	
		companyLogoId: {
			type: 'number',
		},		
		rating: {
			type: 'string',
			source: 'text',
			selector: '.wp-block-svbk-testimonial__rating .rating__value',
		},
		ratingMeta: {
			type: 'number',
			source: 'meta',
			meta: 'rating',
		},
		date: {
			type: 'string',
		},	
		source: {
			type: 'string',
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
			type,
			avatarUrl,
			avatarId,
			authorName,
			authorRole,
			rating,
			companyLogoUrl,
			companyLogoId,
			source,
			date,
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
			<div className={ classNames } style={ style } >
				<div className={ 'wp-block-svbk-testimonial__header' } >
					{ avatarUrl && (
					<figure className={ 'wp-block-svbk-testimonial__avatar'} >
						<img src={ avatarUrl } alt={ 'Profile Image' } className={ avatarId ? `wp-image-${ avatarId }` : null } />
					</figure> 
					) }	
					
					{ authorName && ( 
					<div className={ 'wp-block-svbk-testimonial__author' }>
						<div className={ 'wp-block-svbk-testimonial__author-name' } >{ authorName }</div>
						{ authorRole && ( 
							<div className={ 'wp-block-svbk-testimonial__author-role' } >{ authorRole }</div>
						) }
					</div>					
					) }
					
					{ rating && ( 
					<div className={ classnames( 'wp-block-svbk-testimonial__rating', 'rating', { [ `rating--${rating}` ] : rating }  ) } >
						<span className={ 'rating__label' }>Rating:</span>
						<span className={ 'rating__value' }>{rating}</span>
					</div>
					) }
					
					{ ( date || source ) && ( 
					<div className={ 'wp-block-svbk-testimonial__meta' } >
						{ date && ( <span className={ 'wp-block-svbk-testimonial__date' }>{ date }</span> ) }
						{ source && ( <span className={ 'wp-block-svbk-testimonial__source' }> {source}</span>) }
					</div>
					) }				
					
					{ companyLogoUrl && (
					<figure className={ 'wp-block-svbk-testimonial__company-logo'} >
						<img src={ companyLogoUrl } alt={ 'Company Logo' } className={ companyLogoId ? `wp-image-${ companyLogoId }` : null } />
					</figure> 
					) }
				</div>
				
				<div className={ 'wp-block-svbk-testimonial__content' } >
					<InnerBlocks.Content />
				</div>
				
			</div>
		);
	},
};