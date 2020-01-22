/* global wp */
/* global lodash */

/**
 * WordPress dependencies
 */

const { Fragment, Component } = wp.element;
const { __ } = wp.i18n; // Import __() from wp.i18n
const { 
	RichText,
	BlockControls,
	AlignmentToolbar,
	FontSizePicker,
	withFontSizes,
	InspectorControls
} = wp.blockEditor;

const {
	PanelBody
} = wp.components;

const { compose } = wp.compose;


import IconEditor from '../icon/editor';
import classnames from 'classnames';

class IconParagraphEdit extends Component {

    render() {
    	
		const {
			attributes,
			setAttributes,
			className,
			fontSize,
			setFontSize,
		} = this.props;

		const { 
		    align,
			content, 
		} = attributes;
		

		const classNames = classnames( className, {
			[ fontSize.class ]: fontSize.class,			
		} );
		
		const style = {
			textAlign: align,
			fontSize: fontSize.size ? fontSize.size + 'px' : undefined,
		};
		
		return (
			<Fragment>
				<div className={ 'wp-block-svbk-icon-paragraph' }>
					<IconEditor { ...this.props } className={ 'wp-block-svbk-icon-paragraph__icon' } />
					<RichText
						tagName={ 'div' }
						value={ content }
						style={ style }
						onChange={ ( value ) => setAttributes( { content: value } ) }
						placeholder={ __( 'Content..', '_svbk' ) }
						className={ 'wp-block-svbk-icon-paragraph__content' }
					/>
					<BlockControls>
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
					</InspectorControls>	
				</div>
			</Fragment>
		);
	}
}

export default compose( [
	withFontSizes( 'fontSize' )
] )( IconParagraphEdit );
