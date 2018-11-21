/**
 * WordPress dependencies
 */
const { __ } = wp.i18n;

const {
	createBlock,
	getPhrasingContentSchema,
	getBlockAttributes,
	getBlockType,
	registerBlockType,
} = wp.blocks;

const {
	BlockControls,
	InnerBlocks,
	InspectorControls
} = wp.editor;

const { 
	Fragment 
} = wp.element;

const { 
	PanelBody,
	ToggleControl,
	TextControl	
} = wp.components;


registerBlockType( 'svbk/header', {
    title: __( 'Header' ),
	
	keywords: [ __( 'header' ), __( 'title' ), __( 'subtitle' ), 'div' ],

    icon: 'editor-textcolor',

    category: 'layout',

    attributes: {
        htmlId: {
            type: 'string',
			source: 'attribute',
			selector: 'section',
			attribute: 'id',       
		},
        wrap: {
            type: 'boolean',
            default: false
        },        
    },
   
    edit: ( props ) => {
		const { attributes: { 
				wrap, 
				htmlId 
			}, 
			setAttributes, 
			className
		} = props;

        const onChangeWrap = ( hasWrapper ) => {
            setAttributes( { wrap: hasWrapper } );
        }

        const onChangeHtmlId = ( newId ) => {
            setAttributes( { htmlId: newId } );
        }
        
		const colorSettings = [ {
			value: backgroundColor.color,
			onChange: setBackgroundColor,
			label: __( 'Background Color' ),
		} ];        

        return (
            <Fragment>
            	<InspectorControls>
					<PanelColorSettings
						title={ __( 'Color Settings' ) }
						initialOpen={ false }
						colorSettings={ colorSettings }
					/>            	
                	<PanelBody title={ __( 'Settings' ) }>
                		<ToggleControl
                           	label = { "Wrap contents"} 
                            checked = { wrap }
                            onChange = { onChangeWrap}
                    	/>
                	</PanelBody>
       			</InspectorControls>
				<section 
					className = { className }
					id = { htmlId }
				>
					<InnerBlocks />
				</section>
			</Fragment>
        );
    },
    save: ( props ) => {
		const { attributes: { 
				wrap, 
				htmlId 
			}, 
			className
		} = props;

		if ( ! wrap ) {
			return ( 
				<section 
					className = { className }
					id = { htmlId }
				>
					<InnerBlocks.Content />
				</section>
			);
		} 
		
		return ( 
			<section 
				className = { className }
				id = { htmlId }
			>
				<div className = { 'content-wrapper' } >
					<InnerBlocks.Content />
				</div>
			</section>
		);
		
    },
} );
