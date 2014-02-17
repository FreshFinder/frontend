var loadMap = function(position) {
  var coords = position.coords;
  userPosition = [coords.latitude, coords.longitude];

  var mappy = L.mapbox.map("mappy", "pzula.h69mf89n", { zoomControl: false }).setView(userPosition, 10);
  new L.Control.Zoom({ position: 'topright' }).addTo(mappy);
  Map.mappy = mappy;

    $.getScript("http://openweathermap.org/js/leaflet-layer.js", function(){
    var validatorsLayer = new OsmJs.Weather.LeafletLayer({lang: 'en'});
    mappy.addLayer(validatorsLayer);
  });

  var coords = userPosition;
  var coordsForUrl = coords[0] + "," + coords[1];
  var marketData = "/api/v1/search/markets?zipcode=" + coordsForUrl;

  $.getJSON( marketData, function( data ) {
    $.each(data, function(index, val) {

      var markerLayer = Map.addMarkerToLayer(val).addTo(mappy);

       markerLayer.eachLayer(function (layer) {
         var content = Map.addPopupToLayer(layer);
         layer.bindPopup(content, {
           closeButton: false });
         layer.on('click', function(e) {
           mappy.setView(e.latlng);
         });
      });

      var list = $(".listings");
      $.each(data, function(index, val){
          var street = val.address.street
          
          if (street == null ) {
            street = ""
          } else {
            street = '<strong>' + street + '</strong>, '
          }

          $(list).append('<li><a class="icon icon-data market-item" data-market-id=' + val.id + '>' + val.name + '<p class="smaller">' + street + val.address.city + ', ' + val.address.state + '</p>' + '</a></li>');
       });
      });
    });
  };

