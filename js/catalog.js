document.querySelectorAll('.checkbox').forEach(checkbox => {
    const color = checkbox.getAttribute('data-color');
    checkbox.style.setProperty('--checkbox-color', color);
});

document.querySelectorAll('.filter__item').forEach(element => {
    element.querySelector('.filter__top').addEventListener('click', ()=>{
        element.classList.toggle('active')
    })
});

const catalogFilter = document.querySelector('.catalog__filter');
document.querySelectorAll('.catalog__filter-close, .catalog__result-filters').forEach(element => {
    element.addEventListener('click', () => {
        catalogFilter.classList.toggle('active');
        document.querySelector('.body').classList.toggle('no-scroll');
    });
});
function handleResizeCatalog() {
    if (catalogFilter.classList.contains('active') && window.innerWidth > 999) {
        catalogFilter.classList.remove('active');
        document.querySelector('.body').classList.remove('no-scroll');
    }
}
window.addEventListener('load', handleResizeCatalog);
window.addEventListener('resize', handleResizeCatalog);


const slider = document.querySelector('.price-slider');
const priceRange = document.getElementById('price-range');
function updateSlider() {
    const value = (slider.value - slider.min) / (slider.max - slider.min) * 100; 
    slider.style.background = `linear-gradient(to right, #6600A1 ${value}%, transparent ${value}%)`;
    priceRange.textContent = `${slider.value} - ${slider.max}`;
}
updateSlider();
slider.addEventListener('input', updateSlider);



document.querySelectorAll('.faq__item').forEach(item => {
    item.querySelector('.faq__item-top').addEventListener('click', () => {
        const isActive = item.classList.contains('active');
        document.querySelectorAll('.faq__item.active').forEach(activeItem => {
            activeItem.classList.remove('active');
        });
        if (!isActive) {
            item.classList.add('active');
        }
    });
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