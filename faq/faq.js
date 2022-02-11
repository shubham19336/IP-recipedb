$(function(){
  $("#header").load("/header/header.html"); 
  $("#footer").load("/footer/footer.html"); 
});


$(function(){
  const accItems = document.querySelectorAll(".accordion__item");  // select all accordion items
  accItems.forEach((acc) => acc.addEventListener("click", toggleAcc)); // add a click event for all items
  
  function toggleAcc() {
    // remove active class from all items exept the current item (this)
    accItems.forEach((item) => item != this ? item.classList.remove("accordion__item--active") : null);
  
    if (this.classList != "accordion__item--active") {
      this.classList.toggle("accordion__item--active"); // toggle active class on current item
    }
  }
});

function faqdisplay(faq){
  var items=document.getElementsByClassName("accordion");
  for(var i=0;i<items.length;i++){
    items[i].style.display='none';
  }
  document.getElementById(faq).style.display='inline'
}
