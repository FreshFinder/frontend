jQuery(document).ready(function() {

var mappy = L.mapbox.map("map", "pzula.h69mf89n", { zoomControl: false }).setView([40.52086, -100.679523], 4);
new L.Control.Zoom({ position: 'topright' }).addTo(mappy);

var marketData = "/api/v1/markets.json?address=true";

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
      var content =  '<div class="wheat"><img src="assets/wheat.png"/></div> <div class="main-info"><h4 class="namer"><strong>'+ layer.feature.properties.name + '</strong></h4>' + '<p class="addressy">' + layer.feature.properties.street + ', ' + layer.feature.properties.city + '</br>' + '(' +layer.feature.properties.description + ')' + '</div>';
      layer.bindPopup(content, {
        closeButton: false });
      layer.on('click', function(e) {
        mappy.setView(e.latlng);
      });
    });

    var list = $(".listings");
    $.each(data, function(index, val){
        $(list).append('<li><a class="icon icon-data market-item" id=' + val.id + '>' + val.name + '<p class="smaller">' + '<strong>' + val.address.street + '</strong>' + ', ' + val.address.city + ', ' + val.address.state + '</p>' + '</a></li>');
     });
    });

        $('.market-item').click(function(el){
          console.log("boom" + 1);

          $.getJSON( "/api/v1/markets/1", function( data ) {
            $.each(data, function(index, val) {
            });
          });
        });

   });
});


