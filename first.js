$(function(){
    $("#header").load("header.html"); 
    $("#footer").load("footer.html"); 
  });

function form_print(form)
{   
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
