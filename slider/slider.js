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
        noUiSlider.create(document.getElementById(st+i), {
            start: i==1?[20,600]:[0, 80],
            connect: true,
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

$(function(){
    document.getElementById('slider-round5').noUiSlider.on('update', function( values, handle ) {
        if ( handle ) document.getElementById('maxslider5').value = values[handle];
        else document.getElementById('minslider5').value = values[handle];
    });
    /* USE THIS TO LINK INPUT WITH SLIDER */
    // document.getElementById('minslider'+5).addEventListener('change', function(){
    //     document.getElementById('slider-round'+5).noUiSlider.set([null, this.value]);
    // });
    // document.getElementById('maxslider'+5).addEventListener('change', function(){
    //     document.getElementById('slider-round'+5).noUiSlider.set([null, this.value]);
    // });

    document.getElementById('slider-round6').noUiSlider.on('update', function( values, handle ) {
        if ( handle ) document.getElementById('maxslider6').value = values[handle];
        else document.getElementById('minslider6').value = values[handle];
    });
    document.getElementById('slider-round7').noUiSlider.on('update', function( values, handle ) {
        if ( handle ) document.getElementById('maxslider7').value = values[handle];
        else document.getElementById('minslider7').value = values[handle];
    });
    document.getElementById('slider-round8').noUiSlider.on('update', function( values, handle ) {
        if ( handle ) document.getElementById('maxslider8').value = values[handle];
        else document.getElementById('minslider8').value = values[handle];
    });

});

function z(){
    var slider1 = document.getElementById('slider-round');
    console.log(slider1.noUiSlider.get()[0]);
}



 