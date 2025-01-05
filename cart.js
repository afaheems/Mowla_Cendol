

  document.addEventListener("DOMContentLoaded", () => {
    const nextButton = document.getElementById("next");
    const cancelButton = document.getElementById("cancel");

    nextButton.addEventListener("click", () => {
        window.location.href = "checkout.html";
    });

    cancelButton.addEventListener("click", () => {
        window.location.href = "/Projek/menupage/menupage.html";
    });
});

$(document).ready(function() {
    $('.menu-links a').click(function() {
      $('.menu-links a').removeClass('active');
      $(this).addClass('active');
    });

    $('.search-bar input').on('input', function() {
      console.log("Searching for:", $(this).val());
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






