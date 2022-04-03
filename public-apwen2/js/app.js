
//  preloader

let loader = document.querySelector('#preloader');
console.log(loader);
window.addEventListener('load', function() {
loader.style.display='none';
})

//  preloader end

// scroll back to top of page
//Get the button:
mybutton = document.getElementById("myBtn");

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}



// nave bar menue
const navMenu = document.querySelector('.nav-btn');
const list = document.querySelector('.menue-list');

navMenu.addEventListener("click", function() {
    navMenu.classList.toggle('active');
    list.classList.toggle('active');
});

document.querySelectorAll(".list-items").forEach(n => n.addEventListener("click", function() {
    navMenu.classList.remove('active');
    list.classList.remove('active');
}));
// nav bar end

// hero section swiper
var swiper = new Swiper(".mySwiperHeader", {
    centeredSlides: true,
    autoplay: {
        delay: 2500,
        disableOnInteraction: false
    },
    effect: "fade",

});


// partner section slider
var swiper = new Swiper(".mySwiperPartners", {
    slidesPerView: 3,
    spaceBetween: 30,
    autoplay: {
        delay: 3000,
        disableOnInteraction: false
    },
});

// swiper gallery
var swiper = new Swiper(".mySwiperGallery", {
    centeredSlides: true,
    autoplay: {
      delay: 2500,
      disableOnInteraction: false,
    },
  });

//   swiper team
var swiper = new Swiper(".mySwiperTeam", {
  spaceBetween: 30,
  loop: true,
    autoplay: {
      delay: 5500,
      disableOnInteraction: false,
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
     // Responsive breakpoints
     breakpoints: {
      // when window width is >= 300px
      300: {
          slidesPerView: 1,
          spaceBetween: 0,

      },
      // when window width is >= 1000px
      1020: {
          slidesPerView: 3,
          spaceBetween: 0,


      },
         // when window width is >= 1000px
         1050: {
          slidesPerView: 4,
          spaceBetween: 0,


      },
      // when window width is >= 640px
      640: {
          slidesPerView: 2,
          spaceBetween: 0,

      },
  }
  });

  // swiper testimonials
  var swiper = new Swiper(".mySwiperTestimonials", {
    slidesPerView: 2,
    spaceBetween: 30,
    loop: true,
    autoplay: {
      delay: 5500,
      disableOnInteraction: false,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
      // Responsive breakpoints
      breakpoints: {
        // when window width is >= 300px
        300: {
            slidesPerView: 1,
            spaceBetween: 0,
  
        },
        // when window width is >= 1000px
        1000: {
            slidesPerView: 3,
            spaceBetween: 0,
  
  
        },
        // when window width is >= 640px
        640: {
            slidesPerView: 2,
            spaceBetween: 0,
  
        },
    }
  });
  // show and hid faq

  const faq = document.querySelectorAll(".faq");

  faqs.forEach(faq => {
    faq.addEventListener('click', () =>{
      faq.classList.toggle('open');
    })
  });

