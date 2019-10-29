/* global wp */
/* global lodash */

const { Fragment, Component } = wp.element;
/**
 * External dependencies
 */
const { 
    pick,
    mapKeys,
    capitalize
} = lodash;
import classnames from 'classnames';

/**
 * WordPress dependencies
 */
const { __ } = wp.i18n; // Import __() from wp.i18n
const { 
	RichText, 
	URLInput,
	InspectorControls,
	BlockControls,
	ContrastChecker,
	PanelColorSettings,
	FontSizePicker,
	AlignmentToolbar,
	withColors,
	withFontSizes,
	InnerBlocks
} = wp.blockEditor;

const {
	Dashicon,
	IconButton,
	Panel,
	PanelBody,
	Placeholder,
	TextControl,
	Button,
} = wp.components;

const { compose } = wp.compose;

/**
 * Internal dependencies
 */

import ImageEdit from '../common/image';
import IconEdit from '../icon/edit';
import { HeadingToolbar } from '../common/heading';

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
	'core/heading',
	'core/group'
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


class CardEdit extends Component {

    render() {
    	
		const {
			attributes,
			setAttributes,
			className,
			isSelected,
			backgroundColor,
			textColor,
			ribbonColor,
			setBackgroundColor,
			setTextColor,
			setRibbonColor,
			fontSize,
			setFontSize,
		} = this.props;

		const { 
		    align,
			pictureUrl,
			pictureAlt,
			pictureId, 
			pictureSize,
			title,
			titleLevel,
			subtitle, 
			buttonUrl, 
			buttonText,
			imageType,
			ribbonText,
		} = attributes;
		
		const classNames = classnames( className, {
			'is-selected': isSelected,
			[ backgroundColor.class ]: backgroundColor.class,
			[ textColor.class ]: textColor.class,
			[ fontSize.class ]: fontSize.class,			
		} );		
		
		const pictureUpdate = ( update ) => {
			
			const localUpdate = mapKeys( pick( update, [ 'id', 'url', 'alt', 'size' ] ) , function(value, key) {
				// Convert url to pictureUrl, id to pictureId, etc
				return 'picture' + capitalize(key);
			});

			setAttributes( localUpdate );
		}
		
		const style = {
			backgroundColor: backgroundColor.color,
			color: textColor.color,
			fontSize: fontSize.size ? fontSize.size + 'px' : undefined,
			textAlign: align,			
		};
		
		const ribbonStyle = {
			backgroundColor: ribbonColor ? ribbonColor.color : undefined,
		};			
		
        const titleTag = titleLevel ? ( 'h' + titleLevel ) : 'h3';       

		return (
			<Fragment>
				<div className={ classNames } style={ style } >
					{ ribbonText && (
						<div className={ 'wp-block-svbk-card__ribbon' } style={ ribbonStyle } >{ ribbonText }</div>
					) } 				
				   { !imageType && (
				    <Placeholder
				        icon="format-image"
				        label={ __( 'Image' ) }
				        instructions={ __( 'Please select if you want to use an image or an icon' ) }
				    >
						<Button 
							isLarge={ true }
							onClick={ () => { setAttributes( { imageType: 'picture' }) } }
						>
							{ __( 'Image' ) }
						</Button>
						<Button
							isLarge={ true }
							onClick={ () => { setAttributes( { imageType: 'icon' }) } }
						>
							{ __( 'Icon' ) }
						</Button>						
				    </Placeholder>
				   ) }
				   { imageType && (
						<IconButton 
							icon="no" 
							label={ __( 'Back to picture type choice' ) }
							onClick={ () => { setAttributes( { imageType: null }) } }
						/>
				    ) }				    
				    { 'picture' == imageType && (
						<ImageEdit
							setAttributes={ pictureUpdate }
							url={ pictureUrl }
							id={ pictureId }
							size={ pictureSize }
							alt={ pictureAlt }
							isMain={ true }
						/> 
					) }
				    { 'icon' == imageType && ( 
				    	<IconEdit 
				    		{ ...this.props }
				    	/> 
				    ) }					
					<RichText
    			    	tagName={ titleTag }
						value={ title }
						onChange={ ( value ) => setAttributes( { title: value } ) }
						placeholder={ __( 'This is my title..', '_svbk' ) }
						className={ 'wp-block-svbk-card__title' }
					/>
					<RichText
						tagName={ 'div' }
						value={ subtitle }
						onChange={ ( value ) => setAttributes( { subtitle: value } ) }
						placeholder={ __( 'Subtitle..', '_svbk' ) }
						className={ 'wp-block-svbk-card__subtitle' }
					/>	
					<InnerBlocks 
						templateLock={ false }
						allowedBlocks={ ALLOWED_BLOCKS }
						template={ TEMPLATE }
					/>
					<RichText
						placeholder={ __( 'Button text…' ) }
						value={ buttonText }
						onChange={ ( value ) => setAttributes( { buttonText: value } ) }
						formattingControls={ [ 'bold', 'italic', 'strikethrough' ] }
						className={ 'wp-block-svbk-card__link block-library-button'}
					/>
					{ isSelected && (
						<form
							className="block-library-button__inline-link"
							onSubmit={ ( event ) => event.preventDefault() }>
							<Dashicon icon="admin-links" />
							<URLInput
								value={ buttonUrl }
								onChange={ ( value ) => setAttributes( { buttonUrl: value } ) }
							/>
							<IconButton icon="editor-break" label={ __( 'Apply' ) } type="submit" />
						</form>
					) }						
				</div>
                <BlockControls>
                    <HeadingToolbar minLevel={ 2 } maxLevel={ 5 } selectedLevel={ titleLevel } onChange={ ( newLevel ) => { setAttributes( { titleLevel: newLevel } ) } } />
					<AlignmentToolbar
						value={ align }
						onChange={ ( nextAlign ) => {
							setAttributes( { align: nextAlign } );
						} }
					/>				
				</BlockControls>
				<InspectorControls>
					<PanelBody title={ __( 'Text Settings' ) } className="blocks-font-size">
						<FontSizePicker
							value={ fontSize.size }
							onChange={ setFontSize }
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
						fontSize={ fontSize.size }
					/>					
					<PanelBody  title={ __( 'Ribbon Settings', '_svbk' ) } >
					    <TextControl
					        label={ __( 'Ribbon Text', '_svbk' ) }
					        value={ ribbonText }
					        onChange={ ( value ) => setAttributes( { ribbonText: value } ) }
					    />
				    </PanelBody>
					<PanelColorSettings
						title={ __( 'Ribbon Color Settings', '_svbk' ) }
						initialOpen={ false }
                        colorSettings={ [
							{
								value: ribbonColor.color,
								onChange: setRibbonColor,
								label: __( 'Ribbon Color' ),
							},
						] }
					/>						
				</InspectorControls>				
			</Fragment>
		);
	}
    
}

export default compose( [
	withColors( 'backgroundColor', { textColor: 'color' }, 'ribbonColor' ),
	withFontSizes( 'fontSize' )
] )( CardEdit );
