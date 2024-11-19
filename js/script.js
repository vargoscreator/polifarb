document.addEventListener("DOMContentLoaded", function () {
    if (typeof AOS !== 'undefined' && AOS) {
        AOS.init({
            once: true,
            duration: 600
        });
    }    
    const headerBurger = document.querySelector('.header__burger');
    const headerMenu = document.querySelector('.header__menu');
    const body = document.querySelector('.body');
    const headerLang = document.querySelector('.header__lang');
    const headerLangName = headerLang.querySelector('.header__lang-name');
    const headerForm = document.querySelector('.header__form');
    const headerFormLabel = headerForm.querySelector('label');
    const catalogBtn = document.querySelectorAll('.header__catalog-btn');
    const catalogBtnClose = document.querySelectorAll('.header__catalog-close');
    const catalogBlock = document.querySelector('.header__catalog');

    headerFormLabel.addEventListener('click', (event) => {
        headerForm.classList.add('active');
    });
    headerLangName.addEventListener('click', (event) => {
        event.stopPropagation();
        headerLang.classList.toggle('active');
    });
    document.body.addEventListener('click', () => {
        if (headerForm.classList.contains('active') && !headerForm.contains(event.target)) {
            headerForm.classList.remove('active');
        }
        if (headerLang.classList.contains('active') && !headerLang.contains(event.target)) {
            headerLang.classList.remove('active');
        }
    });
    
    headerBurger.addEventListener('click', () => {
        if (catalogBlock.classList.contains('active')) {
            body.classList.add('no-scroll');
        } else{
            body.classList.toggle('no-scroll');
        }
        catalogBlock.classList.remove('active');
        headerBurger.classList.toggle('active');
        headerMenu.classList.toggle('active');
        document.querySelector('.header__catalog-button').classList.remove('opened');
    });

    function handleResizeHeader() {
        if (headerMenu.classList.contains('active') && window.innerWidth > 1279) {
            headerBurger.classList.remove('active');
            headerMenu.classList.remove('active');
            document.querySelector('.body').classList.remove('no-scroll');
        }
    }
    window.addEventListener('load', handleResizeHeader);
    window.addEventListener('resize', handleResizeHeader);

    catalogBtn.forEach(element => {
        element.addEventListener('click', () => {
            catalogBlock.classList.add('active');
            body.classList.add('no-scroll')
            if (window.innerWidth < 1280) {
                document.querySelector('.header__catalog-button').classList.add('opened');
                headerBurger.classList.remove('active');
                headerMenu.classList.remove('active');
            }
        });
    });
    catalogBtnClose.forEach(element => {
        element.addEventListener('click', () => {
            catalogBlock.classList.remove('active');
            body.classList.remove('no-scroll')
            if (window.innerWidth < 1280) {
                document.querySelector('.header__catalog-button').classList.remove('opened');
            }
        });
    });
    window.addEventListener('load', checkScroll);
    window.addEventListener('resize', checkScroll);
    window.addEventListener('scroll', checkScroll);
    function checkScroll() {
        const header = document.querySelector('.header-main');
        if (header) {
            if (window.scrollY >= 10) {
                header.classList.add('scrolled');
            } else {
                header.classList.remove('scrolled');
            }
        }
    }

    const telBtnOpen = document.querySelector('.tel-btn');
    const telContent = document.querySelector('.header__tel-content');
    telBtnOpen.addEventListener('click', (event) => {
        event.stopPropagation();
        telContent.classList.toggle('active');
    });
    document.addEventListener('click', (event) => {
        if (!telContent.contains(event.target) && !telBtnOpen.contains(event.target)) {
            telContent.classList.remove('active');
        }
    });


    const basketPopup = document.querySelector(".basketPopup");
    if (basketPopup) {
        const basketBtnOpen = document.querySelector('.basket-btn');
        const basketBtnClose = document.querySelectorAll('.basketPopup__close');
        const basketItems = basketPopup.querySelectorAll(".basket__item");
        const totalPriceElement = basketPopup.querySelector(".basketPopup__total-price");
        const totalItemsElement = basketPopup.querySelector(".basketPopup__title");
        const basketPopupContent = basketPopup.querySelector(".basketPopup__content");
        const basketPopupBottom = basketPopup.querySelector(".basketPopup__bottom");

        basketBtnOpen.addEventListener('click', () => {
            basketPopup.classList.add('active');
            body.classList.add('no-scroll');
        });

        basketBtnClose.forEach(element => {
            element.addEventListener('click', () => {
                basketPopup.classList.remove('active');
                body.classList.remove('no-scroll');
            });
        });

        function updateTotal() {
            let totalPrice = 0;
            let totalItems = 0;

            basketItems.forEach(item => {
                const priceText = item.querySelector(".basket__item-price").textContent;
                const price = parseInt(priceText.replace("грн", "").replace(/\s+/g, "").trim());
                const count = parseInt(item.querySelector(".basketPopup-total").textContent);

                totalPrice += price * count;
                totalItems += count;
            });

            totalPriceElement.textContent = `${totalPrice.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ")} грн`;
            totalItemsElement.textContent = `В кошику (${totalItems}) товари`;

            if (totalItems === 0) {
                basketPopupContent.style.display = "none";
                basketPopupBottom.style.display = "none";
                totalItemsElement.textContent = "Ваш кошик порожній";
            } else {
                basketPopupContent.style.display = "block";
                basketPopupBottom.style.display = "flex";
            }
        }

        function updateItemCount(item, operation) {
            const countElement = item.querySelector(".basketPopup-total");
            let count = parseInt(countElement.textContent);
            if (operation === 'increase') {
                count++;
            } else if (operation === 'decrease' && count > 1) {
                count--;
            }
            countElement.textContent = count;
            updateTotal();
        }

        basketItems.forEach(item => {
            const plusButton = item.querySelector(".basketPopup-plus");
            const minusButton = item.querySelector(".basketPopup-minus");

            plusButton.addEventListener("click", function () {
                event.preventDefault();
                updateItemCount(item, 'increase');
            });

            minusButton.addEventListener("click", function () {
                event.preventDefault();
                updateItemCount(item, 'decrease');
            });
            updateTotal();
            const deleteButton = item.querySelector(".basket__item-delete");
            deleteButton.addEventListener("click", function () {
                event.preventDefault();
                item.remove();
                updateTotal();
            });
        });
    }
    
    if(document.querySelector('.bannerBlock__btn')){
        document.querySelector('.bannerBlock__btn').addEventListener('click', function () {
            const details = document.querySelector('.bannerBlock__details');
            details.classList.toggle('hidden');
            this.textContent = details.classList.contains('hidden') ? 'Детальніше' : 'Приховати';
        });
    }   

});