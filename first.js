$(function(){
    $("#header").load("header.html"); 
    $("#footer").load("footer.html"); 
  });
// $(function()
// {
//     const slider = document.getElementById('sliderPrice');
//   const rangeMin = parseInt(slider.dataset.min);
//   const rangeMax = parseInt(slider.dataset.max);
//   const step = 1;
//   const filterInputs = document.querySelectorAll('input.filter__input');
  
//   noUiSlider.create(slider, {
//       start: [rangeMin, rangeMax],
//       connect: true,
//       step: step,
//       range: {
//           'min': rangeMin,
//           'max': rangeMax
//       },
    
//       // make numbers whole
//       format: {
//         to: value => value,
//         from: value => value
//       }
//   });
  
//   // bind inputs with noUiSlider 
//   slider.noUiSlider.on('update', (values, handle) => { 
//     filterInputs[handle].value = Math.round(values[handle]); 
//   });
  
//   filterInputs.forEach((input, indexInput) => { 
//     input.addEventListener('change', () => {
//       slider.noUiSlider.setHandle(indexInput, input.value);
//     })
//   });
// });
  


function form_print(form)
{   document.getElementById("sbtouch").checked=false;
    //get element by refernce and then modify
    var items=document.getElementsByClassName("form-inline");
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
    }
    else{
        x.style.display='none';
    }
}

function stats_display(stats)
{
  document.getElementById("sttouch").checked=false;
  var items=document.getElementsByClassName("form-inline");
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

