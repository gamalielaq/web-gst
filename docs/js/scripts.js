include("js/animation.js");
include("js/swiper.js");
include("js/carousel.js");


function include(nombre) {
  var element = document.createElement("script");
  element.src = nombre;
  document.querySelector("body").appendChild(element);
}


