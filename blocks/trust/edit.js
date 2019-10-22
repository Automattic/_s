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
	withColors,
	InnerBlocks
} = wp.blockEditor;

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
	'core/image'
];

/**
 * Default block template
 * 
 * @constant
 * @type {string[]}
*/
const TEMPLATE = [ 
	[ 'core/image', {} ],
	[ 'core/image', {} ]
];

import { HeadingToolbar } from '../common/heading';

class TrustEdit extends Component {

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
		} = this.props;

		const { 
			title,
			titleLevel,
		} = attributes;
		
		const classNames = classnames( className, {
			'is-selected': isSelected,
			[ backgroundColor.class ]: backgroundColor.class,
			[ textColor.class ]: textColor.class,
			[ ribbonColor.class ]: ribbonColor.class,
		} );		
		
        const titleTag = titleLevel ? ( 'h' + titleLevel ) : 'h2';
		
		return (
			<Fragment>
				<div className={ classNames }>
					<RichText
						tagName={ titleTag }
						value={ title }
						onChange={ ( value ) => setAttributes( { ribbon: value } ) }
						placeholder={ __( 'Ribbon content...', '_svbk' ) }
						className={ 'wp-block-svbk-trust__ribbon' }
					/>
					<InnerBlocks 
						templateLock={ false }
						allowedBlocks={ ALLOWED_BLOCKS }
						template={ TEMPLATE }
					/>
				</div>
                <BlockControls>
                    <HeadingToolbar 
                    	minLevel={ 2 } 
                    	maxLevel={ 5 } 
                    	selectedLevel={ titleLevel } 
                    	onChange={ ( newLevel ) => { setAttributes( { titleLevel: newLevel } ) } } 
                    />			
				</BlockControls>
				<InspectorControls>
					<PanelColorSettings
						title={ __( 'Color Settings' ) }
						initialOpen={ false }
						disableCustomColors={true}
                        colorSettings={ [
							{
								value: backgroundColor.color,
								onChange: setBackgroundColor,
								label: __( 'Background Color' ),
							},
							{
								value: ribbonColor.color,
								onChange: setRibbonColor,
								label: __( 'Ribbon Color' ),
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
							ribbonColor: ribbonColor.color,
							backgroundColor: backgroundColor.color,
						} }
					/>	
					<ContrastChecker
						{ ...{
							ribbonColor: ribbonColor.color,
							textColor: textColor.color,
						} }
					/>						
				</InspectorControls>				
			</Fragment>
		);
	}
    
}

export default compose( [
	withColors( 'backgroundColor', { textColor: 'color' }, 'ribbonColor' ),
] )( TrustEdit );
