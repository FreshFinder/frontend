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
