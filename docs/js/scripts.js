
var swiper = new Swiper('.swiper-services', {
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

  // swiper-services-detail
  var swiper = new Swiper('.swiper-services-detail', {
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
        slidesPerView: 4,
        spaceBetween: 10,
      },
      1025: {
        slidesPerView: 4,
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

// header
$(window).scroll(function(){
  
  if ($(this).scrollTop() > 200) {
     $('#topbar').addClass('topbar-fixed');
  } else {
     $('#topbar').removeClass('topbar-fixed');
  }
});


// loader
window.onload = function() {

    setInterval(() => {
      $('#loader').fadeOut();
      $('#slider').addClass('slider-animation');
      $('.mi-animated').addClass('card-animation');
      $('.animation-text').addClass('op-1');
      
    }, 500);
}

//animations
var animation = document.querySelectorAll(".animation");

function mostrarScroll() {
  var scrollTop = document.documentElement.scrollTop;
  for (var index = 0; index < animation.length; index++) {
    const altAnimado = animation[index].offsetTop;
    if(altAnimado - 300 < scrollTop) {

      animation[index].style.opacity = 1;
      animation[index].classList.add("mostrarArriba");
      console.log('add anmation');
      
    }
  }
}

window.addEventListener('scroll', mostrarScroll);


// $(window).scroll(function(){
//   let scrollTop = document.documentElement.scrollTop;
//   if ($(this).scrollTop() < scrollTop) {
//      $('#topbar').addClass('topbar-fixed');
//   } else {
//      $('#topbar').removeClass('topbar-fixed');
//   }
// });


//---------

