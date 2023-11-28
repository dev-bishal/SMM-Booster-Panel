var menuBtn = document.querySelector(".menuButton");
var responsiveMenu = document.querySelector(".mobileNav");

menuBtn.addEventListener("click", ()=>{
    responsiveMenu.classList.toggle("-translate-y-[150%]");
});

$('.Ani-Chevro-Accordion .content').click(function () {

    $(this).children('.answer').fadeToggle();
    /*For Chevro Animation*/
    $(this).children('.Heading').children('.Show').toggleClass('rot180');

    /*For Closing other Option if only one is to be shown*/
    $(this).siblings('.content').children('.answer').fadeOut();
    $(this).siblings('.content').children('.Heading').children('.Show').removeClass('rot180');
});

/*For Back to top starts*/
window.addEventListener('scroll', function () {
    if(isOnScreen($('.counter'))) { startCounter();};
    mybutton = document.getElementById("BackToTop");
    if (document.body.scrollTop > 180 || document.documentElement.scrollTop > 180) {
        mybutton.classList.add("translate-x-[200%]");
        mybutton.classList.remove("translate-x-[200%]");
    } else {
        mybutton.classList.remove("translate-x-[200%]");
        mybutton.classList.add("translate-x-[200%]");
    }
})
/*For Back to top ends*/

/* For Scrolling to Particular Element Starts */
function bringToView(sectionElement){
    if(window.innerWidth < 1000){
        responsiveMenu.classList.add("-translate-y-[150%]");
    }
    element = document.querySelector(sectionElement);
    element.scrollIntoView();
}
/* For Scrolling to Particular Element Ends */

/*-------------Work Type Filter Buttons--------------*/
let workType = document.querySelectorAll('.services-brands .socialBrands');
var FiltValText = '';
workType.forEach(ele => ele.addEventListener('click', function () {

    // $('.wrapper .container .main').animate({
    //     scrollTop : $('.workHolder').offset().top
    // }, 500);

    workType.forEach(e => {
        e.classList.remove('active');
    });
    ele.classList.add('active');
    
    FiltValText = "."+ele.textContent.toString().trim();
    console.log(FiltValText)
    
    $('.service-explain-container .serviceList').not(FiltValText).hide('1500');
    $('.service-explain-container .serviceList').filter(FiltValText).show('2000');
}));


const swiperEl = document.querySelector('.testimonials swiper-container');
Object.assign(swiperEl, {
    loop: "true",
    freeMode: "true",
    autoplay: {
        delay: 2500,
        disableOnInteraction: false
    },
    speed: "3500",
    slidesPerView: 3,
    spaceBetween: 30,

    breakpoints: {
        "@0.00": {
            slidesPerView: 1,
            spaceBetween: 10,
        },
        "@0.75": {
            slidesPerView: 1,
            spaceBetween: 20,
        },
        "@1.00": {
            slidesPerView: 2,
            spaceBetween: 40,
        },
        "@1.50": {
            slidesPerView: 3,
            spaceBetween: 30,
        },
    },
});
document.addEventListener("DOMContentLoaded", function () {
    // Wait for the DOM content to load
    setTimeout(function () {
        // Hide the preloader after 1 second
        document.querySelector('.preloader').classList.add("-translate-y-full");
    }, 2000); // Adjust the time in milliseconds (1s = 1000ms)
});

function isOnScreen(element)
{
    var curPos = element.offset();
    var curTop = curPos.top - $(window).scrollTop();
    var screenHeight = $(window).height();
    return (curTop > screenHeight) ? false : true;
}
function startCounter() {
    $('.counter .data-digit').each(function () {
        var $this = $(this),
            countTo = $this.attr('data-count');

        $({ countNum: $this.text() }).animate({
            countNum: countTo
        },

            {
                duration: 3000,
                easing: 'linear',
                step: function () {
                    $this.text(Math.floor(this.countNum));
                },
                complete: function () {
                    $this.text(this.countNum);
                    //alert('finished');
                }
            });
    });
}


swiperEl.initialize();
AOS.init({
    disable: 'mobile',
});