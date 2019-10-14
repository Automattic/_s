/* global wp */
/* global lodash */

/**
 * BLOCK: card
 *
 * Shows a  card
 * @author: Brando Meniconi <b.meniconi@silverbackstudio.it>
 */

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
} = wp.editor;

const {
	RawHTML
} = wp.element;

/**
 * Internal dependencies
 */
import edit from './edit';


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
export const name = 'svbk/iter';

export const settings = {
	title: __( 'Iter', '_svbk' ),
	icon: 'editor-ul', 
	category: 'common',
	keywords: [
		__( 'iter', '_svbk' ),
		__( 'steps', '_svbk' ),
	],
	
	attributes: {
		steps: {
			type: "array",
			default: [{
				icon: '',
				name: '',
				title: '',
				content: ''
			}],
			source: "query",
			selector: "div.wp-block-svbk-iter .wp-block-svbk-iter__step",
			query: {
				icon: {
					type: 'string',
					source: 'html',
		            selector: '.wp-block-svbk-iter__step-icon',
				},
				name: {
					source: 'string',
					source: 'text',
					selector: '.wp-block-svbk-iter__step-name',
				},					
				title: {
					source: 'string',
					source: 'text',
					selector: '.wp-block-svbk-iter__step-title',
				},					
				content: {
					type: 'string',
					source: 'html',
		            selector: '.wp-block-svbk-iter__step-content',
				},				
			}
		},
	},	

	edit,

	save: function( { attributes } ) {
		
		const { 
			steps,
		} = attributes;		
		
		return (
			<div>
				{
					steps.map( ( step, index ) => (
						<div className={ 'wp-block-svbk-iter__step' }  key={ index } >
							<div className={ 'wp-block-svbk-iter__step-icon' } ><RawHTML>{ step.icon }</RawHTML></div>
							<span className={ 'wp-block-svbk-iter__step-name' } >{ step.name }</span>
							<h3 className={ 'wp-block-svbk-iter__step-title' } >{ step.title }</h3>
							<RichText.Content tagName={ 'span' } className={ 'wp-block-svbk-iter__step-content' } value={ step.content } /> 
						</div>
					) )
				}
			</div>
		);
	},
};