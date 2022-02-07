$(function(){
    var slider1 = document.getElementById('slider-round1');
    noUiSlider.create(slider1, {
        start: [10, 280],
        connect: true,
        // tooltips:[true,true],
        tooltips:true,
        step:1,
        pips: { mode: "count", values: 3 },
        range: {
            'min': 0,
            'max': 1200
        }
    });

    var slider2 = document.getElementById('slider-round2');
    noUiSlider.create(slider2, {
        start: [20, 80],
        connect: true,
        // tooltips:[true,true],
        tooltips:true,
        step:1,
        pips: { mode: "count", values: 3 },
        range: {
            'min': 0,
            'max': 200
        }
    });

    var slider3 = document.getElementById('slider-round3');
    noUiSlider.create(slider3, {
        start: [20, 80],
        connect: true,
        // tooltips:[true,true],
        tooltips:true,
        step:1,
        pips: { mode: "count", values: 3 },
        range: {
            'min': 0,
            'max': 200
        }
    });

    var slider4 = document.getElementById('slider-round4');
    noUiSlider.create(slider4, {
        start: [20, 80],
        connect: true,
        // tooltips:[true,true],
        tooltips:true,
        step:1,
        pips: { mode: "count", values: 3 },
        range: {
            'min': 0,
            'max': 200
        }
    });
    
});

function z(){
    var slider1 = document.getElementById('slider-round');
    console.log(slider1.noUiSlider.get()[0]);
}



 