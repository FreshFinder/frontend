jQuery(document).ready(function() {

var mappy = L.mapbox.map("mappy", "pzula.h69mf89n", { zoomControl: false }).setView([40.52086, -100.679523], 4);
new L.Control.Zoom({ position: 'topright' }).addTo(mappy);

$("#modal").hide();
$(".modal-close").click(function (e){
  $('#modal').hide();
  });

var marketData = "http://localhost:5555/api/v1/markets.json?address=true";

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
        $(list).append('<li><a class="icon icon-data market-item" data-market-id=' + val.id + '>' + val.name + '<p class="smaller">' + '<strong>' + val.address.street + '</strong>' + ', ' + val.address.city + ', ' + val.address.state + '</p>' + '</a></li>');
     });
    });

        $('.market-item').click(function(el){
          var marketId = $(this).data("market-id"),
              url = "http://localhost:5555/api/v1/markets/" + marketId;

          $.getJSON( url, function( market_data ) {
            $.each(market_data, function (i,val) {
              var payment = [],
                  products = []
              Modal.addModalListener(payment, products, market_data, val);
            });
          });
        });
      });
    });
