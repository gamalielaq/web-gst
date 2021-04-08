
var swiper = new Swiper('.swiper-services', {
    slidesPerView: 1,
    spaceBetween: 10,
    loop: true,
    // autoplay: {
    //     delay: 3000,
    //     disableOnInteraction: false,
    // },
    navigation: {
      nextEl: '.btn-next',
      prevEl: '.btn-prev',
    },
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
    breakpoints: {
      640: {
        slidesPerView: 1,
        spaceBetween: 10,
      },
      768: {
        slidesPerView: 2,
        spaceBetween: 20,
      },
      1025: {
        slidesPerView: 3,
        spaceBetween: 20,
      },
    }
  });

  // swiper-team-work
  var swiper = new Swiper('.swiper-team-work', {
    slidesPerView: 1,
    spaceBetween: 10,
    loop: true,
    // autoplay: {
    //     delay: 3000,
    //     disableOnInteraction: false,
    // },
    navigation: {
      nextEl: '.btn-next',
      prevEl: '.btn-prev',
    },
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
    breakpoints: {
      640: {
        slidesPerView: 2,
        spaceBetween: 10,
      },
      768: {
        slidesPerView: 3,
        spaceBetween: 10,
      },
      1025: {
        slidesPerView: 4,
        spaceBetween: 20,
      },
    }
  });

  // swiper-review
  var swiper = new Swiper('.swiper-review', {
    slidesPerView: 1,
    spaceBetween: 10,
    loop: true,
    autoplay: {
        delay: 3000,
        disableOnInteraction: false,
    },
    navigation: {
      nextEl: '.btn-next',
      prevEl: '.btn-prev',
    },
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
    breakpoints: {
      640: {
        slidesPerView: 2,
        spaceBetween: 10,
      },
      768: {
        slidesPerView: 3,
        spaceBetween: 10,
      },
      1025: {
        slidesPerView: 3,
        spaceBetween: 20,
      },
    }
  });



  // swiper-contract-service
  var swiper = new Swiper('.swiper-contract-service', {
    slidesPerView: 1,
    spaceBetween: 10,
    loop: true,
    autoplay: {
        delay: 3000,
        disableOnInteraction: false,
    },
    navigation: {
      nextEl: '.btn-next',
      prevEl: '.btn-prev',
    },
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
    breakpoints: {
      640: {
        slidesPerView: 2,
        spaceBetween: 10,
      },
      768: {
        slidesPerView: 3,
        spaceBetween: 10,
      },
      1025: {
        slidesPerView: 3,
        spaceBetween: 10,
      },
    }
  });

// ------------------------------------------

// var swiper = new Swiper('.swiper-team', {
//     slidesPerView: 4,
//     spaceBetween: 30,
//     loop: true,
//     zoom: true,
//     autoplay: {
//         delay: 2500,
//         disableOnInteraction: false,
//     },
//     navigation: {
//         nextEl: '.icon-button-next',
//         prevEl: '.icon-button-prev',
//     },
//     pagination: {
//         el: '.swiper-pagination',
//         clickable: true,
//       }
// });

// --------------------------------------------------------------------

$(window).scroll(function(){
  if ($(this).scrollTop() > 200) {
     $('#topbar').addClass('topbar-fixed');
     console.log('Sei Qui');
  } else {
     $('#topbar').removeClass('topbar-fixed');
  }
});


//loader
window.onload = function() {
  $('#loader').fadeOut();
}
