const form = document.getElementById("experience-form");

form.addEventListener("submit", function(event) {
    event.preventDefault();
    alert("Thank you for sharing!");
    form.reset();
});