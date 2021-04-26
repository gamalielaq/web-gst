//Carousel Benefits --> file service.html

var benefits = $(".carousel-list li");
var myCarousel = document.getElementById('carouselBenefits')

if (myCarousel != null) {
    myCarousel.addEventListener('slide.bs.carousel', function () {
        var carousel = bootstrap.Carousel.getInstance(myCarousel)
        var items = carousel._items;
        for (let i = 0; i < items.length; i++) {
            element = $(items[i]).attr('class').split(' ');
            if (element[1] != undefined && element[1] == 'active') {
                let active = i + 1;
                active != 10 ? activeBenefit((benefits[active]), false) : activeBenefit((benefits[0]), false)
            }
        }
    })
}

function activeBenefit(element, clicked) {

    benefits.removeClass("active");
    benefits.removeClass("actB");

    if (clicked) {
        $(element).prev().addClass('actB');
        $(element).addClass('active');
    } else {
        $(element).prev().addClass('actB');
        $(element).addClass('active');
    }
}

benefits.click(function () {
    activeBenefit($(this), true)
});