import Chart from 'chart.js/auto'
import ChartDataLabels from 'chartjs-plugin-datalabels';

const values = [
    // Add objects here containing name, wpm and accuracy
]

const ctx = document.getElementById('myChart');
const average = document.getElementById('averageDisplay')

function CalculateAverage(values){
    let sum = 0

    values.forEach( (currentValue) => {
        sum += currentValue
    } )

    return Math.floor(sum/values.length)
}

// average.innerHTML = `Average WPM: ${CalculateAverage(values.map(row => row.wpm))} Average Accuracy: ${CalculateAverage(values.map(row => row.accuracy))}`

new Chart(ctx, {
    type: "bar",
    data: {
        labels: values.map(row => row.name),
        datasets: [{
            label: [`Average WPM = ${CalculateAverage(values.map(row => row.wpm))}`],
            data: values.map(row => row.wpm),
            borderWidth: 1,
            backgroundColor: 'rgba(237, 152, 5, 0.5)'
        },
        {
            label: [`Average Accuracy = ${CalculateAverage(values.map(row => row.accuracy))}`],
            data: values.map(row => row.accuracy),
            borderWidth: 1,
            backgroundColor: 'rgba(9, 237, 89, 0.5)'
        }]

    },
    plugins: [ChartDataLabels]
})