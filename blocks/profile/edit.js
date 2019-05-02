/* global wp */
/* global lodash */

const { Fragment, Component } = wp.element;
/**
 * External dependencies
 */
const { 
    pick,
    mapKeys,
    capitalize
} = lodash;
import classnames from 'classnames';

/**
 * WordPress dependencies
 */
const { __ } = wp.i18n;
const { 
	RichText, 
	URLInput,
	InspectorControls,
	BlockControls,
	ContrastChecker,
	PanelColorSettings,
	AlignmentToolbar,
	withColors,
} = wp.editor;


const {
	Dashicon,
	IconButton
} = wp.components;

const { compose } = wp.compose;

/**
 * Internal dependencies
 */
import ImageEdit from '../common/image';
import { HeadingToolbar } from '../common/heading';

class ProfileEdit extends Component {

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
			pictureUrl,
			pictureAlt,
			pictureId,		    
			name,
			titleLevel,
			role,			
			content, 
			buttonUrl, 
			buttonText,				
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
		
        const titleTag = titleLevel ? ( 'h' + titleLevel ) : 'h3';
		
		const pictureUpdate = ( update ) => {
			
			const localUpdate = mapKeys( pick( update, [ 'id', 'url', 'alt' ] ) , function(value, key) {
				// Convert url to pictureUrl, id to pictureId, etc
				return 'picture' + capitalize(key);
			});

			setAttributes( localUpdate );
		}
				
		return (
			<Fragment>
				<div className={ classNames } >
					<ImageEdit
						setAttributes={ pictureUpdate }
						url={ pictureUrl }
						id={ pictureId }
						alt={ pictureAlt }
					/> 
				    <div style={ style }> 
						<RichText
	    			    	tagName={ titleTag }
							value={ name }
							onChange={ ( value ) => setAttributes( { name: value } ) }
							placeholder={ __( 'This is my title..', '_svbk' ) }
							className={ 'wp-block-svbk-profile__name' }
						/>
						<RichText
							tagName={ 'div' }
							value={ role }
							onChange={ ( value ) => setAttributes( { role: value } ) }
							placeholder={ __( 'Role..', '_svbk' ) }
							className={ 'wp-block-svbk-profile__role' }
						/>							
						<RichText
							tagName={ 'div' }
							value={ content }
							onChange={ ( value ) => setAttributes( { content: value } ) }
							placeholder={ __( 'Content..', '_svbk' ) }
							className={ 'wp-block-svbk-profile__content' }
						/>
						<RichText
							placeholder={ __( 'Button text…' ) }
							value={ buttonText }
							onChange={ ( value ) => setAttributes( { buttonText: value } ) }
							formattingControls={ [ 'bold', 'italic', 'strikethrough' ] }
							className={ 'wp-block-svbk-profile__button block-library-button'}
						/>
						{ isSelected && (
							<form
								className="block-library-button__inline-link"
								onSubmit={ ( event ) => event.preventDefault() }>
								<Dashicon icon="admin-links" />
								<URLInput
									value={ buttonUrl }
									onChange={ ( value ) => setAttributes( { buttonUrl: value } ) }
								/>
								<IconButton icon="editor-break" label={ __( 'Apply' ) } type="submit" />
							</form>
						) }	
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
] )( ProfileEdit );
