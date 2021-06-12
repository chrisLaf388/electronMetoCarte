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