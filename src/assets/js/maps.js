function showMap(lat, lng){
    if (map !== undefined) {
        map.remove();
    }
    console.log(latitude+ " "+longitude);
    mapboxgl.accessToken = 'pk.eyJ1IjoiY2hyaXNsYWYiLCJhIjoiY2trbnNxNHFzMTE0ajJxcnFqcG5jY3VvMCJ9.zpMc4eAOLGxjWPXEUSQ_zA';
    var map = new mapboxgl.Map({
        container: 'map',
        style: 'mapbox://styles/mapbox/streets-v11',
        center: [lng, lat], // starting position
        zoom: 9 // starting zoom
    });
}