var Geolocation = {};

Geolocation.setPosition = function(position) {
  var coords = position.coords;
  Geolocation.userPosition = [coords.latitude, coords.longitude];
};

Geolocation.getLocation = function() {
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(Geolocation.setPosition);
  }
  else {
    Geolocation.userPosition = [40.52086, -100.679523];
  };
  return Geolocation.userPosition;
}();


