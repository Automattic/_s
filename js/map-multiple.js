var locations = gcode.data;

var map = new google.maps.Map(document.getElementById(gcode.mapId), {
    //  zoom: Number(gcode.zoom),
    zoom: 8,
    center: new google.maps.LatLng(-37.92, 151.25),
    mapTypeId: google.maps.MapTypeId.ROADMAP,
    scrollwheel: false,
    disableDoubleClickZoom: true,
    mapTypeControl: false,
    streetViewControl: false,

});
var infowindow = new google.maps.InfoWindow({
    maxWidth: 200
});
var marker;
var markers = new Array();
var count = 1;
// Add the markers and infowindows to the map
for (var i = 0; i < locations.length; i++)
{

    marker = new google.maps.Marker({
        position: new google.maps.LatLng(locations[i]['lat'], locations[i]['lng']),
        map: map,
    });
    markers.push(marker);

    google.maps.event.addListener(marker, 'click', (function (marker, i) {
        return function () {
            var name = locations[i]['title'];
            var marker_link = locations[i]['marker_link'];

            var content = '<div class="map-content"><div class="map-info"><a class="map-title" href="' + marker_link + '"><strong>';

            content += name + '</strong></a>';

            content += '</div></div>';
            if (name != undefined || name != '') {
                infowindow.setContent(content);
                infowindow.open(map, marker);
            }
        }
    })(marker, i));

    google.maps.event.addListener(marker, 'click', (function (marker, i) {
        return function () {
            //infowindow.setContent(content);
            jQuery("a").filter(function () {
                return this.hostname && this.hostname.replace('www.', '') !== location.hostname.replace('www.', '');
            }).attr('target', '_blank');
            infowindow.open(map, marker);
        };
    })(marker, i));

    google.maps.event.addListener(map, 'click', function () {
        infowindow.close(map, marker);
    });

}

function AutoCenter() {
    //  Create a new viewpoint bound
    var bounds = new google.maps.LatLngBounds();
    //  Go through each...
    jQuery.each(markers, function (index, marker) {
        bounds.extend(marker.position);
    });
    //  Fit these bounds to the map
    google.maps.event.addListenerOnce(map, 'bounds_changed', function (event) {
        if (this.getZoom() > 15) {
            this.setZoom(15);
        }
    });
    map.fitBounds(bounds);
}
AutoCenter();

function setMapOnAll(map) {
    for (var i = 0; i < markers.length; i++) {
        markers[i].setMap(map);
    }
}
