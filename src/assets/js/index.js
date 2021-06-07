const villeSaisie = document.querySelector('#villeSaisie');
const btnVille = document.querySelector('#btnVille');
const villeDataList = document.querySelector('#villeDataList');
let latitude = -74.5
let longitude = 40

async function weatherEtMaps(ville){
    const url = `http://api.openweathermap.org/data/2.5/weather?q=${ville}&appid=1ce64129da731d692308f766613a1037`;
        const response = await fetch(url);
        const weather = await response.json();
        console.log(weather.main.temp - 273.15);
        getMap(weather.coord.lat, weather.coord.lon);
        console.log(weather.coord.lat);
        console.log(weather.coord.lon);
        temp.innerHTML = Math.round(weather.main.temp - 273.15);
}

btnVille.addEventListener('change', ()=>{
    weatherEtMaps(villeSaisie.value)

})
//Evenement keypress qui affiche les nom de ville pour l'autocompletion
villeSaisie.addEventListener('keyup', (event) => {
    autoComplétion(event.currentTarget.value);
    
});

async function autoComplétion(ville)  {
    const urlAlgoliaPlaces = 'https://places-dsn.algolia.net/1/places/query';
    const response = await fetch(urlAlgoliaPlaces,{
        method: "POST",
        body: JSON.stringify({ query: ville})
    });
    const villes = await response.json();
    console.log(latitude+' '+longitude);
    //vide la dataListOption a chaque touche tapper
    villeDataList.innerHTML = '';
    villes.hits.forEach((v) => {
        villeDataList.insertAdjacentHTML('beforeend',`<option value="${v.locale_names.default[0]}">`);                    
    });
} 

// var mymap;
// const getMap = (lattitude, longitude) => {
//     if (mymap !== undefined) {
//         mymap.remove();
//     }
//     mymap = L.map('mapid').setView([lattitude, longitude], 13)
//     L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}', {
//         attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
//         maxZoom: 10,
//         id: 'mapbox/streets-v11',
//         tileSize: 512,
//         zoomOffset: -1,
//         accessToken: 'pk.eyJ1IjoiY2hyaXNsYWYiLCJhIjoiY2trbnNxNHFzMTE0ajJxcnFqcG5jY3VvMCJ9.zpMc4eAOLGxjWPXEUSQ_zA'
//     }).addTo(mymap);
// }
//carte maps
var map
mapboxgl.accessToken = 'pk.eyJ1IjoiY2hyaXNsYWYiLCJhIjoiY2trbnNxNHFzMTE0ajJxcnFqcG5jY3VvMCJ9.zpMc4eAOLGxjWPXEUSQ_zA';

const getMap = (latitude, longitude) => {
    if (map !== undefined) {
        map.remove();
    }
    map = new mapboxgl.Map({
        container: 'map', // container id
        style: 'mapbox://styles/mapbox/streets-v11',
        center: [latitude, longitude], // starting position
        zoom: 9 // starting zoom
    });
    // Add zoom and rotation controls to the map.
    map.addControl(new mapboxgl.NavigationControl());
    // Marker and add it to the map.
    var marker1 = new mapboxgl.Marker()
    .setLngLat([latitude, longitude])
    .addTo(map);
}

