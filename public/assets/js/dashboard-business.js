"use strict";
var dashboard_business = {
    init: function() {
        new Chartist.Line('.scatter-chart', {
            labels: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri'],
            series: [
                [0, 10, 20, 30, 40],
                [5, 15, 18, 35, 45]
            ]
            }, {
                fullWidth: true,
                chartPadding: {
                right: 40
            }
        }), $("#bar-chart-sparkline-first").sparkline([5, 10, 9, 2, 4, 9, 5, 7, 5, 6, 6], {
            type: 'bar',
            barWidth: '10px',
            height: '100%',
            tooltipClassname: 'chart-sparkline',
            barColor: '#6AA8FE'
        }), $("#bar-chart-sparkline-second").sparkline([5, 8, 10, 2, 4, 9, 5, 7, 5, 2, 6], {
            type: 'bar',
            barWidth: '10px',
            height: '100%',
            tooltipClassname: 'chart-sparkline',
            barColor: '#B49AE8'
        }), $("#bar-chart-sparkline-third").sparkline([4, 6, 5, 2, 4, 9, 10, 7, 5, 6, 6], {
            type: 'bar',
            barWidth: '10px',
            height: '100%',
            tooltipClassname: 'chart-sparkline',
            barColor: '#5DCEDF'
        }), $("#bar-chart-sparkline-forth").sparkline([8, 8, 6, 2, 4, 5, 6, 3, 5, 3, 5], {
            type: 'bar',
            barWidth: '10px',
            height: '100%',
            tooltipClassname: 'chart-sparkline',
            barColor: '#F46B84'
        }), $("#customer-review").owlCarousel({
            items :1,
            margin:30,
            dots: false,
            loop : true,
            pagination:false,
            autoplay:true,
            nav:false,
            navigationText:false
        }), $("#customer-review-rtl").owlCarousel({
            rtl:true,
            items :1,
            margin:30,
            dots: false,
            loop : true,
            pagination:false,
            autoplay:true,
            nav:false,
            navigationText:false
            });
    }
};
jQuery(document).ready(function() {
    dashboard_business.init()
});