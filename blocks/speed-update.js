import classnames from 'classnames';

const { createHigherOrderComponent } = wp.compose;
const { Fragment } = wp.element;
const { InspectorControls } = wp.blockEditor;
const { PanelBody, ToggleControl } = wp.components;
const { __ } = wp.i18n


const withSpeedUpdate =  createHigherOrderComponent( ( BlockEdit ) => {
	return ( props ) => {
	    
	    const { setAttributes, attributes: { criticalRendering, className } } = props;
	    
	    if ( criticalRendering ) {
	        props.attributes.className = classnames( className, { 'critical-rendering': criticalRendering } );
	    }
	    
		return (
			<Fragment>
				<BlockEdit { ...props } />
				<InspectorControls>
					<PanelBody title={ __( 'Speed Update' ) } initialOpen={ false } >
    					<ToggleControl
    						label={ __( 'Critical Rendering' ) }
    						onChange={ ( value ) => setAttributes( { criticalRendering: value } ) } 
    						checked={ criticalRendering }
    					/>						
					</PanelBody>
				</InspectorControls>
			</Fragment>
		);
	};
}, "withSpeedUpdate" );


function applySpeedUpdate( settings, name ){

	lodash.assign( settings, 
    	{
    		edit: withSpeedUpdate( settings.edit ),
	        attributes: lodash.assign( {}, settings.attributes, 
	        	{
	            	criticalRendering: {
	            		type: 'boolean',
	            		default: false,
	            	},
	        	} 
	        ),

		} 
	);    

    return settings;
}

wp.hooks.addFilter( 'blocks.registerBlockType', 'svbk/speed-update', applySpeedUpdate, 100 );