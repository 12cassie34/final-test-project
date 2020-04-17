function ZoomControl(controlDiv, map) {
	controlDiv.style.padding = '5px';

	var controlWrapper = document.createElement('div');
    controlWrapper.style.backgroundColor = 'black';
    controlWrapper.style.cursor = 'pointer';
    controlWrapper.style.textAlign = 'center';
    controlWrapper.style.width = '39px'; 
    controlWrapper.style.height = '74px';
    controlWrapper.style.position = "absolute";
    controlWrapper.style.left = '44px'; 
    controlWrapper.style.top = '36px'; 
    controlDiv.appendChild(controlWrapper);

    var zoomInButton = document.createElement('div');
    zoomInButton.style.fontFamily = 'Source Sans Pro,sans-serif';
    zoomInButton.style.fontSize = '1.25rem';
    zoomInButton.style.fontWeight = '800';
    zoomInButton.style.color = 'white';
    zoomInButton.style.lineHeight = '38px';
    zoomInButton.style.paddingLeft = '5px';
    zoomInButton.style.paddingRight = '5px';
    zoomInButton.innerHTML = '+';
    controlWrapper.appendChild(zoomInButton);

    var zoomOutButton = document.createElement('div');
    zoomOutButton.style.fontFamily = 'Source Sans Pro,sans-serif';
    zoomOutButton.style.fontSize = '1.25rem';
    zoomOutButton.style.fontWeight = '800';
    zoomOutButton.style.color = 'white';
    zoomOutButton.style.lineHeight = '38px';
    zoomOutButton.style.paddingLeft = '5px';
    zoomOutButton.style.paddingRight = '5px';
    zoomOutButton.innerHTML = '–';
    controlWrapper.appendChild(zoomOutButton);

    google.maps.event.addDomListener(zoomInButton, 'click', function() {
    map.setZoom(map.getZoom() + 1);
  });

    google.maps.event.addDomListener(zoomOutButton, 'click', function() {
    map.setZoom(map.getZoom() - 1);
  });  
}

function initMap() {
    // The location
    var schon = {lat: 48.858568, lng: 2.294513};
    // The map, centered at location
    var map = new google.maps.Map(
    document.getElementById('map'), {
    	zoom: 14, 
    	center: schon,
    	fullscreenControl: false,
    	zoomControl: false,
    	styles: [
            {
            	"elementType": "geometry",
                "stylers": [
                {
                	"color": "#f5f5f5"
                }
                ]        
            },
            {
                "elementType": "labels.icon",
                "stylers": [
                {
                   "visibility": "off"
                }
                ]
            },
            {
                 "elementType": "labels.text.fill",
                 "stylers": [
                {
                   "color": "#616161"
                }
                ]
            },
            {
                 "elementType": "labels.text.stroke",
                 "stylers": [
                {
                   "color": "#f5f5f5"
                }
                ]
            },
            {
                 "featureType": "administrative.land_parcel",
                 "elementType": "labels.text.fill",
                 "stylers": [
                 {
                 	"color": "#bdbdbd"
                 }
                 ]
             },
             {
             	"featureType": "poi",
             	"elementType": "geometry",
             	"stylers": [
             	{
             		"color": "#eeeeee"
             	}
             	]
             },
             {
              "featureType": "poi",
              "elementType": "labels.text.fill",
              "stylers": [
              {
              	"color": "#757575"
              }
              ]
          },
          {
          	"featureType": "poi.park",
          	"elementType": "geometry",
          	"stylers": [
          	{
          		"color": "#e5e5e5"
          	}
          	]
          },
          {
          	"featureType": "poi.park",
          	"elementType": "labels.text.fill",
          	"stylers": [
          	{
          		"color": "#9e9e9e"
          	}
          	]
          },
          {
          	"featureType": "road",
          	"elementType": "geometry",
          	"stylers": [
          	{
          		"color": "#ffffff"
          	}
          	]
          },
          {
          	"featureType": "road.arterial",
          	"elementType": "labels.text.fill",
          	"stylers": [
          	{
          	 "color": "#757575"
          	}
          	]
          },
          {
          	"featureType": "road.highway",
          	"elementType": "geometry",
          	"stylers": [
          	{
          		"color": "#dadada"
          	}
          	]
          },
          {
          	"featureType": "road.highway",
          	"elementType": "labels.text.fill",
          	"stylers": [
          	{
          		"color": "#616161"
          	}
          	]
          },
          {
          	"featureType": "road.local",
          	"elementType": "labels.text.fill",
          	"stylers": [
          	{
          	 "color": "#9e9e9e"
          	}
          	]
          },
          {
          	"featureType": "transit.line",
          	"elementType": "geometry",
          	"stylers": [
          	{
          		"color": "#e5e5e5"
          	}
          	]
          },
          {
          	"featureType": "transit.station",
          	"elementType": "geometry",
          	"stylers": [
          	{
          		"color": "#eeeeee"
          	}
          	]
          },
          {
          	"featureType": "water",
          	"elementType": "geometry",
          	"stylers": [
          	{
          		"color": "#c9c9c9"
          	}
          	]
          },
          {
          	"featureType": "water",
          	"elementType": "labels.text.fill",
          	"stylers": [
          	{
          		"color": "#9e9e9e"
          	}
          	]
          }
          ]
    });

    var zoomControlDiv = document.createElement('div');
    var zoomControl = new ZoomControl(zoomControlDiv, map);

    zoomControlDiv.index = 1;
    map.controls[google.maps.ControlPosition.TOP_LEFT].push(zoomControlDiv);

    // The marker, positioned at location
    var logomarker = "imgs/logo-marker.png";
    var marker = new google.maps.Marker({
    	position: schon, 
    	map: map,
    	icon: logomarker
    });

}
