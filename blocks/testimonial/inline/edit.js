/* global wp */
/* global lodash */

const { Fragment, Component } = wp.element;
/**
 * External dependencies
 */
import classnames from 'classnames';

const { 
    pick,
    mapKeys,
    capitalize
} = lodash;

/**
 * WordPress dependencies
 */
const { __ } = wp.i18n; // Import __() from wp.i18n
const { 
	RichText,
	PlainText,
	InspectorControls,
	ContrastChecker,
	PanelColorSettings,	
	withColors,
} = wp.blockEditor;

const { compose } = wp.compose;

const { 
	RangeControl,
	ButtonGroup,
	IconButton,
	PanelBody	
} = wp.components;

/**
 * Internal dependencies
 */
import ImageEdit from '../../common/image';

class TestimonialInlineEdit extends Component {

    render() {
    	
		const {
			attributes,
			setAttributes,
			className,
			isSelected,
			backgroundColor,
			textColor,
			setBackgroundColor,
			setTextColor,			
		} = this.props;

		const { 
			pictureUrl,
			pictureId,			
			pictureSize,			
			author,
			content,
			rating,
			role,
		} = attributes;
		
		const pictureUpdate = ( update ) => {
			
			const localUpdate = mapKeys( pick( update, [ 'id', 'url', 'alt', 'size' ] ) , function(value, key) {
				// Convert url to pictureUrl, id to pictureId, etc
				return 'picture' + capitalize(key);
			});

			setAttributes( localUpdate );
		}		
		
		const classNames = classnames( className, {
			'is-selected': isSelected,
			[ backgroundColor.class ]: backgroundColor.class,
			[ textColor.class ]: textColor.class,
		} );		
		
		const style = {
			backgroundColor: backgroundColor.color,
			color: textColor.color,
		};		
		
		return (
			<div className={ classNames } style={ style } >
				<ImageEdit
					setAttributes={ pictureUpdate }
					url={ pictureUrl }
					id={ pictureId }
					size={ pictureSize }
					className={ 'wp-block-svbk-testimonial-inline__author' }
				/> 
				<PlainText
					value={ author }
					onChange={ ( value ) => setAttributes( { author: value } ) }
					placeholder={ __( 'Name Surname..', '_svbk' ) }
					className={ 'wp-block-svbk-testimonial-inline__author' }
				/>
				<PlainText
					value={ role }
					onChange={ ( value ) => setAttributes( { role: value } ) }
					placeholder={ __( 'Role..', '_svbk' ) }
					className={ 'wp-block-svbk-testimonial-inline__role' }
				/>
				<div className={ classnames( 'block-editor-rating',  { [ `rating-${rating}` ] : rating }  ) }>
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
				<RichText
					tagName={ 'div' }
					value={ content }
					onChange={ ( value ) => setAttributes( { content: value } ) }
					placeholder={ __( 'Content..', '_svbk' ) }
					className={ 'wp-block-svbk-testimonial-inline__content' }
				/>
				<InspectorControls>
					<PanelBody title={ __( 'Rating Settings', '_svbk' ) }>
						<RangeControl
							label={ __( 'Rating', '_svbk' ) }
							value={ rating }
							onChange={ ( value ) => {
								setAttributes( { rating: Number( value ) } ) }
							}
							min={ 0 }
							max={ 5 }
						/>	
					</PanelBody>
					<PanelColorSettings
						title={ __( 'Color Settings' ) }
						initialOpen={ false }
                        colorSettings={ [
							{
								value: backgroundColor.color,
								onChange: setBackgroundColor,
								label: __( 'Background Color' ),
							},
							{
								value: textColor.color,
								onChange: setTextColor,
								label: __( 'Text Color' ),
							},
						] }
					/>
					<ContrastChecker
						{ ...{
							textColor: textColor.color,
							backgroundColor: backgroundColor.color,
						} }
					/>					
				</InspectorControls>				
			</div>
		);
	}
    
}

export default compose( [
	withColors( 'backgroundColor', { textColor: 'color' } ),
] )( TestimonialInlineEdit );
