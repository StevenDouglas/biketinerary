L.mapbox.accessToken = 'pk.eyJ1IjoiYnJhbmRvbmJha2tlIiwiYSI6ImNpZ21ob2JtYjAyN2x1MWx6aDE1ZjZyajIifQ.uy1doHckzMZJUnz1KNL1lA';
var map = L.mapbox.map('map', 'mapbox.streets', {
    zoomControl: false
}).setView([46.886947, -96.785946], 14);

// move the attribution control out of the way
map.attributionControl.setPosition('bottomleft');

// create the initial directions object, from which the layer
// and inputs will pull data.
var directions = L.mapbox.directions({
    profile: 'mapbox.cycling'
});

var directionsLayer = L.mapbox.directions.layer(directions)
    .addTo(map);

var directionsInputControl = L.mapbox.directions.inputControl('inputs', directions)
    .addTo(map);

var directionsErrorsControl = L.mapbox.directions.errorsControl('errors', directions)
    .addTo(map);

var directionsRoutesControl = L.mapbox.directions.routesControl('routes', directions)
    .addTo(map);

var directionsInstructionsControl = L.mapbox.directions.instructionsControl('instructions', directions)
    .addTo(map);