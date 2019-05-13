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
	InnerBlocks,
	AlignmentToolbar,
	BlockControls,
} = wp.editor;

const {
	PanelBody,
	ToggleControl,
	RangeControl,
	SelectControl,
} = wp.components;

const { compose } = wp.compose;

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
	'svbk/testimonial', 
	'svbk/bullet',
	'svbk/profile',
	'svbk/card',
	'svbk/stats',
	'core/group'
];


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
		    align,
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
					<InnerBlocks 
						templateLock={ false }
						allowedBlocks={ ALLOWED_BLOCKS }
					/>
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
					    <SelectControl
					        label={ __('Columns Alignment') }
					        value={ align }
					        options={ [
					            { label: __('Center'), value: 'center' },
					            { label: __('Left'), value: 'left' },
					            { label: __('Right'), value: 'right' },
					        ] }
					        onChange={ ( value ) => setAttributes( { align: value } ) }
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
                <BlockControls>
					<AlignmentToolbar
						value={ align }
						onChange={ ( nextAlign ) => {
							setAttributes( { align: nextAlign } );
						} }
					/>				
				</BlockControls>				
			</Fragment>
		);
	}
}

export default compose( [
	withColors( 'backgroundColor' ),
] )( GridEdit );
