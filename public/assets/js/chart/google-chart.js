google.charts.load('current', {packages: ['corechart', 'bar']});
google.charts.load('current', {'packages':['line']});
google.charts.load('current', {'packages':['corechart']});
google.charts.setOnLoadCallback(drawBasic);
function drawBasic() {
  if ($("#column-chart1").length > 0) {
      var a = google.visualization.arrayToDataTable([
        ["Year", "Sales", "Expenses", "Profit"],
        ["2014", 1e3, 400, 250],
        ["2015", 1170, 460, 300],
        ["2016", 660, 1120, 400],
        ["2017", 1030, 540, 450]
      ]),
      b = {
        chart: {
          title: "Company Performance",
          subtitle: "Sales, Expenses, and Profit: 2014-2017"
        },
        bars: "vertical",
        vAxis: {
          format: "decimal"
        },
        height: 400,
        width:'100%',
        colors: ["#ab8ce4", "#26c6da", "#00c292"]
      },
    c = new google.charts.Bar(document.getElementById("column-chart1"));
    c.draw(a, google.charts.Bar.convertOptions(b))
  }
  if ($("#column-chart2").length > 0) {
      var a = google.visualization.arrayToDataTable([
        ["Year", "Sales", "Expenses", "Profit"],
        ["2014", 1e3, 400, 250],
        ["2015", 1170, 460, 300],
        ["2016", 660, 1120, 400],
        ["2017", 1030, 540, 450]
      ]),
      b = {
        chart: {
          title: "Company Performance",
          subtitle: "Sales, Expenses, and Profit: 2014-2017"
        },
        bars: "horizontal",
        vAxis: {
          format: "decimal"
        },
        height: 400,
        width:'100%',
        colors: ["#ab8ce4", "#26c6da", "#00c292"]
      },
      c = new google.charts.Bar(document.getElementById("column-chart2"));
      c.draw(a, google.charts.Bar.convertOptions(b))
  }
  if ($("#bar-chart1").length > 0) {
      var data = google.visualization.arrayToDataTable([
        ["Element", "Density", { role: "style" } ],
        ["Copper", 10, "#ab8ce4"],
        ["Silver", 12, "#26c6da"],
        ["Gold", 14, "#00c292"],
        ["Platinum", 16, "color: #4099ff"]
      ]);
      var view = new google.visualization.DataView(data);
      view.setColumns([0, 1,
        { calc: "stringify",
          sourceColumn: 1,
          type: "string",
          role: "annotation" 
        },
        2]);
      var options = {
        title: "Density of Precious Metals, in g/cm^3",
        width:'100%',
        height: 400,
        bar: {groupWidth: "95%"},
        legend: { position: "none" },
      };
      var chart = new google.visualization.ColumnChart(document.getElementById("bar-chart1"));
      chart.draw(view, options);
  }

  if ($("#bar-chart2").length > 0) {
      var a = google.visualization.arrayToDataTable([
        ["Element", "Density", {
          role: "style"
        }],
        ["Copper", 10, "#ab8ce4"],
        ["Silver", 12, "#26c6da"],
        ["Gold", 14, "#00c292"],
        ["Platinum", 16, "color: #4099ff"]
      ]),
      d = new google.visualization.DataView(a);
      d.setColumns([0, 1, {
        calc: "stringify",
        sourceColumn: 1,
        type: "string",
        role: "annotation"
      }, 2]);
      var b = {
        title: "Density of Precious Metals, in g/cm^3",
        width:'100%',
        height: 400,
        bar: {
          groupWidth: "95%"
        },
        legend: {
          position: "none"
        }
      },
      c = new google.visualization.BarChart(document.getElementById("bar-chart2"));
      c.draw(d, b)
  }
  if ($("#pie-chart1").length > 0) {
      var data = google.visualization.arrayToDataTable([
        ['Task', 'Hours per Day'],
        ['Work',     5],
        ['Eat',      10],
        ['Commute',  15],
        ['Watch TV', 20],
        ['Sleep',    25]
      ]);
      var options = {
        title: 'My Daily Activities',
        width:'100%',
        height: 400,
       colors: ["#ab8ce4", "#26c6da", "#00c292", "#4099ff", "#FF5370"]
      };
      var chart = new google.visualization.PieChart(document.getElementById('pie-chart1'));
      chart.draw(data, options);
  }
  if ($("#pie-chart2").length > 0) {
      var data = google.visualization.arrayToDataTable([
        ['Task', 'Hours per Day'],
        ['Work',     5],
        ['Eat',      10],
        ['Commute',  15],
        ['Watch TV', 20],
        ['Sleep',    25]
      ]);
      var options = {
        title: 'My Daily Activities',
        is3D: true,
        width:'100%',
        height: 400,
        colors: ["#ab8ce4", "#26c6da", "#00c292", "#4099ff", "#FF5370"]
      };
      var chart = new google.visualization.PieChart(document.getElementById('pie-chart2'));
      chart.draw(data, options);
  }
  if ($("#pie-chart3").length > 0) {
      var data = google.visualization.arrayToDataTable([
        ['Task', 'Hours per Day'],
        ['Work',     2],
        ['Eat',      2],
        ['Commute',  11],
        ['Watch TV', 2],
        ['Sleep',    7]
      ]);
      var options = {
        title: 'My Daily Activities',
        pieHole: 0.4,
        width:'100%',
        height: 400,
        colors: ["#ab8ce4", "#26c6da", "#00c292", "#4099ff", "#FF5370", "#FF5370"]
      };
      var chart = new google.visualization.PieChart(document.getElementById('pie-chart3'));
      chart.draw(data, options);
  }
  if ($("#pie-chart4").length > 0) {
      var data = google.visualization.arrayToDataTable([
        ['Language', 'Speakers (in millions)'],
        ['Assamese', 13],
        ['Bengali', 83], 
        ['Bodo', 1.4],
        ['Dogri', 2.3], 
        ['Gujarati', 46], 
        ['Hindi', 300],
        ['Kannada', 38], 
        ['Kashmiri', 5.5], 
        ['Konkani', 5],
        ['Maithili', 20], 
        ['Malayalam', 33], 
        ['Manipuri', 1.5],
        ['Marathi', 72], 
        ['Nepali', 2.9], 
        ['Oriya', 33],
        ['Punjabi', 29], 
        ['Sanskrit', 0.01], 
        ['Santhali', 6.5],
        ['Sindhi', 2.5], 
        ['Tamil', 61], 
        ['Telugu', 74], 
        ['Urdu', 52]
      ]);
      var options = {
        title: 'Indian Language Use',
        legend: 'none',
        width:'100%',
        height: 400,
        pieSliceText: 'label',
        slices: {  4: {offset: 0.2},
          12: {offset: 0.3},
          14: {offset: 0.4},
          15: {offset: 0.5},
        },
          // colors: ["#ab8ce4", "#26c6da"]
          colors: ["#ab8ce4", "#26c6da", "#00c292", "#4099ff", "#f3d800", "#FF5370","#ab8ce4", "#26c6da", "#00c292", "#4099ff", "#f3d800", "#FF5370","#ab8ce4", "#26c6da", "#00c292", "#4099ff", "#f3d800", "#FF5370", "#fd7b6c", "#00c292","#4099ff", "#f3d800"]
        };
        var chart = new google.visualization.PieChart(document.getElementById('pie-chart4'));
        chart.draw(data, options);
  }
  if ($("#line-chart").length > 0) {
      var data = new google.visualization.DataTable();
      data.addColumn('number', 'month');
      data.addColumn('number', 'Guardians of the Galaxy');
      data.addColumn('number', 'The Avengers');
      data.addColumn('number', 'Transformers: Age of Extinction');
      data.addRows([
        [1,  37.8, 80.8, 41.8],
        [2,  30.9, 10.5, 32.4],
        [3,  40.4,   57, 25.7],
        [4,  11.7, 18.8, 10.5],
        [5,  20, 17.6, 10.4],
        [6,   8.8, 13.6,  7.7],
        [7,   7.6, 12.3,  9.6],
        [8,  12.3, 29.2, 10.6],
        [9,  16.9, 42.9, 14.8],
        [10, 12.8, 30.9, 11.6],
        [11,  5.3,  7.9,  4.7],
        [12,  6.6,  8.4,  5.2],
      ]);
      var options = {
        chart: {
          title: 'Box Office Earnings in First Two Weeks of Opening',
          subtitle: 'in millions of dollars (USD)'
        },
        colors: ["#ab8ce4", "#26c6da", "#00c292"],
        height: 500,
        width:'100%',
      };
      var chart = new google.charts.Line(document.getElementById('line-chart'));
      chart.draw(data, google.charts.Line.convertOptions(options));
  }
  if ($("#combo-chart").length > 0) {
      var data = google.visualization.arrayToDataTable([
        ['Month', 'Bolivia', 'Ecuador', 'Madagascar', 'Papua', 'Rwanda', 'Average'],
        ['2004/05',  165,      938,         522,             998,           450,      614.6],
        ['2005/06',  135,      1120,        599,             1268,          288,      682],
        ['2006/07',  157,      1167,        587,             807,           397,      623],
        ['2007/08',  139,      1110,        615,             968,           215,      609.4],
        ['2008/09',  136,      691,         629,             1026,          366,      569.6]
      ]);
      var options = {
        title : 'Monthly Coffee Production by Country',
        vAxis: {title: 'Cups'},
        hAxis: {title: 'Month'},
        seriesType: 'bars',
        series: {5: {type: 'line'}},
        height: 500,
        width:'100%',
        colors: ["#ab8ce4", "#26c6da", "#00c292", "#4099ff", "#FF5370"]
    };
    var chart = new google.visualization.ComboChart(document.getElementById('combo-chart'));
    chart.draw(data, options);
  }
  if ($("#area-chart1").length > 0) {
      var data = google.visualization.arrayToDataTable([
        ['Year', 'Sales', 'Expenses'],
        ['2013',  1000,      400],
        ['2014',  1170,      460],
        ['2015',  660,       1120],
        ['2016',  1030,      540]
      ]);
      var options = {
        title: 'Company Performance',
        hAxis: {title: 'Year',  titleTextStyle: {color: '#333'}},
        vAxis: {minValue: 0},
        width:'100%',
        height: 400,
        colors: ["#ab8ce4", "#26c6da"]
      };
      var chart = new google.visualization.AreaChart(document.getElementById('area-chart1'));
      chart.draw(data, options);
  }
  if ($("#area-chart2").length > 0) {
    var data = google.visualization.arrayToDataTable([
      ['Year', 'Cars', 'Trucks' , 'Drones' , 'Segways'],
      ['2013',  100, 400, 2000, 400],
      ['2014',  500, 700, 530, 800],
      ['2015',  2000, 1000, 620, 120],
      ['2016',  120, 201, 2501, 540]
    ]);
    var options = {
      title: 'Company Performance',
      hAxis: {title: 'Year',  titleTextStyle: {color: '#333'}},
      vAxis: {minValue: 0},
      width:'100%',
      height: 400,
      colors: ["#ab8ce4", "#26c6da", "#00c292", "#4099ff"]
    };
    var chart = new google.visualization.AreaChart(document.getElementById('area-chart2'));
    chart.draw(data, options);
  }
  if ($("#area-chart-dashboard-default").length > 0) {
      var data = new google.visualization.DataTable();
      data.addColumn('number', 'Day');
      data.addColumn('number', 'Guardians of the Galaxy');
      data.addColumn('number', 'The Avengers');
      data.addColumn('number', 'Transformers: Extinction');
      data.addRows([
        [1,  37.8, 80.8, 41.8],
        [2,  30.9, 10.5, 32.4],
        [3,  40.4,   57, 25.7],
        [4,  11.7, 18.8, 10.5],
        [5,  20, 17.6, 10.4],
        [6,   8.8, 13.6,  7.7],
        [7,   7.6, 12.3,  9.6],
        [8,  12.3, 29.2, 10.6],
        [9,  16.9, 42.9, 14.8],
        [10, 12.8, 30.9, 11.6],
        [11,  5.3,  7.9,  4.7],
        [12,  6.6,  8.4,  5.2],
        [13,  4.8,  6.3,  3.6],
        [14,  4.2,  6.2,  3.4]
      ]);
      var options = {
        chart: {
          title: 'Box Office Earnings in First Two Weeks of Opening',
          subtitle: 'in millions of dollars (USD)'
        },
        colors: ["#00c292", "#f3d800" , "#fd7b6c"],
        width:'100%',
        legend: {position: 'top'},
      };
      var chart = new google.charts.Line(document.getElementById('area-chart-dashboard-default'));
      chart.draw(data, google.charts.Line.convertOptions(options));
  }
}
