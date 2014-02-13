var Map = {};

Map.addMarkerToLayer = function(val) {
  var lng =  parseFloat(val.address.long),
  lat =  parseFloat(val.address.lat),
  name = val.name,
  id = val.id,
  markerLayer = L.mapbox.markerLayer({
    type: 'Feature',
    geometry: {
      type: 'Point',
      coordinates: [lng , lat]
    },
    properties: {
      market_id: id,
      name: name,
      description: val.address.description,
      street: val.address.street,
      city: val.address.city,
      state: val.address.state,
      'marker-size': 'medium',
      'marker-color': '#2ca25f',
      'marker-symbol': 'park2'
    }
  })
  return markerLayer;
};

Map.addPopupToLayer = function(layer) {

  var market = layer.feature.properties
  var addressDescription = market.description
  var street = market.street
  var city = market.city
  var state = market.state

  if (city === null ) {city = ""}

  switch (state) {
    case null :
      state = "";
      break;
    case city !== null && state !== null :
      state = ',  ' + state ;
      break;
    default:
      state = state;
    };

  addressDescription = processAddress(addressDescription);
  street = processStreet(street);

  var content = '<img class="wheat"/><div class="main-info"><h4 class="namer"><strong>'+ "<a href='/markets/" + market.market_id + "'" + '>' + market.name + '</a>' + '</strong></h4>' + '<span class="addressy">' + city + ',  ' + state + '</span></br><span class="location">' + addressDescription + '</span></div>';
  
  return content;
}

var processAddress = function(addressDescription){
  if (addressDescription === null || addressDescription === 'Other') {
    addressDescription = ""
  } else {
    addressDescription = 'Location: ' + addressDescription;
  };
  return addressDescription;
};

var processStreet = function(street){
  if (street === null ){ 
    street = "" 
  } else {
    street = street + ',  ';
  };
  return processStreet;
};


