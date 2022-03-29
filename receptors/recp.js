function loadItemDetails(jsonData,tableid) {
  $(tableid).DataTable( {
      data: jsonData,
      responsive: true,
      columns: [
          { data: "Uniprot Id" },
          { data: "Entry name" },
          { data: "Organism" },
          { data: "Receptor Type" },
          { data: "URL",
            "render": function(data, type, row, meta){
            if(type === 'display'){
                data = '<a href="' + row.myid + '">' + data + '</a>';
            }
            return data;
            } 
          }
      ]
  })
}

$(function(){
  $("#header").load("/header/header.html"); 
  $("#footer").load("/footer/footer.html"); 
  var json1 = $.getJSON({'url': './taster.json', 'async': false});
  var json2 = $.getJSON({'url': './odorr.json', 'async': false});  
  loadItemDetails(JSON.parse(json1.responseText),'#taste_output'); 
  loadItemDetails(JSON.parse(json2.responseText),'#odor_output'); 
});

function fix(){
  $($.fn.dataTable.tables(true)).DataTable().columns.adjust();
}

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

    // resize the tables
    fix();

    return false;
  });
});
  

  
  
