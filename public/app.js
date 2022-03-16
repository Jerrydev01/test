// swiper js header

var swiper = new Swiper(".mySwiper", {
    loop: true,
    effect: "fade",
    autoplay: {

        delay: 3500,

        disableOnInteraction: false

    }
});

// swiper team

var swiper = new Swiper(".mySwiperTeam", {
    slidesPerView: 4,
    // spaceBetween: 30,
    slidesPerGroup: 3,
    loop: true,
    loopFillGroupWithBlank: true,

    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },

    // Responsive breakpoints
    breakpoints: {
        // when window width is >= 300px
        200: {
            slidesPerView: 1,
            spaceBetween: 0,

        },
        // when window width is >= 1000px
        1000: {
            slidesPerView: 3,
            spaceBetween: 0,


        },
        // when window width is >= 640px
        750: {
            slidesPerView: 2,
            spaceBetween: 0,

        },

    }

});
