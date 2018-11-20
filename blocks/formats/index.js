/**
 * WordPress dependencies
 */
const { __ } =  wp.i18n;
const { registerFormatType } = wp.richText;

/**
 * Internal dependencies
 */
import { highlight } from './highlight';


[
	highlight,
].forEach( ( { name, ...settings } ) => registerFormatType( name, settings ) );