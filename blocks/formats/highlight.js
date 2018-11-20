/**
 * WordPress dependencies
 */
const { __ } =  wp.i18n;
const { 
	toggleFormat,
	registerFormatType
} = wp.richText;

const { 
	Fragment 
} = wp.element;

const { SVG, Path } = wp.components;

const { 
	RichTextToolbarButton, 
	RichTextShortcut 
} = wp.editor;

const name = 'svbk/highlight';

export const highlight = {
	name,
	title: __( 'Highlight' ),
	tagName: 'em',
	className: 'highlight',
	edit( { isActive, value, onChange } ) {
		const onToggle = () => onChange( toggleFormat( value, { type: name } ) );

		return (
			<Fragment>
				<RichTextShortcut
					type="primary"
					character="h"
					onUse={ onToggle }
				/>
				<RichTextToolbarButton
					icon= { <SVG xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16"><Path  d="M6,5 L2,9 L3,10 L0,13 L4,13 L5,12 L5,12 L6,13 L10,9 L6,5 L6,5 Z M10.2937851,0.706214905 C10.6838168,0.316183183 11.3138733,0.313873291 11.7059121,0.705912054 L14.2940879,3.29408795 C14.6839524,3.68395241 14.6796852,4.32031476 14.2937851,4.7062149 L11,8 L7,4 L10.2937851,0.706214905 Z"/></SVG> }
					title={ __( 'Highlight' ) }
					onClick={ onToggle }
					isActive={ isActive }
					shortcutType="primary"
					shortcutCharacter="m"
					className="toolbar-button-with-text toolbar-button__advanced-mark"
				/>			
			</Fragment>
		);
	},
};