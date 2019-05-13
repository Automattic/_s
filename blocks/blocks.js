/* global wp */
/* global lodash */
/**
 * Gutenberg Blocks
 *
 * All blocks related JavaScript files should be imported here.
 * You can create a new block folder in this dir and include code
 * for that block here as well.
 *
 * All blocks should be included here since this is the file that
 * Webpack is compiling as the input file.
 */
/**
 * WordPress dependencies
 */
const {
	registerBlockType,
} = wp.blocks;

const { includes } = lodash;

/**
 * Internal dependencies
 */
import './formats';
import './styles';
import './flickity';

import * as testimonial from './testimonial';
import * as testimonials from './testimonial/list/index';
import * as author from './testimonial/author';
import * as rating from './testimonial/rating';
import * as price from './product/price';
import * as addtocart from './product/addtocart';
import * as stock from './product/stock';
import * as productRating from './product/rating';
import * as callus from './call-us';
import * as card from './card';
import * as icon from './icon';
import * as bullet from './bullet';
import * as profile from './profile';
import * as stats from './stats';
import * as collapse from './collapse';
import * as map from './map';
import * as iter from './iter';
import * as warranty from './warranty';
import * as hero from './hero';
import * as publication from './publication';
import * as grid from './grid';
import * as iconParagraph from './icon-paragraph';
import * as countdown from './countdown';

const disablePreviewBlocks = [
	'svbk/card',
	'svbk/collapse',
	'svbk/warranty',
	'svbk/testimonial',
	'core/group',
	'core/columns',
];

[
	// Common blocks are grouped at the top to prioritize their display
	// in various contexts — like the inserter and auto-complete components.
	testimonial,
	testimonials,
	rating,
	author,
	price,
	addtocart,
	productRating,
	stock,
	callus,
	card,
	icon,
	bullet,
	profile,
	stats,
	collapse,
	map,
	iter,
	warranty,
	hero,
	publication,
	grid,
	iconParagraph,
	countdown,	
].forEach( ( block ) => {
	if ( ! block ) { return; }
	
	const { name, settings } = block;
	
	registerBlockType( name, settings );
} );


//Fix styles for blocks witn InnerBlocks, by disabling preview. @see: https://github.com/WordPress/gutenberg/issues/9897
var el = wp.element.createElement;
var withDisabledPreviews = wp.compose.createHigherOrderComponent( function( BlockEdit ) {
return function( props ) {
  var content = el( BlockEdit, props );
  
  if( includes(disablePreviewBlocks, props.name) && typeof props.insertBlocksAfter === 'undefined' ) {
    content = el( 'div', {} );
  }

  return el(
    wp.element.Fragment, {}, content
  );
};
}, 'withDisabledPreviews' );

wp.hooks.addFilter( 'editor.BlockEdit', 'svbk/fixstyles', withDisabledPreviews );