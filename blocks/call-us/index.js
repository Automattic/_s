/**
 * BLOCK: call-us
 *
 * Shows a phone call button with number
 * @author: Costanza Focardi <c.focardi@silverbackstudio.it>
 */
import classnames from 'classnames';

/**
 * WordPress dependencies
 */
const { __ } = wp.i18n;
const { Fragment } = wp.element;
const { 
    Button,
} = wp.components;
const {
    RichText
} = wp.editor;

/**
 * Internal dependencies
 */
export const name = 'svbk/call-us';

export const settings = {
	title: __( 'Call Us', '_svbk' ),

	description: __( 'Display fancy phone contact', '_svbk' ),

	icon: 'phone',

	category: 'common',
	
	keywords: [ __( 'phone', 'contacts', 'contact', '_svbk' ) ],

	supports: {
		html: false,
	},

	multiple: false,

	attributes: {
		callus_title: {
			type: 'string',
			source: 'text',
			selector: '.callus__title',
			default: __( 'Preferisci parlarne a voce?', '_svbk' )
		},		
		callus_text: {
			type: 'string',
			source: 'text',
			selector: '.callus__text',
			default: __( 'Chiamaci al numero', '_svbk' )
		},
		callus_number: {
			type: 'string',
			source: 'text',
			selector: '.callus__number',
			default: __( '(+39) 000 00000000', '_svbk' )
		}
	},

	edit( {
			attributes,
			setAttributes,
			className,
		} ) {
		
		const { callus_title, callus_text, callus_number} = attributes;
		
		return (
			<Fragment>
				<RichText
					tagName={ 'h3' }
					value={ callus_title }
					onChange={ ( value ) => setAttributes( { callus_title: value } ) }
					placeholder={ __( 'Vuoi parlarne a voce?', '_svbk' ) }
				/>
				<RichText
					tagName={ 'p' }
					value={ callus_text }
					onChange={ ( value ) => setAttributes( { callus_text: value } ) }
					placeholder={ __( 'Chiamaci al numero', '_svbk' ) }
				/>
				<RichText
					tagName={ 'a' }
					value={ callus_number }
					onChange={ ( value ) => setAttributes( { callus_number: value } ) }
					placeholder={ __( '(+39) 000 00000000', '_svbk' ) }
				/>
			</Fragment>
		);
	},

	save({ attributes }){
		
		const { callus_title, callus_text, callus_number, className } = attributes;
		
		var callus_href = callus_number.replace("+", "00").replace(/[\s\(\)]/g, "");
		
		return (
			<div className={ className }>
				<h3 className="callus__title">{callus_title}</h3>
				<p className="callus__text">{callus_text}</p>
				<a href={"tel:" + callus_href} className="callus__number">{callus_number}</a>
			</div>
		);
	},
};