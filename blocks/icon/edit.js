/**
 * External dependencies
 */
import classnames from 'classnames';

/**
 * WordPress dependencies
 */
const { __ } = wp.i18n;
const { Component } = wp.element;
const { 
	InspectorControls,
	PanelColorSettings,
	withColors,	
} = wp.blockEditor;


import IconEditor from './editor';

class IconEdit extends Component {
	
	render() {
		const { 
			setTextColor,
			textColor,
		} = this.props;
		
		const classNames = classnames( 'wp-block-svbk-icon', {
			[ textColor.class ]: textColor.class,
		} );

		return (
			<div className={ classNames } >
				<IconEditor { ...this.props } />
				<InspectorControls>
					<PanelColorSettings
						title={ __( 'Icon Color Settings' ) }
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
			</div>
		);
	}
}

export default withColors( 'backgroundColor', { textColor: 'color' } )( IconEdit );
