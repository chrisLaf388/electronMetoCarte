const villeSaisie = document.querySelector('#villeSaisie');
const btnVille = document.querySelector('#btnVille');
const villeDataList = document.querySelector('#villeDataList');
const temperatureDiv = document.querySelector('#temperatureDiv')

//Evenement keypress qui affiche les nom de ville pour l'autocompletion
villeSaisie.addEventListener('keyup', (event) => {
    autoComplétion(event.currentTarget.value);
    
});

btnVille.addEventListener('click', ()=>{
    weatherEtMaps(villeSaisie.value)
    getGraph(villeSaisie.value)
})



