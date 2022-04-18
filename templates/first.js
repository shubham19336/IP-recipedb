$(function(){
    $("#header").load("../header/header.html"); 
    $("#footer").load("../footer/footer.html"); 
  });

// --------------------------------------- AUTOCOMPLETE ------------------------------------------------------------------

function autocomplete(inp, arr) {
/*the autocomplete function takes two arguments,
the text field element and an array of possible autocompleted values:*/

var currentFocus;
/*execute a function when someone writes in the text field:*/
inp.addEventListener("input", function(e) {
    var a, b, i, val = this.value;
    /*close any already open lists of autocompleted values*/
    closeAllLists();
    if (!val) { return false;}
    currentFocus = -1;
    /*create a DIV element that will contain the items (values):*/
    a = document.createElement("DIV");
    a.setAttribute("id", this.id + "autocomplete-list");
    a.setAttribute("class", "autocomplete-items");
    /*append the DIV element as a child of the autocomplete container:*/
    this.parentNode.appendChild(a);
    /*for each item in the array...*/
    for (i = 0; i < arr.length; i++) {
        /*check if the item starts with the same letters as the text field value:*/
        var x=arr[i].toUpperCase().search(val.toUpperCase());
        if ( x!=-1 ) {
        /*create a DIV element for each matching element:*/
        b = document.createElement("DIV");
        /*make the matching letters bold:*/
        b.innerHTML = arr[i].substr(0,x);
        b.innerHTML += "<strong>" + arr[i].substr(x, val.length) + "</strong>";
        b.innerHTML += arr[i].substr(x+val.length);
        /*insert a input field that will hold the current array item's value:*/
        b.innerHTML += "<input type='hidden' value='" + arr[i] + "'>";
        /*execute a function when someone clicks on the item value (DIV element):*/
        b.addEventListener("click", function(e) {
            /*insert the value for the autocomplete text field:*/
            inp.value = this.getElementsByTagName("input")[0].value;
            /*close the list of autocompleted values,
            (or any other open lists of autocompleted values:*/
            closeAllLists();
        });
        a.appendChild(b);
        }
    }
});
/*execute a function presses a key on the keyboard:*/
inp.addEventListener("keydown", function(e) {
    var x = document.getElementById(this.id + "autocomplete-list");
    if (x) x = x.getElementsByTagName("div");
    if (e.keyCode == 40) {
        /*If the arrow DOWN key is pressed,
        increase the currentFocus variable:*/
        currentFocus++;
        /*and and make the current item more visible:*/
        addActive(x);
    } else if (e.keyCode == 38) { //up
        /*If the arrow UP key is pressed,
        decrease the currentFocus variable:*/
        currentFocus--;
        /*and and make the current item more visible:*/
        addActive(x);
    } else if (e.keyCode == 13) {
        /*If the ENTER key is pressed, prevent the form from being submitted,*/
        e.preventDefault();
        if (currentFocus > -1) {
        /*and simulate a click on the "active" item:*/
        if (x) x[currentFocus].click();
        }
    }
});
function addActive(x) {
    /*a function to classify an item as "active":*/
    if (!x) return false;
    /*start by removing the "active" class on all items:*/
    removeActive(x);
    if (currentFocus >= x.length) currentFocus = 0;
    if (currentFocus < 0) currentFocus = (x.length - 1);
    /*add class "autocomplete-active":*/
    x[currentFocus].classList.add("autocomplete-active");
}
function removeActive(x) {
    /*a function to remove the "active" class from all autocomplete items:*/
    for (var i = 0; i < x.length; i++) {
    x[i].classList.remove("autocomplete-active");
    }
}
function closeAllLists(elmnt) {
    /*close all autocomplete lists in the document,
    except the one passed as an argument:*/
    var x = document.getElementsByClassName("autocomplete-items");
    for (var i = 0; i < x.length; i++) {
    if (elmnt != x[i] && elmnt != inp) {
        x[i].parentNode.removeChild(x[i]);
    }
    }
}
/*execute a function when someone clicks in the document:*/
document.addEventListener("click", function (e) {
    closeAllLists(e.target);
});
}

