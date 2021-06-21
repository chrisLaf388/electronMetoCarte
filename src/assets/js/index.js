const villeSaisie = document.querySelector('#villeSaisie');
const btnVille = document.querySelector('#btnVille');
const villeDataList = document.querySelector('#villeDataList');
const temperatureDiv = document.querySelector('#temperatureDiv')
const btnTempGraph = document.querySelector('#btnTempGrph')
const chartContainer = document.querySelector('#chartContainer')
const map = document.querySelector('#map')

//Evenement keypress qui affiche les nom de ville pour l'autocompletion
villeSaisie.addEventListener('keyup', (event) => {
    autoComplétion(event.currentTarget.value);
});

villeSaisie.addEventListener('change', ()=>{

    weatherEtMaps(villeSaisie.value)
    getGraph(villeSaisie.value)
})

//btnTempGrph toogle entre chartContainer et map
btnTempGraph.addEventListener('click', ()=>{
    // chartContainer.classList.toggle('displayOn')
    // map.classList.toggle('displayNone')
        console.log(chartContainer)
    chartContainer.style.display = (
        chartContainer.style.display == "none" ? "block" : "none"); 
    map.style.display = (
        map.style.display == "none" ? "block" : "none"); 
})

weatherEtMaps('Marseille')


