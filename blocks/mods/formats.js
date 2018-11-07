
wp.richText.registerFormatType( 'svbk/link', {
	title: 'Svbk Custom Link',
	tagName: 'a',
	attributes: {
		url: 'href',
	},
	className: 'svbk-link-format',
	edit: function( props ) {
		return wp.element.createElement( props.ToolbarButton, {
			icon: 'editor-strikethrough',
			title: 'Svbk Custom Link',
			onClick: function() {
				props.onChange( wp.richText.toggleFormat( props.value, { type: 'svbk/link', attributes: {
					url: '#test',
				} } ) );
			},
			isActive: props.isActive,
		} );
	},
} )