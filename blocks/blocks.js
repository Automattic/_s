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

/**
 * Internal dependencies
 */
import './formats';
import './styles';
import './flickity';
import withAppearanceSettings from './common/appearance-controls';

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
import * as casestudies from './casestudy/list';
import * as casestudyEmbed from './casestudy/embed';
import * as trust from './trust';

wp.hooks.addFilter( 'blocks.registerBlockType', 'svbk/appearance-controls', withAppearanceSettings, 100 );

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
	casestudies,
	casestudyEmbed,	
	trust
].forEach( ( block ) => {
	if ( ! block ) { return; }
	
	const { name, settings } = block;
	
	registerBlockType( name, settings );
} );