/**
 * WordPress dependencies
 */
const { __ } = wp.i18n;

/**
 * Internal dependencies
 */
import PostEdit from '../common/PostEdit';

export const name = 'svbk/testimonial-embed';

export const settings = {
	title: __( 'Testimonial Embed', '_svbk' ),

	description: __( 'Embeds a tesimonial', '_svbk' ),

	icon: 'thumbs-up',

	category: 'widgets',

	keywords: [ __( 'testimonial', '_svbk' ) ],

	supports: {
		html: false,
	},

	styles: [
	    // Mark style as default.
	    {
	        name: 'full',
	        label: __( 'Full', '_svbk' ),
	        isDefault: true
	    },
	    {
	        name: 'inline',
	        label: __( 'Inline', '_svbk' )
	    }	    
	],

	attributes: {
		align: {
			type: "string"
		},
		id: {
			type: "number",
		},		
		displayPostContentRadio: {
			type: "string",
			default: "excerpt",
		}
	},

	edit(attrs) {
		return ( <PostEdit postType="testimonial" {...attrs} /> )
	},

	save( attributes ) {
		const { className } = attributes;
		return ( <div className={ className }></div> );
	},
};