/* global wp */
/* global lodash */

const { Fragment, Component } = wp.element;
/**
 * External dependencies
 */
import classnames from 'classnames';
import { GoogleMap, Marker } from '@react-google-maps/api';
const { 
    pick,
    mapKeys,
    capitalize
} = lodash;

/**
 * Internal dependencies
 */
import ImageEdit from '../common/image';

/**
 * WordPress dependencies
 */
const { __ } = wp.i18n;
const { 
	RichText, 
	InspectorControls,
} = wp.editor;

const { 
	RangeControl, 
	TextControl,
	SelectControl,
	PanelBody,
} = wp.components;

const { 
	createRef
} = wp.element;

import MarkerEdit from '../common/image';

class MapEdit extends Component {

	constructor (props) {
		super(...arguments);
		
		this.state = {
			editingMarker: false,
		}		
		
		this.mapRef = createRef();
		
		// this.autocomplete = null
		
		// this.onAutocompleteLoad = this.onAutocompleteLoad.bind(this);
		// this.onPlaceChanged = this.onPlaceChanged.bind(this);
		
		this.onCenterChange 	= this.onCenterChange.bind(this);		
		this.onZoomChange		= this.onZoomChange.bind(this);		
		this.onAddMarkerClick	= this.onAddMarkerClick.bind(this);		
		this.onMapClick			= this.onMapClick.bind(this);		
	}
	
	// onAutocompleteLoad (autocomplete) {
	// 	console.log('autocomplete: ', autocomplete)
		
	// 	this.autocomplete = autocomplete
	// }
	
	// onPlaceChanged () {
	// 	if (this.autocomplete !== null) {
	// 	  console.log(this.autocomplete.getPlace())
	// 	} else {
	// 	  console.log('Autocomplete is not loaded yet!')
	// 	}
	// }
	
	// markerUpdate ( update ) {
		
	// 	const localUpdate = mapKeys( pick( update, [ 'id', 'url' ] ) , function(value, key) {
	// 		// Convert url to pictureUrl, id to pictureId, etc
	// 		return 'marker' + capitalize(key);
	// 	});

	// 	setAttributes( localUpdate );
	// }
	
	onCenterChange () {
		const {
			setAttributes,
		} = this.props;		
	
		const center = this.getMapCenter();
		
		if ( center ) {
			setAttributes({
				centerLat: center.lat,
				centerLng: center.lng
			});		
		}
	}		
	
	getMapCenter(){
		const mapRef = this.mapRef.current;
		
		if ( !mapRef ) return;
		
		return {
			lat: mapRef.state.map.center.lat().toFixed(7), 
			lng: mapRef.state.map.center.lng().toFixed(7) 
		};		
	}
	
	onZoomChange() {
		
		const {
			setAttributes,
		} = this.props;

		const mapRef = this.mapRef.current;
		
		if ( mapRef ) {
			setAttributes( {zoom: mapRef.state.map.zoom } );
		}
	}		

	onMapClick() {
		this.setState( { editingMarker: false } );
	}

	onAddMarkerClick() {
		
		const mapCenter = this.getMapCenter();
		
		this.addMarker(mapCenter);
	}
	
	addMarker( marker ) {
		
		const {
			attributes,
			setAttributes,
		} = this.props;

		let { 
			markers
		} = attributes;		
	
		if ( !markers ) {
			markers = [];
		}
	
		markers.push( marker );
		setAttributes( { markers } );
		this.forceUpdate();
	}
	
	onEditMarker( index ) {
		this.setState( { editingMarker: index } );
	}
		
	updateMarker( index, markerUpdate ) {
		
		const {
			attributes,
			setAttributes,
		} = this.props;

		const { 
			markers
		} = attributes;		
		
		Object.assign( markers[index], markerUpdate );
		setAttributes( { markers } );
		this.forceUpdate();
	}	

