$(document).ready(function () {

    // show/hide search block
    $('.search-btn').click(function (e) {
        e.preventDefault;
        $('.main-header').find('.header-search').toggleClass('search_open');
    });

    // close search block
    $('.search-close').click(function (e) {
        e.preventDefault;
        $('.main-header').find('.header-search').toggleClass('search_open');
    });

    // show/hide mobile menu
    $('.hamburger-menu').on('click', function () {
        $('.header-nav').slideToggle(300);
    });

});
