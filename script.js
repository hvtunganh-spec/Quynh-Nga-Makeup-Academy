/* =======================================
   QUYNH NGA MAKEUP ACADEMY
   Version 1.0
======================================= */

const services = document.querySelectorAll(".service");
const totalPrice = document.getElementById("totalPrice");

function formatMoney(number) {
    return number.toLocaleString("vi-VN") + "đ";
}

function updateTotal() {

    let total = 0;

    services.forEach(service => {

        if (service.checked) {
            total += Number(service.value);
        }

    });

    totalPrice.innerHTML = formatMoney(total);

}

services.forEach(service => {

    service.addEventListener("change", updateTotal);

});

/* ===========================
   ĐẶT LỊCH
=========================== */

const bookingButton = document.querySelector("button");

bookingButton.addEventListener("click", function () {

    const name =
        document.querySelector('input[type="text"]').value;

    const phone =
        document.querySelector('input[type="tel"]').value;

    const date =
        document.querySelector('input[type="date"]').value;

    if (name === "") {

        alert("Vui lòng nhập họ tên.");

        return;

    }

    if (phone === "") {

        alert("Vui lòng nhập số điện thoại.");

        return;

    }

    if (date === "") {

        alert("Vui lòng chọn ngày makeup.");

        return;

    }

    alert(
        "🎉 Đặt lịch thành công!\n\n" +
        "Cảm ơn " +
        name +
        ".\n\nQuỳnh Nga Makeup Academy sẽ liên hệ với bạn sớm nhất."
    );

});

/* ===========================
   HIỆU ỨNG CARD
=========================== */

const cards = document.querySelectorAll(".card");

cards.forEach(card => {

    card.addEventListener("mouseenter", () => {

        card.style.transform = "translateY(-10px)";

    });

    card.addEventListener("mouseleave", () => {

        card.style.transform = "translateY(0px)";

    });

});

/* ===========================
   SCROLL MƯỢT
=========================== */

document.querySelectorAll("a").forEach(anchor => {

    anchor.addEventListener("click", function (e) {

        if (this.hash !== "") {

            e.preventDefault();

            document.querySelector(this.hash).scrollIntoView({

                behavior: "smooth"

            });

        }

    });

});
