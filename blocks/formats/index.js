/**
 * WordPress dependencies
 */
const { __ } =  wp.i18n;
const { registerFormatType } = wp.richText;

/**
 * Internal dependencies
 */
import { highlight } from './highlight';
import { standout } from './standout';


[
	highlight,
	standout,
].forEach( ( { name, ...settings } ) => registerFormatType( name, settings ) );