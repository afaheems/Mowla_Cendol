document.addEventListener("DOMContentLoaded", () => {
    const payNowButton = document.getElementById("pay-now");
    const cancelButton = document.getElementById("cancel");

    payNowButton.addEventListener("click", () => {
        window.location.href = "HomePageMowlaCendol.html";
    });

    cancelButton.addEventListener("click", () => {
        window.location.href = "menupage.html";
    });
});


document.addEventListener("DOMContentLoaded", () => {
    const quantities = document.querySelectorAll(".quantity");
    const totalElem = document.getElementById("total");

    function updateTotal() {
        let total = 0;
        quantities.forEach(quantity => {
            const price = parseFloat(
                quantity.closest(".cart-item").querySelector(".item-price").textContent.slice(3)
            );
            total += price * parseInt(quantity.value);
        });
        totalElem.textContent = `RM ${total.toFixed(2)}`;
    }

    quantities.forEach(quantity => {
        quantity.addEventListener("input", updateTotal);
    });

    updateTotal();
});
