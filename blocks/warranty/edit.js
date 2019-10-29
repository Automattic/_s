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
	InspectorControls,
	BlockControls,
	ContrastChecker,
	PanelColorSettings,
	withColors,
	InnerBlocks,
} = wp.blockEditor;

const { 
	PanelBody,
	Button,
	ButtonGroup
} = wp.components;

const { compose } = wp.compose;

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
	'core/list' 
];

/**
 * Default block template
 * 
 * @constant
 * @type {string[]}
*/
const TEMPLATE = [ 
	[ 'core/paragraph', {
		content: 'Lorem ipsum sit amet...',
	} ]
];

class WarrantyEdit extends Component {

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
			sealUrl,
			sealId, 
			sealSize, 
			title,
			subtitle,
			footer,
			backgroundImageUrl,
			backgroundImageId,
			backgroundImageSize
		} = attributes;
		
		const classNames = classnames( className, {
			'is-selected': isSelected,
			[ backgroundColor.class ]: backgroundColor.class,
			[ textColor.class ]: textColor.class,
		} );		
		
		const containerStyle = backgroundImageUrl ? {
			backgroundImage: `url(${backgroundImageUrl})`,
			backgroundSize: 'cover',
		} : {};
		
		const contentStyle = {
			backgroundColor: backgroundColor.color,
			color: textColor.color,
		};
		
		const sealUpdate = ( update ) => {
			
			const localUpdate = mapKeys( pick( update, [ 'id', 'url', 'size' ] ) , function(value, key) {
				// Convert url to pictureUrl, id to pictureId, etc
				return 'seal' + capitalize(key);
			});

			setAttributes( localUpdate );
		}		

		const backgroundImageUpdate = ( update ) => {
			
			const localUpdate = mapKeys( pick( update, [ 'id', 'url', 'size' ] ) , function(value, key) {
				// Convert url to pictureUrl, id to pictureId, etc
				return 'backgroundImage' + capitalize(key);
			});

			setAttributes( localUpdate );
		}		
		
		return (
			<Fragment>
				<div className={ classNames } style={ containerStyle } >
					<div className={ 'wp-block-svbk-warranty__content' } style={ contentStyle } >
						<ImageEdit
							setAttributes={ sealUpdate }
							url={ sealUrl }
							id={ sealId }
							size={ sealSize }
							labels={ { title: 'Seal' } }
						/>
					    <header className={ 'wp-block-svbk-warranty__header' } > 
							<RichText
		    			    	tagName={ 'h3' }
								value={ title }
								onChange={ ( value ) => setAttributes( { title: value } ) }
								placeholder={ __( 'This is my title..', '_svbk' ) }
								className={ 'wp-block-svbk-warranty__title' }
							/>
							<RichText
		    			    	tagName={ 'p' }
								value={ subtitle }
								onChange={ ( value ) => setAttributes( { subtitle: value } ) }
								placeholder={ __( 'Subtitle..', '_svbk' ) }
								className={ 'wp-block-svbk-warranty__subtitle' }
							/>
						</header>						
						<InnerBlocks 
							templateLock={ false }
							allowedBlocks={ ALLOWED_BLOCKS }
							template={ TEMPLATE }
						/>		
						<RichText
							tagName={ 'footer' }
							value={ footer }
							onChange={ ( value ) => { setAttributes( { footer: value } ) } }
							placeholder={ __( 'Footer content..', '_svbk' ) }
							className={ 'wp-block-svbk-warranty__footer' }
						/>
					</div>
				</div>
				<InspectorControls>
					<PanelBody
						title={ __( 'Background Settings', '__svbk' ) }
					>
						<ImageEdit
							setAttributes={ backgroundImageUpdate }
							url={ backgroundImageUrl }
							id={ backgroundImageId }
							size={ backgroundImageSize }
							labels={ { title: 'Background Image' } }
							inInspector={true}
						/>
						{ backgroundImageUrl && (
						<Button isDestructive 
							className={ 'wp-block-svbk-warranty__bg-remove' }
							onClick={ () => { setAttributes( { backgroundImageUrl: '', backgroundImageId: null  } ) } }
						>
							{ __( 'Remove' , '_svbk' ) }
						</Button> 
						) }
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
			</Fragment>
		);
	}
    
}

export default compose( [
	withColors( 'backgroundColor', { textColor: 'color' } ),
] )( WarrantyEdit );
