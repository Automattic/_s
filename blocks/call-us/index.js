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
		action: {
			type: 'string',
			source: 'html',
			selector: '.wp-block-svbk-call-us__action--default',
		},
		actionWide: {
			type: 'string',
			source: 'html',
			selector: '.wp-block-svbk-call-us__action--wide',
			default: __( 'Chiama il', '_svbk' )
		},
		number: {
			type: 'string',
			source: 'html',
			selector: '.wp-block-svbk-call-us__number',
		},		
		align: {
			type: 'string',
		},		
	},

	deprecated,

	edit,

	save({ attributes }){
		
		const { 
			number,
			action, 
			actionWide, 
			align
		} = attributes;
		
		const classNames = classnames( {
			[`has-action`]: action,
			[`has-action-wide`]: actionWide,
			[`has-align-${align}`]: align,
		} );			
		
		const normalizedNumber = number.replace("+", "00").replace(/[\s\(\)]/g, "");
		
		return (
			<div className={ classNames } >
				<a href={"tel:" + normalizedNumber } className={ 'wp-block-svbk-call-us__link' }>
					{ action && ( 
					<RichText.Content tagName={ 'span' } className={ 'wp-block-svbk-call-us__action wp-block-svbk-call-us__action--default' } value={ action } />
					) }
					{ actionWide && ( 
					<Fragment>
						<RichText.Content tagName={ 'span' } className={ ' wp-block-svbk-call-us__action wp-block-svbk-call-us__action--wide' } value={ actionWide } />
						&nbsp;
						<span class="wp-block-svbk-call-us__number">{ number }</span>
					</Fragment>
					) }
				</a>
			</div>			
		);
	},
};