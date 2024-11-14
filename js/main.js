document.addEventListener('DOMContentLoaded', () => {
    const videoContainer = document.querySelector('.catalog-products__video');
    const playButton = videoContainer.querySelector('.catalog-products__btn');
    const video = videoContainer.querySelector('video');
    playButton.addEventListener('click', () => {
        video.play();
        playButton.style.display = 'none';
    });
    video.addEventListener('ended', () => {
        playButton.style.display = 'block';
    });

    let swiperPickUp = new Swiper(".pick-up__slider", {
        loop: false,
        spaceBetween: 14,
        centeredSlides: true,
        slidesPerView: 1.4,
        initialSlide: 1,
        breakpoints: {
            768: {
                spaceBetween: 20,
                slidesPerView: 2,
            },
            1000: {
                spaceBetween: 24,
                slidesPerView: 3,
                centeredSlides: false,
            },
        },
    });

    let reviewsSlider = new Swiper(".reviews__slider", {
        loop: true,
        spaceBetween: 14,
        slidesPerView: 1.354,
        breakpoints: {
            480: {
                spaceBetween: 20,
                slidesPerView: 1,
            },
            768: {
                spaceBetween: 20,
                slidesPerView: 2,
            },
            1280: {
                spaceBetween: 24,
                slidesPerView: 3,
            },
        },
    });

});
