/* global wp */
/* global lodash */

/**
 * BLOCK: testimonial
 *
 * Shows a  testimonial
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
	InnerBlocks,
} = wp.blockEditor;


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
export const name = 'svbk/testimonial';

export const settings = {
	title: __( 'Testimonial', '_svbk' ),
	icon: 'thumbs-up', 
	category: 'widgets',
	keywords: [
		__( 'testimonial' ),
		__( 'feedback' ),
	],

	supports: {
		inserter: false,
		reusable: false,
		multiple: false,
	},

	styles: [
	    // Mark style as default.
	    {
	        name: 'default',
	        label: __( 'Standard' ),
	        isDefault: true
	    },
	    {
	        name: 'vip',
	        label: __( 'VIP', '_svbk' ),
	    },	  
	    {
	        name: 'press',
	        label: __( 'Press', '_svbk' ),
	    }	    
	],	
	
	attributes: {
		avatarUrl: {
			type: 'string',
			source: 'attribute',
			selector: '.wp-block-svbk-testimonial__avatar img',
			attribute: 'src',
		},	
		avatarId: {
			type: 'number',
			source: 'meta',
			meta: 'avatarId',			
		},
		authorName: {
			type: 'string',
			source: 'meta',
			meta: 'authorName',
		},		
		authorRole: {
			type: 'string',
			source: 'meta',
			meta: 'authorRole',
		},	
		companyLogoUrl: {
			type: 'string',
			source: 'attribute',
			selector: '.wp-block-svbk-testimonial__company-logo img',
			attribute: 'src',
		},			
		companyLogoId: {
			type: 'number',
			source: 'meta',
			meta: 'companyLogoId',
		},			
		rating: {
			type: 'string',
			source: 'meta',
			meta: 'rating',
		},
		date: {
			type: 'string',
			source: 'meta',
			meta: 'publishDate',
		},	
		source: {
			type: 'string',
			source: 'meta',
			meta: 'testimonialSource',
		},			
		backgroundColor: {
			type: 'string',
		},
		customBackgroundColor: {
			type: 'string',
		},
		textColor: {
			type: 'string',
		},
		customTextColor: {
			type: 'string',
		},
	},	

	edit,

	save() {
		return <InnerBlocks.Content />;
	},
};