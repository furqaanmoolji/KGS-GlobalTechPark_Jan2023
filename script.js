// Data retrieved from https://gs.statcounter.com/browser-market-share#monthly-202201-202201-bar

// Create the chart
Highcharts.chart('container', {
    chart: {
        type: 'column'
    },
    title: {
        align: 'left',
        text: 'KGS GLOBAL TECH PARK. January, 2023'
    },
    subtitle: {
        align: 'left',
        text: 'Click the columns to view versions. Source: <a href="http://statcounter.com" target="_blank">statcounter.com</a>'
    },
    accessibility: {
        announceNewData: {
            enabled: true
        }
    },
    xAxis: {
        type: 'category'
    },
    yAxis: {
        title: {
            text: 'Amount of feedback'
        }

    },
    legend: {
        enabled: false
    },
    plotOptions: {
        series: {
            borderWidth: 0,
            dataLabels: {
                enabled: true,
                format: '{point.y:.1f}%'
            }
        }
    },

    tooltip: {
        headerFormat: '<span style="font-size:11px">{series.name}</span><br>',
        pointFormat: '<span style="color:{point.color}">{point.name}</span>: <b>{point.y:.2f}%</b> of total<br/>'
    },

    series: [
        {
            name: 'Feedback',
            colorByPoint: true,
            data: [
                {
                    name: 'Very Good',
                    y: 78,
                    drilldown: 'Very Good'
                },
                {
                    name: 'Good',
                    y: 31,
                    drilldown: 'Good'
                },
                {
                    name: 'Ok',
                    y: 0,
                    drilldown: null
                },
                {
                    name: 'Poor',
                    y: 0,
                    drilldown: null
                }
            ]
        }
    ],
    drilldown: {
        breadcrumbs: {
            position: {
                align: 'right'
            }
        },
        series: [
            {
                name: 'Very Good',
                id: 'Very Good',
                data: [
                    [
                        '1st Jan',
                        0.0
                    ],
                    [
                        '2nd Jan',
                        0.0
                    ],
                    [
                        '3rd Jan',
                        0.0
                    ],
                    [
                        '4th Jan, 15:42',
                        1
                    ],
                    [
                        '4th Jan, 12:57',
                        2
                    ],
                    [
                        '4th Jan, 12:47',
                        1
                    ],
                    [
                        '4th Jan, 11:55',
                        1
                    ],
                    [
                        '4th Jan, 11:48',
                        9
                    ],
                    [
                        '4th Jan, 10:12 ',
                        1
                    ],
                    [
                        '5th Jan, 12:19',
                        1
                    ],
                    [
                        '5th Jan, 11:05',
                        1
                    ],
                    [
                        '6th Jan, 12:30',
                        1
                    ],
                    [
                        '7th Jan',
                        0
                    ],
                    [
                        '8th Jan',
                        0
                    ],
                    [
                        '9th Jan 11:49',
                        1
                    ],
                    [
                        '9th Jan, 11:35',
                        2
                    ],
                    [
                        '10th Jan, 13:50',
                        1
                    ],
                    [
                        '10th Jan, 12:16',
                        3
                    ],
                    [
                        '10th Jan 12:07',
                        1
                    ],
                    [
                        '11th Jan 13:17',
                        1
                    ],
                    [
                        '11th Jan 12:50',
                        1
                    ],
                    [
                        '11th Jan 12:06',
                        2
                    ],
                    [
                        '11th Jan 12:03',
                        1
                    ],
                    [
                        '12th Jan 11:54',
                        5
                    ],
                    [
                        '12th Jan 13:36',
                        4
                    ],
                    [
                        '13th Jan 11:43',
                        3
                    ],
                    [
                        '14th Jan',
                        0
                    ],
                    [
                        '15th Jan',
                        0
                    ],
                    [
                        '16th Jan',
                        0
                    ],
                    [
                        '17th Jan 10:06',
                        2
                    ],
                    [
                        '18th Jan 8:27',
                        1
                    ],
                    [
                        '18th Jan 15:46',
                        1
                    ],
                    [
                        '19th Jan 12:49',
                        1
                    ],
                    [
                        '20th Jan',
                        0
                    ],
                    [
                        '21th Jan',
                        0
                    ],
                    [
                        '22th Jan',
                        0
                    ],
                    [
                        '23nd Jan 11:10',
                        2
                    ],
                    [
                        '23th Jan 13;29',
                        2
                    ],
                    [
                        '23th Jan 14:33',
                        1
                    ],
                    [
                        '24th Jan 17:44',
                        1
                    ],
                    [
                        '24th Jan 14:11',
                        1
                    ],
                    [
                        '24th Jan 13:26-13:46',
                        3
                    ],
                    [
                        '24th Jan 11:55',
                        1
                    ],
                    [
                        '24th Jan 12:56',
                        1
                    ],
                    [
                        '24th Jan 10:32',
                        1
                    ],
                    [
                        '24th Jan 9:40',
                        1
                    ],
                    [
                        '25th Jan 12:04',
                        1
                    ],
                    [
                        '25th Jan 11:23- 11:45',
                        3
                    ],
                    [
                        '25th Jan 10:18',
                        1
                    ],
                    [
                        '26th Jan',
                        0
                    ],
                    [
                        '27th Jan 10:46-11:16',
                        2
                    ],
                    [
                        '27th Jan 9:03',
                        1
                    ],
                    [
                        '28th Jan',
                        0
                    ],
                    [
                        '29th Jan',
                        0
                    ],
                    [
                        '30th Jan 16:06-17:15',
                        2
                    ],
                    [
                        '31th Jan 12:33',
                        3
                    ],
                    [
                        '31th Jan 10:52',
                        1
                    ],
                   
                ]
            },
            {
                name: 'Good',
                id: 'Good',
                data: [
                    [
                        '1st Jan',
                        0
                    ],
                    [
                        '2nd Jan',
                        0
                    ],
                    [
                        '3rd Jan',
                        0
                    ],
                    [
                        '4th Jan 12:05',
                        1
                    ],
                    [
                        '4th Jan 15:38,15:40',
                        2
                    ],
                    [
                        '4th Jan 20:39',
                        1
                    ],
                    [
                        '5th Jan 12:00',
                        3
                    ],
                    [
                        '5th Jan 11:24',
                        1
                    ],
                    [
                        '5th Jan 14:55',
                        1
                    ],    
                    [
                        '6th Jan',
                        0
                    ],
                    [
                        '7th Jan',
                        0
                    ],
                    [
                        '8th Jan',
                        0
                    ],
                    [
                        '9th Jan 13:18,13:49',
                        3
                    ],
                    [
                        '9th Jan 15:19',
                        1
                    ],
                    [
                        '10th Jan',
                        0
                    ],
                    [
                        '11th Jan 12:55',
                        1
                    ],
                    [
                        '12th Jan 11:12',
                        1
                    ],
                    [
                        '13th Jan 12:32,12:47',
                        2
                    ],
                    [
                        '14th Jan',
                        0
                    ],
 
                    [
                        '15th Jan',
                        0
                    ],
                    [
                        '16th Jan 12:18',
                        1
                    ],
                    [
                        '17th Jan',
                        0
                    ],
                    [
                        '18th Jan 10:00',
                        1
                    ],
                    [
                        '18th Jan 17:26',
                        1
                    ],
                    [
                        '19th Jan',
                        0
                    ],                       
     
                    [
                        '20th Jan 9:28, 9:52',
                        4
                    ],
                    [
                        '21th Jan ',
                        0.31
                    ],
                    [
                        '22nd Jan',
                        0
                    ],
                        
                    [
                        '23rd Jan 15:19',
                        1
                    ],
                    [
                        '24rd Jan 11:32',
                        1
                    ],
                    [
                        '24rd Jan 12:39',
                        1
                    ],
                    [
                        '25th Jan 12:50',
                        1
                    ],
                    [
                        '26th Jan',
                        0
                    ],
                    [
                        '27th Jan ',
                        0
                    ],
                    [
                        '28th Jan',
                        0
                    ],
                    [
                        '29th Jan',
                        0
                    ],
                    [
                        '30th Jan 11:54',
                        1
                    ],
                    [
                        '30th Jan 16:03',
                        1
                    ],
                    [
                        '31th Jan 9:44',
                        1
                    ],
                         
                         
                         
                    
                         
                         
                         
                         
                         
                         
                         
                ]
            },
           
          
            
        ]
    }
});