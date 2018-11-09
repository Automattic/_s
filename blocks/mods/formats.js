/**
 * WordPress dependencies
 */
const { __ } =  wp.i18n;
const { 
	toggleFormat,
	registerFormatType
} = wp.richText;
const { Fragment } = wp.element;

const { RichTextToolbarButton, RichTextShortcut } = wp.editor;
const { SVG, Path } = wp.components;

const settings = {
	name: 'svbk/highlight',
	title: __( 'Highlight' ),
	tagName: 'em',
	className: 'highlight',
	edit( { isActive, value, onChange } ) {
		const onToggle = () => onChange( toggleFormat( value, { type: 'svbk/highlight' } ) );

		return (
			<Fragment>
				<RichTextShortcut
					type="access"
					character="m"
					onUse={ onToggle }
				/>
				<RichTextToolbarButton
					name="highlight"
					icon="warning"
					title={ __( 'Highlight' ) }
					onClick={ onToggle }
					isActive={ isActive }
					shortcutType="access"
					shortcutCharacter="m"
				/>			
			</Fragment>
		);
	},
}

wp.richText.registerFormatType( 'svbk/highlight', settings );