
// header
$(window).scroll(function () {
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
        if (altAnimado - 300 < scrollTop) {

            animation[index].style.opacity = 1;
            animation[index].classList.add("mostrarArriba");
            console.log('add anmation');

        }
    }
}

window.addEventListener('scroll', mostrarScroll);

//loader
var progress = document.getElementById('progress');
var loadTime = window.performance.timing.domContentLoadedEventEnd - window.performance.timing.navigationStart;

let width = 100, perfData = window.performance.timing,
    EstimatedTime = -(perfData.loadEventEnd - perfData.navigationStart),
    time = parseInt(((EstimatedTime / 1000) % 60) * 100);

// Increment
var start = 0, end = 100, durataion = time;
animateValue(start, end, durataion);

function animateValue(start, end, duration) {
    let range = end - start,
        current = start,
        increment = end > start ? 1 : -1,
        stepTime = Math.abs(Math.floor(duration / range));

    let timer = setInterval(function () {
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
        if (current == 90) {
            progress.style.width = '100%';
        }

        if (current == end) {
            clearInterval(timer);
        }
    }, stepTime);

}
// $(document.body).css('overflow','hidden');
window.onload = function () {
    let loader = $('#loader');
    setInterval(() => {
        loader.css('opacity', '0.2');
        loader.fadeOut();
        $(document.body).css('overflow','auto');
        $('#slider').addClass('slider-animation');
        $('.mi-animated').addClass('card-animation');
        $('.animation-text').addClass('op-1');

    }, time + 300);
}


function preloadImageLoader() {
    var img = new Image();
    imageUrl = img.src = "../../assets/img/loader-1.png";
    $('#loader').css('background-image', 'url(' + imageUrl + ')');
}

// preloadImageLoader();