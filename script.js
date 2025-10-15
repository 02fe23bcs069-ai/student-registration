// JavaScript to handle form submission
document.getElementById("registerForm").addEventListener("submit", function(event) {
  event.preventDefault();

  // Get form field values
  const fullname = document.getElementById("fullname").value.trim();
  const email = document.getElementById("email").value.trim();
  const phone = document.getElementById("phone").value.trim();
  const password = document.getElementById("password").value.trim();

  // Validation
  if (!fullname || !email || !phone || !password) {
    alert("⚠️ Please fill out all fields!");
    return;
  }

  // Simple success message
  document.getElementById("message").textContent =
    `✅ Registration successful! Welcome, ${fullname}.`;

  // Clear form after submission
  event.target.reset();
});
