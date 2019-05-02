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
import edit from './edit';

/**
 * External dependencies
 */
import classnames from 'classnames';

/**
 * WordPress dependencies
 */
const { __ } = wp.i18n; // Import __() from wp.i18n
const { 
	getColorClassName, 
} = wp.editor;

const {
	RawHTML
} = wp.element;


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
 
/**
 * Internal dependencies
 */
export const name = 'svbk/stats';

export const settings = {
	title: __( 'Stats', '_svbk' ),
	icon: 'chart-pie', 
	category: 'common',
	keywords: [
		__( 'stats' ),
		__( 'number' ),
		__( 'counter' ),
	],
	
	attributes: {
		icon: {
			type: 'string',
			source: 'html',
            selector: '.wp-block-svbk-stats__icon',
		},
		metric: {
			type: 'string',
			source: 'text',
			selector: '.wp-block-svbk-stats__metric',
		},
		description: {
			type: 'string',
			source: 'text',
			selector: '.wp-block-svbk-stats__description',
		},		
		textColor: {
			type: 'string',
		},
		customTextColor: {
			type: 'string',
		},
	},	

	edit,

	save: function( { attributes } ) {

		const { 
			icon,
			metric, 
			description,
			textColor,
			customTextColor,
		} = attributes;

		const textClass = getColorClassName( 'color', textColor );

		const classNames = classnames( {
			'has-text-color': textColor || customTextColor,
			[ textClass ]: textClass,
		} );

		const style = {
			color: textClass ? undefined : customTextColor,
		};

		return (
			<div className={ classNames } style={ style } >
				{ icon && (
				<div className={ 'wp-block-svbk-stats__icon' } ><RawHTML>{ icon }</RawHTML></div>
				) }				
				<p className={ 'wp-block-svbk-stats__metric' }>{ metric }</p>
				<p className={ 'wp-block-svbk-stats__description' } >{ description }</p> 
			</div>
		);
	},
};