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
	setDefaultBlockName,
	setFreeformContentHandlerName,
	setUnregisteredTypeHandlerName,
} = wp.blocks;


/**
 * Internal dependencies
 */
import './formats';
import './styles';

import * as testimonials from './testimonials';
import * as author from './testimonials/author';
import * as rating from './testimonials/rating';
import * as price from './product/price';
import * as addtocart from './product/addtocart';
import * as stock from './product/stock';
import * as countdown from './countdown';


[
	// Common blocks are grouped at the top to prioritize their display
	// in various contexts — like the inserter and auto-complete components.
	testimonials,
	rating,
	author,
	price,
	addtocart,
	stock,
	countdown	
].forEach( ( block ) => {
	if ( ! block ) {
		return;
	}
	const { name, settings } = block;
	registerBlockType( name, settings );
} );
