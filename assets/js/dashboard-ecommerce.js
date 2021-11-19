"use strict";
var dashboard_ecommerce = {
    init: function() {
        Morris.Line({
            element: "morris-line-chart-first",
            data: [{
                y: "2011",
                a: 0
            },
            {
                y: "2012",
                a: 75
            },
            {
                y: "2013",
                a: 50
            },
            {
                y: "2014",
                a: 15
            },
            {
                y: "2015",
                a: 50
            },
            {
                y: "2016",
                a: 25
            },
            {
                y: "2017",
                a: 100
            }],
            xkey: "y",
            ykeys: ["a"],
            lineColors: ["#4099ff"],
            labels: ["Series A"],
            grid: false,
            axes: false
        }), Morris.Line({
            element: "morris-line-chart-second",
            data: [{
                y: "2011",
                a: 100
            },
            {
                y: "2012",
                a: 25
            },
            {
                y: "2013",
                a: 50
            },
            {
                y: "2014",
                a: 75
            },
            {
                y: "2015",
                a: 100
            },
            {
                y: "2016",
                a: 65
            },
            {
                y: "2017",
                a: 0
            }],
            xkey: "y",
            ykeys: ["a"],
            lineColors: ["#FF5370"],
            labels: ["Series A"],
            grid: false,
            axes: false
        }), Morris.Line({
            element: "morris-line-chart-third",
            data: [{
                y: "2011",
                a: 75
            },
            {
                y: "2012",
                a: 15
            },
            {
                y: "2013",
                a: 95
            },
            {
                y: "2014",
                a: 80
            },
            {
                y: "2015",
                a: 0
            },
            {
                y: "2016",
                a: 25
            },
            {
                y: "2017",
                a: 60
            }],
            xkey: "y",
            ykeys: ["a"],
            lineColors: ["#ab8ce4"],
            labels: ["Series A"],
            grid: false,
            axes: false
        }),
            Morris.Line({
            element: "morris-line-chart-forth",
            data: [{
                y: "2011",
                a: 0
            },
            {
                y: "2012",
                a: 60
            },
            {
                y: "2013",
                a: 50
            },
            {
                y: "2014",
                a: 15
            },
            {
                y: "2015",
                a: 50
            },
            {
                y: "2016",
                a: 35
            },
            {
                y: "2017",
                a: 50
            }],
            xkey: "y",
            ykeys: ["a"],
            lineColors: ["#26c6da"],
            labels: ["Series A"],
            grid: false,
            axes: false
        })
    }
};
jQuery(document).ready(function() {
    dashboard_ecommerce.init()
});
var chart = new Chartist.Line('.ct-6', {
    labels: ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12'],
    series: [
        [12, 9, 7, 8, 5, 4, 6, 2, 3, 3, 4, 6],
        [4,  5, 3, 7, 3, 5, 5, 3, 4, 4, 5, 5],
        [5,  3, 4, 5, 6, 3, 3, 4, 5, 6, 3, 4],
        [3,  4, 5, 6, 7, 6, 4, 5, 6, 7, 6, 3]
    ]
}, {
    low: 0
});
var seq = 0,
    delays = 80,
    durations = 500;
chart.on('created', function() {
    seq = 0;
});
chart.on('draw', function(data) {
    seq++;
    if(data.type === 'line') {
        data.element.animate({
            opacity: {
                begin: seq * delays + 1000,
                dur: durations,
                from: 0,
                to: 1
            }
        });
    } else if(data.type === 'label' && data.axis === 'x') {
        data.element.animate({
            y: {
                begin: seq * delays,
                dur: durations,
                from: data.y + 100,
                to: data.y,
                easing: 'easeOutQuart'
            }
        });
    } else if(data.type === 'label' && data.axis === 'y') {
        data.element.animate({
            x: {
                begin: seq * delays,
                dur: durations,
                from: data.x - 100,
                to: data.x,
                easing: 'easeOutQuart'
            }
        });
    } else if(data.type === 'point') {
        data.element.animate({
            x1: {
                begin: seq * delays,
                dur: durations,
                from: data.x - 10,
                to: data.x,
                easing: 'easeOutQuart'
            },
            x2: {
                begin: seq * delays,
                dur: durations,
                from: data.x - 10,
                to: data.x,
                easing: 'easeOutQuart'
            },
            opacity: {
                begin: seq * delays,
                dur: durations,
                from: 0,
                to: 1,
                easing: 'easeOutQuart'
            }
        });
    } else if(data.type === 'grid') {
        var pos1Animation = {
            begin: seq * delays,
            dur: durations,
            from: data[data.axis.units.pos + '1'] - 30,
            to: data[data.axis.units.pos + '1'],
            easing: 'easeOutQuart'
        };
        var pos2Animation = {
            begin: seq * delays,
            dur: durations,
            from: data[data.axis.units.pos + '2'] - 100,
            to: data[data.axis.units.pos + '2'],
            easing: 'easeOutQuart'
        };
        var animations = {};
        animations[data.axis.units.pos + '1'] = pos1Animation;
        animations[data.axis.units.pos + '2'] = pos2Animation;
        animations['opacity'] = {
            begin: seq * delays,
            dur: durations,
            from: 0,
            to: 1,
            easing: 'easeOutQuart'
        };
        data.element.animate(animations);
    }
});
chart.on('created', function() {
    if(window.__exampleAnimateTimeout) {
        clearTimeout(window.__exampleAnimateTimeout);
        window.__exampleAnimateTimeout = null;
    }
    window.__exampleAnimateTimeout = setTimeout(chart.update.bind(chart), 12000);
});
$(function() {
    var e = 0,
        f = function(a) {
            for (var b = [], c = 0; c <= 360; c += 10) {
                var d = (a + c) % 360;
                b.push({
                    x: c,
                    y: Math.sin(Math.PI * d / 180).toFixed(4),
                    z: Math.cos(Math.PI * d / 180).toFixed(4)
                })
            }
            return b
        },
        g = Morris.Line({
            element:'updating-data-morris-chart',
            data: f(0),
            xkey: "x",
            ykeys: ["y", "z"],
            labels: ["sin()", "cos()"],
            parseTime: !1,
            ymin: -1,
            ymax: 1,
            hideHover: !0,
            lineColors: ["#4099ff", "#FF5370"],
        }),
        h = function() {
            e++, g.setData(f(5 * e)), $(".reloadStatus").text(e + " reloads")
        };
    setInterval(h, 100)
})
