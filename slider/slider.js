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
    var slider1 = document.getElementById('slider-round1');
    noUiSlider.create(slider1, {
        start: [10, 280],
        connect: true,
        // tooltips:[true,true],
        tooltips:true,
        step:1,
        pips: { mode: "count", values: 3,density:4 },
        range: {
            'min': 0,
            'max': 1200
        },
        format: numberFormat
    });

    var slider2 = document.getElementById('slider-round2');
    noUiSlider.create(slider2, {
        start: [20, 80],
        connect: true,
        // tooltips:[true,true],
        tooltips:true,
        step:1,
        pips: { mode: "count", values: 3 , density:4},
        range: {
            'min': 0,
            'max': 200
        },
        format: numberFormat
    });

    var slider3 = document.getElementById('slider-round3');
    noUiSlider.create(slider3, {
        start: [20, 80],
        connect: true,
        // tooltips:[true,true],
        tooltips:true,
        step:1,
        pips: { mode: "count", values: 3 , density:4},
        range: {
            'min': 0,
            'max': 200
        },
        format: numberFormat
    });

    var slider4 = document.getElementById('slider-round4');
    noUiSlider.create(slider4, {
        start: [20, 80],
        connect: true,
        // tooltips:[true,true],
        tooltips:true,
        step:1,
        pips: { mode: "count", values: 3, density:4 },
        range: {
            'min': 0,
            'max': 200
        },
        format: numberFormat
    });
    
});

function z(){
    var slider1 = document.getElementById('slider-round');
    console.log(slider1.noUiSlider.get()[0]);
}



 