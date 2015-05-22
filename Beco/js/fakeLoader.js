/*--------------------------------------------------------------------
 *JAVASCRIPT "FakeLoader.js"
 *Version:    1.1.0 - 2014
 *author:     João Pereira
 *website:    http://www.joaopereira.pt
 *Licensed MIT
-----------------------------------------------------------------------*/
(function ($) {

    $.fn.fakeLoader = function(options) {

        //Defaults
        var settings = $.extend({
            timeToHide:1200, // Default Time to hide fakeLoader
            pos:'fixed',// Default Position
            top:'0px',  // Default Top value
            left:'0px', // Default Left value
            width:'100%', // Default width
            height:'100%', // Default Height
            zIndex: '999',  // Default zIndex
            bgColor: '#2ecc71', // Default background color
            spinner:'spinner7', // Default Spinner
            imagePath:'', // Default Path custom image
            minWidth:'280px',
            maxWidth:'380px'
        }, options);

        //Customized Spinners
        var bubbles = '<div id="bubbles"><div class="bubble x1"></div><div class="bubble x2"></div><div class="bubble x3"></div><div class="bubble x4"></div><div class="bubble x5"></div><div class="bubble x6"></div><div class="bubble x7"></div><div class="bubble x8"></div><div class="bubble x9"></div><div class="bubble x10"></div></div>';
        var spinner01_00 = '<div class="fl spinner1"><img class="logo" src="'+settings.imagePath+'">';
        var spinner01_01 = '<div class="double-bounce1"></div><div class="double-bounce2"></div></div>';
        var spinner01 = spinner01_00+spinner01_01;
        var spinner02_00 = '<div class="fl spinner2"><img class="logo" src="'+settings.imagePath+'">';
        var spinner02_01 = '<div class="spinner-container container1"><div class="circle1"></div><div class="circle2"></div><div class="circle3"></div><div class="circle4"></div></div><div class="spinner-container container2"><div class="circle1"></div><div class="circle2"></div><div class="circle3"></div><div class="circle4"></div></div><div class="spinner-container container3"><div class="circle1"></div><div class="circle2"></div><div class="circle3"></div><div class="circle4"></div></div></div>';
        var spinner02 = spinner02_00+spinner02_01;
        var spinner03_00 = '<div class="fl spinner3"><img class="logo" src="'+settings.imagePath+'">';
        var spinner03_01 = '<div class="dot1"></div><div class="dot2"></div></div>';
        var spinner03 = spinner03_00+spinner03_01;
        var spinner04_00 = '<div class="fl spinner4"><img class="logo" src="'+settings.imagePath+'">';
        var spinner04_01 = '</div>';
        var spinner04 = spinner04_00+spinner04_01;
        var spinner05_00 = '<div class="fl spinner5"><img class="logo" src="'+settings.imagePath+'">';
        var spinner05_01 = '<div class="cube1"></div><div class="cube2"></div></div>';
        var spinner05 = spinner05_00+spinner05_01;
        var spinner06_00 = '<div class="fl spinner6"><img class="logo" src="'+settings.imagePath+'">';
        var spinner06_01 = '<div class="rect1"></div><div class="rect2"></div><div class="rect3"></div><div class="rect4"></div><div class="rect5"></div></div>';
        var spinner06 = spinner06_00+spinner06_01;
        var spinner07_00 = '<div class="fl spinner7"><img class="logo img-responsive" src="'+settings.imagePath+'">';
        var spinner07_01= '<div class="circ1"></div><div class="circ2"></div><div class="circ3"></div><div class="circ4"></div></div>';
        var spinner07 = bubbles+spinner07_00+spinner07_01;

        //The target
        var el = $(this);

        //Init styles
        var initStyles = {
            'position':settings.pos,
            'width':settings.width,
            'height':settings.height,
            'top':settings.top,
            'left':settings.left
        };

        //Apply styles
        el.css(initStyles);

        //Each
        el.each(function() {
            var a = settings.spinner;
            //console.log(a)
                switch (a) {
                    case 'spinner1':
                            el.html(spinner01);
                        break;
                    case 'spinner2':
                            el.html(spinner02);
                        break;
                    case 'spinner3':
                            el.html(spinner03);
                        break;
                    case 'spinner4':
                            el.html(spinner04);
                        break;
                    case 'spinner5':
                            el.html(spinner05);
                        break;
                    case 'spinner6':
                            el.html(spinner06);
                        break;
                    case 'spinner7':
                            el.html(spinner07);
                        break;
                    default:
                        el.html(spinner01);
                    }

                //Add customized loader image

                /*if (settings.imagePath !='') {
                    el.html('<div class="fl"><img class="logo" src="'+settings.imagePath+'"><div class="double-bounce1"></div><div class="double-bounce2"></div></div>');
                }*/
                centerLoader();
        });

        //Time to hide fakeLoader
        setTimeout(function(){
            $(el).fadeOut();
        }, settings.timeToHide);

        //Return Styles
        return this.css({
            'backgroundColor':settings.bgColor,
            'zIndex':settings.zIndex
        });

    }; // End Fake Loader


        //Center Spinner
        function centerLoader() {

            var winW = $(window).width();
            var winH = $(window).height();

            var spinnerW = $('.fl').outerWidth();
            var spinnerH = $('.fl').outerHeight()-180;

            var logoW = $('.logo').outerWidth();
            var logoH = $('.logo').outerWidth()-180;

            $('.fl').css({
                'position':'absolute',
                'left':(winW/2)-(spinnerW/2),
                'top':(winH/2)-(spinnerH/2)
            });
            $('.fl .logo').css({
                'left':(winW/2)-(logoW/2),
                'top':(winH/2)-(logoH/2)
            });

        }

        $(window).load(function(){
                centerLoader();
              $(window).resize(function(){
                centerLoader();
              });
        });


}(jQuery));




