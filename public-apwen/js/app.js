// nave bar menue
const navMenu = document.querySelector('.nav-menu');
const list = document.querySelector('.list');

navMenu.addEventListener("click", function() {
    navMenu.classList.toggle('active');
    list.classList.toggle('active');
});

document.querySelectorAll(".nav-item").forEach(n => n.addEventListener("click", function() {
    navMenu.classList.remove('active');
    list.classList.remove('active');
}));
// nav bar end

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
    autoplay: {
        delay: 3500,
        disableOnInteraction: false

    },
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
// event swipes

var swiper = new Swiper(".mySwiper-event", {
    effect: "cards",
    grabCursor: true,
});

// testimonials swipe

var swiper = new Swiper(".mySwipertestimonials", {
    loop: true,
    slidesPerView: 4,

    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    autoplay: {

        delay: 3500,

        disableOnInteraction: false

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
            slidesPerView: 4,
            spaceBetween: 0,


        },
        // when window width is >= 640px
        750: {
            slidesPerView: 3,
            spaceBetween: 0,

        },

    }
});

// counter using js
const counters = document.querySelectorAll('.count');
const speed = 200;
let interval = 10;

counters.forEach((counter) => {
    const updateCount = () => {
        const target = parseInt(counter.getAttribute('data-target'));
        const count = parseInt(counter.innerText);
        const increment = Math.trunc(target / speed);
        console.log(increment);

        if (count < target) {
            counter.innerText = count + increment;
            setTimeout(updateCount, 1);
        } else {
            counter.innerText = target;
        }
    };
    updateCount();

});

// gsap animation 
gsap.registerPlugin('scrollTrigger');
// gsap.to(".about-sec img", {
//     x: "-30%",
//     opacity: 0.5,
//     duration: 30,

//     scrollTrigger: {
//         toggleAction: " restart reverse resume none",
//         scrub: 3,
//         pin: true,
//         trigger: ".nav-bar .list>li",
//         start: "50%",
//         end: "center",
//         // markers: true,
//     }
// });

const tl = gsap.timeline({
    scrollTrigger: {
        toggleAction: " restart pause reverse pause",
        trigger: "#about-sec-primary",
        delay: 2,
        stagger: 2,
        start: "top 90%",
        end: "top 30%",
        scrub: 10,
        // markers: true,
    }
});
tl.to(".about-sec img", {
    x: "-100%",

    duration: 700,
    opacity: 0,
    ease: "power3.out",


});

tl.to(".about-sec img", {
    x: 0,
    duration: 100,
    opacity: 1,
    ease: "back",


});
tl.to(".about-sec-pg", {
    y: "100%",
    duration: 600,
    opacity: 0,
    ease: "power3.out",


});

tl.to(".about-sec-pg", {
    y: 0,
    duration: 1000,
    opacity: 1,
    ease: "back",


});

// event section
const et = gsap.timeline({
    scrollTrigger: {
        toggleAction: " restart pause reverse pause",
        trigger: "#apwen-abuja",
        start: "top 90%",
        end: "top 30%",
        scrub: 10,
        // markers: true,
    }
});
et.to(".counter-area", {
    y: 500,
    duration: 6,
    opacity: 0,
    ease: "power3.out",

});

et.to(".counter-area", {
    y: 0,
    duration: 10,
    opacity: 1,
    ease: "back",

});

et.to(".event-card-sec", {
    x: -600,
    duration: 7,
    opacity: 0,
    ease: "power3.out",

});

et.to(".event-card-sec", {
    x: 0,
    duration: 15,
    opacity: 1,
    ease: "back",

});


// contact section
const ct = gsap.timeline({
    scrollTrigger: {
        toggleAction: " restart pause reverse pause",
        trigger: "#contact-sec",
        start: "top 80%",
        end: "top 50%",
        scrub: 10,
        // markers: true,
    }
});
ct.to(".form-one", {
    x: -600,
    duration: 6,
    opacity: 0,
    ease: "power3.out",

});

ct.to(".form-one", {
    x: 0,
    duration: 6,
    opacity: 1,
    ease: "back",

});
ct.to(".contact-img", {
    y: 500,
    duration: 6,
    opacity: 0,
    ease: "power3.out",

});

ct.to(".contact-img", {
    y: 0,
    duration: 6,
    opacity: 1,
    ease: "back",

});