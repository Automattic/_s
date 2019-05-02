/* global jQuery */
/* global google */
/* global googleMapsOptions */
/* global googleMapsMarkerOptions */

(function($){

    $(document.body).one( 'gmaps-ready', function(){

        $('.wp-block-svbk-map').each( function() {

            var $mapContainer = $(this);
            var $map = $mapContainer.find('.wp-block-svbk-map__map');
    
            var mapsOptions = {};
    
            if( $map.data('centerLat') && $map.data('centerLng') ) {
                mapsOptions.center = new google.maps.LatLng( $map.data('centerLat'), $map.data('centerLng'));
            } 
            
            if ( $map.data('zoom') ) {
                mapsOptions.zoom = parseInt( $map.data('zoom') );
            }
    
            if( googleMapsOptions.styles ) {
                mapsOptions.styles = googleMapsOptions.styles;
            }
    
            var map = new google.maps.Map($map[0], mapsOptions);
    
            $mapContainer.find('.wp-block-svbk-map__marker').each( function(){
             
                var $marker = $(this);
             
                var markerOptions = {
                    position: new google.maps.LatLng( $marker.data('lat'), $marker.data('lng') ),
                    icon: $marker.data('iconUrl') || googleMapsMarkerOptions.icon || '',
                    map: map,
                };
    
                new google.maps.Marker(markerOptions);
            });
            
        });

    });

    //Fallback Trigger
    if ( typeof google.maps !== undefined ){
        $(window.body).trigger('gmaps-ready');
    }

})(jQuery);
