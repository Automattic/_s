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
	InspectorControls,
	PanelColorSettings,
	withColors,
	InnerBlocks
} = wp.editor;

const {
	PanelBody,
	ToggleControl,
	RangeControl,
} = wp.components;

const { compose } = wp.compose;

class GridEdit extends Component {

    render() {
    	
		const {
			attributes,
			setAttributes,
			className,
			isSelected,
			backgroundColor,
			setBackgroundColor,
		} = this.props;

		const { 
			columns,
		    equalHeight,
		} = attributes;
		
		const classNames = classnames( className,  `has-${ columns }-columns`, {
			'is-selected': isSelected,
			[ backgroundColor.class ]: backgroundColor.class,
			[ 'has-equal-cell-height' ]: equalHeight,
		} );		
		
		const style = {
			backgroundColor: backgroundColor.color,
		};

		return (
			<Fragment>
				<div className={ classNames } style={ style } >
					<InnerBlocks />
				</div>
				<InspectorControls>
					<PanelBody title={ __( 'Grid Settings', '_svbk' ) } >
					    <RangeControl
					        label={ __( 'Columns', '_svbk' ) }
					        value={ columns }
					        onChange={ ( columns ) => setAttributes( { columns } ) }
					        min={ 2 }
					        max={ 6 }
					    />
					    <ToggleControl
							label={ __( 'Equal Height', '_svbk' ) }
        					help={ equalHeight ? 'All cells have the same height' : 'Cell inherit their height from the content' }
        					checked={ equalHeight }
        					onChange={ ( value ) => setAttributes( { equalHeight: Boolean(value) } ) }
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
						] }
					/>
					
				</InspectorControls>				
			</Fragment>
		);
	}
}

export default compose( [
	withColors( 'backgroundColor' ),
] )( GridEdit );
