decimals = 0; // number of decimal places 

// format object
numberFormat = {
    // 'to' the formatted value. Receives a number.
    to: function (value) {
        return value.toFixed(decimals);
    },
    // 'from' the formatted value.
    // Receives a string, should return a number.
    from: function (value) {
        return Number(value);;
    }
};

$(function(){
    var st='slider-round';
    for(var i=1;i<=8;i++){
        var slider1 = document.getElementById(st+i);
        noUiSlider.create(slider1, {
            start: i==1?[20,600]:[0, 80],
            connect: true,
            // plag
            // tooltips:[true,true],
            tooltips:true,
            step:1,
            pips: { mode: "count", values: 3,density:4 },
            range: {
                'min': 0,
                'max': i==1?1200:200
            },
            format: numberFormat
        });
    }   
    
});

function z(){
    var slider1 = document.getElementById('slider-round');
    console.log(slider1.noUiSlider.get()[0]);
}



 