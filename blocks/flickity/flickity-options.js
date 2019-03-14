const { createHigherOrderComponent } = wp.compose;
const { Fragment } = wp.element
const {
	InspectorControls
} = wp.editor;

const {
	PanelBody,
	RangeControl,
	RadioControl,
	ToggleControl
} = wp.components;

const { __ } = wp.i18n
const _ = window.lodash;

// Check if Flickity is enabled on a particular block, based on attributes and optionally blockType
export const isFlickity = ( attributes, blockType ) => {
	
	if ( blockType && ( blockType.name !== 'core/gallery' ) ) {
		return false;
	}
	
	if ( attributes && attributes.className && attributes.className.includes('is-style-flickity') ) {
		return true;
	}
	
	return false;
}

// Extract Flickity options from block attributes
export const getFlickityOptions = function( attributes ){
	
	let flickityOptions = {};
	
    if ( attributes.flickity ) {
	    try {
			flickityOptions = JSON.parse(attributes.flickity);
	    } catch (e) {
	    	console.error( 'Invalid JSON for Flickity Options' );
	    }
    }	
	
	return flickityOptions;
	
}

/**
 * A Higher Order Component to add Flickity editor controls
 * wrapped component.
 *
 * @param {Function} mapContextToProps Function called on every context change,
 *                                     expected to return object of props to
 *                                     merge with the component's own props.
 *
 * @return {Component} Enhanced component with injected context as props.
 */

