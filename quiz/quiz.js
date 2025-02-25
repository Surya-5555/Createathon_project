document.addEventListener("DOMContentLoaded", function () {
    const form = document.getElementById("quiz-form");

    form.addEventListener("submit", function (event) {
        event.preventDefault();
        
        alert("Quiz submitted successfully!");
        
        // Optional: You can add scoring logic here if needed
    });
});
