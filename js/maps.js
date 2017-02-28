/* global google */
/* global googleMapsOptions */

(function($){

    $('.gmap-container').on('gmaps-ready', function(){

        var $mapContainer = $(this);
        var $map = $mapContainer.find('.google-map');

        if(!$map.length){
            $map = $('<div class="google-map"/>');
            $mapContainer.prepend($map);
        }

        var mapsOptions = { };

        if( $mapContainer.data('mapLat') && $mapContainer.data('mapLng') ) {
            mapsOptions.center = new google.maps.LatLng( $mapContainer.data('mapLat'), $mapContainer.data('mapLng'));
        } else if ( googleMapsOptions.lat && googleMapsOptions.lng ) {
            mapsOptions.center = new google.maps.LatLng( googleMapsOptions.lat, googleMapsOptions.lng);
        }

        mapsOptions.zoom = parseInt($mapContainer.data('mapZoom') || googleMapsOptions.zoom || 14);

        if(googleMapsOptions.styles) {
            mapsOptions.styles = googleMapsOptions.styles;
        }

        var map = new google.maps.Map($map[0], mapsOptions);

        var marker = new google.maps.Marker({
            position: mapsOptions.center,
            icon: $mapContainer.data('mapMarker') || googleMapsOptions.marker || '',
            map: map,
            title: $mapContainer.data('mapTitle') || ''
        });

        var directionsTarget = $mapContainer.find('.map-directions');

        if(directionsTarget.length){

            var directionsDisplay = new google.maps.DirectionsRenderer;
            var directionsService = new google.maps.DirectionsService;

            directionsDisplay.setMap(map);
            directionsDisplay.setPanel(directionsTarget[0]);

            $map.on('show-directions', function(event, request) {

                var params = { //defaults
                    destination: mapsOptions.center,
                    travelMode: google.maps.TravelMode.DRIVING
                };

                $.extend(params, request);

                directionsService.route(params, function(response, status) {
                    if (status === google.maps.DirectionsStatus.OK) {
                      directionsDisplay.setDirections(response);
                      $mapContainer.addClass('has-directions');
                    } else {
                      window.alert('Destination not found: ' + status);
                    }
                });

            });
        }

        if(typeof google.maps.places != 'undefined'){
            $('.gmaps-autocomplete').each(function(){
                    var atc = new google.maps.places.Autocomplete(this, {types: ['geocode']});
                    atc.addListener('place_changed', function(){
                        $('.gmap-directions-form').trigger('submit');
                    });
            });
        }

    });

    $('.gmap-directions-form').on('submit change', function(e){
        var form  = $(this);

        var targetMap  = $(form.data('targetMap') || '.google-map');

        var data = {};
        $(form.serializeArray()).each( function(index, obj){
            data[obj.name] = obj.value;
        });

        if(data.origin){
            targetMap.trigger('show-directions', [data]);
        }

        e.preventDefault();
    });

    $('.map-directions').on('click', '.action-button', function(){
        $(this).parents('.map-directions').toggleClass('collapse-open');
    });

    $('.preload-directions').on('click', function(e){
        var self = $(this);
        var form  = $(self.data('targetForm') || '.gmap-directions-form');

        $('.gmaps-directions-origin', form).val(self.val());

        form.trigger('submit');

        e.preventDefault();
    });

    $('.map-locker .map-lock').click(function(){
        $(this).parents('.map-locker').toggleClass('locked').toggleClass('unlocked');
    });

})(jQuery);
