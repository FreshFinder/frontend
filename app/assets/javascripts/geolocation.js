jQuery(document).ready(function() {
  var Geolocation = {};

  Geolocation.getLocation = function() {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(loadMap, noPermissionHandler);
    }
    else {
      var position = {};
      position.coords = {};
      position.coords.latitude = 40.52086;
      position.coords.longitude = -100.679523;
      loadMap(position);
    };
  }();

  var noPermissionHandler = function(err) {
    console.log("boom");
    var position = {};
    position.coords = {};
    position.coords.latitude = 40.52086;
    position.coords.longitude = -100.679523;
    loadMap(position);
  };

});
