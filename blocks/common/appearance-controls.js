import classnames from 'classnames';

const { createHigherOrderComponent } = wp.compose;
const { Fragment } = wp.element;
const { InspectorControls } = wp.blockEditor;
const { PanelBody, ToggleControl } = wp.components;
const { __ } = wp.i18n


const withAppearanceControls =  createHigherOrderComponent( ( BlockEdit ) => {
	return ( props ) => {
	    
	    const { 
	    	setAttributes, 
	    	attributes: { 
	    		mobileHidden,
	    		criticalRendering,
	    		enableAnimation,
	    		className 
	    	}
	    } = props;
	    
	    props.attributes.className = classnames( className, { 
	    	'is-critical-rendering': criticalRendering,
	    	'is-mobile-hidden': mobileHidden,
	    	'is-animated': enableAnimation
	    } );
	    
		return (
			<Fragment>
				<BlockEdit { ...props } />
				<InspectorControls>
					<PanelBody title={ __( 'Appearance', '_svbk' ) } initialOpen={ false } >
    					<ToggleControl
    						label={ __( 'Critical Rendering' ) }
    						onChange={ ( value ) => setAttributes( { criticalRendering: value } ) } 
    						checked={ criticalRendering }
    					/>						
    					<ToggleControl
    						label={ __( 'Hide on Mobile' ) }
    						onChange={ ( value ) => setAttributes( { mobileHidden: value } ) } 
    						checked={ mobileHidden }
    					/>						
    					<ToggleControl
    						label={ __( 'Enable Animation' ) }
    						onChange={ ( value ) => setAttributes( { enableAnimation: value } ) } 
    						checked={ enableAnimation }
    					/>						
					</PanelBody>
				</InspectorControls>
			</Fragment>
		);
	};
}, "withAppearanceControls" );


const withAppearanceSettings = ( settings, name ) => {

	lodash.assign( settings, 
    	{
    		edit: withAppearanceControls( settings.edit ),
	        attributes: lodash.assign( {}, settings.attributes, 
	        	{
	            	criticalRendering: {
	            		type: 'boolean',
	            		default: false,
	            	},
	            	mobileHidden: {
	            		type: 'boolean',
	            		default: false,
	            	},	            	
	            	enableAnimation: {
	            		type: 'boolean',
	            		default: false,
	            	},	            	
	        	} 
	        ),

		} 
	);    

    return settings;
}


export default withAppearanceSettings;