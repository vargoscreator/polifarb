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
        loop: true,
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


    const paralaxEffect = document.querySelector('.catalog-paralax-effect');
    const salesParalaxEffect = document.querySelector('.sales-paralax-effect');
    window.addEventListener('scroll', () => {
        catalogParalax()
        salesParalax()
    });
    window.addEventListener('resize', () => {
        catalogParalax()
        salesParalax()
    });
    function catalogParalax() {
        const scrollY = window.scrollY;
        const blockOffsetTop = paralaxEffect.offsetTop;
        const startEffect = blockOffsetTop + 1300;
        const maxTranslateY = 0;
        const minTranslateY = -1400;
        if (scrollY >= startEffect && window.innerWidth > 767) {
            const deltaScroll = scrollY - startEffect;
            let newTranslateY = maxTranslateY - deltaScroll;
            if (newTranslateY < minTranslateY) {
                newTranslateY = minTranslateY;
            }
            paralaxEffect.style.transform = `translateY(${newTranslateY}px)`;
            paralaxEffect.style.marginBottom = `-${Math.abs(newTranslateY)}px`;
            AOS.refresh();
        } else {
            paralaxEffect.style.transform = ``;
            paralaxEffect.style.marginBottom = ``;
        }
    }
    
    function salesParalax(){
        const scrollY = window.scrollY;
        const blockOffsetTop = paralaxEffect.offsetTop;
        let startEffect;
        let maxTranslateY;
        let minTranslateY;
        if(window.innerWidth > 1439){
            startEffect = blockOffsetTop + 8700;
            maxTranslateY = 520;
            minTranslateY = -520;
        }
        else if (window.innerWidth < 1000 && window.innerWidth > 1279){
            startEffect = blockOffsetTop + 8900;
            maxTranslateY = 520;
            minTranslateY = -220;
        }
        else{
            startEffect = blockOffsetTop + 7800;
            maxTranslateY = 520;
            minTranslateY = -120;
        }


        if (scrollY >= startEffect && window.innerWidth > 767) {
            const deltaScroll = scrollY - startEffect;
            let newTranslateY = maxTranslateY - deltaScroll;
            if (newTranslateY < minTranslateY) {
                newTranslateY = minTranslateY;
            }
            salesParalaxEffect.style.transform = `translateY(${newTranslateY}px)`;
            salesParalaxEffect.style.marginBottom = `-${Math.abs(newTranslateY)}px`;
            AOS.refresh();
        } else {
            salesParalaxEffect.style.transform = ``;
            salesParalaxEffect.style.marginBottom = ``;
        }
    }
    



});
