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
			<Fragment>
				<div>
				    <IconEditor { ...this.props }  />
				    <div style={ style }> 
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

export default BulletEdit;
