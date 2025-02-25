document.addEventListener("DOMContentLoaded", function () {
    console.log("JavaScript Loaded!");

    const backButton = document.querySelector(".back-btn");

    if (backButton) {
        backButton.addEventListener("click", function (event) {
            event.preventDefault();
            window.history.back();
        });
    }
});
