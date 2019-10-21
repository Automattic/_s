/* global wp */
/* global lodash */

const { Fragment, Component } = wp.element;
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
	InspectorControls,
	BlockControls,
	ContrastChecker,
	PanelColorSettings,
	AlignmentToolbar,
	withColors,
} = wp.blockEditor;

const { compose } = wp.compose;

import IconEditor from '../icon/editor';
import { HeadingToolbar } from '../common/heading';

class BulletEdit extends Component {

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
		    align,
			title,
			titleLevel,
			content, 
		} = attributes;
		
		const classNames = classnames( className, {
			'is-selected': isSelected,
			[ backgroundColor.class ]: backgroundColor.class,
			[ textColor.class ]: textColor.class,
		} );		
		
		const style = {
			backgroundColor: backgroundColor.color,
			color: textColor.color,
			textAlign: align,			
		};
		
        const titleTag = titleLevel ? ( 'h' + titleLevel ) : 'h2';
		
		return (
			<Fragment>
				<div className={ classNames } >
				    <IconEditor { ...this.props }  />
				    <div style={ style }> 
						<RichText
	    			    	tagName={ titleTag }
							value={ title }
							onChange={ ( value ) => setAttributes( { title: value } ) }
							placeholder={ __( 'This is my title..', '_svbk' ) }
							className={ 'wp-block-svbk-bullet__title' }
						/>
						<RichText
							tagName={ 'div' }
							value={ content }
							onChange={ ( value ) => setAttributes( { content: value } ) }
							placeholder={ __( 'Content..', '_svbk' ) }
							className={ 'wp-block-svbk-bullet__content' }
						/>
					</div>
				</div>
                <BlockControls>
                    <HeadingToolbar 
                    	minLevel={ 2 } 
                    	maxLevel={ 5 } 
                    	selectedLevel={ titleLevel } 
                    	onChange={ ( newLevel ) => { setAttributes( { titleLevel: newLevel } ) } } 
                    />
					<AlignmentToolbar
						value={ align }
						onChange={ ( nextAlign ) => {
							setAttributes( { align: nextAlign } );
						} }
					/>				
				</BlockControls>
				<InspectorControls>
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
] )( BulletEdit );
