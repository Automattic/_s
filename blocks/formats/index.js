/**
 * WordPress dependencies
 */
const { registerFormatType } = wp.richText;

/**
 * Internal dependencies
 */
import { highlight } from './highlight';
import { standout } from './standout';
import { underlineStroke } from './underline-stroke';


[
	highlight,
	standout,
	underlineStroke,
].forEach( ( { name, ...settings } ) => registerFormatType( name, settings ) );