$(window).load(function () {
    $('section.home > .slider').slick({
        dots: true,
        infinite: true,
        speed: 700,
        fade: true,
        cssEase: 'linear',
        autoplay: true,
        autoplaySpeed: 7000
    });
});

$(window).on('resize orientationchange', function () {
    $('section.home > .slider').slick('resize');
});
