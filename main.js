navigator.geolocation.getCurrentPosition(CurrentLocation);

function CurrentLocation(location) {
  mapboxgl.accessToken =
    "pk.eyJ1IjoiYXJ0aW5kZXYiLCJhIjoiY2tqMnBib2R1MDJyNTJ6bm8wbWNqYmxrNiJ9.yHpo-L0i83WGCNHDbJbiKg";
  var map = new mapboxgl.Map({
    container: "map",
    style: "mapbox://styles/mapbox/streets-v11", // stylesheet location
    center: [location.coords.latitude, location.coords.longitude], // starting position [lng, lat]
    zoom: 9, // starting zoom
  });
}
