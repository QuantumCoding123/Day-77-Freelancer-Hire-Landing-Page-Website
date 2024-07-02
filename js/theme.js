// ------------------
// # SVG Inject
// # Animated Counter on Scroll
// # Input type[Date] Format
// ------------------

// # SVG Inject
// 

SVGInject.setOptions({
    onFail: function(img, svg) {
        img.classList.remove('svg-inject');
    }
});

document.addEventListener('DOMContentLoaded', function() {
    SVGInject(document.querySelectorAll('img.svg-inject'), {
        onAllFinish: function() {}
    });
});

// # Animated Counter on Scroll
// 

// start animated-counter-on-scroll
jQuery(function($) {

var a = 0;

function nFormatter(num, digits) {
    const lookup = [
        { value: 1, symbol: "" },
        { value: 1e3, symbol: "k" },
        { value: 1e6, symbol: "M" },
        { value: 1e9, symbol: "G" },
        { value: 1e12, symbol: "T" },
        { value: 1e15, symbol: "P" },
        { value: 1e18, symbol: "E" }
    ];
    const rx = /\.0+$|(\.[0-9]*[1-9])0+$/;
    var item = lookup.slice().reverse().find(function(item) {
        return num >= item.value;
    });
    return item ? (num / item.value).toFixed(digits).replace(rx, "$1") + item.symbol : "0";
}

if($(".counter")[0]) {
    $(window).scroll(function() {

        var oTop = $('.counter').offset().top - window.innerHeight;
        if (a == 0 && $(window).scrollTop() > oTop) {
            $('.count-number').each(function() {
                var $this = $(this),
                    countTo = $this.attr('data-count');
                $({
                    countNum: $this.text()
                }).animate({
                    countNum: countTo
                },

                {
                    duration: 2000,
                    easing: 'swing',
                    step: function() {
                        $this.text(nFormatter(Math.floor(this.countNum), 1));
                    },
                    complete: function() {
                        $this.text(nFormatter(this.countNum, 1));
                    }
                });
            });
            a = 1;
        }

    });
}

});
// start animated-counter-on-scroll

// # Input type[Date] Format
// 

$( function() {
    $( ".form-control.input-date" ).datepicker({
        dateFormat: "MM dd, yy"
    });
});

// 
// # SWIPER SLIDER COMPONENT SETTINGS
// 

// ------------------
// # Header Slider
// # Client Logo Slider
// # Featured Profile Slider
// # Testimonial Slider
// # Blog Slider
// # Event Banner Slider
// ------------------

// # Header Slider
// 

// start header-slider-setting
var swiper = new Swiper(".header-slider", {
    spaceBetween: 25,
    pagination: {
        el: ".header-slider-pagination",
        clickable: true,
    },
});
// end header-slider-setting
  
// # Client Logo Slider
// 

// start client-logo-slider
var swiper = new Swiper(".client-logo-slider", {
    slidesPerView: 1,
    loop: true,
    breakpoints: {
        576: {
            slidesPerView: 3,
            spaceBetween: 20
        },
        992: {
            slidesPerView: 4,
            spaceBetween: 40
        },
        1200: {
            slidesPerView: 5,
            spaceBetween: 50
        },
    },
    autoplay: {
        delay: 5000,
    },
});
// end client-logo-slider

// # Featured Profile Slider
// 

// start featured-profile-slider
var swiper = new Swiper(".profile-card-slider .swiper", {
    slidesPerView: 1,
    loop: true,
    breakpoints: {
        768: {
            slidesPerView: 2
        },
        1200: {
            slidesPerView: 3
        },
        1400: {
            slidesPerView: 4
        },
    },
    navigation: {
        nextEl: ".profile-card-button-next",
        prevEl: ".profile-card-button-prev",
    },
});
// end featured-profile-slider

// # Testimonial Slider
// 

// start testimonial-slider
var testimonialSliderImage = new Swiper(".testimonial-slider-image .swiper", {
    allowTouchMove: false,
    effect: "fade",
    watchSlidesProgress: true,
});

var testimonialSliderContent = new Swiper(".testimonial-slider-content", {
    loop: true,
    spaceBetween: 25,
    autoHeight: true,
    thumbs: {
        swiper: testimonialSliderImage,
    },
    navigation: {
        nextEl: '.testimonial-btn-next',
        prevEl: '.testimonial-btn-prev',
    },
});
// end testimonial-slider

// # Blog Slider
// 

// start blog-slider
var swiper = new Swiper(".blog-slider", {
    slidesPerView: "auto",
    pagination: {
        el: ".blog-slider-pagination",
        clickable: true,
    },
});
// end blog-slider

// # Gallery Slider
// 

// start galler-slider
var switestper = new Swiper(".gallery-slider", {
    slidesPerView: 1,
    spaceBetween: 25,
    breakpoints: {
        576: {
            slidesPerView: 2,
        },
        1200: {
            slidesPerView: 4,
        },
    },
});
// end galler-slider

// # Event Banner Slider
// 

// start event-banner-slider
var eventFeaturedSliderImage = new Swiper(".event-banner-slider-image .swiper", {
    allowTouchMove: false,
    effect: "fade",
    watchSlidesProgress: true,
});

var eventFeaturedSliderContent = new Swiper(".event-banner-slider-content", {
    loop: true,
    spaceBetween: 25,
    thumbs: {
        swiper: eventFeaturedSliderImage,
    },
    navigation: {
        nextEl: '.event-banner-slider-btn-next',
        prevEl: '.event-banner-slider-btn-previous',
    },
});
// end event-banner-slider