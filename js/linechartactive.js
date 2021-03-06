var ctx = document.getElementById('myChart').getContext('2d');
var chart = new Chart(ctx, {
    // The type of chart we want to create
    type: 'line',

    // The data for our dataset
    data: {
        labels: ['1 Jan', '2 Jan', '3 Jan', '4 Jan', '5 Jan', '6 Jan', '7 Jan', '8 Jan', '9 Jan', '10 Jan', '11 Jan', '12 Jan', '13 Jan', '14 Jan', '15 Jan', '16 Jan', '17 Jan', '18 Jan', '19 Jan', '20 Jan', '21 Jan', '22 Jan', '23 Jan', '24 Jan', '25 Jan', '26 Jan', '27 Jan', '28 Jan', '29 Jan', '30 Jan','31 Jan'],
        datasets: [{
            label: 'Total Transaction tk',
            backgroundColor: 'rgb(230, 230, 230)',
            borderColor: 'rgb(156, 39, 176)',
            borderWidth:2,
            pointBackgroundColor: 'rgb(156, 39, 176)',
            data: [7930, 5893, 3789, 2849, 5847, 3256, 11000, 6923, 5323, 8345, 2445, 6000, 4324, 9567, 2423, 7453, 7345, 5900, 2755, 4635, 8600, 3453, 9024, 7820, 8100, 8923, 7002, 3090, 6020, 8320, 2830, 9029]
        }]
    },

    // Configuration options go here
    options: {}
});