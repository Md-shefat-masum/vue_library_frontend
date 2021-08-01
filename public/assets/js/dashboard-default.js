"use strict";
var dashboard_default = {
    init: function() {
        $("#custom-line-chart").sparkline([24, 27, 8, 18, 12, 8, 40, 33, 37, 25, 22, 18, 25, 2, 4, 15, 10, 11, 15, 14, 6, 8, 6, 8, 30, 25], {
            type: 'line',
            width: '100%',
            height: '100%',
            tooltipClassname: 'chart-sparkline',
            chartRangeMax: '50',
            lineColor: 'rgba(56,  211, 231, 0.5)',
            fillColor: 'rgba(56,  211, 231, 0.6)',
            highlightLineColor: 'rgba(56,  211, 231, 0.5)',
            highlightSpotColor: 'rgba(56,  211, 231, 0.8)'
        }), $("#custom-line-chart").sparkline([4, 6, 8, 6, 8, 30, 25, 24, 27, 8, 18, 12, 8, 40, 33, 37, 25, 22, 18, 25, 2, 4, 15, 10, 11, 15, 1], {
            type: 'line',
            width: '100%',
            height: '100%',
            composite: '!0',
            tooltipClassname: 'chart-sparkline',
            chartRangeMax: '40',
            lineColor: 'rgba(188,  160, 238, 0.5)',
            fillColor: 'rgba(188,  160, 238, 0.6)',
            highlightLineColor: 'rgba(188,  160, 238, 0.5)',
            highlightSpotColor: 'rgba(188,  160, 238, 0.8)'
        }), $("#line-chart-sparkline-dashboard1").sparkline([25, 50, 30, 40, 60, 21, 20, 10, 4, 13,0, 10, 30, 40, 10, 15, 20], {
            type: 'line',
            width: '100%',
            height: '50px',
            tooltipClassname: 'chart-sparkline',
            lineColor: '#bca0ee',
            fillColor: 'rgba(188,  160, 238, 0.50)',
            highlightLineColor: "#bca0ee",
            highlightSpotColor: "#bca0ee",
            targetColor: "#bca0ee",
            performanceColor: "#bca0ee",
            boxFillColor: "#bca0ee",
            medianColor: "#bca0ee",
            minSpotColor: "#bca0ee",
        }),
            $("#line-chart-sparkline-dashboard2").sparkline([5, 10, 20, 14, 17, 21, 20, 10, 4, 13,0, 10, 30, 40, 10, 15, 20], {
                type: 'line',
                width: '100%',
                height: '50px',
                tooltipClassname: 'chart-sparkline',
                lineColor: '#38d3e7',
                fillColor: 'rgba(56,  211, 231, 0.60)',
                highlightLineColor: "#38d3e7",
                highlightSpotColor: "#38d3e7",
                targetColor: "#38d3e7",
                performanceColor: "#38d3e7",
                boxFillColor: "#38d3e7",
                medianColor: "#38d3e7",
                minSpotColor: "#38d3e7"
            }), $("#line-chart-sparkline-dashboard3").sparkline([5, 10, 20, 14, 17, 21, 20, 10, 4, 13,0, 10, 30, 40, 10, 15, 20], {
            type: 'line',
            width: '100%',
            height: '50px',
            tooltipClassname: 'chart-sparkline',
            lineColor: '#00c292',
            fillColor: 'rgba(0,  194, 146, 0.60)',
            highlightLineColor: "#00c292",
            highlightSpotColor: "#00c292",
            targetColor: "#00c292",
            performanceColor: "#00c292",
            boxFillColor: "#00c292",
            medianColor: "#00c292",
            minSpotColor: "#00c292"
        }), $("#line-chart-sparkline-dashboard4").sparkline([5, 10, 20, 14, 17, 21, 20, 10, 4, 13,0, 10, 30, 40, 10, 15, 20], {
            type: 'line',
            width: '100%',
            height: '50px',
            tooltipClassname: 'chart-sparkline',
            lineColor: '#59a6fe',
            fillColor: 'rgba(89,  166, 254, 0.60)',
            highlightLineColor: "#59a6fe",
            highlightSpotColor: "#59a6fe",
            targetColor: "#59a6fe",
            performanceColor: "#59a6fe",
            boxFillColor: "#59a6fe",
            medianColor: "#59a6fe",
            minSpotColor: "#59a6fe"
        }), Morris.Donut({
            element: 'donut-color-chart-morris',
            data: [{
                value: 30,
                label: "USA"
            },
                {
                    value: 50,
                    label: "India"
                },
                {
                    value: 10,
                    label: "Canada"
                },
                {
                    value: 10,
                    label: "UK"
                }],
            backgroundColor: "transparent",
            labelColor: "#999999",
            colors: ["rgba(171, 140, 228, 0.6)", "rgba(38, 198, 218, 0.6)" ,"rgba(0, 194, 146, 0.6)" ,"rgb(64, 153, 255, 0.6)" ],
            formatter: function(a) {
                return a + "%"
            }
        }), Morris.Donut({
            element: 'donut-color-chart-morris-daily',
            data: [{
                value: 80,
                label: "India"
            },
                {
                    value: 5,
                    label: "USA"
                },
                {
                    value: 5,
                    label: "Canada"
                },
                {
                    value: 5,
                    label: "UK"
                }],
            backgroundColor: "transparent",
            labelColor: "#999999",
            colors: ["rgba(171, 140, 228, 0.6)", "rgba(38, 198, 218, 0.6)" ,"rgba(0, 194, 146, 0.6)" ,"rgb(64, 153, 255, 0.6)" ],
            formatter: function(a) {
                return a + "%"
            }
        }); var test=$("#testimonial");
        test.owlCarousel({
            items :1,
            margin:30,
            loop : true,
            pagination:false,
            navigationText:false,
            nav: false
        });var testimonial=$("#testimonial1");
        testimonial.owlCarousel({
            rtl:true,
            items :1,
            margin:30,
            loop : true,
            pagination:false,
            navigationText:false,
            nav: false,
            responsive: {
                0: {
                    items: 1
                }
            }
        });
    }
};
var myLineChart = {
    labels: ["","10", "20", "30", "40", "50", "60", "70", "80"],
    datasets: [{
        fillColor: "rgba(171, 140, 228,0.2)",
        strokeColor: "#ab8ce4",
        pointColor: "#ab8ce4",
        data: [10, 20, 40, 30, 0, 20, 10, 30, 10]
    },{
        fillColor: "rgba(38, 198, 218,0.2)",
        strokeColor: "#26c6da",
        pointColor: "#26c6da",
        data: [20, 40, 10, 20, 40, 30, 40, 10, 20]
    }, {
        fillColor: "rgb(64, 153, 255 , 0.2)",
        strokeColor: "#4099ff",
        pointColor: "#4099ff",
        data: [60, 10, 40, 30, 80, 30, 20, 90, 0]
    }]
}

var ctx = document.getElementById("myLineCharts").getContext("2d");
var LineChartDemo = new Chart(ctx).Line(myLineChart, {
    pointDotRadius: 2,
    bezierCurve: false,
    scaleShowVerticalLines: false,
    scaleGridLineColor: "transparent"
});
jQuery(document).ready(function() {
    dashboard_default.init()
});