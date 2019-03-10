$(document).ready(function() {

    /* SMOOTH SCROLL */
    $(function() {
        $('a[href*="#"]:not([href="#"])').click(function() {
            if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
                var target = $(this.hash);
                target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
                if (target.length) {
                    $('html, body').animate({
                        scrollTop: target.offset().top
                    }, 1000);
                    return false;
                }
            }
        });
    });


    /* For sticky nav */
    $('.js--about-me').waypoint(function(direction) {
        if (direction == "down") {
            $('nav').addClass('sticky');
        } else {
            $('nav').removeClass('sticky');
        }
    }, {
        offset: '60px'
    });
    

    /* scroll on btn */
    $('.js--scroll-next-page').click(function (){
        $('html, body').animate({
            scrollTop: $('.js--about-me').offset().top
        }, 1000);
    });
    
/* animate on scroll */
    $('.js--wp-1').waypoint(function(direction) {
        $('.js--wp-1').addClass('animated fadeIn');
    }, {
        offset: '59%'
    })
    
    $('.js--wp-2').waypoint(function(direction) {
        $('.js--wp-2').addClass('animated fadeIn');
    }, {
        offset: '59%'
    })
    
    $('.js--wp-3').waypoint(function(direction) {
        $('.js--wp-3').addClass('animated fadeIn');
    }, {
        offset: '59%'
    })
    
    $('.js--wp-4').waypoint(function(direction) {
        $('.js--wp-4').addClass('animated fadeIn');
    }, {
        offset: '59%'
    })
    
    $('.js--wp-5').waypoint(function(direction) {
        $('.js--wp-5').addClass('animated fadeIn');
    }, {
        offset: '59%'
    })
    
    $('.js--wp-6').waypoint(function(direction) {
        $('.js--wp-6').addClass('animated fadeIn');
    }, {
        offset: '59%'
    })

    $('.js--wp-7').waypoint(function(direction) {
        $('.js--wp-7').addClass('animated fadeIn');
    }, {
        offset: '59%'
    })
    
    $('.js--wp-8').waypoint(function(direction) {
        $('.js--wp-8').addClass('animated fadeIn');
    }, {
        offset: '59%'
    })
    
    $('.js--wp-9').waypoint(function(direction) {
        $('.js--wp-9').addClass('animated fadeIn');
    }, {
        offset: '59%'
    })
    
    $('.js--wp-10').waypoint(function(direction) {
        $('.js--wp-10').addClass('animated fadeIn');
    }, {
        offset: '59%'
    })
    
    $('.js--wp-11').waypoint(function(direction) {
        $('.js--wp-11').addClass('animated fadeIn');
    }, {
        offset: '59%'
    })
    
});
