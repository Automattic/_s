/**
 * WordPress dependencies
 */
const { __ } =  wp.i18n;
const { 
	toggleFormat
} = wp.richText;

const { 
	Fragment 
} = wp.element;

const { 
	RichTextToolbarButton, 
	RichTextShortcut 
} = wp.blockEditor;

const name = 'svbk/standout';

export const standout = {
	name,
	title: __( 'Standout' ),
	tagName: 'em',
	className: 'standout',
	edit( { isActive, value, onChange } ) {
		const onToggle = () => onChange( toggleFormat( value, { type: name } ) );

		return (
			<Fragment>
				<RichTextShortcut
					type="primary"
					character="s"
					onUse={ onToggle }
				/>
				<RichTextToolbarButton
					icon= { <svg baseProfile="tiny" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="none" d="M0 0h24v24H0V0z"/><path d="M9.93 13.5h4.14L12 7.98zM20 2H4c-1.1 0-2 .9-2 2v16c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm-4.05 16.5l-1.14-3H9.17l-1.12 3H5.96l5.11-13h1.86l5.11 13h-2.09z"/></svg> }
					title={ __( 'Standout' ) }
					onClick={ onToggle }
					isActive={ isActive }
					shortcutType="primary"
					shortcutCharacter="s"
					className="toolbar-button-with-text toolbar-button__advanced-mark"
				/>			
			</Fragment>
		);
	},
};