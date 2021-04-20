
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


//loader
var progress = document.getElementById('progress');
var loadTime = window.performance.timing.domContentLoadedEventEnd- window.performance.timing.navigationStart;

let width = 100, perfData = window.performance.timing, 
    EstimatedTime = -(perfData.loadEventEnd - perfData.navigationStart),
    time = parseInt(((EstimatedTime/1000)%60)*100);
   
// Increment
var start = 0, end = 100, durataion = time;
animateValue(start, end, durataion);
    
function animateValue(start, end, duration) {
  console.log(durataion);
  let range = end - start,
      current = start,
      increment = end > start? 1 : -1,
      stepTime = Math.abs(Math.floor(duration / range));
    
  let timer = setInterval(function() {
    current += increment;

  if (current == 1) { 
      progress.style.width = '1%';
  }
    
    if (current == 10) { 
        progress.style.width = '30%';
    }
    if (current == 50) {
      progress.style.width = '70%';
    }
    if (current == 99) {
      progress.style.width = '70%';
    }
    
    if (current == end) {
      clearInterval(timer);
    }
  }, stepTime);
  
}

window.onload = function() {
  setInterval(() => {
    $('#loader').fadeOut();
    $('#slider').addClass('slider-animation');
    $('.mi-animated').addClass('card-animation');
    $('.animation-text').addClass('op-1');
    
  }, time + 500);
}
