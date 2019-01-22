import classnames from 'classnames';

/**
 * WordPress dependencies
 */
const { __ } = wp.i18n;
const { Fragment } = wp.element;
const { 
	PanelBody,
	RangeControl,
	ToggleControl,
} = wp.components;
const {
	InspectorControls
} = wp.editor;

/**
 * Internal dependencies
 */
export const name = 'svbk/rating';

export const settings = {
	title: __( 'Rating', '_svbk' ),

	description: __( 'Display a list of stars', '_svbk' ),

	icon: 'star-filled',

	category: 'widgets',

	keywords: [ __( 'rating', '_svbk' ) ],

	supports: {
		html: false,
	},

	multiple: false,

	attributes: {
		rating: {
			type: 'number',
			meta: 'rating',
			default: 5
		},
		output: {
			type: 'boolean',
			default: false,
		}
	},

	edit( {
			attributes,
			setAttributes,
			className,
		} ) {
		
		const { rating, output } = attributes;
		
		return (
			<Fragment>
				<InspectorControls>
					<PanelBody title={ __( 'Rating', '_svbk' ) }>
						<RangeControl
							label={ __( 'Rating', '_svbk' ) }
							value={ rating }
							onChange={ ( value ) => {
								setAttributes( { rating: Number( value ) } ) }
							}
							min={ 0 }
							max={ 5 }
						/>	
						<ToggleControl
							label={ __( 'Output to content', '_svbk' ) }
							checked={ output }
							onChange={ ( value ) => {
								setAttributes( { output: Boolean( value ) } ) }
							}
						/>							
					</PanelBody>
				</InspectorControls>			
				<div 
					className={ classnames( [className], { [ `rating-${rating}` ] : rating }  ) }
				>Rating: {rating}</div>
			</Fragment>		
		);
		
	},

	save( {attributes} ){
		
		const { rating, className } = attributes;
		
		return (
			<div 
			className={ classnames( [className], { [ `rating-${rating}` ] : rating }  ) }
			>Rating: {rating}</div>
		) ;
	},
	
};