// try adding data to json files and fetching it here.
var data1=[{'country': 'Additive', 'value': 475}, {'country': 'Bakery', 'value': 414}, {'country': 'Beverage', 'value': 189}, {'country': 'Beverage-Alcoholic', 'value': 367}, {'country': 'Cereal', 'value': 456}, {'country': 'Condiment', 'value': 544}, {'country': 'Dairy', 'value': 571}, {'country': 'Dish', 'value': 706}, {'country': 'Essential Oil', 'value': 55}, {'country': 'Fish', 'value': 218}, {'country': 'Flower', 'value': 20}, {'country': 'Fruit', 'value': 667}, {'country': 'Fungi', 'value': 99}, {'country': 'Herb', 'value': 309}, {'country': 'Legume', 'value': 224}, {'country': 'Maize', 'value': 102}, {'country': 'Meat', 'value': 976}, {'country': 'Nuts and Seeds', 'value': 145}, {'country': 'Plant', 'value': 113}, {'country': 'Plant Derivative', 'value': 177}, {'country': 'Seafood', 'value': 174}, {'country': 'Spice', 'value': 484}, {'country': 'Vegetable', 'value': 1062}];
var data2=[{'country': 'add', 'value': 188517}, {'country': 'heat', 'value': 102841}, {'country': 'cook', 'value': 94149}, {'country': 'stir', 'value': 83579}, {'country': 'place', 'value': 55697}, {'country': 'mix', 'value': 53890}, {'country': 'cover', 'value': 50175}, {'country': 'remove', 'value': 50039}, {'country': 'serve', 'value': 43394}, {'country': 'boil', 'value': 39045}, {'country': 'simmer', 'value': 38885}, {'country': 'broil', 'value': 32527}, {'country': 'bake', 'value': 30394}, {'country': 'stirring', 'value': 29616}, {'country': 'sprinkle', 'value': 27615}, {'country': 'cool', 'value': 26433}, {'country': 'preheat', 'value': 24218}, {'country': 'cut', 'value': 22296}, {'country': 'combine', 'value': 21856}, {'country': 'drain', 'value': 21705}, {'country': 'pour', 'value': 20231}, {'country': 'set', 'value': 18083}, {'country': 'season', 'value': 16150}, {'country': 'other processes', 'value': 414241}];
var data3=[{'country': 'bowl', 'value': 71859}, {'country': 'pan', 'value': 68616}, {'country': 'oven', 'value': 55803}, {'country': 'skillet', 'value': 35801}, {'country': 'pot', 'value': 23596}, {'country': 'saucepan', 'value': 21870}, {'country': 'cup', 'value': 15243}, {'country': 'dish', 'value': 13944}, {'country': 'sheet', 'value': 9139}, {'country': 'processor', 'value': 7547}, {'country': 'fork', 'value': 5260}, {'country': 'knife', 'value': 5257}, {'country': 'plate', 'value': 4607}, {'country': 'tablespoon', 'value': 4477}, {'country': 'mixer', 'value': 4391}, {'country': 'container', 'value': 3982}, {'country': 'spatula', 'value': 2691}, {'country': 'spoon', 'value': 2347}, {'country': 'cooker', 'value': 2063}, {'country': 'whisk', 'value': 1935}, {'country': 'board', 'value': 1131}, {'country': 'microwave', 'value': 1088}, {'country': 'platter', 'value': 680}, {'country': 'sieve', 'value': 661}, {'country': 'other utensils', 'value': 4399}];

var datalist=[data1,data2,data3];


anychart.onDocumentReady(function () {

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