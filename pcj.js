
anychart.onDocumentReady(function () {
var chart = am4core.create("chartdiv", am4charts.PieChart);

// Add data
chart.data = [{
  "country": "Vegetable",
  "value": 501.9
}, {
  "country": "Czechia",
  "value": 301.9
}, {
  "country": "Ireland",
  "value": 201.1
}, {
  "country": "Germany",
  "value": 165.8
}, {
  "country": "Australia",
  "value": 139.9
}, {
  "country": "Austria",
  "value": 128.3
},{
    "country": "Fruit",
    "value": 15
},{
  "country": "Fruit",
  "value": 15
},{
  "country": "Fruit",
  "value": 15
},{
  "country": "Fruit",
  "value": 15
},{
  "country": "Fruit",
  "value": 15
},{
  "country": "Fruit",
  "value": 15
}
];

// Add and configure Series
var pieSeries = chart.series.push(new am4charts.PieSeries());
pieSeries.dataFields.value = "value";
pieSeries.dataFields.category = "country";
pieSeries.labels.template.disabled = true;
pieSeries.ticks.template.disabled = true;

chart.legend = new am4charts.Legend();
chart.legend.position = "right";
chart.legend.scrollable = true; 
chart.legend.labels.template.truncate = true;
// chart.label.x = am4core.percent(10);

chart.innerRadius = am4core.percent(60);

var label = pieSeries.createChild(am4core.Label);
label.text = "{values.value.sum}";
label.horizontalCenter = "middle";
label.verticalCenter = "middle";
label.fontSize = 40;
});