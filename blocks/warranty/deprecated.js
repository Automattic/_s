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
	InnerBlocks,
} = wp.editor;

const deprecated = [
    {
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
    			selector: '.wp-block-svbk-warranty__content',
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
    	},	
    
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
    	
    					<div className={ 'wp-block-svbk-warranty__content' }> 
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
    }
];

export default deprecated;