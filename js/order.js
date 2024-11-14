const orderBasket = document.querySelector(".order__basket");
if (orderBasket) {
    const orderItems = orderBasket.querySelectorAll(".basket__item");
    const totalPriceElement = orderBasket.querySelector(".order__basket-price--total");
    const totalItemsElement = orderBasket.querySelector(".order__basket-title");
    const totalPriceDescrElement = orderBasket.querySelectorAll(".order__basket-price--descr")[1]; 

    function updateTotal() {
        const orderItems = orderBasket.querySelectorAll(".basket__item");
        let totalPrice = 0;
        let totalItems = 0;
        orderItems.forEach(item => {
            const priceText = item.querySelector(".basket__item-price").textContent;
            const price = parseInt(priceText.replace("грн", "").replace(/\s+/g, "").trim());
            const count = parseInt(item.querySelector(".basketPopup-total").textContent);
            totalPrice += price * count;
            totalItems += count;
        });

        totalPriceElement.textContent = `${totalPrice.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ")} грн`;
        totalPriceDescrElement.textContent = `${totalPrice.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ")} грн`;

        if (totalItems === 0) {
            orderBasket.querySelector(".order__basket-block").style.display = "none";
            totalItemsElement.textContent = "Ваш кошик порожній";
        } else {
            orderBasket.querySelector(".order__basket-block").style.display = "block";
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

    orderItems.forEach(item => {
        const plusButton = item.querySelector(".basketPopup-plus");
        const minusButton = item.querySelector(".basketPopup-minus");
        plusButton.addEventListener("click", function() {
            event.preventDefault();
            updateItemCount(item, 'increase');
        });
        minusButton.addEventListener("click", function() {
            event.preventDefault();
            updateItemCount(item, 'decrease');
        });
        updateTotal();
    });

    orderItems.forEach(item => {
        const deleteButton = item.querySelector(".basket__item-delete");
        deleteButton.addEventListener("click", function() {
            event.preventDefault();
            item.remove();
            updateTotal();
        });
    });
}
