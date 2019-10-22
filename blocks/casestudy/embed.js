/**
 * WordPress dependencies
 */
const { __ } = wp.i18n;

/**
 * Internal dependencies
 */
import PostEdit from '../common/PostEdit';

export const name = 'svbk/casestudy-embed';

export const settings = {
	title: __( 'Case Study', '_svbk' ),

	description: __( 'Embeds a CaseStudy', '_svbk' ),

	icon: 'awards',

	category: 'widgets',

	keywords: [ __( 'casestudy', '_svbk' ) ],

	supports: {
		html: false,
	},

	styles: [	    
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
		return ( <PostEdit postType="casestudy" {...attrs} /> )
	},

	save( attributes ) {
		const { className } = attributes;
		return ( <div className={ className }></div> );
	},
};