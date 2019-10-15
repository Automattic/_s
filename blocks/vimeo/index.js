import classnames from 'classnames';

/**
 * WordPress dependencies
 */
const { __ } = wp.i18n;
const { Fragment } = wp.element;
const { 
	Path,
	SVG,
	PanelBody,
	RangeControl	
} = wp.components;
const {
	InspectorControls
} = wp.blockEditor;

/**
 * Internal dependencies
 */
export const name = 'svbk/vimeo';

export const settings = {
	title: __( 'Vimeo' ),

	description: __( 'Embeds a Vimeo Video with options' ),

	icon: {
		foreground: '#1ab7ea',
		src: <SVG xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><G><Path d="M22.396 7.164c-.093 2.026-1.507 4.8-4.245 8.32C15.323 19.16 12.93 21 10.97 21c-1.214 0-2.24-1.12-3.08-3.36-.56-2.052-1.118-4.105-1.68-6.158-.622-2.24-1.29-3.36-2.004-3.36-.156 0-.7.328-1.634.98l-.978-1.26c1.027-.903 2.04-1.806 3.037-2.71C6 3.95 7.03 3.328 7.716 3.265c1.62-.156 2.616.95 2.99 3.32.404 2.558.685 4.148.84 4.77.468 2.12.982 3.18 1.543 3.18.435 0 1.09-.687 1.963-2.064.872-1.376 1.34-2.422 1.402-3.142.125-1.187-.343-1.782-1.4-1.782-.5 0-1.013.115-1.542.34 1.023-3.35 2.977-4.976 5.862-4.883 2.14.063 3.148 1.45 3.024 4.16z"></Path></G></SVG>,
	},

	category: 'widgets',

	keywords: [ __( 'rating' ) ],

	supports: {
		html: false,
	},

	attributes: {
		url: {
			type: "string", 
		}
	},

	edit( {
			attributes,
			setAttributes,
			className,
		} ) {
		
		const { rating } = attributes;
		
		return (
			<Fragment>
				<InspectorControls>
					<PanelBody title={ __( 'Rating' ) }>
						<RangeControl
							label={ __( 'Rating' ) }
							value={ rating }
							onChange={ ( value ) => setAttributes( { rating: value } ) }
							min={ 0 }
							max={ 5 }
						/>					
					</PanelBody>
				</InspectorControls>			
				<div 
					className={ classnames( [ className, `rating-${rating}` ] ) }
				>Rate: {rating}</div>
			</Fragment>		
		);
		
	},

	save({
			attributes,
			className,
		}) {
			
		const { rating } = attributes;
			
		return (
			<div 
				className={ classnames( [ className, `rating-${rating}` ] ) }
			>Rate: {rating}</div>
		);
	},
	
};