// Инициализируем Swiper
export const swiper1 = new Swiper('.image-slider', {
    // Стрелки
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev'
    },
    // Скролл
    scrollbar: {
        el: '.swiper-scrollbar',
        // Возможность перетаскивать скролл
        draggable: true
    },
    centeredSlides: true,
    // loop: true,

    // autoplay: {
    //     delay: 5000,
    //     disableOnInteraction: false
    // }
});

// export var swiper2 = new Swiper('.image-slider-cards', {
//     // Стрелки
//     navigation: {
//         nextEl: '.swiper-button-next',
//         prevEl: '.swiper-button-prev'
//     },
//     // Скролл
//     scrollbar: {
//         el: '.swiper-scrollbar',
//         // Возможность перетаскивать скролл
//         draggable: true
//     },
//     breakpoints: {
//         375: {
//             slidesPerView: 1,
//         },
//         768: {
//             slidesPerView: 2,
//         },
//         1024: {
//             slidesPerView: 3,
//         },

//     },
// });