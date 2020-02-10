$(window).load(function () {
    $('section.home > .slider').slick({
        dots: true,
        infinite: true,
        speed: 700,
        fade: true,
        cssEase: 'linear',
    });

    $('.testimonials-list').slick({
        infinite: true,
        speed: 700,
        slidesToShow: 3,
        slidesToScroll: 1,
        arrows: false,
        dots: true,
        centerPadding: '30px',
        responsive: [
            {
                breakpoint: 992,
                settings: {
                    slidesToShow: 2,
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1,
                }
            }
        ]
    });

    $('.partners-list').slick({
        infinite: true,
        speed: 700,
        autoplay: true,
        autoplaySpeed: 2000,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: true,
        dots: false,
        variableWidth: true,
        centerPadding: '30px',
    });
});

$(window).on('resize orientationchange', function () {
    $('section.home > .slider').slick('resize');
});
