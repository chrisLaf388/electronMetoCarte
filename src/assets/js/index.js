const villeSaisie = document.querySelector('#villeSaisie');
const btnVille = document.querySelector('#btnVille');
const villeDataList = document.querySelector('#villeDataList');
const temperatureDiv = document.querySelector('#temperatureDiv')

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
    //vide la dataListOption a chaque touche tapper
    villeDataList.innerHTML = '';
    villes.hits.forEach((v) => {
        villeDataList.insertAdjacentHTML('beforeend',`<option value="${v.locale_names.default[0]}">`);                    
    });
} 

btnVille.addEventListener('click', ()=>{
    weatherEtMaps(villeSaisie.value)
})

async function weatherEtMaps(ville){
    const url = `http://api.openweathermap.org/data/2.5/weather?q=${ville}&appid=1ce64129da731d692308f766613a1037`;
    const response = await fetch(url);
    const weather = await response.json();
    temperatureDiv.innerHTML = Math.round(weather.main.temp - 273.15);
    //latitude et longitude
    latitude = weather.coord.lat;
    longitude = weather.coord.lon;
    showMap(latitude, longitude)
}

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