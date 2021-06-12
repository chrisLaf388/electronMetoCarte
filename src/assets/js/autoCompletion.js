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