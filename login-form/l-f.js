const form = document.getElementById("signin-form");
        // Form submission logic
        form.addEventListener("submit", function (event) {
            event.preventDefault();

            let isValid = true;

            // Clear previous error messages
            document.querySelectorAll(".error").forEach(error => error.textContent = "");

            // Get input values
            const email = document.getElementById("email").value;
            const password = document.getElementById("password").value;

            // Validate fields
            if (!email) {
                document.getElementById("email-error").textContent = "Email is required.";
                isValid = false;
            }

            if (!password) {
                document.getElementById("password-error").textContent = "Password is required.";
                isValid = false;
            }
            // If valid, redirect to next page
            if (isValid) {
                window.location.href = "C:/Users/surya/OneDrive/Attachments/Desktop/Createathon_project/sheilded/s.html";
            }
        });
