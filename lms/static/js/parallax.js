$(window).scroll(function () {
    // js for parallax
    var scrollTop = $(window).scrollTop();
    var imgPos = scrollTop / 2 + 'px';
    $('.parallax-img').css('transform', 'translate3d(0, '  + imgPos + ', 0)');

    // js for up button
    if ($(window).scrollTop() > 100) {
        $('.arrow-up').addClass('arrow-up_active');
    } else if ($(window).scrollTop() <= 100) {
        $('.arrow-up').removeClass('arrow-up_active');
    }
});
