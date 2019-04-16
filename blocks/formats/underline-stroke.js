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

const name = 'svbk/underline-stroke';

export const underlineStroke = {
	name,
	title: __( 'Underline Stroke' ),
	tagName: 'em',
	className: 'underline-stroke',
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
					icon= { 'admin-customizer' }
					title={ __( 'Underline Stroke' ) }
					onClick={ onToggle }
					isActive={ isActive }
					shortcutType="primary"
					shortcutCharacter="h"
					className="toolbar-button-with-text toolbar-button__advanced-mark"
				/>			
			</Fragment>
		);
	},
};