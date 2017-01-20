$(document).ready(function(){
    $('.customer-logos').slick({
        slidesToShow: 5,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 1500,
        arrows: false,
        dots: false,
        pauseOnHover: true,
        responsive: [{
            breakpoint: 1300,
            settings: {
                slidesToShow: 4
            }
        }, {
            breakpoint: 1000,
            settings: {
                slidesToShow: 3
            }
        }, {
            breakpoint: 700,
            settings: {
                slidesToShow: 2
            }
        }, {
            breakpoint: 500,
            settings: {
                slidesToShow: 1
            }
        }]
    });
});