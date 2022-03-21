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
      $(".prodMain").removeClass("active");
      $("#" + tabid + "C").addClass("active");
  
      return false;
    });
  });
  