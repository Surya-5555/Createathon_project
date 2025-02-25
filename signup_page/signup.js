document.addEventListener("DOMContentLoaded", function () {
    const form = document.getElementById("signup-form");

    form.addEventListener("submit", function (event) {
        event.preventDefault();

        let isValid = true;

        // Clear previous error messages
        document.querySelectorAll(".error").forEach(error => error.textContent = "");

        // Get input values
        const firstName = document.getElementById("first-name").value.trim();
        const lastName = document.getElementById("last-name").value.trim();
        const email = document.getElementById("email").value.trim();
        const password = document.getElementById("password").value.trim();
        const confirmPassword = document.getElementById("confirm-password").value.trim();

        // Validate first name
        if (firstName === "") {
            document.getElementById("first-name-error").textContent = "First name is required.";
            isValid = false;
        }

        // Validate last name
        if (lastName === "") {
            document.getElementById("last-name-error").textContent = "Last name is required.";
            isValid = false;
        }

        // Validate email
        if (email === "") {
            document.getElementById("email-error").textContent = "Email is required.";
            isValid = false;
        } else if (!/\S+@\S+\.\S+/.test(email)) {
            document.getElementById("email-error").textContent = "Enter a valid email.";
            isValid = false;
        }

        // Validate password
        if (password === "") {
            document.getElementById("password-error").textContent = "Password is required.";
            isValid = false;
        } else if (password.length < 8) {
            document.getElementById("password-error").textContent = "Password must be at least 8 characters.";
            isValid = false;
        }

        // Validate confirm password
        if (confirmPassword === "") {
            document.getElementById("confirm-password-error").textContent = "Please confirm your password.";
            isValid = false;
        } else if (password !== confirmPassword) {
            document.getElementById("confirm-password-error").textContent = "Passwords do not match.";
            isValid = false;
        }

        // If valid, redirect to another page
        function gotothepage(){
            window.location.href = "C:/Users/surya/OneDrive/Attachments/Desktop/Createathon_project/sheilded/s.html";
        }

        if (isValid) {
            gotothepage();
        }
    });
});
