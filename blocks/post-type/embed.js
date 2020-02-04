/**
 * WordPress dependencies
 */
const { __ } = wp.i18n;

/**
 * Internal dependencies
 */
import PostEdit from '../common/PostEdit';

export const name = 'svbk/post_type-embed';

export const settings = {
	title: __( 'Post Type', '_svbk' ),

	description: __( 'Embeds a post_type', '_svbk' ),

	icon: 'awards',

	category: 'widgets',

	keywords: [ __( 'post_type', '_svbk' ) ],

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
		return ( <PostEdit postType="post_type" {...attrs} /> )
	},

	save( attributes ) {
		const { className } = attributes;
		return ( <div className={ className }></div> );
	},
};