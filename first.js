function name_printer1()
{   
    //get element by refernce and then modify
    var x=(document.getElementById("cform-inline"));
    if(x.style.display=='none'){
        x.style.display='flex';
    }
    else{
        x.style.display='none';
    }

}
function name_printer2()
{
    document.getElementById("query_handle").innerHTML = "hello2";
}
function name_printer3()
{
    document.getElementById("query_handle").innerHTML = "hello3";
}
function name_printer4()
{
    document.getElementById("query_handle").innerHTML = "hello4";
}
function name_printer5()
{
    document.getElementById("query_handle").innerHTML = "hello5";
}