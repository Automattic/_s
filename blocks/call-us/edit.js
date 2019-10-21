/* global wp */
/* global lodash */

import classnames from 'classnames';

/**
 * WordPress dependencies
 */
const { __ } = wp.i18n;
const { Component } = wp.element;
const { 
    Dashicon,
	IconButton,
} = wp.components;

const {
    RichText,
	BlockControls,
	AlignmentToolbar,
} = wp.blockEditor;

/**
 * Internal dependencies
 */


class CallUsEdit extends Component {

    render() {

        const {
			attributes,
			setAttributes,
			className,
			isSelected,
        } = this.props;

		const { 
		    number, 
		    action,
		    actionWide,
		    align,
		} = attributes;
		
		const classNames = classnames( className, {
			[`has-action`]: action,
			[`has-action-wide`]: actionWide,
			[`has-align-${align}`]: align,
		} );			
		
		return (
			<div classNames={ classNames } >
				<RichText
					placeholder={ __( 'Action text…' ) }
					value={ action }
					onChange={ ( value ) => setAttributes( { action: value } ) }
					formattingControls={ [ 'bold', 'italic', 'strikethrough' ] }
					className={ 'wp-block-svbk-hero__link block-library-button'}
				/>
				<RichText
					placeholder={ __( 'Wide button action text…' ) }
					value={ actionWide }
					onChange={ ( value ) => setAttributes( { actionWide: value } ) }
					formattingControls={ [ 'bold', 'italic', 'strikethrough' ] }
					className={ 'wp-block-svbk-hero__link block-library-button'}
				/>				
				{ isSelected && (
					<form
						className="block-library-button__inline-link"
						onSubmit={ ( event ) => event.preventDefault() }>
						<Dashicon icon="phone" />
						<div className={ 'block-editor-call-button-input' }>
							<input
								type="text"
								aria-label={ __( 'Phone Number', '_svbk' ) }
								required
								value={ number }
								onChange={ ( event ) => setAttributes( { number: event.target.value } ) }
								placeholder={ __( '01 23456789' ) }
								role="combobox"
							/>
						</div>
						<IconButton icon="editor-break" label={ __( 'Apply' ) } type="submit" />
					</form>
				) }	
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

export default CallUsEdit;