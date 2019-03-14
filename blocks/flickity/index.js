/* global wp */
/* global lodash */
import classnames from 'classnames';

/**
 * WordPress dependencies
 */
const { __ } = wp.i18n;
const _ = window.lodash;

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

// Register new flickity options for the Gallery Block
const addFlickityToGallery = function ( settings, name ) {
    
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
			        selector: 'ul',
			        attribute: 'data-flickity',		
				}
    		}),
		} 
	);

	settings.attributes.images.query['flickityLazyload'] = {
		source: 'attribute',
		selector: 'img',
		attribute: 'data-flickity-lazyload',
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
const withFlickitySave = function ( element, blockType, attributes) {
    
    if ( !isFlickity(attributes, blockType) ) {
    	return element;
    }
    	
    const props = element.props;
	const flickityOptions = getFlickityOptions( attributes );
    
	const newChildren = props.children.map( (galleryItem) => {
		
		// Check if this gallery item has the expected tree structure
		if ( ! _.has( galleryItem, 'props.children.props.children' ) ) {
			return galleryItem;
		}
		
		let galleryFigure = galleryItem.props.children;
		let galleryFigureElements = galleryFigure.props.children;
		
		// Cycle all <figure> children and append the CSS class to the <img> tag
		galleryFigureElements = galleryFigureElements.map( (galleryFigureElement) => {
				
				if ( galleryFigureElement.type !== 'img' ) {
					return galleryFigureElement;
				}
				
				let existingClassName = ( galleryFigureElement.props && galleryFigureElement.props.className ) ? galleryFigureElement.props.className : '';
				
				const newProps = { 
					className: existingClassName + ' flickity-image'  
				};
				
				if ( flickityOptions.lazyLoad && galleryFigureElement.props.src ) {
					newProps['data-flickity-lazyload'] = galleryFigureElement.props.src;
					newProps['src'] = null;
				}
				
				if ( flickityOptions.lazyLoad && galleryFigureElement.props.srcset ) {
					newProps['data-flickity-lazyload-srcset'] = galleryFigureElement.props.srcset;
					newProps['srcset'] = null;
				}				
				
				return wp.element.cloneElement(galleryFigureElement, newProps);
				
		} );
		
		// Replace the modified children elements in the <figure> tag
		galleryFigure = wp.element.cloneElement(galleryFigure, { 
			children: galleryFigureElements  
		});
		
		// Replace the modified figure tag in the <li> element
		return wp.element.cloneElement(galleryItem, { 
			children: galleryFigure  
		});
		
	});
	
    const fGallerySave = wp.element.cloneElement(element, { 
    		'data-flickity': JSON.stringify(flickityOptions),
    		children: newChildren,
    });
    
	return fGallerySave;
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
			image.url = image.flickityLazyloadSrcset;
		}		
		
	} );
    
	return attributes;
}

wp.hooks.addFilter(
    'blocks.getBlockAttributes',
    'svbk/gallery-flickity-attributes',
    backfillFlickityAttributes
);
