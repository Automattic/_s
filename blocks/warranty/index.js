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
	InnerBlocks,
} = wp.blockEditor;

/**
 * Internal dependencies
 */
import edit from './edit';
import deprecated from './deprecated';


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
export const name = 'svbk/warranty';

export const settings = {
	title: __( 'Warranty', '_svbk' ),
	icon: 'awards', 
	category: 'common',
	keywords: [
		__( 'warranty', '_svbk'  ),
		__( 'assurance', '_svbk'  ),
		__( 'guarantee', '_svbk'  ),
	],
	
	styles: [
	    // Mark style as default.
	    {
	        name: 'default',
	        label: __( 'Default' ),
	        isDefault: true
	    },
	    {
	        name: 'small',
	        label: __( 'Small', '_svbk' ),
	    },
	],	
	
	supports: {
		anchor: true,
	},
	
	deprecated,
	
	attributes: {
		sealUrl: {
			type: 'string',
			source: 'attribute',
			attribute: 'src',
			selector: '.wp-block-svbk-warranty__seal img',
		},	
		sealId: {
			type: 'number',
		},
		sealSize: {
			type: 'string',
		},
		title: {
			type: 'string',
			source: 'html',
			selector: '.wp-block-svbk-warranty__title',
		},		
		subtitle: {
			type: 'string',
			source: 'html',
			selector: '.wp-block-svbk-warranty__subtitle',
		},		
		content: {
			type: 'string',
			source: 'html',
			selector: '.wp-block-svbk-warranty__text',
		},
		footer: {
			type: 'string',
			source: 'html',
			selector: '.wp-block-svbk-warranty__footer',
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
		backgroundImageUrl: {
			type: 'string',
		},	
		backgroundImageId: {
			type: 'number',
		},		
		backgroundImageSise: {
			type: 'string',
		},		
	},	

	edit,

	save( { attributes } ) {
		
		const { 
			sealUrl,
			sealId, 			
			title, 
			subtitle,
			content,
			footer,
			backgroundColor,
			customBackgroundColor,
			textColor,
			customTextColor,
			backgroundImageUrl,
			backgroundImageId,
		} = attributes;		
		
		const backgroundClass = getColorClassName( 'background-color', backgroundColor );
		const textClass = getColorClassName( 'color', textColor );

		const classNames = classnames( 'wp-block-svbk-warranty__content', {
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
			<aside className={ classnames( { 'has-background-image': backgroundImageUrl } ) } >
				<div className={ classNames } style={ style } >
					{ sealUrl && (
						<figure className={ 'wp-block-svbk-warranty__seal'} >
							<img src={ sealUrl } alt={"Warranty Seal"} className={ sealId ? `wp-image-${ sealId }` : null } />
						</figure> 
					) }			
				
					<header className={ 'wp-block-svbk-warranty__header' } >
						{ title && ( 
						<RichText.Content tagName={ 'h3' } className={ 'wp-block-svbk-warranty__title' } value={ title } /> 
						) }
						{ subtitle && ( 
						<RichText.Content tagName={ 'p' } className={ 'wp-block-svbk-warranty__subtitle' } value={ subtitle } /> 
						) }
					</header>
	
					<div className={ 'wp-block-svbk-warranty__text' }> 
						<InnerBlocks.Content />
					</div>
					
					{ footer && ( 
					<RichText.Content tagName={ 'footer' } className={ 'wp-block-svbk-warranty__footer' } value={ footer } /> 
					) }	
					
				</div>
				
				{ backgroundImageUrl && (
				<img 
					className={ 'wp-block-svbk-warranty__background' + ( backgroundImageId ? `wp-image-${ backgroundImageId }` : null ) }
					alt={''}
					aria-hidden={ true }
					src={ backgroundImageUrl }
				/>
				) }
			</aside>
		);
	},
};