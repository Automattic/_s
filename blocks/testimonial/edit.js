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
	InnerBlocks
} = wp.editor;

const { compose } = wp.compose;

const { 
	RangeControl,
	ButtonGroup,
	IconButton,
	PanelBody,
	TextControl
} = wp.components;

/**
 * Internal dependencies
 */
import ImageEdit from '../common/image';


/**
 * Allowed blocks constant is passed to InnerBlocks precisely as specified here.
 * The contents of the array should never change.
 * The array should contain the name of each block that is allowed.
 * In columns block, the only block we allow is 'core/column'.
 *
 * @constant
 * @type {string[]}
*/
const ALLOWED_BLOCKS = [ 
	'core/paragraph', 
	'core/list', 
	'core/more', 
	'core-embed/youtube',
	'core/button'
];

/**
 * Default block template
 * 
 * @constant
 * @type {string[]}
*/
const TEMPLATE = [ 
	[ 'core/paragraph', {
		content: 'This text should be shown in the preview..',
	} ],
	[ 'core/more', { } ],	
	[ 'core/paragraph', {
		content: 'This text should be shown in the single testimonial..',
	} ],
];

class TestimonialEdit extends Component {

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
			avatarUrl,
			avatarId,
			authorName,
			authorRole,
			rating,
			companyLogoUrl,
			companyLogoId,			
			source,
			date,
		} = attributes;
		
		const avatarUpdate = ( update ) => {
			
			const localUpdate = mapKeys( pick( update, [ 'id', 'url' ] ), function(value, key) {
				return 'avatar' + capitalize(key);
			});

			setAttributes( localUpdate );
		}		

		const companyLogoUpdate = ( update ) => {
			
			const localUpdate = mapKeys( pick( update, [ 'id', 'url' ] ), function(value, key) {
				return 'companyLogo' + capitalize(key);
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
		
		const isStyle = RegExp(/is-style-/)
		const styleName = isStyle.test(attributes.className)
			? attributes.className.replace(isStyle, '')
			: null		
		
		return (
			<div className={ classNames } style={ style } >
				
				<div className={ 'wp-block-svbk-testimonial__header' } >
			
					<ImageEdit
						setAttributes={ avatarUpdate }
						url={ avatarUrl }
						id={ avatarId }
						className={ 'wp-block-svbk-testimonial__author' }
						labels={ { title: __( 'Author Avatar', '_svbk' ) } }
					/> 
					<PlainText
						value={ authorName }
						onChange={ ( value ) => setAttributes( { authorName: value } ) }
						placeholder={ __( 'Name Surname..', '_svbk' ) }
						className={ 'wp-block-svbk-testimonial__author-name' }
					/>
					<PlainText
						value={ authorRole }
						onChange={ ( value ) => setAttributes( { authorRole: value } ) }
						placeholder={ __( 'Role..', '_svbk' ) }
						className={ 'wp-block-svbk-testimonial__role-name' }
					/>
					
					<div className={ classnames( 'block-editor-rating',  { [ `rating-${rating}` ] : rating }  ) }>
						<ButtonGroup className={ 'block-editor-rating__stars' }>
						{
							[1, 2, 3, 4, 5].map( (rate) => (
								<IconButton
									key={ rate }
									icon={ ( rating >= rate ) ? 'star-filled' : 'star-empty' }
									onClick={ () => { setAttributes( { rating: rate, ratingMeta: rate } ) } }
								    label={ rate }
								/>
							) )
						}				
						</ButtonGroup>
					</div>
	
					<div className={ 'wp-block-svbk-testimonial__meta' } >
						<PlainText
							value={ date }
							onChange={ ( value ) => setAttributes( { date: value } ) }
							placeholder={ __( 'Date..', '_svbk' ) }
							className={ 'wp-block-svbk-testimonial__date' }
						/>
						<PlainText
							value={ source }
							onChange={ ( value ) => setAttributes( { source: value } ) }
							placeholder={ __( 'Source..', '_svbk' ) }
							className={ 'wp-block-svbk-testimonial__source' }
						/>				
					</div>
				
					<ImageEdit
						setAttributes={ companyLogoUpdate }
						url={ companyLogoUrl }
						id={ companyLogoId }
						className={ 'wp-block-svbk-testimonial__company-logo' }
						labels={ { title: __( 'Company Logo', '_svbk' ) } }
					/>
					
				</div>
	
				<div className={ 'wp-block-svbk-testimonial__content' } >
					<InnerBlocks 
						templateLock={ false }
						allowedBlocks={ ALLOWED_BLOCKS }
						template={ TEMPLATE }
					/>
				</div>						
				
				<InspectorControls>
					<PanelBody title={ __( 'Testimonial Settings', '_svbk' ) }>
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
] )( TestimonialEdit );
