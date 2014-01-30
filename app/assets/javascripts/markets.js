
jQuery(document).ready(function() {

var mappy = L.mapbox.map("map", "rsoden.map-wjcj2udt", { zoomControl: false }).setView([40.52086, -100.679523], 5); 
new L.Control.Zoom({ position: 'topright' }).addTo(mappy);

var marketData = "http://localhost:5555/api/v1/markets.json?address=true";

$.getJSON( marketData, function( data ) {

  $.each(data, function(index, val) {
     var lng =  parseFloat(val.address.long),
     lat =  parseFloat(val.address.lat);
     
     var name = val.name;
     var id = val.id;
     
     var markerLayer = L.mapbox.markerLayer({
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
      }).addTo(mappy);

     markerLayer.eachLayer(function (layer) {
      var content =  '<strong>'+ layer.feature.properties.name + '</strong>' + '</br>' + layer.feature.properties.street + ', ' + layer.feature.properties.city + '</br>' + '(' +layer.feature.properties.description + ')';
      layer.bindPopup(content, {
        closeButton: false });
      });
    });
  });
});
