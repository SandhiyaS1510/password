const passwordInput = document.getElementById("password");
const strengthText = document.getElementById("strengthText");

passwordInput.addEventListener("input", () => {
  const password = passwordInput.value;
  const strength = checkPasswordStrength(password);

  updateUI(strength);
});

function checkPasswordStrength(password) {
  if (password.length < 6) return "Weak";
  if (password.match(/[a-z]/) && password.match(/[0-9]/) && password.length >= 8) return "Moderate";
  if (password.match(/[a-z]/) && password.match(/[0-9]/) && password.match(/[!@#$%^&*]/) && password.length >= 10) return "Strong";
  return "Weak";
}

function updateUI(strength) {
  switch (strength) {
    case "Weak":
      document.body.style.backgroundColor = "#ff4d4d"; // Red
      strengthText.textContent = "Weak Password";
      strengthText.style.color = "#ff4d4d";
      break;
    case "Moderate":
      document.body.style.backgroundColor = "#ffcc00"; // Yellow
      strengthText.textContent = "Moderate Password";
      strengthText.style.color = "#ffcc00";
      break;
    case "Strong":
      document.body.style.backgroundColor = "#4dff4d"; // Green
      strengthText.textContent = "Strong Password";
      strengthText.style.color = "#4dff4d";
      break;
  }
}
