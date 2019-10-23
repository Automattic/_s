/**
 * WordPress dependencies
 */
const { __ } = wp.i18n;

/**
 * Internal dependencies
 */
import PostListEdit from '../../common/PostListEdit';

export const name = 'svbk/testimonials';

export const settings = {
	title: __( 'Testimonials', '_svbk' ),

	description: __( 'Display a list of testimonials.', '_svbk' ),

	icon: 'thumbs-up',

	category: 'widgets',

	keywords: [ __( 'testimonials', '_svbk' ) ],

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
	        name: 'small',
	        label: __( 'Small', '_svbk' )
	    },
	    {
	        name: 'grid',
	        label: __( 'Grid', '_svbk' )
	    },
	    {
	        name: 'masonry',
	        label: __( 'Masonry', '_svbk' )
	    },	    
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
		display: {
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
		return (<PostListEdit postType="testimonial" taxonomy="testimonial_category" {...attrs} />)
	},

	save( attributes ) {
		
		const { className } = attributes;
		
		return ( <div className={ className }></div> );
	},
};