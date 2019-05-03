import classnames from 'classnames';

/**
 * WordPress dependencies
 */
const { __ } = wp.i18n;
const { Fragment } = wp.element;
const { 
	PanelBody,
	RangeControl
} = wp.components;
const {
	InspectorControls,
    RichText
} = wp.editor;

/**
 * Internal dependencies
 */
export const name = 'svbk/author';

export const settings = {
	title: __( 'Author', '_svbk' ),

	description: __( 'Display the author of a post', '_svbk' ),

	icon: 'admin-users',

	category: 'widgets',
	
	keywords: [ __( 'author', '_svbk' ) ],

	supports: {
		html: false,
	},

	multiple: false,

	attributes: {
		author_name: {
			type: 'string',
			meta: 'author_name',
			source: 'text',
			selector: '.author__name',
		},		
		author_role: {
			type: 'string',
			meta: 'author_role',
			source: 'text',
			selector: '.author__role',			
		}
	},

	edit( {
			attributes,
			setAttributes,
			className,
		} ) {
		
		const { author_name, author_role } = attributes;
		
		return (
			<Fragment>
				<RichText
					identifier="author-name"
					wrapperClassName="wp-feedback-author-name"
					tagName={ 'div' }
					value={ author_name }
					onChange={ ( value ) => setAttributes( { author_name: value } ) }
					className={ className }
					placeholder={ __( 'Author Name…', '_svbk' ) }
				/>
				<RichText
					identifier="author-role"
					wrapperClassName="wp-feedback-author-role"
					tagName={ 'cite' }
					value={ author_role }
					onChange={ ( value ) => setAttributes( { author_role: value } ) }
					className={ className }
					placeholder={ __( 'Author Role…', '_svbk' ) }
				/>
			</Fragment>			
		);
		
	},

	save({ attributes }){
		
		const { author_name, author_role, className } = attributes;
		
		return (
			<div className={ className }>
				<div className="author__name">{author_name}</div>
				{ author_role ? ( <cite className="author__role">{author_role}</cite>) : null }
			</div>
		);
	},
	
};