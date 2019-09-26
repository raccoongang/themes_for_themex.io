$(document).ready(function () {

    // show/hide search block in header
    $('.main-header .search-btn').click(function (e) {
        e.preventDefault;
        $('.main-header').find('.header-search').toggleClass('search_open');

        if ($('.search_open').length) {
            $('.search-input').focus();
        }
    });

    // show/hide search block in content
    $('#main .search-btn').click(function (e) {
        e.preventDefault;
        $('#main').find('.content-search').toggleClass('search_open');

        if ($('.search_open').length) {
            $('.discovery-input').focus();
        }
    });

    // close search block
    $('.search-close').click(function (e) {
        e.preventDefault;
        $('.main-header').find('.header-search').removeClass('search_open');
        $('#main').find('.content-search').removeClass('search_open');
    });

    // show/hide mobile menu
    $('.hamburger-menu').on('click', function () {
        $('.header-nav').slideToggle(300);
    });

    // read more for about texts
    if ($('.heading-group h3').length) {
        var realHeight = $('.heading-group h3').get(0).scrollHeight;

        if (realHeight > 65) {
            $('.heading-group h3').addClass("toggled").css("max-height", "none");
            $('.readmore').text($('.readmore').data('more')).addClass("shown");
        }

        $(".readmore").click(function (event) {
            event.preventDefault();
            if ($(".heading-group h3").hasClass("toggled")) {
                $(".heading-group h3").animate({"height": realHeight + "px"}).removeClass("toggled");
                $(this).text($(this).data('less'))
            } else {
                $(".heading-group h3").animate({"height": "65px"}).addClass("toggled");
                $(this).text($(this).data('more'));
            }
        });
    }

});
