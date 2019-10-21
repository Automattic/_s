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
	ButtonGroup,
	IconButton
} = wp.components;

const {
	InspectorControls,
} = wp.blockEditor;

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

	attributes: {
		rating: {
			type: 'string',
			source: 'text',
			selector: '.rating__value',
			default: 5
		},
		ratingMeta: {
			type: 'string',
			meta: 'rating',
		},		
	},

	deprecated: [
	    {
		   	attributes: {
				rating: {
					type: 'string',
					meta: 'rating',
					default: 5
				},
			},        	
	
			supports: {
				html: false,
			},	
			
			save( {attributes} ){
				
				const { rating, className } = attributes;
				
				return (
					<div 
					className={ classnames( [className], { [ `rating-${rating}` ] : rating }  ) }
					>Rating: {rating}</div>
				) ;
			},
	    },
	],


	edit( {
			attributes,
			setAttributes,
			className,
		} ) {
		
		const { rating } = attributes;
		
		return (
			<Fragment>
				<InspectorControls>
					<PanelBody title={ __( 'Rating', '_svbk' ) }>
						<RangeControl
							label={ __( 'Rating', '_svbk' ) }
							value={ rating }
							onChange={ ( value ) => {
								setAttributes( { rating: Number( value ), ratingMeta: Number( value ) } ) }
							}
							min={ 0 }
							max={ 5 }
						/>
					</PanelBody>
				</InspectorControls>
				<div 
					className={ classnames( 'block-editor-rating',  { [ `rating-${rating}` ] : rating }  ) }
				>
					<ButtonGroup className={ 'block-editor-rating__stars' }>
					{
						[1, 2, 3, 4, 5].map( (rate) => (
							<IconButton
								key={ rate }
								icon={ ( rating >= rate ) ? 'star-filled' : 'star-empty' }
								onClick={ () => { setAttributes( { rating: rate } ) } }
							    label={ rate }
							/>
						) )
					}				
					</ButtonGroup>	
				</div>
			</Fragment>		
		);
		
	},

	save( {attributes} ){
		
		const { rating } = attributes;
		
		return (
			<div 
			className={ classnames( { [ `rating-${rating}` ] : rating }  ) }
			>
				<span className={ 'wp-block-svbk-rating__label rating__label' }>Rating:</span>
				<span className={ 'wp-block-svbk-rating__value rating__value' }>{rating}</span>
			</div>
		) ;
	},
	
};