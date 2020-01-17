/**
 * WordPress dependencies
 */
const { __ } = wp.i18n;

/**
 * Internal dependencies
 */
import PostListEdit from '../common/PostListEdit';

export const name = 'svbk/post_types';

export const settings = {
	title: __( 'Case Studies', '_svbk' ),

	description: __( 'Display a list of testimonials.', '_svbk' ),

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
		categories: {
			type: "string"
		},
		className: {
			type: "string"
			
		},
		columns: {
			type: "number", 
			default: 3
		},
		order: {
			type: "string", 
			default: "desc"
		},
		orderBy: {
			type: "string", 
			default: "date"
		},
		displayPostContentRadio: {
			type: "string",
			default: "excerpt",
		},
		postLayout: {
			type: "string", 
			default: "list"
		},
		postsToShow: {
			type: "number", 
			default: 5
		},
		offset: {
			type: "number", 
			default: 5
		},
		loadMore: {
			type: "boolean", 
			default: false
		}		
	},

	getEditWrapperProps( attributes ) {
		const { align } = attributes;
		if ( [ 'left', 'center', 'right', 'wide', 'full' ].includes( align ) ) {
			return { 'data-align': align };
		}
	},

	edit(attrs) {
		return ( <PostListEdit postType="post_type" {...attrs} /> )
	},

	save( attributes ) {
		const { className } = attributes;
		return ( <div className={ className }></div> );
	},
};