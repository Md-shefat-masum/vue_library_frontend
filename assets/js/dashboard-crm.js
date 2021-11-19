"use strict";
var dashboard_crm = {
    init: function() {
        new Chartist.Line('.ct-1', {
            labels: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri'],
            series: [
                [12, 9, 7, 8, 5],
                [2, 1, 3.5, 7, 3],
                [1, 3, 4, 5, 6]
            ]
            }, {
            fullWidth: true,
            chartPadding: {
                right: 40
            }
        }), new Chartist.Bar('.ct-10', {
            labels: ['Q1', 'Q2', 'Q3', 'Q4', 'Q5', 'Q6', 'Q7', 'Q8', 'Q9', 'Q10', 'Q11', 'Q13', 'Q14'],
            series: [
                [100, 200, 300, 400, 500, 600, 700, 800, 900, 1000, 1100, 1200, 1300],
                [100, 200, 300, 400, 500, 600, 700, 800, 900, 1000, 1100, 1200, 1300],
                [100, 200, 300, 400, 500, 600, 700, 800, 900, 1000, 1100, 1200, 1300]
            ]
            }, {
            stackBars: true,
            axisY: {
                labelInterpolationFnc: function(value) {
                    return (value / 1000) + 'k';
                }
            }
        }).on('draw', function(data) {
            if(data.type === 'bar') {
                data.element.attr({
                    style: 'stroke-width: 14px'
                });
            }
        }), new Chartist.Bar('.ct-12', {
            labels: ['2010-11', '2011-12', '2012-13', '2013-13', '2014-15', '2015-16', '2016-17', '2017-18'],
            series: [
                [0.9, 0.4, 1.5, 4.9, 3, 3.8, 3.8, 1.9],
                [6.4, 5.7, 7, 4.95, 3, 3.8, 3.8, 1.9],
                [4.3, 2.3, 3.6, 4.5, 5, 2.8, 3.3, 4.3],
                [3.8, 4.1, 2.8, 1.8, 2.2, 1.9, 6.7, 2.9]
            ]
            }, {
            stackBars: true,
            axisX: {
                labelInterpolationFnc: function(value) {
                    return value.split(/\s+/).map(function(word) {
                        return word[0];
                    }).join('');
                }
            },
            axisY: {
                offset: 20
            }
            }, [
            ['screen and (min-width: 400px)', {
                reverseData: true,
                horizontalBars: true,
                axisX: {
                    labelInterpolationFnc: Chartist.noop
                },
                axisY: {
                    offset: 60
                }
            }],
            ['screen and (min-width: 800px)', {
                stackBars: false,
                seriesBarDistance: 10
            }],
            ['screen and (min-width: 1000px)', {
                reverseData: false,
                horizontalBars: false,
                seriesBarDistance: 15
            }]
        ]), $("#simple-line-chart-cms").sparkline([5, 10, 20, 14, 17, 21, 20, 10, 4, 13,0, 10, 30, 40, 10, 15, 20], {
            type: 'line',
            width: '100%',
            height: '100%',
            tooltipClassname: 'chart-sparkline',
            lineColor: '#ffffff',
            fillColor: 'transparent',
            spotColor: '#fff',
            highlightLineColor: "#fff",
            highlightSpotColor: "#fff",
            sliceColors: ["#fff", "#fff", "#fff"],
            targetColor: "#fff",
            performanceColor: "#fff",
            boxFillColor: "#fff",
            medianColor: "#fff",
            minSpotColor: "#fff"
        });
    }
};

jQuery(document).ready(function() {
    dashboard_crm.init()
});