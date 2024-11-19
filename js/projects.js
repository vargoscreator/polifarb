document.addEventListener("DOMContentLoaded", function () {
    const thumbsSlider = new Swiper(".thumbs-slider", {
      slidesPerView: 'auto',
      spaceBetween: 13,
      watchSlidesVisibility: true,
      watchSlidesProgress: true,
    });

    const mainSlider = new Swiper(".projectsPopup__slider", {
      loop: false,
      spaceBetween: 10,
      pagination: {
        el: ".projectsPopup__slider-pagination",
        type: 'custom',
        renderCustom: function (swiper, current, total) {
          const formatNumber = (number) => number < 10 ? '0' + number : number;
          return formatNumber(current) + 
                 '<svg xmlns="http://www.w3.org/2000/svg" width="46" height="14" viewBox="0 0 46 14" fill="none">' +
                 '<path d="M45.124 4.87897L40.538 0.292969L39.124 1.70697L43.386 5.96997H0V7.96997H43.446L39.123 12.293L40.537 13.707L45.124 9.12097C45.6847 8.55748 45.9995 7.79489 45.9995 6.99997C45.9995 6.20504 45.6847 5.44246 45.124 4.87897Z" fill="black"/></svg>' +
                 formatNumber(total);
        }
      },
      navigation: {
        nextEl: ".projectsPopup__slider-next",
        prevEl: ".projectsPopup__slider-prev",
      },
      thumbs: {
        swiper: thumbsSlider,
      },
    });

    const projectItemButtons = document.querySelectorAll(".project-item-btn, .project-popup-open, .projectsPopup__close");
    const projectsPopup = document.querySelector(".projectsPopup");
    projectItemButtons.forEach(button => {
        button.addEventListener("click", function () {
            projectsPopup.classList.toggle("active");
            document.querySelector('.body').classList.toggle('no-scroll')
        });
    });

});
