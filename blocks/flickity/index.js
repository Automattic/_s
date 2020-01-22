/* global wp */
/* global lodash */

/**
 * WordPress dependencies
 */
const { __ } = wp.i18n;
const _ = window.lodash;

const { RichText } = wp.blockEditor;

import classnames from 'classnames';

import { 
	withFlickityEditor, 
	getFlickityOptions,
	isFlickity,
} from './flickity-options';

// Register the activation block-styles for Flickity
wp.blocks.registerBlockStyle( 'core/gallery', {
    name: 'flickity',
    label: 'Flickity Carousel'
} );

wp.blocks.registerBlockStyle( 'core/gallery', {
    name: 'flickity-slider',
    label: 'Flickity Slider'
} );

/**
 * Inject the flickity attributes in the image attributes,
 * to map something like this:
 * 
 * {
 * 	"attributes": {
 *		flickity: {
 *			type: 'string',
 *			source: 'attribute',
 *			selector: 'ul',
 *			attribute: 'data-flickity',		
 *		},
 * 	  	images: {
 * 			type: "array",
 *			default: [ ],
 *			source": "query",
 *			selector: ".blocks-gallery-item",* 
 * 			query: {
 * 				flickityLazyload: {
 *					source: 'attribute',
 *					selector: 'img',
 *					attribute: 'data-flickity-lazyload',
 *				},	
 * 				url: {
 * 					source: 'attribute',
 * 					selector: 'img',
 * 					attribute: 'src'
 * 				},
 * 				...
 *			}
 * 	 	}
 * 	}
 */

// Register new flickity options for the Gallery Block
const addFlickityToGallery = function ( settings, name ) {
	
	// Apply only to gallery block
    if ( name !== 'core/gallery' ) {
        return settings;
    }
    
	_.assign( settings, 
    	{
    		edit: withFlickityEditor( settings.edit ),
    		keywords: lodash.union( 
    			settings.keywords, 
    			[ __( 'flickity' ) ]
    		),
	        attributes: _.assign( {}, settings.attributes, {
	        	flickity: {
					type: 'string',
			        source: 'attribute',
			        selector: '.blocks-gallery-grid',
			        attribute: 'data-flickity',		
				}
    		}),
		} 
	);

	// Inject the single image lazyLoad attribute
	settings.attributes.images.query['flickityLazyload'] = {
		source: 'attribute',
		selector: 'img',
		attribute: 'data-flickity-lazyload-src',
	};
	
	settings.attributes.images.query['flickityLazyloadSrcset'] = {
		source: 'attribute',
		selector: 'img',
		attribute: 'data-flickity-lazyload-srcset',
	};	

	return settings;
}

wp.hooks.addFilter(
    'blocks.registerBlockType',
    'svbk/flickity/gallery-block',
    addFlickityToGallery
);

// Add Flickity options property, add flickity-image class and lazyload attributes to <img>s
const withFlickitySave = function ( mainElement, blockType, attributes) {
	
	// Check if the gallery has flickity style
    if ( !isFlickity(attributes, blockType) ) {
    	return mainElement;
	}

	const { images, caption, linkTo } = attributes;
	const flickityOptions = getFlickityOptions( attributes );

	flickityOptions.cellSelector = '.blocks-gallery-item';

	return (
		<figure className={ mainElement.props.className }>
			<div className="blocks-gallery-grid" data-flickity={JSON.stringify(flickityOptions)} >
				{ images.map( ( image ) => {
					let href;

					switch ( linkTo ) {
						case 'media':
							href = image.fullUrl || image.url;
							break;
						case 'attachment':
							href = image.link;
							break;
					}

					const imageClasses = classnames({
						'flickity-lazyload-image' : flickityOptions.lazyLoad,
						[`wp-image-${ image.id }`]: image.id 
					});

					const img = (
						<img
							src={ flickityOptions.lazyLoad ? null : image.url }
							srcSet={ flickityOptions.lazyLoad ? null : image.srcset }
							alt={ image.alt }
							data-id={ image.id }
							data-full-url={ image.fullUrl }
							data-link={ image.link }
							className={ imageClasses }
							data-flickity-lazyload-src={ flickityOptions.lazyLoad ? image.url : null }
							data-flickity-lazyload-srcset={ flickityOptions.lazyLoad ? image.srcset : null }
						/>
					);

					return (
						<div key={ image.id || image.url } className="blocks-gallery-item">
							<figure>
								{ href ? <a href={ href }>{ img }</a> : img }
								{ ! RichText.isEmpty( image.caption ) && (
									<RichText.Content tagName="figcaption" className="blocks-gallery-item__caption" value={ image.caption } />
								) }
							</figure>
						</div>
					);
				} ) }
			</div>
			{ ! RichText.isEmpty( caption ) && <RichText.Content tagName="figcaption" className="blocks-gallery-caption" value={ caption } /> }
		</figure>
	)
}

wp.hooks.addFilter(
    'blocks.getSaveElement',
    'svbk/gallery-flickity-save',
    withFlickitySave
);


// Backfill the `url`/`srcset` image attributes from the flickity lazyload params
const backfillFlickityAttributes = function(attributes, blockType, element, type){
	
    if ( ! isFlickity(attributes, blockType)  ) {
    	return attributes;
    }	
    
	attributes.images.forEach( (image) => {
		
		if ( !image.url && image.flickityLazyload ){ 
			image.url = image.flickityLazyload;
		}
		
		if ( !image.srcset && image.flickityLazyloadSrcset ){ 
			image.srcSet = image.flickityLazyloadSrcset;
		}		
		
	} );
    
	return attributes;
}

wp.hooks.addFilter(
    'blocks.getBlockAttributes',
    'svbk/gallery-flickity-attributes',
    backfillFlickityAttributes
);
