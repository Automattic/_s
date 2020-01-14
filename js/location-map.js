function initialize() {
    var address = jQuery('#map .marker').attr("data-address");
    var lat = jQuery('#map .marker').attr("data-lat");
    var lng = jQuery('#map .marker').attr("data-lng");   


    var myLatlng = new google.maps.LatLng(lat, lng);
    var myOptions = {
        zoom: 10,
        scrollwheel: false,
        navigationControl: false,
        mapTypeControl: false,
        scaleControl: false,
        draggable: false,
        center: myLatlng,
        mapTypeId: google.maps.MapTypeId.ROADMAP
    }
    map = new google.maps.Map(document.getElementById("map"), myOptions);
    var marker = new google.maps.Marker({
        position: myLatlng,
        map: map,
        draggable: true,
        raiseOnDrag: true,
        title: address,       
        labelContent: "A",
        labelAnchor: new google.maps.Point(3, 30)       

    });
    google.maps.event.addListener(marker, 'click', function () {
        var infowindow = new google.maps.InfoWindow({
            content: address
        });
        infowindow.open(map, marker);
    });
}
google.maps.event.addDomListener(window, 'load', initialize);





