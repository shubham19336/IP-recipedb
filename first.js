$(function(){
    $("#header").load("/header/header.html"); 
    $("#footer").load("/footer/footer.html"); 
  });

function search_display(form)
{     
    document.getElementById("sbtouch").checked=false;
    //get element by refernce and then modify
    var items=document.getElementsByClassName("search-by");
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
    var items=document.getElementsByClassName("statistics");
    for(var i=0;i<items.length;i++){
        items[i].style.display='none';
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
      if(stats == 'heat_map'){
        x.style.display = 'inline-block';
      }
      else if(stats=='test')x.style.display='inline';  //for testing
  }
  else{
      x.style.display='none';
  }
}

function navuncheck(navb)
{
  document.getElementById(navb).checked = false;
}

