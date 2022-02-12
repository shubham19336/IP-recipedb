// try adding data to json files and fetching it here.
data1=[{
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

data2=[{
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

data3=[{
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
}
];

datalist=[data1,data2,data3];


anychart.onDocumentReady(function () {
var div = "chartdiv";

for(var i=1;i<=3;i++){
  var chart = am4core.create("chartdiv"+i, am4charts.PieChart);

  // Add data
  chart.data = datalist[i-1];

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
  am4core.addLicense("ch-custom-attribution");
  chart.innerRadius = am4core.percent(60);

  var label = pieSeries.createChild(am4core.Label);
  label.text = "{values.value.sum}";
  label.horizontalCenter = "middle";
  label.verticalCenter = "middle";
  label.fontSize = 40;
}
  

});