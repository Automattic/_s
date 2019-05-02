/**
 * BLOCK: profile
 *
 * Shows a profile card
 * @author: Brando Meniconi <b.meniconi@silverbackstudio.it>
 */

//  Import CSS.
import './style.scss';
import './editor.scss';

const { __ } = wp.i18n; // Import __() from wp.i18n
const { InnerBlocks } = wp.editor;

const TEMPLATE = [
	['core/image', 
		{ 
			className: 'team-member__picture' 
		}
	],
	['core/heading', 
		{ 
			placeholder: __('Full Name', '_svbk'), 
			className: 'team-member__name' 
		}
	],
	['core/paragraph', 
		{
			placeholder: __( 'User Role', '_svbk' ), 
			className: 'team-member__role' 
		}
	],
	['core/paragraph', 
		{
			placeholder: __( 'Author Bio..', '_svbk' ), 
			className: 'team-member__desc'
		}
	],
	['core/button', 
		{ 
			text: __('Read More', '_svbk' ), 
			className: 'team-member__link is-style-plain-link' 
		}
	],
];

/**
 * Internal dependencies
 */
export const name = 'svbk/testimonial-template';

export const settings = {
	title: __( 'Testimonial Template', '_svbk' ),
	icon: 'id', 
	category: 'common',
	keywords: [
		__( 'profile' ),
		__( 'member' ),
		__( 'team' ),
	],

    inserter: false,

	edit: function( {
			attributes,
			setAttributes,
			className,
		} ) {

		return (
			<div className={ className }>
				<InnerBlocks 
					template={ TEMPLATE } 
					templateLock="all" 
				/>
			</div>
		);
	},

	save: attributes => {
		return (
			<div className={ 'team-member' }>
				<InnerBlocks.Content />
			</div>
		);
	},
};


