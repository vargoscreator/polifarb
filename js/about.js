let swiperPickUp = new Swiper(".certificates__slider", {
    loop: false,
    spaceBetween: 40,
    centeredSlides: true,
    slidesPerView: 1,
    initialSlide: 1,
    navigation: {
        nextEl: ".certificates__slider-next",
        prevEl: ".certificates__slider-prev",
      },
    pagination: {
        el: ".certificates__slider-pagination",
        type: 'fraction',
    },
});