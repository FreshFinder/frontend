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
          name: val.name,
          'marker-size': 'small',
          'marker-color': '#9CFF00'
        }
      })
  return markerLayer;
};

Map.addPopupToLayer = function(layer) {

  var market = layer.feature.properties
  var addressDescription = market.description
  var street = market.street
  var city = market.city

  if (addressDescription == null || addressDescription == 'Other') {
    addressDescription = ""
  } else {
    addressDescription = '<em>Directions:' + addressDescription + '</em>'
  }
  
  var content = '<img class="wheat"/><div class="main-info"><h4 class="namer"><strong>'+ "<a href='/markets/" + market.market_id + "'" + '>' + market.name + '</a>' + '</strong></h4>' + '<p class="addressy">' + street + ',  ' + city + '</br>' + addressDescription + '</div>';
  
  return content;
}