	render() {
    	
		const {
			attributes,
			setAttributes,
			className,
			isSelected,
		} = this.props;

		const { 
			centerLat, 
			centerLng,
			markers,
			zoom,
			type,
		} = attributes;
		
		const classNames = classnames( className, {
			'is-selected': isSelected,
		} );		

		const editableMarker = (this.state.editingMarker !== false) ? markers[this.state.editingMarker] : false;

		const markerIconUpdate = ( index, update ) => {
			
			const localUpdate = mapKeys( pick( update, [ 'id', 'url' ] ) , function(value, key) {
				// Convert url to pictureUrl, id to pictureId, etc
				return 'icon' + capitalize(key);
			});

			this.updateMarker( index, localUpdate );
		}

		return (
			<Fragment>
					<GoogleMap
						zoom={ Number( zoom ) }
						center={ { lat: Number( centerLat ), lng: Number( centerLng ) } }
						onCenterChanged={ this.onCenterChange }
						onZoomChanged={ this.onZoomChange }
						mapTypeId={ type ? type : 'roadmap' }
					    mapContainerStyle={{
					      height: "400px",
					      width: "600px"
					    }}			
					    options={ { 
					    	mapTypeControl: false,
					    	fullscreenControl: false,
					    	streetViewControl: false,
					    	scrollwheel: false,
					    } }
					    onClick={ this.onMapClick }
					    ref={ this.mapRef }
					>
						{ markers && markers.map( ( marker, index ) => (
						    <Marker
						    	key={ index }
						    	position={ { lat: Number( marker.lat ), lng: Number( marker.lng ) } }
						    	onDragEnd={ ( event ) => { this.updateMarker( index, { lat: event.latLng.lat(), lng: event.latLng.lng() } ) } }
						    	draggable={ true }
						    	icon={ marker.iconUrl }
						    	opacity= { (!editableMarker || editableMarker == marker) ? 1 : 0.5 }
						    	onClick={ () => { this.onEditMarker(index) } }
						    />			 							
						) ) }
					</GoogleMap>
					<button 
						className={ 'wp-block-svbk-map__add-marker-intent' } 
						onClick={ this.onAddMarkerClick }
					>{ __( 'Add Marker', '_svbk' ) }</button>					
				<InspectorControls>
					<PanelBody title={ __( 'Map Settings', '_svbk') }>
					    <TextControl
					        label={ __( 'Latitude', '_svbk' ) }
					        value={ centerLat }
					        onChange={ ( value ) => setAttributes( { centerLat: value } ) }
					    />	
					    <TextControl
					        label={ __( 'Longitude', '_svbk' ) }
					        value={ centerLng }
					        onChange={ ( value ) => setAttributes( { centerLng: value } ) }
					    />
					    <RangeControl
					        label={ __( 'Zoom', '_svbk' ) }
					        value={ zoom }
					        onChange={ ( zoom ) => setAttributes( { zoom: Number( zoom ) } ) }
					        min={ 1 }
					        max={ 22 }
					    />
					    <SelectControl
					        label={ __('Type', '_svbk') }
					        value={ type }
					        selected={ type }
					        options={ [
					            { label: __('Roadmap', '_svbk'), value: 'roadmap' },
					            { label: __('Satellite', '_svbk'), value: 'satellite' },
					            { label: __('Hybrid', '_svbk'), value: 'hybrid' },
					            { label: __('Terrain', '_svbk'), value: 'terrain' },
					        ] }
					        onChange={ ( value ) => setAttributes( { type: value } ) }
					    />
					</PanelBody>
					<PanelBody title={ __( 'Marker Settings', '_svbk') }>
					    { (editableMarker !== false) ? (
						<Fragment>
						    <TextControl
						        label={ __( 'Latitude', '_svbk' ) }
						        value={ editableMarker.lat }
						        onChange={ ( value ) => this.updateMarker( this.state.editingMarker, { lat: value } ) }
						    />	
						    <TextControl
						        label={ __( 'Longitude', '_svbk' ) }
						        value={ editableMarker.lng }
						        onChange={ ( value ) => this.updateMarker( this.state.editingMarker, { lng: value } ) }
						    />
						    <ImageEdit
								setAttributes={ ( update ) => { markerIconUpdate( this.state.editingMarker, update ) } }
								url={ editableMarker.iconUrl }
						    />
					    </Fragment>
						) : (
							<p>{ __('Please click on a marker to edit', '_svbk' ) }</p>
						) }
					</PanelBody>	
				</InspectorControls>
			</Fragment>
		);
	}
    
}

export default MapEdit;
