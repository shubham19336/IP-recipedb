$(function(){
    $("#header").load("header.html"); 
    $("#footer").load("footer.html"); 
  });
$(function()
{
    const slider = document.getElementById('sliderPrice');
  const rangeMin = parseInt(slider.dataset.min);
  const rangeMax = parseInt(slider.dataset.max);
  const step = 1;
  const filterInputs = document.querySelectorAll('input.filter__input');
  
  noUiSlider.create(slider, {
      start: [rangeMin, rangeMax],
      connect: true,
      step: step,
      range: {
          'min': rangeMin,
          'max': rangeMax
      },
    
      // make numbers whole
      format: {
        to: value => value,
        from: value => value
      }
  });
  
  // bind inputs with noUiSlider 
  slider.noUiSlider.on('update', (values, handle) => { 
    filterInputs[handle].value = Math.round(values[handle]); 
  });
  
  filterInputs.forEach((input, indexInput) => { 
    input.addEventListener('change', () => {
      slider.noUiSlider.setHandle(indexInput, input.value);
    })
  });
});
  


function form_print(form)
{   document.getElementById("sbtouch").checked=false;
    //get element by refernce and then modify
    var items=document.getElementsByClassName("form-inline");
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

