'use strict';


$(function () {

    $("a[href*='#']:not([href='#'])").click(function () {
        $('html, body').animate({
            scrollTop: $(this.hash).offset().top
        }, 400);
    });

    $(window).scroll(function () {
             if ($(window).scrollTop() > 50) {
            $('#main-nav').addClass('scroll');

        } else {
            $('#main-nav').removeClass('scroll');
        }
    });

});