// *******************************************************************************************************************************************************************
/*An array containing all the country names in the world:*/
var continent=['African', 'Asian', 'Australasian', 'Latin American', 'European', 'North American'];
var region=['Middle Eastern', 'Rest Africa', 'Northern Africa', 'Chinese and Mongolian', 'Thai', 'Southeast Asian', 'Indian Subcontinent', 'Korean', 'Japanese', 'Australian', 'Mexican', 'Caribbean', 'South American', 'Eastern European', 'Scandinavian', 'UK', 'Belgian', 'Deutschland', 'Greek', 'French', 'Spanish and Portuguese', 'Italian', 'Irish', 'US', 'Canadian', 'Central American'];
var sub_region=['Egyptian', 'Nigerian', 'Moroccan', 'Rest Middle Eastern', 'Chinese', 'Thai', 'Indonesian', 'Bangladeshi', 'Vietnamese', 'Israeli', 'Lebanese', 'Filipino', 'Indian', 'Korean', 'Malaysian', 'Turkish', 'Japanese', 'Pakistani', 'Australian', 'Mexican', 'Rest Caribbean', 'Puerto Rican', 'Jamaican', 'Cuban', 'Argentine', 'Brazilian', 'Colombian', 'Chilean', 'Peruvian', 'Russian', 'Danish', 'Scottish', 'English', 'UK', 'Welsh', 'Hungarian', 'Swedish', 'Belgian', 'Norwegian', 'Austrian', 'Greek', 'French', 'Swiss', 'Portuguese', 'Italian', 'Polish', 'Dutch', 'Irish', 'German', 'Rest Eastern European', 'Spanish', 'Finnish', 'Czech', 'US', 'Canadian', 'Somalian', 'Namibian', 'Angolan', 'Libyan', 'Sudanese', 'Ethiopian', 'Laotian', 'Nepalese', 'Cambodian', 'Palestinian', 'Saudi Arabian', 'Mongolian', 'Iraqi', 'New Zealander', 'Honduran', 'Costa Rican', 'Guatemalan', 'Ecuadorean', 'Venezuelan', 'Icelandic'];
/*initiate the autocomplete function on the "myInput" element, and pass along the countries array as possible autocomplete values:*/

