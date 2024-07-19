const inputfield = document.querySelector(".input-field");
const eyelogo = document.querySelector(".eyelogo");
const message = document.querySelector(".checked");
const strength = document.querySelector("#strength");
const checkbutton = document.querySelector(".check");

function evaluatePasswordStrength(password) {
  let strengthMessage = 'Very Weak';
  let color = '#8B0000'; // Dark red

  if (password.length <= 3) {
    strengthMessage = 'Very Weak';
    color = '#8B0000'; // Dark red
  } else if (password.length > 3 && password.length <= 5) {
    strengthMessage = 'Weak';
    color = '#FF4500'; // Red-orange
  } else if (password.length > 5 && password.length <= 7) {
    strengthMessage = 'Medium';
    color = '#FF8C00'; // Dark orange
  } else if (password.length > 7) {
    const hasLower = /[a-z]/.test(password);
    const hasUpper = /[A-Z]/.test(password);
    const hasNumber = /[0-9]/.test(password);
    const hasSpecial = /[\W_]/.test(password);

    if (hasLower + hasUpper + hasNumber + hasSpecial >= 3) {
      strengthMessage = 'Strong';
      color = '#008000'; // Green
    } else if (hasLower + hasUpper + hasNumber + hasSpecial >= 2) {
      strengthMessage = 'Medium';
      color = '#FF8C00'; // Dark orange
    } else {
      strengthMessage = 'Weak';
      color = '#FF4500'; // Red-orange
    }

    if (hasSpecial) {
      strengthMessage = 'Very Strong';
      color = '#006400'; // Dark green
    }
  }

  strength.innerHTML = strengthMessage;
  strength.style.color = color;
}

eyelogo.addEventListener("click", () => {
  if (inputfield.type === "password") {
    inputfield.type = "text";
    inputfield.style.fontSize = "1.2rem";
    eyelogo.src = "view.png";
  } else {
    inputfield.type = "password";
    eyelogo.src = "hide.png";
    inputfield.style.fontSize = "1.4rem";
  }
});

checkbutton.addEventListener("click", () => {
  const password = inputfield.value;
  if (password.length > 0) {
    message.style.display = "block";
  } else {
    message.style.display = "none";
  }
  evaluatePasswordStrength(password);
});
