   // JavaScript
   document.getElementById("reset-form").addEventListener("submit", function(event) {
    event.preventDefault();
    const email = document.getElementById("email").value;

    if (email) {
      alert("A password reset link has been sent to " + email);
      // Here you can replace the alert with real logic to send a reset link.
    } else {
      alert("Please enter a valid email.");
    }
  });