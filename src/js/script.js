console.log('hello from script.js');

$(document).ready(function() { // начало document.ready

    $('.sliders').bxSlider({
        pager: false,
        nextText: '',
        prevText: '',
        auto: true
    });
    $('.r-projects-items-sl').bxSlider({
        pager: false,
        nextText: '',
        prevText: '',
        minSlides: 4,
        maxSlides: 4,
        slideMargin: 30,
        moveSlides: 1
    });



    // lightbox.option(    })



}); // конец document.ready