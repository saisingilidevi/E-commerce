document.addEventListener("DOMContentLoaded", function () {
    // Selecting elements
    const paymentForm = document.getElementById("payment-form");
    const cardNumber = document.getElementById("card-number");
    const expiryDate = document.getElementById("expiry-date");
    const cvv = document.getElementById("cvv");
    const nameOnCard = document.getElementById("name-on-card");
    const totalAmount = document.getElementById("total-amount");
    const paymentButton = document.getElementById("pay-now");
    const successMessage = document.getElementById("success-message");

    // Simulated total price (In a real scenario, fetch from cart)
    let totalPrice = 130; // Example total price in USD
    totalAmount.innerText = `$${totalPrice}`;

    // Payment form validation
    paymentForm.addEventListener("submit", function (event) {
        event.preventDefault();

        if (!validateCardNumber(cardNumber.value)) {
            alert("Invalid card number! Please enter a 16-digit number.");
            return;
        }

        if (!validateExpiryDate(expiryDate.value)) {
            alert("Invalid expiry date! Use MM/YY format.");
            return;
        }

        if (!validateCVV(cvv.value)) {
            alert("Invalid CVV! It should be a 3-digit number.");
            return;
        }

        if (nameOnCard.value.trim() === "") {
            alert("Please enter the name on the card.");
            return;
        }

        // Simulate processing payment
        paymentButton.innerText = "Processing...";
        paymentButton.disabled = true;

        setTimeout(() => {
            window.location.href = "success.html"; // Redirect to success page
        }, 2000);
    });

    // Card number validation (16-digit)
    function validateCardNumber(number) {
        return /^\d{16}$/.test(number);
    }

    // Expiry date validation (MM/YY format)
    function validateExpiryDate(date) {
        return /^(0[1-9]|1[0-2])\/\d{2}$/.test(date);
    }

    // CVV validation (3-digit)
    function validateCVV(code) {
        return /^\d{3}$/.test(code);
    }
});
