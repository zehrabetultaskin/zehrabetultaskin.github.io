// Dashboard 1 Morris-chart
	
Morris.Area({
        element: 'extra-area-chart',
        data: [{
            period: '2016',
            Kar: 50,
            Gelir: 80,
            Gider: 20
        }, {
            period: '2017',
            Kar: 130,
            Gelir: 100,
            Gider: 80
        }, {
            period: '2018',
            Kar: 80,
            Gelir: 60,
            Gider: 70
        }, {
            period: '2019',
            Kar: 70,
            Gelir: 200,
            Gider: 140
        }, {
            period: '2020',
            Kar: 180,
            Gelir: 150,
            Gider: 140
        }, {
            period: '2021',
            Kar: 105,
            Gelir: 100,
            Gider: 80
        },
         {
            period: '2022',
            Kar: 250,
            Gelir: 150,
            Gider: 200
        }],
        xkey: 'period',
        ykeys: ['Kar', 'Gelir', 'Gider'],
        labels: ['Kar', 'Gelir', 'Gider'],
        pointSize: 3,
        fillOpacity: 0,
        pointStrokeColors:['#006DF0', '#933EC5', '#65b12d'],
        behaveLikeLine: true,
        gridLineColor: '#e0e0e0',
        lineWidth: 1,
        hideHover: 'auto',
        lineColors: ['#006DF0', '#933EC5', '#65b12d'],
        resize: true
        
    });