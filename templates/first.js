$(function(){
    $("#header").load("../header/header.html"); 
    $("#footer").load("../footer/footer.html"); 
  });
function search_display(form)
{     
    document.getElementById("sbtouch").checked=false;
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
        // if(form=='Nutrition'){
        //   x.style.display='flex'
        // }
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
  }
  else{
      x.style.display='none';
  }
}

function navuncheck(navb)
{
  document.getElementById(navb).checked = false;
}
function getSlider() {
  // Get the checkbox
  var checkBox = document.getElementById("adv_checkbox_slider");
  // Get the output text
  var text = document.getElementById("adv_Nutrition");

  // If the checkbox is checked, display the output text
  if (checkBox.checked == true){
    text.style.display = "flex";
  } else {
    text.style.display = "none";
  }
}
