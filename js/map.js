/*
  JS for Map Functionality
*/

(function(){
  // Get Map Element via Id set in HTML
  let gMap = document.getElementById('map');

  // Set Location for Map and Create Map variable
  let location = {lat: 52.629780, lng: -1.139370};
  let map; // Makes map available to both functions

  // Initialise Map - Grey/Silver Colour Theme
  function initMap() {
     map = new google.maps.Map(gMap, {
      center: location,
      zoom: 10,
      styles: [
        {
          "elementType": "geometry",
          "stylers": [{"color": "#f5f5f5"}]
        },
        {
          "elementType": "labels.icon",
          "stylers": [{"visibility": "off"}]
        },
        {
          "elementType": "labels.text.fill",
          "stylers": [{"color": "#616161"}]
        },
        {
          "elementType": "labels.text.stroke",
          "stylers": [{"color": "#f5f5f5"}]
        },
        {
          "featureType": "administrative.land_parcel",
          "elementType": "labels.text.fill",
          "stylers": [{"color": "#bdbdbd"}]
        },
        {
          "featureType": "poi",
          "elementType": "geometry",
          "stylers": [{"color": "#eeeeee"}]
        },
        {
          "featureType": "poi",
          "elementType": "labels.text.fill",
          "stylers": [{"color": "#757575"}]
        },
        {
          "featureType": "poi.park",
          "elementType": "geometry",
          "stylers": [{"color": "#e5e5e5"}]
        },
        {
          "featureType": "poi.park",
          "elementType": "labels.text.fill",
          "stylers": [{"color": "#9e9e9e"}]
        },
        {
          "featureType": "road",
          "elementType": "geometry",
          "stylers": [{"color": "#ffffff"}]
        },
        {
          "featureType": "road.arterial",
          "elementType": "labels.text.fill",
          "stylers": [{"color": "#757575"}]
        },
        {
          "featureType": "road.highway",
          "elementType": "geometry",
          "stylers": [{"color": "#dadada"}]
        },
        {
          "featureType": "road.highway",
          "elementType": "labels.text.fill",
          "stylers": [{"color": "#616161"}]
        },
        {
          "featureType": "road.local",
          "elementType": "labels.text.fill",
          "stylers": [{"color": "#9e9e9e"}]
        },
        {
          "featureType": "transit.line",
          "elementType": "geometry",
          "stylers": [{"color": "#e5e5e5"}]
        },
        {
          "featureType": "transit.station",
          "elementType": "geometry",
          "stylers": [{"color": "#eeeeee"}]
        },
        {
          "featureType": "water",
          "elementType": "geometry",
          "stylers": [{"color": "#c9c9c9"}]
        },
        {
          "featureType": "water",
          "elementType": "labels.text.fill",
          "stylers": [{"color": "#9e9e9e"}]
        }
      ]
    });

    // Set Marker for the Map including Drop Animation
    let marker = new google.maps.Marker({
      position: location,
      map: map,
      animation: google.maps.Animation.DROP
    });
  }

  // When Resizing Window keep Location centred on Map
  function centreMap() {
    map.setCenter(location);
  }

  // Event Listeners (Load & Resize)
  window.addEventListener("load", initMap);
  window.addEventListener("resize", centreMap);

})();
