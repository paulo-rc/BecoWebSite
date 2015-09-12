$( document ).ready(function() {
    var windowHeight = $(window).height();
    var bottomBackHeight = $('.body-middle-bottom-back').height();
    var topBackHeight = $('.body-top-middle-back').height();
    var carouselHeight = windowHeight - bottomBackHeight + (windowHeight * 2.5/100);
    var preloader = $('#fakeLoader');
    var changer = $('#changer');
    var tab = $('.tab');
    // Setting fakeloader
    preloader.fakeLoader({
        timeToHide: 45000, //Time in milliseconds for fakeLoader disappear
        zIndex: "999",//Default zIndex
        spinner: "spinner7",//Options: 'spinner1', 'spinner2', 'spinner3', 'spinner4', 'spinner5', 'spinner6', 'spinner7'
        bgColor: "white", //Hex, RGB or RGBA colors
        imagePath: "img/BecoLogo.png" //If you want can you insert your custom image
    });

    $(window).load(function () {
        $('#logo').fadeIn(400);
        preloader.fadeOut(2000);
        changer.load('slider.html', function() {
            $('#myCarousel').height(carouselHeight);
            $('#myCarousel').carousel();
        });
    });
    tab.click(function () {
        tab.removeClass('active');
        $(this).addClass('active');
    });
    // Tabs content
    $('#contact').click(function () {
        changer.fadeOut('slow', function(){
            changer.load('contact.html', function(){
                changer.fadeIn('slow');
            });
        });
    });
    $('#beco').click(function () {
        changer.fadeOut('slow', function(){
            changer.load('slider.html', function(){
                $('#myCarousel').height(carouselHeight);
                $('#myCarousel').carousel();
                changer.fadeIn('slow');
            });
        });
    });
    $('#printing').click(function () {
        changer.fadeOut('slow', function(){
            changer.fadeOut('slow', function(){
                changer.load('printing.html', function(){
                    changer.fadeIn('slow');
                });
            });
        });
    });
});
