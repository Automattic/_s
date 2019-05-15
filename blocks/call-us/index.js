/**
 * BLOCK: call-us
 *
 * Shows a phone call button with number
 * @author: Costanza Focardi <c.focardi@silverbackstudio.it>
 */
 
/**
 * External dependencies
 */
import classnames from 'classnames'; 
 
/**
 * WordPress dependencies
 */
const { __ } = wp.i18n;

const {
    RichText,
} = wp.editor;

const { Fragment } = wp.element;

/**
 * Internal dependencies
 */
import deprecated from './deprecated';
import edit from './edit';

export const name = 'svbk/call-us';

export const settings = {
	title: __( 'Call Us', '_svbk' ),

	description: __( 'Display fancy phone contact', '_svbk' ),

	icon: 'phone',

	category: 'common',
	
	keywords: [ 
		__( 'phone', '_svbk' ),
		__( 'contacts', '_svbk' ), 
	],

	supports: {
		html: false,
	},

	multiple: false,

	attributes: {
		title: {
			type: 'string',
			source: 'html',
			selector: '.wp-block-svbk-call-us__title',
		},		
		text: {
			type: 'string',
			source: 'html',
			selector: '.wp-block-svbk-call-us__text',
			default: __( 'Chiamaci al numero', '_svbk' )
		},
		number: {
			type: 'string',
			source: 'html',
			selector: '.wp-block-svbk-call-us__number',
		},
		action: {
			type: 'string',
			source: 'html',
			selector: '.wp-block-svbk-call-us__action',
		}
	},

	deprecated,

	edit,

	save({ attributes }){
		
		const { 
			title, 
			text, 
			number,
			action, 
			className
		} = attributes;
		
		const classNames = classnames( className, {
			[`has-action`]: action,
		} );			
		
		
		return (
			<div className={ classNames }>
				<RichText.Content tagName={ 'h3' } className={ 'wp-block-svbk-call-us__title callus__title' } value={ title } />
				<RichText.Content tagName={ 'p' } className={ 'wp-block-svbk-call-us__text callus__text' } value={ text } />
				<a href={"tel:" + number } className="wp-block-svbk-call-us__button callus__number">
					{ action && ( 
					<Fragment>
						<RichText.Content tagName={ 'span' } className={ 'wp-block-svbk-call-us__action wp-block-button__action' } value={ action } />
						&nbsp;
					</Fragment>
					) }
					<span class="wp-block-svbk-call-us__number wp-block-button__value">{ number }</span>
				</a>
			</div>
		);
	},
};