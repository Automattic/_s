/* global wp */
/* global lodash */

/**
 * WordPress dependencies
 */

const { Component } = wp.element;
const { __ } = wp.i18n; // Import __() from wp.i18n
const { 
	RichText,
	BlockControls,
	AlignmentToolbar,
} = wp.blockEditor;


import IconEditor from '../icon/editor';

class BulletEdit extends Component {

    render() {
    	
		const {
			attributes,
			setAttributes,
		} = this.props;

		const { 
		    align,
			content, 
		} = attributes;
		
		
		const style = {
			textAlign: align,
		};
		
		return (
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
			</div>
		);
	}
}

export default BulletEdit;