var category=['Additive', 'Vegetable', 'Herb', 'Dairy', 'Plant Derivative', 'Meat', 'Spice', 'Cereal', 'Beverage', 'Essential Oil', 'Maize', 'Legume', 'Beverage-Alcoholic', 'Condiment', 'Seafood', 'Dish', 'Fruit', 'Fish', 'Fungi', 'Nuts and seeds', 'Bakery', 'MISC-Utensil', 'MISC-Other', 'Flower'];
var utensils=['oven', 'steamer', 'paddle', 'knife', 'shaker', 'saucer', 'sauceboat', 'saucpan', 'skillet', 'frying-pan', 'spatula', 'pan', 'foil', 'container', 'processer', 'jug', 'scoop', 'microwave', 'cutter', 'tablespoon', 'grinder', 'jar', 'processor', 'shell', 'cup', 'pestle', 'saucepot', 'blade', 'spoon', 'sheet', 'cooker', 'pot', 'corer', 'sieve', 'strainer', 'crock', 'saucepan', 'board', 'whisk', 'plate', 'bottle', 'box', 'bowl', 'tray', 'fryer', 'ramekin', 'ladle', 'marzipan', 'platter', 'blender', 'basket', 'disc', 'skewer', 'boiler', 'kettle', 'masher', 'crockpot', 'teaspoon', 'suacepan', 'frypan', 'dish', 'stockpot', 'mixer', 'beater', 'casserole', 'peeler', 'mug', 'basin', 'fork'];
var processes=['overcook', 'handle', 'muddle', 'distribute', 'steep', 'flake', 'scald', 'crockpot', 'add', 'scramble', 'marinade', 'reserve', 'steam', 'scorching', 'tilt', 'shake', 'unmold', 'toss', 'settle', 'submerge', 'wok', 'drop', 'rub', 'crush', 'fry', 'wipe', 'preheat', 'drain', 'prepare', 'fill', 'sieve', 'replace', 'blot', 'frost', 'stew', 'rinse', 'pre-heat', 'refrigerate', 'rest', 'stand', 'open', 'absorbed', 'square', 'soften', 'tear', 'punch', 'check', 'tie', 'burn', 'press', 'tuck', 'powdered', 'floured', 'beat', 'top', 'dump', 'squeeze', 'prick', 'parboil', 'pop', 'scrub', 'strip', 'dry', 'deflate', 'store', 'scoop', 'slice', 'pat', 'season', 'place', 'stream', 'yield', 'brush', 'rise', 'set', 'sweeten', 'crimp', 'mound', 'cover', 'rising', 'repeat', 'minced', 'knead', 'save', 'ice', 'overmix', 'whisk', 'evaporated', 'reduce', 'grate', 'throw', 'blend', 'curdle', 'remove', 'split', 'stack', 'wilt', 'bake', 'boil', 'mash', 'wrap', 'roast', 'meld', 'immerse', 'griddle', 'sprinkle', 'uncover', 'massage', 'cut', 'poach', 'evaporate', 'cool', 'smooth', 'reheat', 'toast', 'serve', 'poke', 'slash', 'start', 'devein', 'pick', 'dash', 'deglaze', 'thaw', 'dice', 'transfer', 'spread', 'shape', 'trim', 'saute', 'caramelize', 'broil', 'scrape', 'note', 'moist', 'zest', 'marinate', 'strain', 'unroll', 'baste', 'roll', 'mince', 'sit', 'break', 'stretch', 'divide', 'dust', 'defrost', 'blanch', 'sprout', 'drizzle', 'thicken', 'barbecue', 'push', 'char', 'chop', 'whip', 'charred', 'wet', 'take', 'pressure', 'taste', 'puree', 'sift', 'sterilize', 'seal', 'caramelized', 'garnish', 'unfold', 'skim', 'blitz', 'flip', 'insert', 'smoking', 'cook', 'sear', 'stir-fry', 'dressing', 'whirl', 'flavoring', 'roux', 'cream', 'scatter', 'twist', 'invert', 'measure', 'chill', 'smear', 'simmer', 'squash', 'foil', 'foam', 'splutter', 'heat', 'soak', 'combine', 'pour', 'splash', 'spray', 'stuff', 'seasoning', 'mix', 'glaze', 'put', 'pierce', 'pan-fry', 'raise', 'fold', 'turn', 'uncovered', 'pack', 'dollop', 'grease', 'test', 'thread', 'stop', 'warm', 'style', 'shred', 'sweat', 'arrange', 'hold', 'drip', 'butter', 'touch', 'rotate', 'bubble', 'stir', 'ladle', 'dredge', 'carve', 'move', 'slather', 'grind', 'wash', 'peel', 'lard', 'presentation', 'braise', 'process', 'flatten', 'dissolve', 'skin', 'dripping', 'condensed', 'smoke', 'slit', 'coat', 'bubbling', 'pull', 'unwrap', 'moisten', 'snap', 'mould', 'sort', 'select', 'freezing', 'assemble', 'dress', 'swirl', 'stirring', 'decorate', 'crumble', 'clean', 'wait', 'melt', 'separate', 'sizzle', 'smash', 'dip'];
// ***********************************************************************************************************************************************************************
// just make lists and link them here
// console.log(document.getElementById('ccontinent'));
$(function(){
    autocomplete(document.getElementById("ccontinent"), continent);
    autocomplete(document.getElementById("advcontinent"), continent);
    autocomplete(document.getElementById("cregion"), region);
    autocomplete(document.getElementById("advregion"), region);
    autocomplete(document.getElementById("ccountry"), sub_region);
    autocomplete(document.getElementById("advcountry"), sub_region);

    // 1lakh + entries... autocomplete heavy..
    // autocomplete(document.getElementById("crecipe"), recipes);

    autocomplete(document.getElementById("caused"), category);
    autocomplete(document.getElementById("advcaused"), category);
    autocomplete(document.getElementById("canotused"), category);
    autocomplete(document.getElementById("advcanotused"), category);
    autocomplete(document.getElementById("advcp"),processes);
    autocomplete(document.getElementById("advutensil"),utensils);
})
  
// ----------------------------------------------------------AUTOCOMPLETE ENDS -------------------------------------------------------
var statson=false;
function search_display(form)
{   
statson=false;  
const mediaQuery = window.matchMedia('(max-width: 1080px)');
if (mediaQuery.matches) {
    document.getElementById("statscontainer").style.overflowX="hidden";
  }

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
const mediaQuery = window.matchMedia('(max-width: 1080px)');
if (mediaQuery.matches) {
    document.getElementById("statscontainer").style.overflowX="scroll";
  }
  statson=true;

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
  
  function reportWindowSize() {
      console.log("hora");
    const mediaQuery = window.matchMedia('(min-width: 1080px)');
    if (mediaQuery.matches) {
        document.getElementById("statscontainer").style.overflowX="hidden";
    }
    const mediaQuery2 = window.matchMedia('(max-width: 1080px)');
    if (mediaQuery2.matches && statson) {
        document.getElementById("statscontainer").style.overflowX="scroll";
    }
  }
  
  $(function(){
    window.onresize = reportWindowSize;
  });
