document.querySelectorAll('.checkbox').forEach(checkbox => {
    const color = checkbox.getAttribute('data-color');
    checkbox.style.setProperty('--checkbox-product-color', color);
});

let swiperPickUp = new Swiper(".sliderBlock__slider", {
    loop: true,
    spaceBetween: 14,
    slidesPerView: 2,
    breakpoints: {
        1000: {
            spaceBetween: 21,
            slidesPerView: 3,
        },
    },
});
const thumbsSlider = new Swiper(".thumbs-slider", {
    slidesPerView: 'auto',
    spaceBetween: 13,
    watchSlidesVisibility: true,
    watchSlidesProgress: true,
    direction: 'vertical',
});
const mainSlider = new Swiper(".product__image", {
    loop: false,
    spaceBetween: 10,
    thumbs: {
      swiper: thumbsSlider,
    },
});

const stars = document.querySelectorAll(".star");
const ratingInput = document.getElementById("star-rating");
stars.forEach((star, index) => {
    star.addEventListener("click", () => {
        const rating = index + 1;
        ratingInput.value = rating;
        stars.forEach((s, i) => {
            const path = s.querySelector("path");
            if (path) {
                path.setAttribute("fill", i < rating ? "#FFC90C" : "#C1C1C1");
            }
        });
    });
});
const buttons = document.querySelectorAll('.productAbout__select');
const contents = document.querySelectorAll('.productAbout__content');
buttons.forEach(button => {
    button.addEventListener('click', () => {
        buttons.forEach(btn => btn.classList.remove('active'));
        contents.forEach(content => content.classList.remove('active'));
        button.classList.add('active');
        const selectedData = button.getAttribute('data-select');
        const targetContent = document.querySelector(`.productAbout__content[data-result="${selectedData}"]`);
        if (targetContent) {
            targetContent.classList.add('active');
        }
    });
});