// Инициализируем Swiper
const swiper1 = new Swiper('.image-slider', {
    // Стрелки
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev'
    },
    centeredSlides: true,
    // loop: true,

    // autoplay: {
    //     delay: 5000,
    //     disableOnInteraction: false
    // }
});

const swiper2 = new Swiper('.cards-slider', {
    // Стрелки
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev'
    },
    breakpoints: {
        375: {
            slidesPerView: 1,
        },
        768: {
            slidesPerView: 2,
        },
        1024: {
            slidesPerView: 3,
        },

    },
});