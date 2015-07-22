$( document ).ready(function() {
    var windowHeight = $(window).height();
    var bottomBackHeight = $('.body-middle-bottom-back').height();
    var topBackHeight = $('.body-top-middle-back').height();
    $("#fakeLoader").fakeLoader({
        timeToHide: 45000, //Time in milliseconds for fakeLoader disappear
        zIndex: "999",//Default zIndex
        spinner: "spinner7",//Options: 'spinner1', 'spinner2', 'spinner3', 'spinner4', 'spinner5', 'spinner6', 'spinner7'
        bgColor: "white", //Hex, RGB or RGBA colors
        imagePath: "img/BecoLogo.png" //If you want can you insert your custom image
    });
    $('#logo').hide();
    $(window).load(function () {
        $('#logo').fadeIn(400);
        $("#fakeLoader").fadeOut(2000);
        $('#myCarousel').height(windowHeight - bottomBackHeight + (windowHeight * 2.5/100));
    });
    $('.carousel').carousel({
        interval: false
    });
});
