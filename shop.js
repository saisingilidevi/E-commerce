document.addEventListener("DOMContentLoaded", function () {
    const addToCartButtons = document.querySelectorAll(".add-to-cart");

    addToCartButtons.forEach(button => {
        button.addEventListener("click", function () {
            const productName = this.getAttribute("data-name");
            const productPrice = this.getAttribute("data-price");

            let cart = JSON.parse(localStorage.getItem("cart")) || [];
            cart.push({ name: productName, price: productPrice, quantity: 1 });

            localStorage.setItem("cart", JSON.stringify(cart));
            alert(productName + " added to cart!");
        });
    });
});
