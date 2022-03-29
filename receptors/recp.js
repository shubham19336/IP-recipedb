$(function(){
    $("#header").load("/header/header.html"); 
    $("#footer").load("/footer/footer.html"); 
  });
  
  $(document).ready(function () {
    var pTabItem = $(".prodNav .ptItem");
    $(pTabItem).click(function () {
      // Tab nav active functionality
      $(pTabItem).removeClass("active");
      $(this).addClass("active");
  
      // Tab container active functionality
      var tabid = $(this).attr("id");
      console.log(tabid);
      disp(tabid+'C');
    //   if(tabid=='pTab1'){}
    //   else if(tabid=='pTab2') disp('odor_output');
    //   $(".prodMain").removeClass("active");
    //   $("#" + tabid + "C").addClass("active");
  
      return false;
    }
    
    );
  });

  function disp(tableid){
    console.log(tableid);
    var items=document.getElementsByClassName("prodMain");
    for(var i=0;i<items.length;i++){
    items[i].style.display='none';
    }
    var x=document.getElementById(tableid);
    x.style.display='block';
  }

  
  