export const withFlickityEditor = createHigherOrderComponent( ( GalleryEdit ) => {
    
	return ( props ) => {
	    
		const { setAttributes, attributes } = props;
		
		if ( ! isFlickity(attributes) ) {
			return <GalleryEdit { ...props } />;
		}
	   
	    const flickityOptions = getFlickityOptions( attributes );
	   
	    const setFlickityOptions = ( options ) => {
		  	setAttributes( { flickity: JSON.stringify( _.assign({}, flickityOptions, options) ) } );
	    }
		
	    return (
            <Fragment>
                <GalleryEdit { ...props } /> 
    	        <InspectorControls>
                    <PanelBody title={ __( 'Flickity Options' ) } initialOpen={ false }>
    					<ToggleControl
    						label={ __( 'Lazy Load' ) }
    						help={ __( 'Loads cell images when a cell is selected.' ) }
    						onChange={ ( value ) => setFlickityOptions( { lazyLoad: value ? 1 : 0 } ) } 
    						checked={ Boolean( flickityOptions.lazyLoad ) }
    					/>
    					{ flickityOptions.lazyLoad > 0 ? (
	   					    <RangeControl
	    						label={ __( 'How many images to lazyload in adjacent cells' ) }
	    						onChange={ ( value ) => setFlickityOptions( { lazyLoad: Number( value ) } ) } 
	    						value={ flickityOptions.lazyLoad }
	    						min={ 1 }
	    					/>
    					) : null }    
    					<ToggleControl
    						label={ __( 'Wait for images to load' ) }
    						help={ __( 'Unloaded images have no size, which can throw off cell positions. To fix this, the this option re-positions cells once their images have loaded.' ) }
    						onChange={ ( value ) => setFlickityOptions( { imagesLoaded: value } ) } 
    						checked={ Boolean( flickityOptions.imagesLoaded ) }
    					/>    					
    					<ToggleControl
    						label={ __( 'Contain' ) }
    						help={ __( 'Contains cells to carousel element to prevent excess scroll at beginning or end. Has no effect if `wrapAround: true`' ) }
    						onChange={ ( value ) => setFlickityOptions( { contain: value } ) } 
    						checked={ flickityOptions.contain }
    					/>
					    <RadioControl
					        label={ __( 'Cell Alignment' ) }
					        help={ __( 'Align cells within the carousel element.' ) }
					        selected={ flickityOptions.cellAlign || 'center' }
					        options={ [
					            { label: __( 'Left' ), value: 'left' },
					            { label: __( 'Center' ), value: 'center' },
					            { label: __( 'Right' ), value: 'right' },
					        ] }
					        onChange={ ( value ) => setFlickityOptions( { cellAlign: value } ) }
					    />    					
    					<ToggleControl
    						label={ __( 'Wrap Around' ) }
    						help={ __( 'At the end of cells, wrap-around to the other end for infinite scrolling.' ) }
    						onChange={ ( value ) => setFlickityOptions( { wrapAround: value } ) } 
    						checked={ flickityOptions.wrapAround }
    					/>     					
    					<ToggleControl
    						label={ __( 'Prev Next Buttons' ) }
    						help={ __( 'Creates and enables previous & next buttons. Enabled by default' ) }
    						onChange={ ( value ) => setFlickityOptions( { prevNextButtons: value } ) } 
    						checked={ flickityOptions.prevNextButtons !== false }
    					/>
    					<ToggleControl
    						label={ __( 'Paging Dots' ) }
    						help={ __( 'Creates and enables page dots.' ) }
    						onChange={ ( value ) => setFlickityOptions( { pageDots: value } ) } 
    						checked={ flickityOptions.pageDots !== false }
    					/>
   					    <RangeControl
    						label={ __( 'Initial Index' ) }
    						help={ __( 'The initial selected cell.' ) }
    						onChange={ ( value ) => setAttributes( { initialIndex: Number( value ) - 1 } ) } 
    						value={ flickityOptions.initialIndex }
    						initialPosition={ 1 }
    						min={ 1 }
    						max={ attributes.images.length }
    					/>    					
  						<ToggleControl
    						label={ __( 'Group Cells' ) }
    						help={ __( 'Groups cells together in slides. Flicking, page dots, and previous/next buttons are mapped to group slides, not individual cells' ) }
    						onChange={ ( value ) => setFlickityOptions( { groupCells: Number( value ? 2 : 0 ) } ) } 
    						checked={ flickityOptions.groupCells > 0 }
    					/>
    					{ flickityOptions.groupCells > 0 ? (
	   					    <RangeControl
	    						label={ __( 'Group Cells Number' ) }
	    						onChange={ ( value ) => setFlickityOptions( { groupCells: Number( value ) } ) } 
	    						value={ flickityOptions.groupCells }
	    						min={ 2 }
	    					/>
    					) : null }
  						<ToggleControl
    						label={ __( 'Autoplay' ) }
    						help={ __( 'Automatically advances to the next cell.' ) }
    						onChange={ ( value ) => setFlickityOptions( { autoPlay: Number( value ? 3000 : 0 ) } ) } 
    						checked={ flickityOptions.autoPlay > 0 }
    					/>
    					{ flickityOptions.autoPlay > 0 ? (
			            <Fragment>
	   					    <RangeControl
	    						label={ __( 'Autoplay Timeout' ) }
	    						help={ __( 'Advance cells ever X milliseconds. (ex. 3000 = 3 sec)' ) }
	    						onChange={ ( value ) => setFlickityOptions( { autoPlay: Number( value ) } ) } 
	    						value={ flickityOptions.autoPlay }
	    						min={ 100 }
	    						max={ 99999 }
	    					/>
	  						<ToggleControl
	    						label={ __( 'Pause Auto Play on Hover' ) }
	    						help={ __( 'Auto play continues when user hovers over carousel' ) }
	    						onChange={ ( value ) => setFlickityOptions( { pauseAutoPlayOnHover: Boolean( value ) } ) } 
	    						checked={ flickityOptions.pauseAutoPlayOnHover !== false }
	    					/> 
			            </Fragment>
    					) : null }    
    					<ToggleControl
    						label={ __( 'Draggable' ) }
    						help= { __( 'Enables dragging and flicking. Enabled by default when carousel has 2 or more slides' ) }
    						onChange={ ( value ) => setFlickityOptions( { draggable: Boolean( value ) } ) } 
    						checked={ (flickityOptions.draggable !== false) && ( attributes.images.length > 1 ) }
    					/>    
    					{ ( (flickityOptions.draggable !== false) && ( attributes.images.length > 1 ) ) ? (
			            <Fragment>
	    					<ToggleControl
	    						label={ __( 'Free Scroll' ) }
	    						help= { __( 'Enables content to be freely scrolled and flicked without aligning cells to an end position.' ) }
	    						onChange={ ( value ) => setFlickityOptions( { freeScroll: value } ) } 
	    						checked={ flickityOptions.freeScroll }
	    					/> 
	   					    <RangeControl
	    						label={ __( 'Drag threshold' ) }
	    						help={ __( 'The number of pixels a mouse or touch has to move before dragging begins..' ) }
	    						onChange={ ( value ) => setAttributes( { dragThreshold: Number( value ) + 1 } ) } 
	    						value={ flickityOptions.dragThreshold }
	    						min={ 0 }
	    						max={ 999 }
	    					/> 	    					
						</Fragment>	  
    					) : null }
    					<ToggleControl
    						label={ __( 'Adaptive Height' ) }
    						help={ __( 'Changes height of carousel to fit height of selected slide.' ) }
    						onChange={ ( value ) => setFlickityOptions( { adaptiveHeight: value } ) } 
    						checked={ flickityOptions.adaptiveHeight }
    					/>     		
    					<ToggleControl
    						label={ __( 'Right to Left' ) }
    						help={ __( 'Enables right-to-left layout..' ) }
    						onChange={ ( value ) => setFlickityOptions( { rightToLeft: Boolean( value ) } ) } 
    						checked={ flickityOptions.rightToLeft }
    					/>    					
    				</PanelBody>	            
    	        </InspectorControls>
            </Fragment>	        
    	) 
	};
}, 'withFlickityEditor' );
