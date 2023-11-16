
  function validateForm() {
    var password = document.getElementById("password").value;
    var confirmPassword = document.getElementById("confirmPassword").value;
    var passwordMismatchMsg = document.getElementById("passwordMismatchMsg");
  
    if (password === confirmPassword) {
      passwordMismatchMsg.style.color = "#4CAF50"; // Green color for success
      passwordMismatchMsg.textContent = "Passwords match!";
      return true;
    } else {
      passwordMismatchMsg.style.color = "#FF0000"; // Red color for error
      passwordMismatchMsg.textContent = "Passwords do not match!";
      return false;
    }
  }
  function togglePasswordVisibility() {
    var passwordInput = document.getElementById("password");
    var eyeIcon = document.getElementById("eye-icon");

    if (passwordInput.type === "password") {
      passwordInput.type = "text";
      eyeIcon.className = "glyphicon glyphicon-eye-close";
    } else {
      passwordInput.type = "password";
      eyeIcon.className = "glyphicon glyphicon-eye-open";
    }
  }