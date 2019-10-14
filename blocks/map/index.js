/* global wp */
/* global lodash */

/**
 * BLOCK: card
 *
 * Shows a  card
 * @author: Brando Meniconi <b.meniconi@silverbackstudio.it>
 */
import edit from './edit';

/**
 * External dependencies
 */
import classnames from 'classnames';

/**
 * WordPress dependencies
 */
const { __ } = wp.i18n; // Import __() from wp.i18n
const { 
	getColorClassName, 
} = wp.editor;

const {
	RawHTML
} = wp.element;


/**
 * Register: Gutenberg Block.
 *
 * Registers a new block provided a unique name and an object defining its
 * behavior. Once registered, the block is made editor as an option to any
 * editor interface where blocks are implemented.
 *
 * @param  {string}   name     Block name.
 * @param  {Object}   settings Block settings.
 * @return {?WPBlock}          The block, if it has been successfully
 *                             registered; otherwise `undefined`.
 */
 
/**
 * Internal dependencies
 */
export const name = 'svbk/map';

export const settings = {
	title: __( 'Map', '_svbk' ),
	icon: 'location-alt', 
	category: 'common',
	keywords: [
		__( 'map' ),
		__( 'google map' ),
		__( 'location' ),
	],
	
	attributes: {
		centerLat: {
			type: 'string',
			source: 'attribute',
			attribute: 'data-center-lat',
			selector: '.wp-block-svbk-map__map',	
			default: 38,
		},
		centerLng: {
			type: 'string',
			source: 'attribute',
			attribute: 'data-center-lng',
			selector: '.wp-block-svbk-map__map',			
			default: -41,
		},
		zoom: {
			type: 'string',
			source: 'attribute',
			attribute: 'data-zoom',
			selector: '.wp-block-svbk-map__map',	
			default: 10,
		},	
		type: {
			type: 'string',
			source: 'attribute',
			attribute: 'data-type',
			selector: '.wp-block-svbk-map__map',
			default: 'roadmap',
		},			
	    markers: {
	        type: 'array',
	        source: 'query',
	        selector: '.wp-block-svbk-map__marker',
	        default: [],
	        query: {
				lat: {
					type: 'string',
					source: 'attribute',
					attribute: 'data-lat',
				},
				lng: {
					type: 'string',
					source: 'attribute',
					attribute: 'data-lng',
				},	
				iconUrl: {
					type: 'string',
					source: 'attribute',
					attribute: 'data-icon-url',
				},	
				iconId: {
					type: 'number',
					source: 'attribute',
					attribute: 'data-icon-id',					
				},					
	        }
	    },
	},	

	edit,

	save: function( { attributes, className } ) {

		const { 
			centerLat, 
			centerLng,
			markers,
			zoom,
			type,
		} = attributes;

		const classNames = classnames( className );		

		return (
			<div 
				className={ classNames } 
			>
				<div 
					className={ 'wp-block-svbk-map__map'} 
					data-center-lat={ centerLat } 					
					data-center-lng={ centerLng } 
					data-zoom={ zoom } 
					data-type={ type } 					
				>{ 'Map loading...' }</div>			
				{ markers.map( ( marker, index ) => (
					<div 
						key={ index }
						className={ 'wp-block-svbk-map__marker' } 
						data-lng={ marker.lng } 
						data-lat={ marker.lat } 
						data-icon-url={ marker.iconUrl } 						
						data-icon-id={ marker.iconId } 						
					></div>
				) ) }
			</div>
		);
	},
};