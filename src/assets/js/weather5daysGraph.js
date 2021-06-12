async function getGraph(ville) {
    //requete api weather
    let tableauTemperatures = []
    let tableauDates = []
    const url5Jours = `http://api.openweathermap.org/data/2.5/forecast?q=${ville}&appid=1ce64129da731d692308f766613a1037`;
    const response2 = await fetch(url5Jours);
    const temp5Jours = await response2.json();
    console.log(temp5Jours);
    temp5Jours.list.forEach((index) => {
        let heure = index.dt_txt.split(" ");
        if (heure[1] === "12:00:00") {
                tableauTemperatures.push(Math.round(index.main.temp - 273.15));
                tableauDates.push(index.dt_txt);
            }
        });

    //graph
    var ctx = document.getElementById('myChart').getContext('2d');
    var myChart = new Chart(ctx, {
        type: 'line',
        data: {
            labels: tableauTemperatures,
            datasets: [{
                label: '# of Votes',
                data: tableauDates,
                backgroundColor: [
                    'rgba(255, 99, 132, 0.2)',
                    'rgba(54, 162, 235, 0.2)',
                    'rgba(255, 206, 86, 0.2)',
                    'rgba(75, 192, 192, 0.2)',
                    'rgba(153, 102, 255, 0.2)',
                    'rgba(255, 159, 64, 0.2)'
                ],
                borderColor: [
                    'rgba(255, 99, 132, 1)',
                    'rgba(54, 162, 235, 1)',
                    'rgba(255, 206, 86, 1)',
                    'rgba(75, 192, 192, 1)',
                    'rgba(153, 102, 255, 1)',
                    'rgba(255, 159, 64, 1)'
                ],
                borderWidth: 1
            }]
        },
        options: {
            scales: {
                yAxes: [{
                    ticks: {
                        beginAtZero: true
                    }
                }]
            }
        }
    });
}