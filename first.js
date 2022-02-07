$(function(){
    $("#header").load("header.html"); 
    $("#footer").load("footer.html"); 
  });

function search_display(form)
{   document.getElementById("sbtouch").checked=false;
    //get element by refernce and then modify
    var items=document.getElementsByClassName("search-by");
    for(var i=0;i<items.length;i++){
        items[i].style.display='none';
    }
    var items=document.getElementsByClassName("statistics");
    for(var i=0;i<items.length;i++){
        items[i].style.display='none';
    }
    var x=(document.getElementById(form));
    if(x.style.display=='none'){
        x.style.display='flex';
        if(form=='Nutrition'){
          x.style.display='block'
        }
    }
    else{
        x.style.display='none';
    }
}

function stats_display(stats)
{
  document.getElementById("sttouch").checked=false;
  var items=document.getElementsByClassName("search-by");
  for(var i=0;i<items.length;i++){
      items[i].style.display='none';
  }
  var items=document.getElementsByClassName("statistics");
  for(var i=0;i<items.length;i++){
      items[i].style.display='none';
  }
  var x=(document.getElementById(stats));
  if(x.style.display=='none'){
      x.style.display='flex';
      if(stats == 'heat_map')
      {
        x.style.display = 'inline-block';
      }
  }
  else{
      x.style.display='none';
  }
}

// concept map
$(function(){
  plotConceptMap();
});
function plotConceptMap()
{
  d3.json("/metadata.json", function(err,dataJson) {
    console.log(err, dataJson);
    var plot = new ConceptMap("graph", "graph-info", dataJson);
  });
}

