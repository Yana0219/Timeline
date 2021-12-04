$(document).ready(function () {

    $('.parallax-window').parallax({imageSrc: 'images/bg3.jpg'});

    let years = $('.single-timeline-area .single-timeline-content');
    console.log(years);
    let news =  $('.news__year');

    $($(years)[0]).click(function () {
        $($(news)[0]).fadeIn('slow');
        $($(news)[1]).fadeOut('slow');
        $($(news)[2]).fadeOut('slow');
        $($(news)[3]).fadeOut('slow');
    })
    $($(years)[1]).click(function () {
        $($(news)[1]).fadeIn('slow');
        $($(news)[0]).fadeOut('slow');
        $($(news)[2]).fadeOut('slow');
        $($(news)[3]).fadeOut('slow');
    })
    $($(years)[2]).click(function () {
        $($(news)[2]).fadeIn('slow');
        $($(news)[0]).fadeOut('slow');
        $($(news)[1]).fadeOut('slow');
        $($(news)[3]).fadeOut('slow');
    })
    $($(years)[3]).click(function () {
        $($(news)[3]).fadeIn('slow');
        $($(news)[0]).fadeOut('slow');
        $($(news)[2]).fadeOut('slow');
        $($(news)[1]).fadeOut('slow');
    })


})

