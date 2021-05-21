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

//Carousel Creation GST --> file service.html
var creationGSTlist = $(".CreationGST-list .item"), creationList = $(".creation-list li");
var carouselCreationGST = document.getElementById('carouselCreationGST')
var clicked = false;

creationList.click(function () {
    let carousel = bootstrap.Carousel.getInstance(carouselCreationGST);
    clicked = true; 
    activeElements($(this).index());
    carousel.to($(this).index());
});

if (carouselCreationGST != null) {
    
    carouselCreationGST.addEventListener('slide.bs.carousel', function () {
        var carousel = bootstrap.Carousel.getInstance(carouselCreationGST);
        var items = carousel._items;
        for (let i = 0; i < items.length; i++) {
            element = $(items[i]).attr('class').split(' ');
            var item = getActive(element);
            if (item && !clicked) {
                let active = i + 1;
                active != items.length ? activeElements(active) : activeElements(0);
            }
        }
        clicked = false;
    })
}

function activeElements(index) {
    creationGSTlist.removeClass("active"); creationList.removeClass("active");
    $(creationGSTlist[index]).addClass('active');
    $(creationList[index]).addClass('active');
}

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


//-- Todos lo servicios-  services.html--------------------

var benefits = $(".carousel-benefit-list li");
let btnMoreServices = false;
$("#btnMoreServices").click(function () {
    if( !btnMoreServices ) {
        btnMoreServices =  true;
        $(this).text("Ver menos");
    }else {
        btnMoreServices =  false;
        $(this).text("Saber más");
    }
});

function activeServices(active) { // params -->   all or number
    var listServices = $(".list-services .item");
    for (let i = 0; i < listServices.length; i++) {
        const element = listServices[i];
        if (active != 'all') {
            if(i > active - 1) {
                $(listServices[i]).css('display','none');
                $(listServices[i]).css('opacity','0');
            }
        }else {
            $(listServices[i]).css('opacity','1');
            $(listServices[i]).css('display','block');
        }
        
    }
}
activeServices(8);


//paginator
// $('#example').paginate();