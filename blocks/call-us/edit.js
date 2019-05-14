/* global wp */
/* global lodash */

import classnames from 'classnames';

/**
 * WordPress dependencies
 */
const { __ } = wp.i18n;
const { Fragment,Component } = wp.element;
const { 
    Dashicon,
	IconButton,
} = wp.components;

const {
    RichText,
} = wp.editor;

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
		    title, 
		    text, 
		    number, 
		    action
		} = attributes;
		
		return (
			<Fragment>
				<RichText
					tagName={ 'h3' }
					value={ title }
					onChange={ ( value ) => setAttributes( { title: value } ) }
					placeholder={ __( 'Vuoi parlarne a voce?', '_svbk' ) }
				/>
				<RichText
					tagName={ 'p' }
					value={ text }
					onChange={ ( value ) => setAttributes( { text: value } ) }
					placeholder={ __( 'Chiamaci al numero', '_svbk' ) }
				/>
				<RichText
					placeholder={ __( 'Action text…' ) }
					value={ action }
					onChange={ ( value ) => setAttributes( { action: value } ) }
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
			</Fragment>
		);
	}
    
}

export default CallUsEdit;