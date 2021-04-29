//Carousel Benefits --> file service.html

var benefits = $(".carousel-benefit-list li");
var myCarousel = document.getElementById('carouselBenefits')

if (myCarousel != null) {
    myCarousel.addEventListener('slide.bs.carousel', function () {
        var carousel = bootstrap.Carousel.getInstance(myCarousel)
        var items = carousel._items;
        for (let i = 0; i < items.length; i++) {
            element = $(items[i]).attr('class').split(' ');
            if (element[1] != undefined && element[1] == 'active') {
                let active = i + 1;
                active != items.length ? activeBenefit((benefits[active]), false) : activeBenefit((benefits[0]), false)
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




//Carousel Benefits --> file service.html

var creationGSTlist = $(".CreationGST-list .item");
var creationList = $(".creation-list li");
var carouselCreationGST = document.getElementById('carouselCreationGST')

if (carouselCreationGST != null) {
    carouselCreationGST.addEventListener('slide.bs.carousel', function () {
        var carousel = bootstrap.Carousel.getInstance(carouselCreationGST);
        var items = carousel._items;
        for (let i = 0; i < items.length; i++) {
            element = $(items[i]).attr('class').split(' ');
            var item = getActive(element);
            if (item) {
                let active = i + 1;
                active != items.length ? activeElements(active) : activeElements(0);
            }
        }
    })
}

function activeElements(index) {
    creationGSTlist.removeClass("active"); creationList.removeClass("active");
    $(creationGSTlist[index]).addClass('active');
    $(creationList[index]).addClass('active');
}

// creationGSTlist.click(function () {
//     activeBenefit($(this), true)
// });

function getActive(array) {
    let response;
    array.forEach((element, index) => {
        if (element != undefined && element === 'active') {
            response = true;
        } else {
            response = false;
        }
    });
    return response;
}