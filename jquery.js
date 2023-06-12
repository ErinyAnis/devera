$(function () {
    $('select').niceSelect();

    $(".owl-carousel").owlCarousel({
        items: 1,
        loop: true,
        nav: true,
        dots: true,
        // autoplay: true,
        autoplaySpeed: 1000,
        smartSpeed: 1500,
        autoplayHoverPause: true
    });

    $(window).on('scroll', function () {
        var scroll = $(window).scrollTop();
        if (scroll >= 55) {
            $(".sticky").addClass("stickyadd");
            $(".navbar").addClass("fixed-top");
            $(".navbar .navbar-brand img").attr("src", "images/New-logo22-03-03@2x.png");
        } else {
            $(".sticky").removeClass("stickyadd");
            $(".navbar").removeClass("fixed-top");
            $(".navbar .navbar-brand img").attr("src", "images/logo.png");
        }
    });

    $(".fa-bars").click(function(){
        $(this).toggleClass("fa-xmark");
    });

    $('li .nav-link').click(function () {
        $('li .nav-link.active').removeClass('active');
        $(this).toggleClass('active');
    });

    $(".counter").counterUp({
        delay: 10,
        time: 1200
    });

});