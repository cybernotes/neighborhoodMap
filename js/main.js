var initialLocations = [{
    name: 'La Fortaleza',
    lat: 18.4661,
    long: -66.1191
  },
  {
    name: 'San Juan National Historic Site',
    lat: 18.4687,
    long: -66.1207

  },
  {
    name: 'Castillo San Felipe del Morro',
    lat: 18.4709,
    long: -66.1235
  },
  {
    name: 'Castillo de San Cristobal',
    lat: 18.4674,
    long: -66.1112
  },
  {
    name: 'Cathedral of San Juan Bautista',
    lat: 18.4656,
    long: -66.1180
  }
];

var map = new google.maps.Map(document.getElementById('map'),

  function initMap() {
    center: {
      lat: 18.4655,
      lng: -66.1057
    },
    zoom: 15
  });

function marker() {

  new google.maps.Marker({
      for (var = i; initialLocations.length > i; i++) {
        position: initialLocations[i],
        map: map
      });
  }