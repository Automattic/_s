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
const { __ } = wp.i18n;
const { 
	RichText, 
	InspectorControls,
	PanelColorSettings,
	withColors,
} = wp.editor;

const { compose } = wp.compose;

import IconEditor from '../icon/editor';

class StatsEdit extends Component {

    render() {
    	
		const {
			attributes,
			setAttributes,
			className,
			isSelected,
			textColor,
			setTextColor,
		} = this.props;

		const { 
		    align,
			metric,
			description, 
		} = attributes;
		
		const classNames = classnames( className, {
			'is-selected': isSelected,
			[ textColor.class ]: textColor.class,
		} );		
		
		const style = {
			color: textColor.color,
			textAlign: align,			
		};
		
		return (
			<Fragment>
				<div className={ classNames } >
				    <IconEditor { ...this.props } />
				    <div style={ style }> 
						<RichText
	    			    	tagName={ 'div' }
							value={ metric }
							onChange={ ( value ) => setAttributes( { metric: value } ) }
							placeholder={ __( '40M subscribers..', '_svbk' ) }
							className={ 'wp-block-svbk-stats__metric' }
						/>
						<RichText
							tagName={ 'div' }
							value={ description }
							onChange={ ( value ) => setAttributes( { description: value } ) }
							placeholder={ __( 'Description..', '_svbk' ) }
							className={ 'wp-block-svbk-stats__description' }
						/>
					</div>
				</div>
				<InspectorControls>
					<PanelColorSettings
						title={ __( 'Color Settings' ) }
						initialOpen={ false }
                        colorSettings={ [
							{
								value: textColor.color,
								onChange: setTextColor,
								label: __( 'Text Color' ),
							},
						] }
					/>
				</InspectorControls>
			</Fragment>
		);
	}
    
}

export default compose( [
	withColors( 'backgroundColor', { textColor: 'color' } ),
] )( StatsEdit );
